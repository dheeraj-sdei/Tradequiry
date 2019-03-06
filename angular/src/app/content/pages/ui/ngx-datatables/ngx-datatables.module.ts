import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CardModule } from 'src/app/core/components/card/card.module';
import { SubheaderModule } from 'src/app/content/layout/components/subheader/subheader.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { NgxDatatablesComponent } from './ngx-datatables.component';

const routes: Routes = [
    {
        path: '**',
        component: NgxDatatablesComponent,
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        CardModule,
        SubheaderModule,
        NgxDatatableModule,
    ],
    declarations: [NgxDatatablesComponent]
})
export class NgxDatatablesModule { }
