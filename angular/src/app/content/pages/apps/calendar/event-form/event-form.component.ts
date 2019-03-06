import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { CalendarEvent } from 'angular-calendar';

import { CalendarEventModel } from '../event.model';

@Component({
    selector     : 'calendar-event-form-dialog',
    templateUrl  : './event-form.component.html',
    styleUrls    : ['./event-form.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class CalendarEventFormDialogComponent
{
    dialogTitle: string;
    action: string;
    event: CalendarEvent;
    eventForm: FormGroup;

    constructor(
        public matDialogRef: MatDialogRef<CalendarEventFormDialogComponent>,
        @Inject(MAT_DIALOG_DATA) private _data: any,
        private _formBuilder: FormBuilder
    )
    {
        this.action = _data.action;

        if ( this.action === 'edit' )
        {
            this.event = _data.event;
            this.dialogTitle = this.event.title;
        }
        else
        {
            this.dialogTitle = 'New Event';
            this.event = new CalendarEventModel({
                start: _data.date,
                end  : _data.date
            });
        }

        this.eventForm = this.createEventForm();
    }

    /**
     * Create the event form
     */
    createEventForm(): FormGroup
    {
        return new FormGroup({
            title : new FormControl(this.event.title),
            start : new FormControl(this.event.start),
            end   : new FormControl(this.event.end),
            allDay: new FormControl(this.event.allDay),
            color : this._formBuilder.group({
                primary  : new FormControl(this.event.color.primary),
                secondary: new FormControl(this.event.color.secondary)
            }),
            meta  :
                this._formBuilder.group({
                    location: new FormControl(this.event.meta.location),
                    notes   : new FormControl(this.event.meta.notes)
                })
        });
    }
}
