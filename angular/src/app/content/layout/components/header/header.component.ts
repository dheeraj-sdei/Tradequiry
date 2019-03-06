import { Component, OnInit, AfterViewInit, OnDestroy, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';

import { TranslateService } from '@ngx-translate/core';
import { TranslationLoaderService } from 'src/app/core/services/translation-loader.service';

import { QuickSidebarComponent } from '../quick-sidebar/quick-sidebar.component';
import { ComponenRegistryService } from 'src/app/core/services/component-registry.service';
import { JwtService } from '../../../pages/snippets/authentication/login/jwt.service';
import { Router } from '@angular/router';
import { UserService } from '../../../pages/snippets/authentication/login/user.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, AfterViewInit, OnDestroy {
    userName: any = 'demo';
    sideBar: any;
    quickSidebar: any;
    myToken: string;


    private _unsubscribeAll: Subject<any>;

    constructor(
        private modalService: NgbModal,
        private _translateService: TranslateService,
        public _translationLoaderService: TranslationLoaderService,
        private _componenRegistryService: ComponenRegistryService,
        private jwtService : JwtService,
        private route: Router,
        private UserService : UserService,
    ) {
        this._unsubscribeAll = new Subject();
    }

    destroyToken() {
        this.jwtService.destroyToken();
        // this.apiService.sendIsLoginValue(true);
        // this.toasterService.showSuccess('You are now logged out', 'Logout success');
        this.route.navigate(['/']);
      }
      


    ngOnInit() 
    {
        this._componenRegistryService.onRegistryChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(registry => {
                this.sideBar = this._componenRegistryService.getComponent('sidenav');
                this.quickSidebar = this._componenRegistryService.getComponent('quick-sidebar');
            });
    // this.UserService.getUserName().subscribe(res => {
    //     this.userName = res;
    // });
    this.UserService.mysubject.subscribe(userName => {
        this.userName = userName;
      });
    this.UserService.getToken().subscribe(res => {
        this.myToken = res;
    });

    console.log("aaaaa", this.myToken)
        }

    openSearchModal(content) {
        this.modalService.open(content, { size: 'lg' });
    }

    ngAfterViewInit() {}

    toggleSidebar(event) : void {
	    event.preventDefault();
	    this.sideBar.sidebarToggleHandler();
    }

    toggleQuickSidebar(event) : void {
        event.preventDefault();
        this.quickSidebar.toggleOpen();
    }

    setLanguage(lang): void
    {
        this._translationLoaderService.setLanguage(lang);
    }

    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

  

}
