import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent } from "@swimlane/ngx-datatable/release";

import { tableData, companyData} from './data/table-data'; 

@Component({
    selector: 'app-ngx-datatables',
    templateUrl: './ngx-datatables.component.html',
    styleUrls: ['./ngx-datatables.component.css']
})
export class NgxDatatablesComponent implements OnInit {

    rows = [];
    rows2 = [];
    loadingIndicator: boolean = true;
    reorderable: boolean = true;
    temp = [];
    selected = [];
    editing = {};

    columns = [
        { prop: 'name' },
        { name: 'Gender' },
        { name: 'Company' }
    ];

    @ViewChild(DatatableComponent) table: DatatableComponent;

    constructor() { 
        this.rows = companyData;
        this.rows2 = companyData.splice(0, 12);
        this.temp = [...companyData];
        this.selected = [companyData[2]];
        setTimeout(() => { this.loadingIndicator = false; }, 1500);
    }

    ngOnInit() {
    }

    updateFilter(event) {
        const val = event.target.value.toLowerCase();

        // filter our data
        const temp = this.temp.filter(function(d) {
          return d.name.toLowerCase().indexOf(val) !== -1 || !val;
        });

        // update the rows
        this.rows = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    }

    onSelect({ selected }) {
        console.log('Select Event', selected, this.selected);
    }

    onActivate(event) {
        console.log('Activate Event', event);
    }

    updateValue(event, cell, rowIndex) {
        console.log('inline editing rowIndex', rowIndex)
        this.editing[rowIndex + '-' + cell] = false;
        this.rows[rowIndex][cell] = event.target.value;
        this.rows = [...this.rows];
        console.log('UPDATED!', this.rows[rowIndex][cell]);
    }

}
