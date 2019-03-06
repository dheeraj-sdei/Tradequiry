import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CardModule } from 'src/app/core/components/card/card.module';
import { ChartsModule } from 'ng2-charts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { SubheaderModule } from 'src/app/content/layout/components/subheader/subheader.module';

import { Dashboard2Component } from './dashboard2.component';
import { NgScrollbarModule } from 'ngx-scrollbar';



const routes: Routes = [
    {
        path     : '',
        component: Dashboard2Component,
    }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SubheaderModule,
    CardModule,
    ChartsModule,
    NgxChartsModule,
    NgScrollbarModule
  ],
  declarations: [Dashboard2Component]
})
export class Dashboard2Module { }
