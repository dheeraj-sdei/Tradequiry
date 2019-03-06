import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { Contact } from './models/contact.model';
import { Helpers } from 'src/app/core/helpers/helpers';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

    onContactsChanged: BehaviorSubject<any>;
    onSelectedContactsChanged: BehaviorSubject<any>;
    onUserDataChanged: BehaviorSubject<any>;
    onSearchTextChanged: Subject<any>;
    onFilterChanged: Subject<any>;

    contacts: Contact[];
    user: any;
    selectedContacts: string[] = [];

    searchText: string;
    filterBy: string;

    // certain properties to search
    ALLOWED_SEARCH_TARGETS = [
        'name', 'lastName', 'email', 'phone'
    ];

    constructor(
        private _httpClient: HttpClient
    ) { 
        this.onContactsChanged = new BehaviorSubject([]);
        this.onSelectedContactsChanged = new BehaviorSubject([]);
        this.onUserDataChanged = new BehaviorSubject([]);
        this.onSearchTextChanged = new Subject();
        this.onFilterChanged = new Subject();

        this.onSearchTextChanged.subscribe(searchText => {
            this.searchText = searchText;
            this.getContacts();
        });

        this.onFilterChanged.subscribe(filter => {
            this.filterBy = filter;
            this.getContacts();
        });
    }


    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any
    {
        return new Promise((resolve, reject) => {

            Promise.all([
                this.getContacts(false),
                this.getUserData()
            ]).then(
                () => {

                    this.searchText = '';

                    resolve();

                },
                reject
            );
        });
    }


    /**
     * Get contacts
     */
    getContacts(useSearchQuery: boolean = true): Promise<any>
    {
        return new Promise((resolve, reject) => {
                this._httpClient.get('api/contacts-contacts')
                    .subscribe((response: any) => {

                        this.contacts = response;

                        if ( this.filterBy === 'starred' )
                        {
                            this.contacts = this.contacts.filter(_contact => {
                                return this.user.starred.includes(_contact.id);
                            });
                        }

                        if ( this.filterBy === 'frequent' )
                        {
                            this.contacts = this.contacts.filter(_contact => {
                                return this.user.frequentContacts.includes(_contact.id);
                            });
                        }

                        if ( useSearchQuery && this.searchText && this.searchText !== '' )
                        {
                            this.contacts = Helpers.filterArrayByString(this.contacts, this.searchText, this.ALLOWED_SEARCH_TARGETS);
                        }

                        this.contacts = this.contacts.map(contact => {
                            return new Contact(contact);
                        });

                        this.onContactsChanged.next(this.contacts);
                        resolve(this.contacts);
                    }, reject);
            }
        );
    }


    /**
     * Get user data
     */
    getUserData(): Promise<any>
    {
        return new Promise((resolve, reject) => {
                this._httpClient.get('api/contacts-user/5725a6802d10e277a0f35724')
                    .subscribe((response: any) => {
                        this.user = response;
                        this.onUserDataChanged.next(this.user);
                        resolve(this.user);
                    }, reject);
            }
        );
    }


    /**
     * Update contact
     */
    updateContact(contact): Promise<any>
    {
        return new Promise((resolve, reject) => {

            this._httpClient.post('api/contacts-contacts/' + contact.id, {...contact})
                .subscribe(response => {
                    this.getContacts();
                    resolve(response);
                });
        });
    }

    /**
     * Update user data
     */
    updateUserData(userData): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this._httpClient.post('api/contacts-user/' + this.user.id, {...userData})
                .subscribe(response => {
                    this.getUserData();
                    this.getContacts();
                    resolve(response);
                });
        });
    }

    /**
     * Toggle Star
     */
    toggleStar(contactId): void
    {
        if ( this.user.starred.includes(contactId) )
        {
            this.user.starred.splice(this.user.starred.indexOf(contactId), 1);
        }
        else
        {
            this.user.starred.push(contactId);
        }

        this.updateUserData(this.user);
    }

    /**
     * Delete contact
     */
    deleteContact(contact): void
    {
        this.removeContact(contact);
        this.onContactsChanged.next(this.contacts);
            const index = this.selectedContacts.indexOf(contact.id);

            if ( index !== -1 )
            {
                this.selectedContacts.splice(index, 1);

                // Trigger the next event
                this.onSelectedContactsChanged.next(this.selectedContacts);
            }
    }

    /**
     * Delete selected contacts
     */
    deleteSelectedContacts(): void
    {
        for ( const contactId of this.selectedContacts )
        {
            const contact = this.contacts.find(_contact => {
                return _contact.id === contactId;
            });

            this.removeContact(contact);
        }
        this.onContactsChanged.next(this.contacts);
        this.deselectContacts();
    }

    /**
     * Delete contact from fake database, contacts list & selected contacts list
     */
    removeContact(contact): void
    {
        this._httpClient.delete('api/contacts-contacts/' + contact.id)
            .subscribe();

        const contactIndex = this.contacts.indexOf(contact);
        this.contacts.splice(contactIndex, 1);
    }


    /**
     * Toggle selected contact by id
     */
    toggleSelectedContact(id): void
    {
        // First, check if we already have that contact as selected...
        if ( this.selectedContacts.length > 0 )
        {
            const index = this.selectedContacts.indexOf(id);

            if ( index !== -1 )
            {
                this.selectedContacts.splice(index, 1);

                // Trigger the next event
                this.onSelectedContactsChanged.next(this.selectedContacts);

                // Return
                return;
            }
        }

        // If we don't have it, push as selected
        this.selectedContacts.push(id);

        // Trigger the next event
        this.onSelectedContactsChanged.next(this.selectedContacts);
    }

    /**
     * Toggle select all
     */
    toggleSelectAll(): void
    {
        if ( this.selectedContacts.length > 0 )
        {
            this.deselectContacts();
        }
        else
        {
            this.selectContacts();
        }
    }

    /**
     * Select contacts
     */
    selectContacts(filterParameter?, filterValue?): void
    {
        this.selectedContacts = [];

        // If there is no filter, select all contacts
        if ( filterParameter === undefined || filterValue === undefined )
        {
            this.selectedContacts = [];
            this.contacts.map(contact => {
                this.selectedContacts.push(contact.id);
            });
        }

        this.onSelectedContactsChanged.next(this.selectedContacts);
    }

    /**
     * Deselect contacts
     */
    deselectContacts(): void
    {
        this.selectedContacts = [];

        this.onSelectedContactsChanged.next(this.selectedContacts);
    }



}
