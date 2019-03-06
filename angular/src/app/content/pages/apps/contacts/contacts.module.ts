import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'src/app/core/components/card/card.module';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PipesModule } from 'src/app/core/pipes/pipes.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import {
    MatButtonModule, 
    MatIconModule,
    MatDialogModule,
    MatMenuModule,
    MatFormFieldModule, 
    MatInputModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
} from '@angular/material';

import { ConfirmDialogModule } from 'src/app/core/components/confirm-dialog/confirm-dialog.module';

import { ContactsComponent } from './contacts.component';
import { ContactFormDialogComponent } from './contact-form/contact-form.component';
import { ContactsService } from './contacts.service';

const routes: Routes = [
    {
        path: '**',
        component: ContactsComponent,
        resolve: {
            chat: ContactsService
        }
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        ReactiveFormsModule,
        CardModule,
        PipesModule,
        PerfectScrollbarModule,
        ConfirmDialogModule,
        FlexLayoutModule,
        
        MatButtonModule, 
        MatIconModule,
        MatDialogModule,
        MatMenuModule,
        MatFormFieldModule, 
        MatInputModule,
        MatCheckboxModule,
        MatSidenavModule,
        MatTableModule,
        MatDatepickerModule,
        MatNativeDateModule,
    ],
    declarations: [ContactsComponent, ContactFormDialogComponent],
    providers     : [
        ContactsService
    ],
    entryComponents: [
        ContactFormDialogComponent
    ]

})
export class ContactsModule { }
