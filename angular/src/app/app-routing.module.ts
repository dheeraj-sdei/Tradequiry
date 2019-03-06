import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './shared/services/auth-guard.service';

import { LayoutComponent } from './content/layout/layout.component';
import { LayoutModule } from './content/layout/layout.module';
import { LoginComponent } from './content/pages/snippets/authentication/login/login.component';
import { SignUpComponent } from './content/pages/snippets/authentication/sign-up/sign-up.component';

const routes: Routes = [

    {
        path: '',
        loadChildren: './content/pages/snippets/snippets.module#SnippetsModule'
    },
    // {
    //     path: 'home',
    //     loadChildren: './content/pages/apps/dashboards/dashboard2/dashboard2.module#Dashboard2Module',
    // },
   
    {
        path: 'dashboard',
        component: LayoutComponent,
        children: [
            {
                path: 'home',
                loadChildren: './content/pages/apps/dashboards/dashboard2/dashboard2.module#Dashboard2Module',canActivate: [AuthGuard]
            },
           

            //   {
            //       path        : 'profile1',
            //       loadChildren: './content/pages/apps/apps.module#AppsModule'
            //   },
            {
                path: 'ui',
                loadChildren: './content/pages/ui/ui.module#UIModule'
            },
            {
                path: 'charts',
                loadChildren: './content/pages/charts/charts.module#ThemeChartsModule'
            },
            // {
            //     path: 'google-maps',
            //     loadChildren: './content/pages/google-maps/google-maps.module#GoogleMapsModule'
            // },
            {
                path: 'ngbootstrap',
                loadChildren: './content/pages/ngbootstrap/ngbootstrap.module#NgbootstrapModule'
            },
            {
                path: 'angular-material',
                loadChildren: './content/pages/angular-material/angular-material.module#AngularMaterialModule'
            },
            {
                path: 'pages',
                loadChildren: './content/pages/pages/pages.module#PagesModule'
            },

           
        ]
    },

];


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes),
        LayoutModule,
    ],
    declarations: [],
    exports: [],
})
export class AppRoutingModule { }
