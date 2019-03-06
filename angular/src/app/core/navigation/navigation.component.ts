import { Component, OnInit } from '@angular/core';

import { NavigationService } from './navigation.service';

@Component({
    selector: 'navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

    constructor(private _navigationService: NavigationService) { }

    navigation: any[] = [];

    ngOnInit() {
        this.navigation = this._navigationService.getNavigation();
    }

}
