import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { AppRoutingModule } from './app-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FakeApiService } from './fake-api/fake-api.service';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { AgmCoreModule } from '@agm/core';

import { LoadingBarModule } from '@ngx-loading-bar/core';
import { SplashScreenService } from './core/services/splash-screen.service';

import { AppComponent } from './app.component';
import { BackdropComponent } from './core/components/backdrop/backdrop.component';

import { ThemeConfigService } from './core/services/theme-config.service';
import { LoginComponent } from './content/pages/snippets/authentication/login/login.component';
import{UserService} from './content/pages/snippets/authentication/login/user.service';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  // suppressScrollX: true
};

import {MatFormFieldModule} from '@angular/material/form-field';
//import { ResetPasswordComponent } from './content/pages/snippets/authentication/reset-password/reset-password.component';
@NgModule({
  declarations: [
    AppComponent,
    BackdropComponent,
    //ResetPasswordComponent,
    // LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    // MatFormFieldModule,
    LoadingBarModule.forRoot(),
    TranslateModule.forRoot(),
    /* InMemoryWebApiModule.forRoot(FakeApiService, {
        //delay             : 0,
        //passThruUnknownUrl: true
    }), */
    /* AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBeEBUVFBBEB74t72GUzfQqgBO9vUTJ4VM'
    }), */
  ],
  providers: [
    UserService,
    ThemeConfigService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
    /* SplashScreenService,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }, */
  ],
  bootstrap: [AppComponent],
  // bootstrap: [LoginComponent],
})
export class AppModule { }
