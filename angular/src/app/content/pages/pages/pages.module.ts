import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CardModule } from 'src/app/core/components/card/card.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubheaderModule } from 'src/app/content/layout/components/subheader/subheader.module';

import {
    MatTabsModule,
} from '@angular/material';
import { NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';

import { ProfileV1Component } from './profiles/profile-v1/profile-v1.component';

import { PricingTableV1Component } from './pricing-tables/pricing-table-v1/pricing-table-v1.component';
import { PricingTableV2Component } from './pricing-tables/pricing-table-v2/pricing-table-v2.component';
import { TimelineListsComponent } from './timelines/timeline-lists/timeline-lists.component';
import { TimelineVerticalComponent } from './timelines/timeline-vertical/timeline-vertical.component';
import { SearchResultsComponent } from './search-results/search-results.component';


const routes: Routes = [
    {
        path       : 'profile',
        component  : ProfileV1Component,
    },
    
    {
        path       : 'pricing-table-v1',
        component  : PricingTableV1Component,
    },
    {
        path       : 'pricing-table-v2',
        component  : PricingTableV2Component,
    },
    {
        path       : 'timeline-lists',
        component  : TimelineListsComponent,
    },
    {
        path       : 'timeline-vertical',
        component  : TimelineVerticalComponent,
    },
    {
        path       : 'search-results',
        component  : SearchResultsComponent,
    },
    // {
    //     path       : 'invoice',
    //     component  : InvoiceComponent,
    // },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        CardModule,
        FormsModule,
        ReactiveFormsModule,
        SubheaderModule,
        NgbTabsetModule,
        MatTabsModule,
    ],
    declarations: [ProfileV1Component, PricingTableV2Component, PricingTableV1Component, TimelineListsComponent, TimelineVerticalComponent, SearchResultsComponent,]
})
export class PagesModule { }
