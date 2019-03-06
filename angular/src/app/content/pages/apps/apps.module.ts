import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

const routes = [
    {
        path        : 'dashboards/dashboard2',
        loadChildren: './dashboards/dashboard2/dashboard2.module#Dashboard2Module'
    },
   
    
   
    {
        path        : 'chat',
        loadChildren: './chat/chat.module#ChatModule'
    },
    
    
    
    {
        path        : 'calendar',
        loadChildren: './calendar/calendar.module#CalendarModule'
    },
    {
        path        : 'contacts',
        loadChildren: './contacts/contacts.module#ContactsModule'
    },
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: []
})
export class AppsModule { }
