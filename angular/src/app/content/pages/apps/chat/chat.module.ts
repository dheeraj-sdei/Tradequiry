import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'src/app/core/components/card/card.module';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PipesModule } from 'src/app/core/pipes/pipes.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import {
    MatButtonModule, 
    MatCheckboxModule, 
    MatDialogModule, 
    MatFormFieldModule, 
    MatIconModule, 
    MatInputModule, 
    MatMenuModule, 
    MatRippleModule, 
    MatSelectModule, 
    MatToolbarModule,
    MatSidenavModule,
} from '@angular/material';

import { ChatComponent } from './chat.component';
import { ChatService } from './chat.service';

const routes: Routes = [
    {
        path: '**',
        component: ChatComponent,
        resolve: {
            chat: ChatService
        }
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        CardModule,
        PerfectScrollbarModule,
        PipesModule,
        FlexLayoutModule,

        MatButtonModule,
        MatCheckboxModule,
        MatDialogModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatRippleModule,
        MatSelectModule,
        MatToolbarModule,
        MatSidenavModule,
    ],
    declarations: [ChatComponent],
    providers   : [
        ChatService
    ]
})
export class ChatModule { }
