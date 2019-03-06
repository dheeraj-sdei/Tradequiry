import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CardModule } from 'src/app/core/components/card/card.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubheaderModule } from 'src/app/content/layout/components/subheader/subheader.module';
import { FormBuilder, FormGroup, FormControl, NgForm, Validators } from '@angular/forms';
import { LoginComponent } from './authentication/login/login.component';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './authentication/forgot-password/forgot-password.component';
import { LockscreenComponent } from './authentication/lockscreen/lockscreen.component';
import { Error404Component } from './errors/error-404/error-404.component';
import { Error500Component } from './errors/error-500/error-500.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ResetPasswordComponent } from './authentication/reset-password/reset-password.component';
const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
    },
    {
        path: 'sign-up',
        component: SignUpComponent,
    },
    {
        path: 'forgot',
        component: ForgotPasswordComponent,
    },
    {
        path: 'reset-password',
        component: ResetPasswordComponent,
    },
    {
        path: 'auth/lockscreen',
        component: LockscreenComponent,
    },
    {
        path: 'error-404',
        component: Error404Component,
    },
    {
        path: 'error-500',
        component: Error500Component,
    },
];


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        CardModule,
        FormsModule,
        ReactiveFormsModule,
        SubheaderModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        MatButtonModule,
        MatCheckboxModule,

    ],
    declarations: [LoginComponent, LockscreenComponent, ForgotPasswordComponent, SignUpComponent, Error404Component, Error500Component, ResetPasswordComponent],
    providers: [],
})
export class SnippetsModule { }
