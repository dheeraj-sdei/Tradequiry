import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CardModule } from 'src/app/core/components/card/card.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubheaderModule } from 'src/app/content/layout/components/subheader/subheader.module';

import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
} from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { PaginatorComponent } from './paginator/paginator.component';
import { SortHeaderComponent } from './sort-header/sort-header.component';
import { MaterialTableComponent } from './material-table/material-table.component';

const routes: Routes = [
    {
        path: 'paginator',
        component: PaginatorComponent,
    },
    {
        path: 'sort-header',
        component: SortHeaderComponent,
    },
    {
        path: 'table',
        component: MaterialTableComponent,
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        CardModule,
        FormsModule,
        ReactiveFormsModule,
        SubheaderModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatProgressSpinnerModule,
        MatFormFieldModule,
        MatInputModule,
        MatRadioModule,
        MatButtonModule,
        MatIconModule,
        MatSelectModule,
        MatCheckboxModule,
    ],
    declarations: [
        PaginatorComponent,
        SortHeaderComponent,
        MaterialTableComponent,
    ]
})
export class MaterialDatatablesModule { }
