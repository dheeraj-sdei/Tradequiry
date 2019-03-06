import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { CalendarModule as AngularCalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { ColorPickerModule } from 'ngx-color-picker';

import {
    MatButtonModule, 
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule, 
    MatInputModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule, 
    MatTooltipModule,
} from '@angular/material';

import { CalendarComponent } from './calendar.component';
import { ConfirmDialogModule } from 'src/app/core/components/confirm-dialog/confirm-dialog.module';
import { CalendarEventFormDialogComponent } from './event-form/event-form.component';
import { CalendarService } from './calendar.service';

const routes: Routes = [
    {
        path     : '**',
        component: CalendarComponent,
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        ReactiveFormsModule,
        PerfectScrollbarModule,
        ConfirmDialogModule,

        MatButtonModule, 
        MatIconModule,
        MatDialogModule,
        MatFormFieldModule, 
        MatInputModule,
        MatSlideToggleModule,
        MatDatepickerModule,
        MatNativeDateModule,
	    MatToolbarModule, 
	    MatTooltipModule,

        AngularCalendarModule.forRoot({
            provide   : DateAdapter,
            useFactory: adapterFactory
        }),
        ColorPickerModule,
    ],
    declarations: [CalendarComponent, CalendarEventFormDialogComponent],
    providers         : [
        CalendarService
    ],
    entryComponents: [
        CalendarEventFormDialogComponent
    ]
})
export class CalendarModule { }
