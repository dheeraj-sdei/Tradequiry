(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./content/pages/angular-material/angular-material.module": [
		"./src/app/content/pages/angular-material/angular-material.module.ts",
		"default~content-pages-angular-material-angular-material-module~content-pages-apps-dashboards-dashboa~55676534",
		"default~content-pages-angular-material-angular-material-module~content-pages-pages-pages-module~cont~709ed432",
		"common",
		"content-pages-angular-material-angular-material-module"
	],
	"./content/pages/apps/dashboards/dashboard2/dashboard2.module": [
		"./src/app/content/pages/apps/dashboards/dashboard2/dashboard2.module.ts",
		"default~content-pages-angular-material-angular-material-module~content-pages-apps-dashboards-dashboa~55676534",
		"default~content-pages-apps-dashboards-dashboard2-dashboard2-module~content-pages-charts-charts-modul~fffc915a",
		"common",
		"content-pages-apps-dashboards-dashboard2-dashboard2-module"
	],
	"./content/pages/charts/charts.module": [
		"./src/app/content/pages/charts/charts.module.ts",
		"default~content-pages-apps-dashboards-dashboard2-dashboard2-module~content-pages-charts-charts-modul~fffc915a",
		"common",
		"content-pages-charts-charts-module"
	],
	"./content/pages/ngbootstrap/ngbootstrap.module": [
		"./src/app/content/pages/ngbootstrap/ngbootstrap.module.ts",
		"common",
		"content-pages-ngbootstrap-ngbootstrap-module"
	],
	"./content/pages/pages/pages.module": [
		"./src/app/content/pages/pages/pages.module.ts",
		"default~content-pages-angular-material-angular-material-module~content-pages-apps-dashboards-dashboa~55676534",
		"default~content-pages-angular-material-angular-material-module~content-pages-pages-pages-module~cont~709ed432",
		"common",
		"content-pages-pages-pages-module"
	],
	"./content/pages/snippets/snippets.module": [
		"./src/app/content/pages/snippets/snippets.module.ts",
		"default~content-pages-angular-material-angular-material-module~content-pages-apps-dashboards-dashboa~55676534",
		"default~content-pages-angular-material-angular-material-module~content-pages-pages-pages-module~cont~709ed432",
		"common",
		"content-pages-snippets-snippets-module"
	],
	"./content/pages/ui/ui.module": [
		"./src/app/content/pages/ui/ui.module.ts",
		"common",
		"content-pages-ui-ui-module"
	],
	"./material-datatables/material-datatables.module": [
		"./src/app/content/pages/ui/material-datatables/material-datatables.module.ts",
		"default~content-pages-angular-material-angular-material-module~content-pages-apps-dashboards-dashboa~55676534",
		"default~content-pages-angular-material-angular-material-module~content-pages-pages-pages-module~cont~709ed432",
		"common",
		"material-datatables-material-datatables-module"
	],
	"./ngx-datatables/ngx-datatables.module": [
		"./src/app/content/pages/ui/ngx-datatables/ngx-datatables.module.ts",
		"common",
		"ngx-datatables-ngx-datatables-module"
	],
	"./ngx-dropzone/ngx-dropzone.module": [
		"./src/app/content/pages/ui/ngx-dropzone/ngx-dropzone.module.ts",
		"common",
		"ngx-dropzone-ngx-dropzone-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/services/auth-guard.service */ "./src/app/shared/services/auth-guard.service.ts");
/* harmony import */ var _content_layout_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./content/layout/layout.component */ "./src/app/content/layout/layout.component.ts");
/* harmony import */ var _content_layout_layout_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./content/layout/layout.module */ "./src/app/content/layout/layout.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
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
        component: _content_layout_layout_component__WEBPACK_IMPORTED_MODULE_4__["LayoutComponent"],
        children: [
            {
                path: 'home',
                loadChildren: './content/pages/apps/dashboards/dashboard2/dashboard2.module#Dashboard2Module', canActivate: [_shared_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
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
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
                _content_layout_layout_module__WEBPACK_IMPORTED_MODULE_5__["LayoutModule"],
            ],
            declarations: [],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN Loading bar -->\n<ngx-loading-bar [includeSpinner]=\"false\" [height]=\"'3px'\"></ngx-loading-bar>\n<!-- END Loading bar -->\n\n<router-outlet></router-outlet>\n<!-- BEGIN Page Backdrop -->\n<app-backdrop></app-backdrop>\n<!-- END Page Backdrop -->\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_services_translation_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/services/translation-loader.service */ "./src/app/core/services/translation-loader.service.ts");
/* harmony import */ var _core_services_splash_screen_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/services/splash-screen.service */ "./src/app/core/services/splash-screen.service.ts");
/* harmony import */ var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-loading-bar/core */ "./node_modules/@ngx-loading-bar/core/esm5/ngx-loading-bar-core.js");
/* harmony import */ var src_app_core_services_backdrop_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/backdrop.service */ "./src/app/core/services/backdrop.service.ts");
/* harmony import */ var _config_i18n_en__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./config/i18n/en */ "./src/app/config/i18n/en.ts");
/* harmony import */ var _config_i18n_ru__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./config/i18n/ru */ "./src/app/config/i18n/ru.ts");
/* harmony import */ var _config_i18n_fr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./config/i18n/fr */ "./src/app/config/i18n/fr.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AppComponent = /** @class */ (function () {
    function AppComponent(router, loader, _splashScreenService, _translateService, _translationLoaderService, _backdropService) {
        this.router = router;
        this.loader = loader;
        this._splashScreenService = _splashScreenService;
        this._translateService = _translateService;
        this._translationLoaderService = _translationLoaderService;
        this._backdropService = _backdropService;
        // Set translations
        this._translateService.addLangs(['en', 'ru', 'fr']);
        this._translationLoaderService.loadTranslations(_config_i18n_en__WEBPACK_IMPORTED_MODULE_7__["locale"], _config_i18n_ru__WEBPACK_IMPORTED_MODULE_8__["locale"], _config_i18n_fr__WEBPACK_IMPORTED_MODULE_9__["locale"]);
        this._translateService.setDefaultLang('ru');
        this._translationLoaderService.setInitLang();
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                // set page progress bar loading to start on NavigationStart event router
                _this.loader.start();
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouteConfigLoadStart"]) {
                _this.loader.increment(35);
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouteConfigLoadEnd"]) {
                _this.loader.increment(75);
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationCancel"]) {
                _this._backdropService.hide();
                // set page progress bar loading to end on NavigationEnd event router
                _this.loader.complete();
            }
        });
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        this._splashScreenService.init();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_5__["LoadingBarService"],
            _core_services_splash_screen_service__WEBPACK_IMPORTED_MODULE_4__["SplashScreenService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _core_services_translation_loader_service__WEBPACK_IMPORTED_MODULE_3__["TranslationLoaderService"],
            src_app_core_services_backdrop_service__WEBPACK_IMPORTED_MODULE_6__["BackdropService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-loading-bar/core */ "./node_modules/@ngx-loading-bar/core/esm5/ngx-loading-bar-core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_components_backdrop_backdrop_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/components/backdrop/backdrop.component */ "./src/app/core/components/backdrop/backdrop.component.ts");
/* harmony import */ var _core_services_theme_config_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/services/theme-config.service */ "./src/app/core/services/theme-config.service.ts");
/* harmony import */ var _content_pages_snippets_authentication_login_user_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./content/pages/snippets/authentication/login/user.service */ "./src/app/content/pages/snippets/authentication/login/user.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
// suppressScrollX: true
};
//import { ResetPasswordComponent } from './content/pages/snippets/authentication/reset-password/reset-password.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _core_components_backdrop_backdrop_component__WEBPACK_IMPORTED_MODULE_10__["BackdropComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                // MatFormFieldModule,
                _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_8__["LoadingBarModule"].forRoot(),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forRoot(),
            ],
            providers: [
                _content_pages_snippets_authentication_login_user_service__WEBPACK_IMPORTED_MODULE_12__["UserService"],
                _core_services_theme_config_service__WEBPACK_IMPORTED_MODULE_11__["ThemeConfigService"],
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_13__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_13__["HashLocationStrategy"] }
                /* SplashScreenService,
                {
                  provide: PERFECT_SCROLLBAR_CONFIG,
                  useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                }, */
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/config/i18n/en.ts":
/*!***********************************!*\
  !*** ./src/app/config/i18n/en.ts ***!
  \***********************************/
/*! exports provided: locale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locale", function() { return locale; });
var locale = {
    lang: 'en',
    data: {
        HEADER: {
            'MEGA_MENU': 'Mega Menu',
        },
        SIDENAV: {
            DASHBOARDS: 'Dashboards',
            MAILBOX: 'Mailbox',
            CHAT: 'Chat',
            KNOWLADGE_BASE: 'Knowledge Base',
            CALENDAR: 'Calendar',
            CONTACTS: 'Contacts',
        },
    }
};


/***/ }),

/***/ "./src/app/config/i18n/fr.ts":
/*!***********************************!*\
  !*** ./src/app/config/i18n/fr.ts ***!
  \***********************************/
/*! exports provided: locale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locale", function() { return locale; });
var locale = {
    lang: 'fr',
    data: {
        HEADER: {
            'MEGA_MENU': 'Mega Menu',
        },
        SIDENAV: {
            DASHBOARDS: 'Tableaux de bord',
            MAILBOX: 'boîte de réception',
            CHAT: 'Bavarder',
            KNOWLADGE_BASE: 'Base de connaissances',
            CALENDAR: 'Calendrier',
            CONTACTS: 'Contacts',
        },
    }
};


/***/ }),

/***/ "./src/app/config/i18n/ru.ts":
/*!***********************************!*\
  !*** ./src/app/config/i18n/ru.ts ***!
  \***********************************/
/*! exports provided: locale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locale", function() { return locale; });
var locale = {
    lang: 'ru',
    data: {
        HEADER: {
            'MEGA_MENU': 'Mега Меню',
        },
        SIDENAV: {
            DASHBOARDS: 'Админ панелы',
            MAILBOX: 'Почта',
            CHAT: 'Чат',
            KNOWLADGE_BASE: 'База знаний',
            CALENDAR: 'Календарь',
            CONTACTS: 'Контакты',
        },
    }
};


/***/ }),

/***/ "./src/app/config/index.ts":
/*!*********************************!*\
  !*** ./src/app/config/index.ts ***!
  \*********************************/
/*! exports provided: ThemeConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeConfig", function() { return ThemeConfig; });
var ThemeConfig = {
    theme_name: 'Reidius',
    current_year: 2019,
    home_link: '/index',
    layout: {
        sidebar: {
            always_drawer_mode: false,
        },
    },
    colors: {
        primary: '#2949EF',
        secondary: '#6c757d',
        success: '#06b5b6',
        info: '#00bcd4',
        warning: '#fd7e14',
        danger: '#FE4D2E',
        light: '#dee2e6',
        purple: '#6f42c1',
        indigo: '#6610f2',
        pink: '#e83e8c',
        yellow: '#FDA424',
        teal: '#20c997',
    },
};


/***/ }),

/***/ "./src/app/content/layout/components/footer/footer.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/content/layout/components/footer/footer.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvbGF5b3V0L2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/content/layout/components/footer/footer.component.html":
/*!************************************************************************!*\
  !*** ./src/app/content/layout/components/footer/footer.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flexbox\">                    \r\n    <div class=\"text-muted\">{{themeConfig.config.current_year}} © <strong>Vaapthemes</strong>. All rights reserved</div><a class=\"btn btn-primary btn-rounded\" href=\"https://vaapthemes.com/themes/reidius/\" target=\"_blank\">Buy Now</a>\r\n</div>"

/***/ }),

/***/ "./src/app/content/layout/components/footer/footer.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/content/layout/components/footer/footer.component.ts ***!
  \**********************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_services_theme_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/theme-config.service */ "./src/app/core/services/theme-config.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = /** @class */ (function () {
    function FooterComponent(themeConfig) {
        this.themeConfig = themeConfig;
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/content/layout/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/content/layout/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_core_services_theme_config_service__WEBPACK_IMPORTED_MODULE_1__["ThemeConfigService"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/content/layout/components/footer/footer.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/content/layout/components/footer/footer.module.ts ***!
  \*******************************************************************/
/*! exports provided: FooterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterModule", function() { return FooterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.component */ "./src/app/content/layout/components/footer/footer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FooterModule = /** @class */ (function () {
    function FooterModule() {
    }
    FooterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ],
            declarations: [_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]],
            exports: [_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]]
        })
    ], FooterModule);
    return FooterModule;
}());



/***/ }),

/***/ "./src/app/content/layout/components/header/header.component.html":
/*!************************************************************************!*\
  !*** ./src/app/content/layout/components/header/header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"navbar-nav mr-auto\">\n        <img alt=\"image\" class=\"\" src=\"../../../../../assets/img/ourlogos/logo(2).png\" style=\"padding:15px 10px;max-width:40% ;margin-top:-10px;\">\n    <li class=\"nav-item\">\n            <!-- <img alt=\"image\" class=\"\" src=\"../../../../../assets/img/ourlogos/logo(2).png\"> -->\n        <a class=\"nav-link navbar-icon sidebar-toggler\" id=\"sidebar-toggler\" href=\"javascript:;\" (click)=\"toggleSidebar($event)\">\n            <!-- <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span> -->\n            \n        </a>\n    </li>\n\n    <li class=\"nav-item dropdown d-none d-sm-inline-block\" ngbDropdown>\n        <a class=\"nav-link dropdown-toggle megamenu-link\" href=\"javascript:;\" ngbDropdownToggle>\n            <span class=\"h5\">Dashboard<i class=\"ti-angle-down arrow ml-2\"></i></span>\n        </a>\n        <div class=\"dropdown-menu nav-megamenu\" ngbDropdownMenu style=\"min-width: 400px\">\n            <div class=\"row m-0\">\n                <div class=\"col-6\">\n                    <a class=\"mega-menu-item\" href=\"javascript:;\"><i class=\"ft-activity item-badge mb-4\"></i>\n                        <h5 class=\"mb-2\">Activity</h5>\n                        <div class=\"text-muted font-12\">Lorem Ipsum dolar.</div>\n                    </a>\n                </div>\n                <div class=\"col-6\">\n                    <a class=\"mega-menu-item bg-primary text-white\" href=\"javascript:;\"><i class=\"ft-globe item-badge mb-4 text-white\"></i>\n                        <h5 class=\"mb-2\">Customers</h5>\n                        <div class=\"text-white font-12\">Lorem Ipsum dolar.</div>\n                    </a>\n                </div>\n                <div class=\"col-6\">\n                    <a class=\"mega-menu-item\" href=\"javascript:;\"><i class=\"ft-layers item-badge mb-4\"></i>\n                        <h5 class=\"mb-2\">My Projects</h5>\n                        <div class=\"text-muted font-12\">Lorem Ipsum dolar.</div>\n                    </a>\n                </div>\n                <div class=\"col-6\">\n                    <a class=\"mega-menu-item\" href=\"javascript:;\"><i class=\"ft-shopping-cart item-badge mb-4\"></i>\n                        <h5 class=\"mb-2\">My Orders</h5>\n                        <div class=\"text-muted font-12\">Lorem Ipsum dolar.</div>\n                    </a>\n                </div>\n            </div>\n        </div>\n    </li>\n</ul>\n<ul class=\"navbar-nav\">\n    <li class=\"nav-item\">\n        <a class=\"nav-link navbar-icon\" id=\"search-toggler\" href=\"javascript:;\" (click)=\"openSearchModal(searchModal)\"><i class=\"ft-search\"></i></a>\n    </li>\n    <li class=\"nav-item dropdown\" ngbDropdown placement='bottom-right'>\n        <a class=\"nav-link dropdown-toggle navbar-icon\" ngbDropdownToggle data-toggle=\"dropdown\" href=\"javascript:;\">\n            <i class=\"ft-bell position-relative\"></i><span class=\"notify-signal bg-primary\"></span>\n        </a>\n        <div class=\"dropdown-menu pt-0\" style=\"min-width: 350px\" ngbDropdownMenu>\n            <div class=\"py-4 px-3 text-center text-white mb-3\" style=\"background-color: #2c2f48;\">\n                <h5 class=\"m-0\">7 New Notifications</h5>\n            </div>\n            <perfect-scrollbar style='max-height: 320px;position: relative;'>\n                <div class=\"list-group list-group-flush\">\n                    <a class=\"list-group-item list-group-item-action px-4 py-3\" href=\"javascript:;\">\n                        <div class=\"media align-items-center\"><i class=\"ti-shopping-cart text-center font-20 text-primary mr-3\" style=\"width: 40px\"></i>\n                            <div class=\"media-body\">\n                                <div class=\"flexbox\">\n                                    <h6 class=\"mb-0 font-weight-bold\">2 New Orders</h6>\n                                    <div class=\"text-muted font-13\">15 min</div>\n                                </div>\n                                <div class=\"font-13 text-muted\">Lorem ipsum dolor sit amet ut.</div>\n                            </div>\n                        </div>\n                    </a>\n                    <a class=\"list-group-item list-group-item-action px-4 py-3\" href=\"javascript:;\">\n                        <div class=\"media align-items-center\"><i class=\"ti-server text-center font-20 text-primary mr-3\" style=\"width: 40px\"></i>\n                            <div class=\"media-body\">\n                                <div class=\"flexbox\">\n                                    <h6 class=\"mb-0 font-weight-bold\">Server overloaded 91%</h6>\n                                    <div class=\"text-muted font-13\">40 min</div>\n                                </div>\n                                <div class=\"font-13 text-muted\">Lorem ipsum dolor sit amet ut.</div>\n                            </div>\n                        </div>\n                    </a>\n                    <a class=\"list-group-item list-group-item-action px-4 py-3\" href=\"javascript:;\">\n                        <div class=\"media align-items-center\"><i class=\"ti-support text-center font-20 text-primary mr-3\" style=\"width: 40px\"></i>\n                            <div class=\"media-body\">\n                                <div class=\"flexbox\">\n                                    <h6 class=\"mb-0 font-weight-bold\">New support request</h6>\n                                    <div class=\"text-muted font-13\">1 hrs</div>\n                                </div>\n                                <div class=\"font-13 text-muted\">Lorem ipsum dolor sit amet ut.</div>\n                            </div>\n                        </div>\n                    </a>\n                    <a class=\"list-group-item list-group-item-action px-4 py-3\" href=\"javascript:;\">\n                        <div class=\"media align-items-center\"><i class=\"ti-info-alt text-center font-20 text-primary mr-3\" style=\"width: 40px\"></i>\n                            <div class=\"media-body\">\n                                <div class=\"flexbox\">\n                                    <h6 class=\"mb-0 font-weight-bold\">System Warning</h6>\n                                    <div class=\"text-muted font-13\">2 hrs</div>\n                                </div>\n                                <div class=\"font-13 text-muted\">Lorem ipsum dolor sit amet ut.</div>\n                            </div>\n                        </div>\n                    </a>\n                    <a class=\"list-group-item list-group-item-action px-4 py-3\" href=\"javascript:;\">\n                        <div class=\"media align-items-center\"><i class=\"ti-email text-center font-20 text-primary mr-3\" style=\"width: 40px\"></i>\n                            <div class=\"media-body\">\n                                <div class=\"flexbox\">\n                                    <h6 class=\"mb-0 font-weight-bold\">You have 2 new messages</h6>\n                                    <div class=\"text-muted font-13\">2 hrs</div>\n                                </div>\n                                <div class=\"font-13 text-muted\">Lorem ipsum dolor sit amet ut.</div>\n                            </div>\n                        </div>\n                    </a>\n                    <a class=\"list-group-item list-group-item-action px-4 py-3\" href=\"javascript:;\">\n                        <div class=\"media align-items-center\"><i class=\"ti-user text-center font-20 text-primary mr-3\" style=\"width: 40px\"></i>\n                            <div class=\"media-body\">\n                                <div class=\"flexbox\">\n                                    <h6 class=\"mb-0 font-weight-bold\">24 new users registered</h6>\n                                    <div class=\"text-muted font-13\">2 hrs</div>\n                                </div>\n                                <div class=\"font-13 text-muted\">Lorem ipsum dolor sit amet ut.</div>\n                            </div>\n                        </div>\n                    </a>\n                </div>\n            </perfect-scrollbar>\n            <div class=\"px-3 py-2 text-center mt-3\">\n                <a class=\"hover-link font-13\" routerLink='/apps/mail'>view all</a>\n            </div>\n        </div>\n    </li>\n    <li class=\"nav-item\" placement='bottom-right' ngbDropdown>\n        <a class=\"nav-link d-inline-flex align-items-center no-arrow\" ngbDropdownToggle href=\"javascript:;\">\n            <img src=\"{{_translationLoaderService.selectedLanguage.flag}}\" width=\"24\" alt=\"\">\n        </a>\n        <div ngbDropdownMenu>\n            <a *ngFor=\"let lang of _translationLoaderService.languages\" class=\"dropdown-item d-flex align-items-center\" (click)=\"setLanguage(lang.lang)\" href=\"javascript:;\">\n                <img class=\"mr-3\" src=\"{{lang.flag}}\" width=\"24\" alt=\"\">{{lang.name}}\n            </a>\n        </div>\n    </li>\n    <li class=\"nav-divider\"></li>\n    <li class=\"nav-item dropdown\" ngbDropdown placement='bottom-right'>\n        <a class=\"nav-link dropdown-toggle no-arrow d-inline-flex align-items-center\" ngbDropdownToggle href=\"javascript:;\">\n            <span class=\"d-none d-sm-inline-block mr-2\">{{userName}}</span>\n            <img class=\"rounded-circle\" src=\"assets/img/users/admin-image.png\" alt=\"image\" width=\"36\" />\n        </a>\n        <div class=\"dropdown-menu pt-0 pb-4\" ngbDropdownMenu style=\"min-width: 280px;\">\n            <div class=\"p-4 mb-4 media align-items-center text-white\" style=\"background-color: #2c2f48;\">\n                <img class=\"rounded-circle mr-3\" src=\"./assets/img/users/admin-image.png\" alt=\"image\" width=\"55\" />\n                <div class=\"media-body\">\n                    <h5 class=\"mb-1\">Jonathan Due</h5>\n                    <div class=\"font-13\">Administrator</div>\n                </div>\n            </div>\n            <a class=\"dropdown-item d-flex align-items-center\" [routerLink]=\"['/dashboard/pages/profile']\" ><i class=\"ft-user mr-3 font-18 text-muted\" ></i>Profile</a>\n            <a class=\"dropdown-item d-flex align-items-center\" routerLink='/apps/mail'><i class=\"ft-message-square mr-3 font-18 text-muted\"></i>Messages</a>\n            <a class=\"dropdown-item d-flex align-items-center\" [routerLink]=\"['/dashboard/pages/profile']\" ><i class=\"ft-settings mr-3 font-18 text-muted\"></i>Settings</a>\n            <div class=\"dropdown-divider my-3\"></div>\n            <div class=\"mx-4\">\n                <a class=\"btn btn-link p-0\" (click)=\"destroyToken()\" ><span class=\"btn-icon\"><i class=\"ft-power mr-2 font-18\"></i>Logout</span></a>\n            </div>\n          <!--  //new addon//-->\n          <div class=\"dropdown-divider my-3\"></div>\n<div class=\"mx-4\">\n    <h5 class=\"mb-3 mt-4\">Services</h5>\n    <li class=\"mb-3 \">\n        <div>Broker Connection\n            <span class=\"pull-right badge badge-success\">Online</span>\n        </div>\n    </li>\n    <li class=\"mb-3 \" >\n        <div>Simulated Broker\n            <span class=\"pull-right badge badge-success\">Online</span>\n        </div></li>\n    <li class=\"mb-3 \" >\n        <div>Realtime Market Data\n            <span class=\"pull-right badge badge-success\">Online</span>\n        </div></li>\n    <li class=\"mb-3\">\n        <div>Algorithm Engine \n             <span class=\"pull-right badge badge-success\">Online</span>\n        </div></li>\n    <li class=\"mb-3\">\n        <div>Backtest Engine \n             <span class=\"pull-right badge badge-danger\">Offline</span>\n         </div>\n    </li>\n</div>\n\n        </div>\n    </li>\n    <li class=\"nav-item\">\n        <a class=\"nav-link navbar-icon\" href=\"javascript:;\" (click)=\"toggleQuickSidebar($event)\"><i class=\"ti-align-right\"></i></a>\n    </li>\n</ul>\n\n<ng-template #searchModal let-modal>\n    <form class=\"search-top-bar\" action=\"javascript:;\">\n        <input class=\"form-control search-input\" type=\"text\" placeholder=\"Search...\">\n        <button class=\"reset input-search-icon\" type=\"submit\"><i class=\"ft-search\"></i></button>\n        <button class=\"reset input-search-close\" type=\"button\" data-dismiss=\"modal\" (click)=\"modal.dismiss()\"><i class=\"ft-x\"></i></button>\n    </form>\n</ng-template>"

/***/ }),

/***/ "./src/app/content/layout/components/header/header.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/content/layout/components/header/header.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvbGF5b3V0L2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/content/layout/components/header/header.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/content/layout/components/header/header.component.ts ***!
  \**********************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var src_app_core_services_translation_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/translation-loader.service */ "./src/app/core/services/translation-loader.service.ts");
/* harmony import */ var src_app_core_services_component_registry_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/component-registry.service */ "./src/app/core/services/component-registry.service.ts");
/* harmony import */ var _pages_snippets_authentication_login_jwt_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../pages/snippets/authentication/login/jwt.service */ "./src/app/content/pages/snippets/authentication/login/jwt.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_snippets_authentication_login_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../pages/snippets/authentication/login/user.service */ "./src/app/content/pages/snippets/authentication/login/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(modalService, _translateService, _translationLoaderService, _componenRegistryService, jwtService, route, UserService) {
        this.modalService = modalService;
        this._translateService = _translateService;
        this._translationLoaderService = _translationLoaderService;
        this._componenRegistryService = _componenRegistryService;
        this.jwtService = jwtService;
        this.route = route;
        this.UserService = UserService;
        this.userName = 'demo';
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    HeaderComponent.prototype.destroyToken = function () {
        this.jwtService.destroyToken();
        // this.apiService.sendIsLoginValue(true);
        // this.toasterService.showSuccess('You are now logged out', 'Logout success');
        this.route.navigate(['/']);
    };
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._componenRegistryService.onRegistryChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (registry) {
            _this.sideBar = _this._componenRegistryService.getComponent('sidenav');
            _this.quickSidebar = _this._componenRegistryService.getComponent('quick-sidebar');
        });
        // this.UserService.getUserName().subscribe(res => {
        //     this.userName = res;
        // });
        this.UserService.mysubject.subscribe(function (userName) {
            _this.userName = userName;
        });
        this.UserService.getToken().subscribe(function (res) {
            _this.myToken = res;
        });
        console.log("aaaaa", this.myToken);
    };
    HeaderComponent.prototype.openSearchModal = function (content) {
        this.modalService.open(content, { size: 'lg' });
    };
    HeaderComponent.prototype.ngAfterViewInit = function () { };
    HeaderComponent.prototype.toggleSidebar = function (event) {
        event.preventDefault();
        this.sideBar.sidebarToggleHandler();
    };
    HeaderComponent.prototype.toggleQuickSidebar = function (event) {
        event.preventDefault();
        this.quickSidebar.toggleOpen();
    };
    HeaderComponent.prototype.setLanguage = function (lang) {
        this._translationLoaderService.setLanguage(lang);
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/content/layout/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/content/layout/components/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            src_app_core_services_translation_loader_service__WEBPACK_IMPORTED_MODULE_5__["TranslationLoaderService"],
            src_app_core_services_component_registry_service__WEBPACK_IMPORTED_MODULE_6__["ComponenRegistryService"],
            _pages_snippets_authentication_login_jwt_service__WEBPACK_IMPORTED_MODULE_7__["JwtService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _pages_snippets_authentication_login_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/content/layout/components/header/header.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/content/layout/components/header/header.module.ts ***!
  \*******************************************************************/
/*! exports provided: HeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderModule", function() { return HeaderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header.component */ "./src/app/content/layout/components/header/header.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var HeaderModule = /** @class */ (function () {
    function HeaderModule() {
    }
    HeaderModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModalModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarModule"],
            ],
            declarations: [_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"]],
            exports: [_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"]]
        })
    ], HeaderModule);
    return HeaderModule;
}());



/***/ }),

/***/ "./src/app/content/layout/components/quick-sidebar/quick-sidebar.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/content/layout/components/quick-sidebar/quick-sidebar.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ngb-tabset class='col p-0 h-100 d-flex flex-column nav-pills-solid' type=\"pills\">\n\t<ngb-tab title=\"Messages\">\n\t\t<ng-template ngbTabContent>\n\t        <perfect-scrollbar>\n\t            <div class=\"flexbox px-4 mb-4 mt-3\">\n\t                <span class=\"text-muted\">23 Messages</span>\n\t                <a routerLink='/apps/mail'>View All</a>\n\t            </div>\n\t            <div class=\"list-group list-group-flush\">\n\t                <a class=\"list-group-item list-group-item-action px-4 py-3\" href=\"#\">\n\t                    <div class=\"media\">\n\t                        <div class=\"mr-3 position-relative\">\n\t                            <img class=\"rounded-circle align-self-center\" src=\"./assets/img/users/u1.jpg\" alt=\"image\" width=\"40\">\n\t                            <span class=\"badge-point badge-warning avatar-badge\"></span>\n\t                        </div>\n\t                        <div class=\"media-body\">\n\t                            <div class=\"flexbox mb-2\">\n\t                                <h6 class=\"mb-0\">John Due</h6>\n\t                                <div class=\"text-muted font-13\">2 days ago</div>\n\t                            </div>\n\t                            <div class=\"font-13\">Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor sed.</div>\n\t                        </div>\n\t                    </div>\n\t                </a>\n\t                <a class=\"list-group-item list-group-item-action px-4 py-3\" href=\"#\">\n\t                    <div class=\"media\">\n\t                        <div class=\"mr-3 position-relative\">\n\t                            <img class=\"rounded-circle align-self-center\" src=\"./assets/img/users/u2.jpg\" alt=\"image\" width=\"40\">\n\t                            <span class=\"badge-point badge-warning avatar-badge\"></span>\n\t                        </div>\n\t                        <div class=\"media-body\">\n\t                            <div class=\"flexbox mb-2\">\n\t                                <h6 class=\"mb-0\">John Due</h6>\n\t                                <div class=\"text-muted font-13\">2 days ago</div>\n\t                            </div>\n\t                            <div class=\"font-13\">Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor sed.</div>\n\t                        </div>\n\t                    </div>\n\t                </a>\n\t                <a class=\"list-group-item list-group-item-action px-4 py-3\" href=\"#\">\n\t                    <div class=\"media\">\n\t                        <div class=\"mr-3 position-relative\">\n\t                            <img class=\"rounded-circle align-self-center\" src=\"./assets/img/users/u3.jpg\" alt=\"image\" width=\"40\">\n\t                            <span class=\"badge-point badge-success avatar-badge\"></span>\n\t                        </div>\n\t                        <div class=\"media-body\">\n\t                            <div class=\"flexbox mb-2\">\n\t                                <h6 class=\"mb-0\">John Due</h6>\n\t                                <div class=\"text-muted font-13\">2 days ago</div>\n\t                            </div>\n\t                            <div class=\"font-13\">Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor sed.</div>\n\t                        </div>\n\t                    </div>\n\t                </a>\n\t                <a class=\"list-group-item list-group-item-action px-4 py-3\" href=\"#\">\n\t                    <div class=\"media\">\n\t                        <div class=\"mr-3 position-relative\">\n\t                            <img class=\"rounded-circle align-self-center\" src=\"./assets/img/users/u5.jpg\" alt=\"image\" width=\"40\">\n\t                            <span class=\"badge-point badge-warning avatar-badge\"></span>\n\t                        </div>\n\t                        <div class=\"media-body\">\n\t                            <div class=\"flexbox mb-2\">\n\t                                <h6 class=\"mb-0\">John Due</h6>\n\t                                <div class=\"text-muted font-13\">2 days ago</div>\n\t                            </div>\n\t                            <div class=\"font-13\">Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor sed.</div>\n\t                        </div>\n\t                    </div>\n\t                </a>\n\t                <a class=\"list-group-item list-group-item-action px-4 py-3\" href=\"#\">\n\t                    <div class=\"media\">\n\t                        <div class=\"mr-3 position-relative\">\n\t                            <img class=\"rounded-circle align-self-center\" src=\"./assets/img/users/u8.jpg\" alt=\"image\" width=\"40\">\n\t                            <span class=\"badge-point badge-success avatar-badge\"></span>\n\t                        </div>\n\t                        <div class=\"media-body\">\n\t                            <div class=\"flexbox mb-2\">\n\t                                <h6 class=\"mb-0\">John Due</h6>\n\t                                <div class=\"text-muted font-13\">2 days ago</div>\n\t                            </div>\n\t                            <div class=\"font-13\">Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor sed.</div>\n\t                        </div>\n\t                    </div>\n\t                </a>\n\t                <a class=\"list-group-item list-group-item-action px-4 py-3\" href=\"#\">\n\t                    <div class=\"media\">\n\t                        <div class=\"mr-3 position-relative\">\n\t                            <img class=\"rounded-circle align-self-center\" src=\"./assets/img/users/u5.jpg\" alt=\"image\" width=\"40\">\n\t                            <span class=\"badge-point badge-warning avatar-badge\"></span>\n\t                        </div>\n\t                        <div class=\"media-body\">\n\t                            <div class=\"flexbox mb-2\">\n\t                                <h6 class=\"mb-0\">John Due</h6>\n\t                                <div class=\"text-muted font-13\">2 days ago</div>\n\t                            </div>\n\t                            <div class=\"font-13\">Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor sed.</div>\n\t                        </div>\n\t                    </div>\n\t                </a>\n\t                <a class=\"list-group-item list-group-item-action px-4 py-3\" href=\"#\">\n\t                    <div class=\"media\">\n\t                        <div class=\"mr-3 position-relative\">\n\t                            <img class=\"rounded-circle align-self-center\" src=\"./assets/img/users/u9.jpg\" alt=\"image\" width=\"40\">\n\t                            <span class=\"badge-point badge-success avatar-badge\"></span>\n\t                        </div>\n\t                        <div class=\"media-body\">\n\t                            <div class=\"flexbox mb-2\">\n\t                                <h6 class=\"mb-0\">John Due</h6>\n\t                                <div class=\"text-muted font-13\">2 days ago</div>\n\t                            </div>\n\t                            <div class=\"font-13\">Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor sed.</div>\n\t                        </div>\n\t                    </div>\n\t                </a>\n\t                <a class=\"list-group-item list-group-item-action px-4 py-3\" href=\"#\">\n\t                    <div class=\"media\">\n\t                        <div class=\"mr-3 position-relative\">\n\t                            <img class=\"rounded-circle align-self-center\" src=\"./assets/img/users/u6.jpg\" alt=\"image\" width=\"40\">\n\t                            <span class=\"badge-point badge-warning avatar-badge\"></span>\n\t                        </div>\n\t                        <div class=\"media-body\">\n\t                            <div class=\"flexbox mb-2\">\n\t                                <h6 class=\"mb-0\">John Due</h6>\n\t                                <div class=\"text-muted font-13\">2 days ago</div>\n\t                            </div>\n\t                            <div class=\"font-13\">Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor sed.</div>\n\t                        </div>\n\t                    </div>\n\t                </a>\n\t            </div>\n\t        </perfect-scrollbar>\t\t\t\n\t\t</ng-template>\n\t</ngb-tab>\n\t<ngb-tab title=\"Settings\">\n\t\t<ng-template ngbTabContent>\n\t\t\t<div class=\"p-4 pb-3 h-100\">\n\t\t        <perfect-scrollbar>\n\t\t            <h5 class=\"mb-4\">App Settings</h5>\n\t\t            <div class=\"flexbox py-3\">Enable notifications:\n\t\t                <label class=\"ui-switch switch-solid\">\n\t\t                    <input type=\"checkbox\" checked=\"\">\n\t\t                    <span></span>\n\t\t                </label>\n\t\t            </div>\n\t\t            <div class=\"flexbox py-3\">SMS notifications:\n\t\t                <label class=\"ui-switch switch-solid\">\n\t\t                    <input type=\"checkbox\">\n\t\t                    <span></span>\n\t\t                </label>\n\t\t            </div>\n\t\t            <div class=\"flexbox py-3\">Chat history:\n\t\t                <label class=\"ui-switch switch-solid\">\n\t\t                    <input type=\"checkbox\">\n\t\t                    <span></span>\n\t\t                </label>\n\t\t            </div>\n\t\t            <div class=\"flexbox py-3\">Show recent activity:\n\t\t                <label class=\"ui-switch switch-solid\">\n\t\t                    <input type=\"checkbox\" checked=\"\">\n\t\t                    <span></span>\n\t\t                </label>\n\t\t            </div>\n\t\t            <div class=\"flexbox py-3\">Users log:\n\t\t                <label class=\"ui-switch switch-solid\">\n\t\t                    <input type=\"checkbox\">\n\t\t                    <span></span>\n\t\t                </label>\n\t\t            </div>\n\t\t            <div class=\"flexbox py-3\">Site Tracking:\n\t\t                <label class=\"ui-switch switch-solid\">\n\t\t                    <input type=\"checkbox\" checked=\"\">\n\t\t                    <span></span>\n\t\t                </label>\n\t\t            </div>\n\t\t            <h5 class=\"mb-4 mt-5\">Orders Settings</h5>\n\t\t            <div class=\"flexbox py-3\">Orders history:\n\t\t                <label class=\"ui-switch switch-solid\">\n\t\t                    <input type=\"checkbox\" checked=\"\">\n\t\t                    <span></span>\n\t\t                </label>\n\t\t            </div>\n\t\t            <div class=\"flexbox py-3\">Notify on new orders:\n\t\t                <label class=\"ui-switch switch-solid\">\n\t\t                    <input type=\"checkbox\">\n\t\t                    <span></span>\n\t\t                </label>\n\t\t            </div>\n\t\t            <div class=\"flexbox py-3\">Sales reports:\n\t\t                <label class=\"ui-switch switch-solid\">\n\t\t                    <input type=\"checkbox\">\n\t\t                    <span></span>\n\t\t                </label>\n\t\t            </div>\n\t\t            <div class=\"flexbox py-3\">Orders reports:\n\t\t                <label class=\"ui-switch switch-solid\">\n\t\t                    <input type=\"checkbox\" checked=\"\">\n\t\t                    <span></span>\n\t\t                </label>\n\t\t            </div>\n\t\t            <div class=\"flexbox py-3\">Order auto status:\n\t\t                <label class=\"ui-switch switch-solid\">\n\t\t                    <input type=\"checkbox\">\n\t\t                    <span></span>\n\t\t                </label>\n\t\t            </div>\n\t\t        </perfect-scrollbar>\n\t\t    </div>\n\t\t</ng-template>\n\t</ngb-tab>\n\t<ngb-tab title=\"Logs\">\n\t\t<ng-template ngbTabContent>\n\t\t\t<div class=\"p-4 pb-3 h-100\">\n\t\t        <perfect-scrollbar>\n\t\t            <ul class=\"timeline timeline-default outline-points\">\n\t\t                <li class=\"timeline-item\">2 Issue fixed\n\t\t                    <span class=\"font-13 text-muted ml-2\">Just now</span>\n\t\t                </li>\n\t\t                <li class=\"timeline-item\">\n\t\t                    <span>15 New orders\n\t\t                        <span class=\"badge badge-primary badge-pill ml-2\">important</span>\n\t\t                    </span>\n\t\t                    <span class=\"font-13 text-muted ml-2\">5 mins</span>\n\t\t                </li>\n\t\t                <li class=\"timeline-item\">18 new orders sent\n\t\t                    <span class=\"font-13 text-muted ml-2\">24 mins</span>\n\t\t                </li>\n\t\t                <li class=\"timeline-item\">15 New messages\n\t\t                    <span class=\"font-13 text-muted ml-2\">45 mins</span>\n\t\t                </li>\n\t\t                <li class=\"timeline-item\">The invoice is ready\n\t\t                    <span class=\"font-13 text-muted ml-2\">1 hrs</span>\n\t\t                </li>\n\t\t                <li class=\"timeline-item\">\n\t\t                    <span>Server Error\n\t\t                        <span class=\"badge badge-success badge-pill ml-2\">resolved</span>\n\t\t                    </span>\n\t\t                    <span class=\"font-13 text-muted ml-2\">2 hrs</span>\n\t\t                </li>\n\t\t                <li class=\"timeline-item\">\n\t\t                    <span>System Warning\n\t\t                        <a class=\"text-purple ml-2\">Check</a>\n\t\t                    </span>\n\t\t                    <span class=\"font-13 text-muted ml-2\">12:07</span>\n\t\t                </li>\n\t\t                <li class=\"timeline-item\">24 new users registered\n\t\t                    <span class=\"font-13 text-muted ml-2\">12:30</span>\n\t\t                </li>\n\t\t                <li class=\"timeline-item\">\n\t\t                    <span>5 New Orders\n\t\t                        <span class=\"badge badge-warning badge-pill ml-2\">important</span>\n\t\t                    </span>\n\t\t                    <span class=\"font-13 text-muted ml-2\">13:45</span>\n\t\t                </li>\n\t\t                <li class=\"timeline-item\">\n\t\t                    <span class=\"flexbox\">Production server up<i class=\"la la-arrow-circle-up font-18 ml-2 text-success\"></i></span>\n\t\t                    <span class=\"font-13 text-muted ml-2\">1 days ago</span>\n\t\t                </li>\n\t\t                <li class=\"timeline-item\">Server overloaded 91%\n\t\t                    <span class=\"font-13 text-muted ml-2\">2 days ago</span>\n\t\t                </li>\n\t\t                <li class=\"timeline-item\">Server error\n\t\t                    <span class=\"font-13 text-muted ml-2\">2 days ago</span>\n\t\t                </li>\n\t\t                <li class=\"timeline-item\">2 Issue fixed\n\t\t                    <span class=\"font-13 text-muted ml-2\">Just now</span>\n\t\t                </li>\n\t\t                <li class=\"timeline-item\">\n\t\t                    <span>15 New orders\n\t\t                        <span class=\"badge badge-primary badge-pill ml-2\">important</span>\n\t\t                    </span>\n\t\t                    <span class=\"font-13 text-muted ml-2\">5 mins</span>\n\t\t                </li>\n\t\t                <li class=\"timeline-item\">18 new orders sent\n\t\t                    <span class=\"font-13 text-muted ml-2\">24 mins</span>\n\t\t                </li>\n\t\t            </ul>\n\t\t        </perfect-scrollbar>\n\t\t    </div>\n\t\t</ng-template>\n\t</ngb-tab>\n</ngb-tabset>\t\n"

/***/ }),

/***/ "./src/app/content/layout/components/quick-sidebar/quick-sidebar.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/content/layout/components/quick-sidebar/quick-sidebar.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ngb-tabset .nav-pills {\n  height: 80px;\n  display: flex;\n  align-items: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RoZWVyYWpzL0Rlc2t0b3AvVHJhZGVxdWlyeV9hbmd1bGFyL3NyYy9hcHAvY29udGVudC9sYXlvdXQvY29tcG9uZW50cy9xdWljay1zaWRlYmFyL3F1aWNrLXNpZGViYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFFUSxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29udGVudC9sYXlvdXQvY29tcG9uZW50cy9xdWljay1zaWRlYmFyL3F1aWNrLXNpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuQGltcG9ydCAnc3JjL0B0aGVtZS9zY3NzL2NvbXBvbmVudHMvZnVuY3Rpb25zJztcclxuQGltcG9ydCAnc3JjL0B0aGVtZS9zY3NzL2NvbXBvbmVudHMvbWl4aW5zJztcclxuQGltcG9ydCAnc3JjL0B0aGVtZS9zY3NzL2NvbXBvbmVudHMvdmFyaWFibGVzJztcclxuXHJcbjpob3N0IHtcclxuICAgIG5nYi10YWJzZXQgLm5hdi1waWxscyB7XHJcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/content/layout/components/quick-sidebar/quick-sidebar.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/content/layout/components/quick-sidebar/quick-sidebar.component.ts ***!
  \************************************************************************************/
/*! exports provided: QuickSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickSidebarComponent", function() { return QuickSidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_services_backdrop_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/backdrop.service */ "./src/app/core/services/backdrop.service.ts");
/* harmony import */ var src_app_core_services_component_registry_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/component-registry.service */ "./src/app/core/services/component-registry.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuickSidebarComponent = /** @class */ (function () {
    function QuickSidebarComponent(_el, renderer, _backdropService, _componenRegistryService) {
        this._el = _el;
        this.renderer = renderer;
        this._backdropService = _backdropService;
        this._componenRegistryService = _componenRegistryService;
    }
    QuickSidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Register the component in registry
        this._componenRegistryService.register('quick-sidebar', this);
        this._backdropService.close.subscribe(function () {
            if (_this.opened) {
                _this._hideSidebar();
            }
        });
    };
    QuickSidebarComponent.prototype.toggleOpen = function () {
        if (this.opened) {
            this.close();
        }
        else {
            this.open();
        }
    };
    QuickSidebarComponent.prototype.open = function () {
        this._backdropService.show();
        this.opened = true;
        this.renderer.addClass(this._el.nativeElement, 'shined');
        document.getElementById('quick-sidebar').classList.add('shined');
    };
    QuickSidebarComponent.prototype.close = function () {
        this._backdropService.hide();
        this._hideSidebar();
    };
    QuickSidebarComponent.prototype._hideSidebar = function () {
        this.opened = false;
        this.renderer.removeClass(this._el.nativeElement, 'shined');
        document.getElementById('quick-sidebar').classList.remove('shined');
    };
    QuickSidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quick-sidebar',
            template: __webpack_require__(/*! ./quick-sidebar.component.html */ "./src/app/content/layout/components/quick-sidebar/quick-sidebar.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./quick-sidebar.component.scss */ "./src/app/content/layout/components/quick-sidebar/quick-sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            src_app_core_services_backdrop_service__WEBPACK_IMPORTED_MODULE_1__["BackdropService"],
            src_app_core_services_component_registry_service__WEBPACK_IMPORTED_MODULE_2__["ComponenRegistryService"]])
    ], QuickSidebarComponent);
    return QuickSidebarComponent;
}());



/***/ }),

/***/ "./src/app/content/layout/components/quick-sidebar/quick-sidebar.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/content/layout/components/quick-sidebar/quick-sidebar.module.ts ***!
  \*********************************************************************************/
/*! exports provided: QuickSidebarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickSidebarModule", function() { return QuickSidebarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _quick_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quick-sidebar.component */ "./src/app/content/layout/components/quick-sidebar/quick-sidebar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var QuickSidebarModule = /** @class */ (function () {
    function QuickSidebarModule() {
    }
    QuickSidebarModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PerfectScrollbarModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTabsetModule"],
            ],
            declarations: [_quick_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["QuickSidebarComponent"]],
            exports: [_quick_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["QuickSidebarComponent"]]
        })
    ], QuickSidebarModule);
    return QuickSidebarModule;
}());



/***/ }),

/***/ "./src/app/content/layout/components/subheader/subheader.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/content/layout/components/subheader/subheader.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvbGF5b3V0L2NvbXBvbmVudHMvc3ViaGVhZGVyL3N1YmhlYWRlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/content/layout/components/subheader/subheader.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/content/layout/components/subheader/subheader.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-heading\">\n\t<h1 class=\"page-title page-title-sep\">{{title}}</h1>\n\t<ol class=\"breadcrumb\" *ngIf=\"breadcrumb\">\n\t\t<li class=\"breadcrumb-item\"><a routerLink='/index' href=\"javascript:;\"><i class=\"la la-home font-20\"></i></a></li>\n\t\t<li class=\"breadcrumb-item\" *ngFor=\"let item of breadcrumb\">{{item}}</li>\n\t</ol>\n</div>"

/***/ }),

/***/ "./src/app/content/layout/components/subheader/subheader.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/content/layout/components/subheader/subheader.component.ts ***!
  \****************************************************************************/
/*! exports provided: SubheaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubheaderComponent", function() { return SubheaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SubheaderComponent = /** @class */ (function () {
    function SubheaderComponent() {
    }
    SubheaderComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SubheaderComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SubheaderComponent.prototype, "breadcrumb", void 0);
    SubheaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'subheader',
            template: __webpack_require__(/*! ./subheader.component.html */ "./src/app/content/layout/components/subheader/subheader.component.html"),
            styles: [__webpack_require__(/*! ./subheader.component.css */ "./src/app/content/layout/components/subheader/subheader.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SubheaderComponent);
    return SubheaderComponent;
}());



/***/ }),

/***/ "./src/app/content/layout/components/subheader/subheader.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/content/layout/components/subheader/subheader.module.ts ***!
  \*************************************************************************/
/*! exports provided: SubheaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubheaderModule", function() { return SubheaderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _subheader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subheader.component */ "./src/app/content/layout/components/subheader/subheader.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SubheaderModule = /** @class */ (function () {
    function SubheaderModule() {
    }
    SubheaderModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_subheader_component__WEBPACK_IMPORTED_MODULE_2__["SubheaderComponent"]],
            exports: [_subheader_component__WEBPACK_IMPORTED_MODULE_2__["SubheaderComponent"]]
        })
    ], SubheaderModule);
    return SubheaderModule;
}());



/***/ }),

/***/ "./src/app/content/layout/layout.component.css":
/*!*****************************************************!*\
  !*** ./src/app/content/layout/layout.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvbGF5b3V0L2xheW91dC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/content/layout/layout.component.html":
/*!******************************************************!*\
  !*** ./src/app/content/layout/layout.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- BEGIN: Sidebar-->\n<!-- <app-sidebar class=\"page-sidebar\" id=\"sidebar\" #sidebar></app-sidebar> -->\n<!-- END: Sidebar-->\n\n<!-- BEGIN: Content-->\n<div class=\"content-area\">\n\t<!-- BEGIN: Header-->\n\t<app-header class=\"navbar navbar-expand navbar-light fixed-top header\"></app-header>\n\t<!-- END: Header-->\n\n\t<!-- BEGIN: content-->\n\t<div class=\"page-content fade-in-up\">\n\t\t<router-outlet></router-outlet>\n\t</div>\n\t<!-- END: content-->\n\n\t<!-- BEGIN: Footer-->\n\t<app-footer class='page-footer'></app-footer>\n\t<!-- END: Footer-->\n</div>\n\n<!-- BEGIN: Quick Sidebar-->\n<app-quick-sidebar id='quick-sidebar' class='quick-sidebar' #quickSidebar></app-quick-sidebar>\n<!-- END: Quick Sidebar-->\n"

/***/ }),

/***/ "./src/app/content/layout/layout.component.ts":
/*!****************************************************!*\
  !*** ./src/app/content/layout/layout.component.ts ***!
  \****************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    LayoutComponent.prototype.ngAfterViewInit = function () {
        // new MetisMenu("#sidenav");
    };
    LayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'layout.content-wrapper',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/content/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.css */ "./src/app/content/layout/layout.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/content/layout/layout.module.ts":
/*!*************************************************!*\
  !*** ./src/app/content/layout/layout.module.ts ***!
  \*************************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout.component */ "./src/app/content/layout/layout.component.ts");
/* harmony import */ var _components_header_header_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/header/header.module */ "./src/app/content/layout/components/header/header.module.ts");
/* harmony import */ var _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/footer/footer.module */ "./src/app/content/layout/components/footer/footer.module.ts");
/* harmony import */ var _components_subheader_subheader_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/subheader/subheader.module */ "./src/app/content/layout/components/subheader/subheader.module.ts");
/* harmony import */ var _components_quick_sidebar_quick_sidebar_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/quick-sidebar/quick-sidebar.module */ "./src/app/content/layout/components/quick-sidebar/quick-sidebar.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
                _components_header_header_module__WEBPACK_IMPORTED_MODULE_3__["HeaderModule"],
                _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_4__["FooterModule"],
                _components_quick_sidebar_quick_sidebar_module__WEBPACK_IMPORTED_MODULE_6__["QuickSidebarModule"],
                _components_subheader_subheader_module__WEBPACK_IMPORTED_MODULE_5__["SubheaderModule"],
            ],
            declarations: [
                _layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"],
            ]
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ "./src/app/content/pages/snippets/authentication/login/jwt.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/content/pages/snippets/authentication/login/jwt.service.ts ***!
  \****************************************************************************/
/*! exports provided: JwtService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtService", function() { return JwtService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JwtService = /** @class */ (function () {
    function JwtService() {
    }
    JwtService.prototype.getToken = function () {
        return window.localStorage.getItem('jwtToken');
    };
    JwtService.prototype.saveToken = function (token) {
        window.localStorage.setItem('jwtToken', token);
    };
    JwtService.prototype.destroyToken = function () {
        window.localStorage.removeItem('jwtToken');
        localStorage.removeItem('username');
    };
    JwtService.prototype.saveUsername = function (username) {
        localStorage.setItem('username', username);
    };
    JwtService.prototype.getUsername = function () {
        return localStorage.getItem('username');
    };
    ///position///
    JwtService.prototype.savePosition = function (Position) {
        localStorage.setItem('Position', Position);
    };
    JwtService.prototype.getPosition = function () {
        return localStorage.getItem('Position');
    };
    /////
    JwtService.prototype.saveId = function (id) {
        localStorage.setItem('id', id);
    };
    JwtService.prototype.getId = function () {
        return localStorage.getItem('id');
    };
    JwtService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], JwtService);
    return JwtService;
}());



/***/ }),

/***/ "./src/app/content/pages/snippets/authentication/login/user.service.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/content/pages/snippets/authentication/login/user.service.ts ***!
  \*****************************************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _jwt_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jwt.service */ "./src/app/content/pages/snippets/authentication/login/jwt.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import { Observable } from 'rxjs';
// import { BehaviorSubject } from 'rxjs/BehaviorSubject';
var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json',
    })
};
var UserService = /** @class */ (function () {
    function UserService(http, jwtService) {
        this.http = http;
        this.jwtService = jwtService;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](localStorage.getItem('username'));
        this.mysubject = this.subject.asObservable();
        this.tokenId = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](localStorage.getItem('jwtToken'));
        this.myTokenId = this.tokenId.asObservable();
        this.id = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](localStorage.getItem('id'));
        this.myId = this.id.asObservable();
        ////////////////
        this.Position = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](localStorage.getItem('Position'));
        this.myPosition = this.Position.asObservable();
        this.URL = "";
        this.URL = "http://54.71.18.74:4517/api/user/";
        //this.URL = "http://localhost:4517/api/user/";
    }
    UserService.prototype.gethttpOptions = function () {
        var token = this.jwtService.getToken();
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'x-auth-token': token
            })
        };
        return httpOptions;
    };
    // getUserName(): Observable<any> {
    //     return this.subject.asObservable();
    // }
    UserService.prototype.getPosition = function (Position) {
        this.Position.next(Position);
    };
    UserService.prototype.getUserName = function (userName) {
        this.subject.next(userName);
    };
    UserService.prototype.getToken = function () {
        return this.tokenId.asObservable();
    };
    UserService.prototype.getId = function () {
        return this.id.asObservable();
    };
    UserService.prototype.sendUserName = function (data) {
        this.subject.next(data);
    };
    UserService.prototype.login = function (obj) {
        //console.log("here",obj);
        return this.http.post(this.URL + 'login', obj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (x) {
            return x;
        }));
    };
    UserService.prototype.saveData = function (obj) {
        return this.http.post(this.URL + 'createUser', obj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (x) {
            return x;
        }));
    };
    UserService.prototype.loadUser = function (token) {
        return this.http.get(this.URL + 'loadUser/' + token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (x) {
            return x;
        }));
    };
    UserService.prototype.updateProfile = function (obj) {
        return this.http.post(this.URL + 'updateUser', obj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (x) {
            return x;
        }));
    };
    UserService.prototype.forgotPassword = function (obj) {
        return this.http.post(this.URL + 'forgotPassword', obj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (x) {
            return x;
        }));
    };
    UserService.prototype.changePassword = function (obj) {
        return this.http.post(this.URL + 'changePassword', obj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (x) {
            return x;
        }));
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _jwt_service__WEBPACK_IMPORTED_MODULE_3__["JwtService"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/core/components/backdrop/backdrop.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/core/components/backdrop/backdrop.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9iYWNrZHJvcC9iYWNrZHJvcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/core/components/backdrop/backdrop.component.html":
/*!******************************************************************!*\
  !*** ./src/app/core/components/backdrop/backdrop.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidenav-backdrop backdrop\" (click)=\"closeHandler()\"></div>\r\n"

/***/ }),

/***/ "./src/app/core/components/backdrop/backdrop.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/core/components/backdrop/backdrop.component.ts ***!
  \****************************************************************/
/*! exports provided: BackdropComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackdropComponent", function() { return BackdropComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_services_backdrop_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/backdrop.service */ "./src/app/core/services/backdrop.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BackdropComponent = /** @class */ (function () {
    function BackdropComponent(_backdropService, renderer) {
        this._backdropService = _backdropService;
        this.renderer = renderer;
        this.isOpen = false;
    }
    BackdropComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._backdropService.open.subscribe(function () {
            _this.isOpen = true;
            _this._show();
        });
        this._backdropService.close.subscribe(function () {
            _this.isOpen = false;
            _this._hide();
        });
    };
    BackdropComponent.prototype.closeHandler = function () {
        if (this.isOpen) {
            this._backdropService.hide();
        }
    };
    BackdropComponent.prototype._show = function () {
        this.renderer.addClass(document.body, 'has-backdrop');
    };
    BackdropComponent.prototype._hide = function () {
        this.renderer.removeClass(document.body, 'has-backdrop');
    };
    BackdropComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-backdrop',
            template: __webpack_require__(/*! ./backdrop.component.html */ "./src/app/core/components/backdrop/backdrop.component.html"),
            styles: [__webpack_require__(/*! ./backdrop.component.css */ "./src/app/core/components/backdrop/backdrop.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_core_services_backdrop_service__WEBPACK_IMPORTED_MODULE_1__["BackdropService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], BackdropComponent);
    return BackdropComponent;
}());



/***/ }),

/***/ "./src/app/core/services/backdrop.service.ts":
/*!***************************************************!*\
  !*** ./src/app/core/services/backdrop.service.ts ***!
  \***************************************************/
/*! exports provided: BackdropService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackdropService", function() { return BackdropService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BackdropService = /** @class */ (function () {
    function BackdropService() {
        this.open = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    BackdropService.prototype.show = function () {
        this.open.emit();
    };
    BackdropService.prototype.hide = function () {
        this.close.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], BackdropService.prototype, "open", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], BackdropService.prototype, "close", void 0);
    BackdropService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], BackdropService);
    return BackdropService;
}());



/***/ }),

/***/ "./src/app/core/services/component-registry.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/core/services/component-registry.service.ts ***!
  \*************************************************************/
/*! exports provided: ComponenRegistryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponenRegistryService", function() { return ComponenRegistryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ComponenRegistryService = /** @class */ (function () {
    function ComponenRegistryService() {
        this._registry = {};
        this.onRegistryChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this._registry);
    }
    ComponenRegistryService.prototype.register = function (key, component) {
        // Check if the key already being used
        if (this._registry[key]) {
            // console.error(`The component with the key '${key}' already exists.`);
            return;
        }
        // Add to the registry
        this._registry[key] = component;
        this.onRegistryChanged.next(this._registry);
    };
    ComponenRegistryService.prototype.unregister = function (key) {
        // Check if the component exists
        if (!this._registry[key]) {
            console.warn("The component with the key '" + key + "' doesn't exist in the registry.");
        }
        else {
            // Unregister the component
            delete this._registry[key];
        }
    };
    /**
     * Return the component with the given key
     */
    ComponenRegistryService.prototype.getComponent = function (key) {
        // Check if the component exists
        if (!this._registry[key]) {
            console.warn("The component with the key '" + key + "' doesn't exist in the registry.");
            return;
        }
        // Return the component
        return this._registry[key];
    };
    ComponenRegistryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ComponenRegistryService);
    return ComponenRegistryService;
}());



/***/ }),

/***/ "./src/app/core/services/splash-screen.service.ts":
/*!********************************************************!*\
  !*** ./src/app/core/services/splash-screen.service.ts ***!
  \********************************************************/
/*! exports provided: SplashScreenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashScreenService", function() { return SplashScreenService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var SplashScreenService = /** @class */ (function () {
    function SplashScreenService(animationBuilder, router, _document) {
        this.animationBuilder = animationBuilder;
        this.router = router;
        this._document = _document;
    }
    // Initialize
    SplashScreenService.prototype.init = function () {
        var _this = this;
        // Get the splash screen element
        this.splashScreenEl = this._document.body.querySelector('#splash-screen');
        // Hide it on the first NavigationEnd event
        if (this.splashScreenEl) {
            var routerEvents = this.router.events
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1))
                .subscribe(function (event) {
                _this.hide();
            });
        }
    };
    /**
     * Show the splash screen
     */
    SplashScreenService.prototype.show = function () {
        var _this = this;
        this.player = this.animationBuilder
            .build([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '0', zIndex: '99999' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('600ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '1' }))
        ])
            .create(this.splashScreenEl);
        setTimeout(function () {
            _this.player.play();
        }, 0);
    };
    /**
     * Hide the splash screen
     */
    SplashScreenService.prototype.hide = function () {
        var _this = this;
        this.player = this.animationBuilder
            .build([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '1' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('600ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '0' }))
        ])
            .create(this.splashScreenEl);
        setTimeout(function () {
            _this.player.onDone(function () { return (_this.splashScreenEl.style.display = 'none'); });
            _this.player.play();
        }, 0);
    };
    SplashScreenService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])),
        __metadata("design:paramtypes", [_angular_animations__WEBPACK_IMPORTED_MODULE_1__["AnimationBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], Object])
    ], SplashScreenService);
    return SplashScreenService;
}());



/***/ }),

/***/ "./src/app/core/services/theme-config.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/services/theme-config.service.ts ***!
  \*******************************************************/
/*! exports provided: ThemeConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeConfigService", function() { return ThemeConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/config */ "./src/app/config/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ThemeConfigService = /** @class */ (function () {
    function ThemeConfigService() {
        this.config = src_app_config__WEBPACK_IMPORTED_MODULE_2__["ThemeConfig"];
        this._configSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.config);
    }
    ThemeConfigService.prototype.setModel = function (model) {
        this.config = Object.assign({}, this.config, model);
        this._configSubject.next(this.config);
    };
    ThemeConfigService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ThemeConfigService);
    return ThemeConfigService;
}());



/***/ }),

/***/ "./src/app/core/services/translation-loader.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/core/services/translation-loader.service.ts ***!
  \*************************************************************/
/*! exports provided: TranslationLoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslationLoaderService", function() { return TranslationLoaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TranslationLoaderService = /** @class */ (function () {
    function TranslationLoaderService(translate) {
        this.translate = translate;
        this.DEFAULT_LANG = 'en';
        this.languages = [
            {
                lang: 'en',
                name: 'English',
                flag: 'assets/img/flags/us.png'
            },
            {
                lang: 'ru',
                name: 'Russian',
                flag: 'assets/img/flags/ru.png'
            },
            {
                lang: 'fr',
                name: 'French',
                flag: 'assets/img/flags/France.png'
            },
        ];
    }
    TranslationLoaderService.prototype.loadTranslations = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var locales = args.slice();
        locales.forEach(function (locale) {
            // use setTranslation() with the third argument set to true
            // to append translations instead of replacing them
            _this.translate.setTranslation(locale.lang, locale.data, true);
        });
    };
    /*
     * Set initial language
     */
    TranslationLoaderService.prototype.setInitLang = function () {
        this.setLanguage(this.getActiveLanguage());
    };
    TranslationLoaderService.prototype.setLanguage = function (lang) {
        var _this = this;
        if (lang) {
            // Set the selected language for the toolbar
            this.languages.forEach(function (language) {
                if (language.lang === lang) {
                    _this.selectedLanguage = language;
                }
            });
            this.translate.use(lang);
            localStorage.setItem('language', lang);
        }
    };
    TranslationLoaderService.prototype.getActiveLanguage = function () {
        return localStorage.getItem('language') || this.translate.currentLang || this.DEFAULT_LANG;
    };
    TranslationLoaderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], TranslationLoaderService);
    return TranslationLoaderService;
}());



/***/ }),

/***/ "./src/app/shared/services/api.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/services/api.service.ts ***!
  \************************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _jwt_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jwt.service */ "./src/app/shared/services/jwt.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiService = /** @class */ (function () {
    function ApiService(jwtService) {
        this.jwtService = jwtService;
    }
    ApiService.prototype.isAuthenticated = function () {
        this.token = this.jwtService.getToken();
        return this.token != null;
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_jwt_service__WEBPACK_IMPORTED_MODULE_1__["JwtService"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/shared/services/auth-guard.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/auth-guard.service.ts ***!
  \*******************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ "./src/app/shared/services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(apiService) {
        this.apiService = apiService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        return this.apiService.isAuthenticated();
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/shared/services/jwt.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/services/jwt.service.ts ***!
  \************************************************/
/*! exports provided: JwtService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtService", function() { return JwtService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JwtService = /** @class */ (function () {
    function JwtService() {
    }
    JwtService.prototype.getToken = function () {
        return window.localStorage.getItem('jwtToken');
    };
    JwtService.prototype.saveToken = function (token) {
        window.localStorage.setItem('jwtToken', token);
    };
    JwtService.prototype.destroyToken = function () {
        window.localStorage.removeItem('jwtToken');
        localStorage.removeItem('username');
    };
    JwtService.prototype.saveUsername = function (username) {
        localStorage.setItem('username', username);
    };
    JwtService.prototype.getUsername = function () {
        return localStorage.getItem('username');
    };
    JwtService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], JwtService);
    return JwtService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/dheerajs/Desktop/Tradequiry_angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map