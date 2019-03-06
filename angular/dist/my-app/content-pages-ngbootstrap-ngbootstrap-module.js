(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["content-pages-ngbootstrap-ngbootstrap-module"],{

/***/ "./src/app/content/pages/ngbootstrap/accordion/accordion.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/content/pages/ngbootstrap/accordion/accordion.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<subheader [title]=\"'Accordion'\" [breadcrumb]=\"['Ng-Bootstrap', 'Accordion']\"></subheader>\n\n<div class=\"row\">\n\t<div class=\"col-lg-6\">\n\t\t<card [title]=\"'Accordion'\">\n\t\t\t<ngb-accordion #acc=\"ngbAccordion\" activeIds=\"ngb-panel-0\">\n\t\t\t  <ngb-panel title=\"Simple\">\n\t\t\t    <ng-template ngbPanelContent>\n\t\t\t      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\n\t\t\t      aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\n\t\t\t      sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\n\t\t\t      craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\n\t\t\t      occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n\t\t\t      labore sustainable VHS.\n\t\t\t    </ng-template>\n\t\t\t  </ngb-panel>\n\t\t\t  <ngb-panel>\n\t\t\t    <ng-template ngbPanelTitle>\n\t\t\t      <span>&#9733; <b>Fancy</b> title &#9733;</span>\n\t\t\t    </ng-template>\n\t\t\t    <ng-template ngbPanelContent>\n\t\t\t      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\n\t\t\t      aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\n\t\t\t      sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\n\t\t\t      craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\n\t\t\t      occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n\t\t\t      labore sustainable VHS.\n\t\t\t    </ng-template>\n\t\t\t  </ngb-panel>\n\t\t\t  <ngb-panel title=\"Disabled\" [disabled]=\"true\">\n\t\t\t    <ng-template ngbPanelContent>\n\t\t\t      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\n\t\t\t      aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\n\t\t\t      sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\n\t\t\t      craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\n\t\t\t      occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n\t\t\t      labore sustainable VHS.\n\t\t\t    </ng-template>\n\t\t\t  </ngb-panel>\n\t\t\t</ngb-accordion>\n\t\t</card>\n\t\t<card [title]=\"'One open panel at a time'\">\n\t\t\t<ngb-accordion [closeOthers]=\"true\" activeIds=\"static-1\">\n\t\t\t  <ngb-panel id=\"static-1\" title=\"Simple\">\n\t\t\t    <ng-template ngbPanelContent>\n\t\t\t      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\n\t\t\t      aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\n\t\t\t      sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\n\t\t\t      craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\n\t\t\t      occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n\t\t\t      labore sustainable VHS.\n\t\t\t    </ng-template>\n\t\t\t  </ngb-panel>\n\t\t\t  <ngb-panel id=\"static-2\">\n\t\t\t    <ng-template ngbPanelTitle>\n\t\t\t      <span>&#9733; <b>Fancy</b> title &#9733;</span>\n\t\t\t    </ng-template>\n\t\t\t    <ng-template ngbPanelContent>\n\t\t\t      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\n\t\t\t      aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\n\t\t\t      sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\n\t\t\t      craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\n\t\t\t      occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n\t\t\t      labore sustainable VHS.\n\t\t\t    </ng-template>\n\t\t\t  </ngb-panel>\n\t\t\t  <ngb-panel id=\"static-3\" title=\"Disabled\" [disabled]=\"true\">\n\t\t\t    <ng-template ngbPanelContent>\n\t\t\t      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\n\t\t\t      aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\n\t\t\t      sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\n\t\t\t      craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\n\t\t\t      occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n\t\t\t      labore sustainable VHS.\n\t\t\t    </ng-template>\n\t\t\t  </ngb-panel>\n\t\t\t</ngb-accordion>\n\t\t</card>\n\t\t<card [title]=\"'Toggle panels'\">\n\t\t\t<ngb-accordion #acc=\"ngbAccordion\">\n\t\t\t  <ngb-panel id=\"toggle-1\" title=\"First panel\">\n\t\t\t    <ng-template ngbPanelContent>\n\t\t\t      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\n\t\t\t      aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\n\t\t\t      sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\n\t\t\t      craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\n\t\t\t      occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n\t\t\t      labore sustainable VHS.\n\t\t\t    </ng-template>\n\t\t\t  </ngb-panel>\n\t\t\t  <ngb-panel id=\"toggle-2\" title=\"Second\">\n\t\t\t    <ng-template ngbPanelContent>\n\t\t\t      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\n\t\t\t      aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\n\t\t\t      sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\n\t\t\t      craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\n\t\t\t      occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n\t\t\t      labore sustainable VHS.\n\t\t\t    </ng-template>\n\t\t\t  </ngb-panel>\n\t\t\t</ngb-accordion>\n\t\t\t<hr/>\n\t\t\t<button class=\"btn btn-sm btn-outline-primary mr-2\" (click)=\"acc.toggle('toggle-1')\">Toggle first</button>\n\t\t\t<button class=\"btn btn-sm btn-outline-primary mr-2\" (click)=\"acc.toggle('toggle-2')\">Toggle second</button>\n\t\t</card>\n\t</div>\n\n\t<div class=\"col-lg-6\">\n\t\t<card [title]=\"'Prevent panel toggle'\">\n\t\t\t<ngb-accordion (panelChange)=\"beforeChange($event)\">\n\t\t\t  <ngb-panel id=\"preventchange-1\" title=\"Simple\">\n\t\t\t    <ng-template ngbPanelContent>\n\t\t\t      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\n\t\t\t      aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\n\t\t\t      sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\n\t\t\t      craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\n\t\t\t      occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n\t\t\t      labore sustainable VHS.\n\t\t\t    </ng-template>\n\t\t\t  </ngb-panel>\n\t\t\t  <ngb-panel id=\"preventchange-2\" title=\"I can't be toggled...\">\n\t\t\t    <ng-template ngbPanelContent>\n\t\t\t      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\n\t\t\t      aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\n\t\t\t      sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\n\t\t\t      craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\n\t\t\t      occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n\t\t\t      labore sustainable VHS.\n\t\t\t    </ng-template>\n\t\t\t  </ngb-panel>\n\t\t\t  <ngb-panel id=\"preventchange-3\" title=\"I can be opened, but not closed...\">\n\t\t\t    <ng-template ngbPanelContent>\n\t\t\t      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\n\t\t\t      aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\n\t\t\t      sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\n\t\t\t      craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\n\t\t\t      occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n\t\t\t      labore sustainable VHS.\n\t\t\t    </ng-template>\n\t\t\t  </ngb-panel>\n\t\t\t</ngb-accordion>\n\t\t</card>\n\t\t<card [title]=\"'Accordion'\"></card>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/content/pages/ngbootstrap/accordion/accordion.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/content/pages/ngbootstrap/accordion/accordion.component.ts ***!
  \****************************************************************************/
/*! exports provided: AccordionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionComponent", function() { return AccordionComponent; });
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

var AccordionComponent = /** @class */ (function () {
    function AccordionComponent() {
    }
    AccordionComponent.prototype.ngOnInit = function () {
    };
    AccordionComponent.prototype.beforeChange = function ($event) {
        if ($event.panelId === 'preventchange-2') {
            $event.preventDefault();
        }
        if ($event.panelId === 'preventchange-3' && $event.nextState === false) {
            $event.preventDefault();
        }
    };
    AccordionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-accordion',
            template: __webpack_require__(/*! ./accordion.component.html */ "./src/app/content/pages/ngbootstrap/accordion/accordion.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], AccordionComponent);
    return AccordionComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/ngbootstrap/alert/alert.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/content/pages/ngbootstrap/alert/alert.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<subheader [title]=\"'Alert'\" [breadcrumb]=\"['Ng-Bootstrap', 'Alert']\"></subheader>\n\n<div class=\"row\">\n\t<div class=\"col-lg-6\">\n\t\t<card [title]=\"'Basic Alert'\">\n\t\t\t<ngb-alert [dismissible]=\"false\">\n\t\t\t\t<strong>Warning!</strong> Better check yourself, you're not looking too good.\n\t\t\t</ngb-alert>\n\t\t</card>\n\t\t<card [title]=\"'Closeable Alert'\">\n\t\t\t<div *ngFor=\"let alert of alerts\">\n\t\t\t\t<ngb-alert [type]=\"alert.type\" (close)=\"close(alert)\">{{ alert.message }}</ngb-alert>\n\t\t\t</div>\n\t\t</card>\n\t</div>\n\t<div class=\"col-lg-6\">\n\t\t<card [title]=\"'Self closing alert'\">\n\t\t\t<p>\n\t\t\t\tStatic self-closing alert that disappears after 20 seconds (refresh the page if it has already disappeared)\n\t\t\t</p>\n\t\t\t<ngb-alert *ngIf=\"!staticAlertClosed\" (close)=\"staticAlertClosed = true\">Check out our awesome new features!</ngb-alert>\n\t\t\t<hr/>\n\t\t\t<p>Show a self-closing success message that disappears after 5 seconds.</p>\n\t\t\t<ngb-alert *ngIf=\"successMessage\" type=\"success\" (close)=\"successMessage = null\">{{ successMessage }}</ngb-alert>\n\t\t\t<p>\n\t\t\t\t<button class=\"btn btn-primary\" (click)=\"changeSuccessMessage()\">Change message</button>\n\t\t\t</p>\n\t\t</card>\n\t\t<card [title]=\"'Custom alert'\">\n\t\t\t<p>\n\t\t\t\t<ngb-alert type=\"custom\" [dismissible]=\"false\"><strong>Whoa!</strong> This is a custom alert.</ngb-alert>\n\t\t\t</p>\n\t\t</card>\n\t\t<card [title]=\"'Custom alert'\">\n\t\t\t<ngb-alert [dismissible]=\"false\" type=\"success\">\n\t\t\t\tThis alert's type is success and it's not dismissible because the config has been customized\n\t\t\t</ngb-alert>\n\t\t</card>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/content/pages/ngbootstrap/alert/alert.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/content/pages/ngbootstrap/alert/alert.component.ts ***!
  \********************************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ALERTS = [{
        type: 'success',
        message: 'This is an success alert',
    }, {
        type: 'info',
        message: 'This is an info alert',
    }, {
        type: 'warning',
        message: 'This is a warning alert',
    }, {
        type: 'danger',
        message: 'This is a danger alert',
    }, {
        type: 'primary',
        message: 'This is a primary alert',
    }, {
        type: 'secondary',
        message: 'This is a secondary alert',
    }, {
        type: 'light',
        message: 'This is a light alert',
    }, {
        type: 'dark',
        message: 'This is a dark alert',
    }
];
var AlertComponent = /** @class */ (function () {
    function AlertComponent() {
        this._success = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.staticAlertClosed = false;
        this.reset();
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { return _this.staticAlertClosed = true; }, 20000);
        this._success.subscribe(function (message) { return _this.successMessage = message; });
        this._success.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(5000)).subscribe(function () { return _this.successMessage = null; });
    };
    AlertComponent.prototype.close = function (alert) {
        this.alerts.splice(this.alerts.indexOf(alert), 1);
    };
    AlertComponent.prototype.reset = function () {
        this.alerts = Array.from(ALERTS);
    };
    AlertComponent.prototype.changeSuccessMessage = function () {
        this._success.next(new Date() + " - Message successfully changed.");
    };
    AlertComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-alert',
            template: __webpack_require__(/*! ./alert.component.html */ "./src/app/content/pages/ngbootstrap/alert/alert.component.html"),
            styles: ["\n    :host >>> .alert-custom {\n      color: #99004d;\n      background-color: #f169b4;\n      border-color: #800040;\n    }\n  "]
        }),
        __metadata("design:paramtypes", [])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/ngbootstrap/buttons/buttons.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/content/pages/ngbootstrap/buttons/buttons.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<subheader [title]=\"'Buttons'\" [breadcrumb]=\"['Ng-Bootstrap', 'Buttons']\"></subheader>\n\n<div class=\"row\">\n\t<div class=\"col-lg-6\">\n\t\t<card [title]=\"'Checkbox buttons'\">\n\t\t\t<div class=\"btn-group btn-group-toggle\">\n\t\t\t  <label class=\"btn-primary\" ngbButtonLabel>\n\t\t\t    <input type=\"checkbox\" ngbButton [(ngModel)]=\"model.left\"> Left (pre-checked)\n\t\t\t  </label>\n\t\t\t  <label class=\"btn-primary\" ngbButtonLabel>\n\t\t\t    <input type=\"checkbox\" ngbButton [(ngModel)]=\"model.middle\"> Middle\n\t\t\t  </label>\n\t\t\t  <label class=\"btn-primary\" ngbButtonLabel>\n\t\t\t    <input type=\"checkbox\" ngbButton [(ngModel)]=\"model.right\"> Right\n\t\t\t  </label>\n\t\t\t</div>\n\t\t\t<hr>\n\t\t\t<pre>{{model | json}}</pre>\n\t\t</card>\n\t\t<card [title]=\"'Checkbox buttons (Reactive Forms)'\">\n\t\t\t<form [formGroup]=\"checkboxGroupForm\">\n\t\t\t  <div class=\"btn-group btn-group-toggle\">\n\t\t\t    <label class=\"btn-primary\" ngbButtonLabel>\n\t\t\t      <input type=\"checkbox\" formControlName=\"left\" ngbButton> Left (pre-checked)\n\t\t\t    </label>\n\t\t\t    <label class=\"btn-success\" ngbButtonLabel>\n\t\t\t      <input type=\"checkbox\" formControlName=\"middle\" ngbButton> Middle\n\t\t\t    </label>\n\t\t\t    <label class=\"btn-danger\" ngbButtonLabel>\n\t\t\t      <input type=\"checkbox\" formControlName=\"right\" ngbButton> Right\n\t\t\t    </label>\n\t\t\t  </div>\n\t\t\t</form>\n\t\t\t<hr>\n\t\t\t<pre>{{checkboxGroupForm.value | json}}</pre>\n\t\t</card>\n\t</div>\n\t<div class=\"col-lg-6\">\n\t\t<card [title]=\"'Radio buttons'\">\n\t\t\t<div class=\"btn-group btn-group-toggle\" ngbRadioGroup name=\"radioBasic\" [(ngModel)]=\"secondModel\">\n\t\t\t  <label ngbButtonLabel class=\"btn-primary\">\n\t\t\t    <input ngbButton type=\"radio\" [value]=\"1\"> Left (pre-checked)\n\t\t\t  </label>\n\t\t\t  <label ngbButtonLabel class=\"btn-info\">\n\t\t\t    <input ngbButton type=\"radio\" value=\"middle\"> Middle\n\t\t\t  </label>\n\t\t\t  <label ngbButtonLabel class=\"btn-warning\">\n\t\t\t    <input ngbButton type=\"radio\" [value]=\"false\"> Right\n\t\t\t  </label>\n\t\t\t</div>\n\t\t\t<hr>\n\t\t\t<pre>{{secondModel}}</pre>\n\t\t</card>\n\t\t<card [title]=\"'Radio buttons (Reactive Forms)'\">\n\t\t\t<form [formGroup]=\"radioGroupForm\">\n\t\t\t  <div class=\"btn-group btn-group-toggle\" ngbRadioGroup name=\"radioBasic\" formControlName=\"model\">\n\t\t\t    <label ngbButtonLabel class=\"btn-outline-primary\">\n\t\t\t      <input ngbButton type=\"radio\" [value]=\"1\"> Left (pre-checked)\n\t\t\t    </label>\n\t\t\t    <label ngbButtonLabel class=\"btn-outline-primary\">\n\t\t\t      <input ngbButton type=\"radio\" value=\"middle\"> Middle\n\t\t\t    </label>\n\t\t\t    <label ngbButtonLabel class=\"btn-outline-primary\">\n\t\t\t      <input ngbButton type=\"radio\" [value]=\"false\"> Right\n\t\t\t    </label>\n\t\t\t  </div>\n\t\t\t</form>\n\t\t\t<hr>\n\t\t\t<pre>{{radioGroupForm.value['model']}}</pre>\n\t\t</card>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/content/pages/ngbootstrap/buttons/buttons.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/content/pages/ngbootstrap/buttons/buttons.component.ts ***!
  \************************************************************************/
/*! exports provided: ButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsComponent", function() { return ButtonsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ButtonsComponent = /** @class */ (function () {
    function ButtonsComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.model = {
            left: true,
            middle: false,
            right: false
        };
        this.secondModel = 1;
    }
    ButtonsComponent.prototype.ngOnInit = function () {
        this.checkboxGroupForm = this.formBuilder.group({
            left: true,
            middle: false,
            right: false
        });
        this.radioGroupForm = this.formBuilder.group({
            'model': 1
        });
    };
    ButtonsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-buttons',
            template: __webpack_require__(/*! ./buttons.component.html */ "./src/app/content/pages/ngbootstrap/buttons/buttons.component.html"),
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], ButtonsComponent);
    return ButtonsComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/ngbootstrap/carousel/carousel.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/content/pages/ngbootstrap/carousel/carousel.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<subheader [title]=\"'Carousel'\" [breadcrumb]=\"['Ng-Bootstrap', 'Carousel']\"></subheader>\n\n<div class=\"mx-auto\" style=\"max-width: 800px\">\n\t\t<card [title]=\"'Carousel'\">\n\t\t\t<ngb-carousel *ngIf=\"images\">\n\t\t\t  <ng-template ngbSlide>\n\t\t\t    <img [src]=\"images[0]\" alt=\"Random first slide\">\n\t\t\t    <div class=\"carousel-caption\">\n\t\t\t      <h3>First slide label</h3>\n\t\t\t      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\n\t\t\t    </div>\n\t\t\t  </ng-template>\n\t\t\t  <ng-template ngbSlide>\n\t\t\t    <img [src]=\"images[1]\" alt=\"Random second slide\">\n\t\t\t    <div class=\"carousel-caption\">\n\t\t\t      <h3>Second slide label</h3>\n\t\t\t      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n\t\t\t    </div>\n\t\t\t  </ng-template>\n\t\t\t  <ng-template ngbSlide>\n\t\t\t    <img [src]=\"images[2]\" alt=\"Random third slide\">\n\t\t\t    <div class=\"carousel-caption\">\n\t\t\t      <h3>Third slide label</h3>\n\t\t\t      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\n\t\t\t    </div>\n\t\t\t  </ng-template>\n\t\t\t</ngb-carousel>\n\t\t</card>\n\t\t<card [title]=\"'Navigation arrows and indicators'\">\n\t\t\t<ngb-carousel *ngIf=\"images\" [showNavigationArrows]=\"showNavigationArrows\" [showNavigationIndicators]=\"showNavigationIndicators\">\n\t\t\t  <ng-template ngbSlide *ngFor=\"let image of images\">\n\t\t\t    <img [src]=\"image\" alt=\"Random slide\">\n\t\t\t    <div class=\"carousel-caption\">\n\t\t\t      <h3>No mouse navigation</h3>\n\t\t\t      <p>This carousel hides navigation arrows and indicators.</p>\n\t\t\t    </div>\n\t\t\t  </ng-template>\n\t\t\t</ngb-carousel>\n\t\t\t<hr>\n\t\t\t<div class=\"btn-group\" role=\"group\" aria-label=\"Carousel toggle controls\">\n\t\t\t  <button type=\"button\" (click)=\"showNavigationArrows = !showNavigationArrows\" class=\"btn btn-outline-dark btn-sm\">Toggle navigation arrows</button>\n\t\t\t  <button type=\"button\" (click)=\"showNavigationIndicators = !showNavigationIndicators\" class=\"btn btn-outline-dark btn-sm\">Toggle navigation indicators</button>\n\t\t\t</div>\n\t\t</card>\n</div>\n"

/***/ }),

/***/ "./src/app/content/pages/ngbootstrap/carousel/carousel.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/content/pages/ngbootstrap/carousel/carousel.component.ts ***!
  \**************************************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CarouselComponent = /** @class */ (function () {
    function CarouselComponent(config, _http) {
        this._http = _http;
        this.showNavigationArrows = false;
        this.showNavigationIndicators = false;
        this.images = [1, 2, 3].map(function () { return "https://picsum.photos/900/500?random&t=" + Math.random(); });
        // customize default values of carousels used by this component tree
        config.showNavigationArrows = true;
        config.showNavigationIndicators = true;
    }
    CarouselComponent.prototype.ngOnInit = function () {
    };
    CarouselComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-carousel',
            template: __webpack_require__(/*! ./carousel.component.html */ "./src/app/content/pages/ngbootstrap/carousel/carousel.component.html"),
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselConfig"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CarouselComponent);
    return CarouselComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/ngbootstrap/collapse/collapse.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/content/pages/ngbootstrap/collapse/collapse.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<subheader [title]=\"'Collapse'\" [breadcrumb]=\"['Ng-Bootstrap', 'Collapse']\"></subheader>\n\n<card [title]=\"'Collapse'\">\n\t<p>\n\t  <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"isCollapsed = !isCollapsed\"\n\t          [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapseExample\">\n\t    Toggle\n\t  </button>\n\t</p>\n\t<div id=\"collapseExample\" [ngbCollapse]=\"isCollapsed\">\n\t  <div class=\"card\">\n\t    <div class=\"card-body\">\n\t      You can collapse this card by clicking Toggle\n\t    </div>\n\t  </div>\n\t</div>\n</card>\n"

/***/ }),

/***/ "./src/app/content/pages/ngbootstrap/collapse/collapse.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/content/pages/ngbootstrap/collapse/collapse.component.ts ***!
  \**************************************************************************/
/*! exports provided: CollapseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollapseComponent", function() { return CollapseComponent; });
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

var CollapseComponent = /** @class */ (function () {
    function CollapseComponent() {
        this.isCollapsed = false;
    }
    CollapseComponent.prototype.ngOnInit = function () {
    };
    CollapseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-collapse',
            template: __webpack_require__(/*! ./collapse.component.html */ "./src/app/content/pages/ngbootstrap/collapse/collapse.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], CollapseComponent);
    return CollapseComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/ngbootstrap/datepicker/datepicker.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/content/pages/ngbootstrap/datepicker/datepicker.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<subheader [title]=\"'Datepicker'\" [breadcrumb]=\"['Ng-Bootstrap', 'Datepicker']\"></subheader>\n\n<div class=\"row\">\n\t<div class=\"col-lg-6\">\n\t\t<card [title]=\"'Basic datepicker'\">\n\t\t\t<p>Simple datepicker</p>\n\t\t\t<ngb-datepicker #dp [(ngModel)]=\"model\" (navigate)=\"date = $event.next\"></ngb-datepicker>\n\t\t\t<hr/>\n\t\t\t<button class=\"btn btn-sm btn-outline-primary mr-2\" (click)=\"selectToday()\">Select Today</button>\n\t\t\t<button class=\"btn btn-sm btn-outline-primary mr-2\" (click)=\"dp.navigateTo()\">To current month</button>\n\t\t\t<button class=\"btn btn-sm btn-outline-primary mr-2\" (click)=\"dp.navigateTo({year: 2013, month: 2})\">To Feb 2013</button>\n\t\t\t<hr/>\n\t\t\t<pre>Month: {{ date.month }}.{{ date.year }}</pre>\n\t\t\t<pre>Model: {{ model | json }}</pre>\n\t\t</card>\n\t\t<card [title]=\"'Datepicker in a popup'\">\n\t\t\t<form class=\"form-inline\">\n\t\t\t  <div class=\"form-group\">\n\t\t\t    <div class=\"input-group\">\n\t\t\t      <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\n\t\t\t             name=\"dp\" [(ngModel)]=\"secondModel\" ngbDatepicker #dp2=\"ngbDatepicker\">\n\t\t\t      <div class=\"input-group-append\">\n\t\t\t        <button class=\"btn btn-outline-secondary\" (click)=\"dp2.toggle()\" type=\"button\"><i class=\"ti-calendar\"></i></button>\n\t\t\t      </div>\n\t\t\t    </div>\n\t\t\t  </div>\n\t\t\t</form>\n\t\t\t<hr/>\n\t\t\t<pre>Model: {{ secondModel | json }}</pre>\n\t\t</card>\n\t\t<card [title]=\"'Multiple months'\">\n\t\t\t<ngb-datepicker [displayMonths]=\"displayMonths\" [navigation]=\"navigation\" [showWeekNumbers]=\"showWeekNumbers\" [outsideDays]=\"outsideDays\"></ngb-datepicker>\n\t\t\t<hr/>\n\t\t\t<form class=\"form-inline\">\n\t\t\t  <div class=\"form-group\">\n\t\t\t    <div class=\"input-group\">\n\t\t\t      <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\n\t\t\t             name=\"dp\" [displayMonths]=\"displayMonths\" [navigation]=\"navigation\" [outsideDays]=\"outsideDays\"\n\t\t\t             [showWeekNumbers]=\"showWeekNumbers\" ngbDatepicker #da=\"ngbDatepicker\">\n\t\t\t      <div class=\"input-group-append\">\n\t\t\t        <button class=\"btn btn-outline-secondary\" (click)=\"da.toggle()\" type=\"button\"><i class=\"ti-calendar\"></i></button>\n\t\t\t      </div>\n\t\t\t    </div>\n\t\t\t  </div>\n\t\t\t</form>\n\t\t\t<hr/>\n\t\t\t<div class=\"d-flex flex-wrap align-content-between p-2\">\n\t\t\t  <select class=\"custom-select\" [(ngModel)]=\"displayMonths\">\n\t\t\t    <option [ngValue]=\"1\">One month</option>\n\t\t\t    <option [ngValue]=\"2\">Two months</option>\n\t\t\t    <option [ngValue]=\"3\">Three months</option>\n\t\t\t  </select>\n\n\t\t\t  <select class=\"custom-select\" [(ngModel)]=\"navigation\">\n\t\t\t    <option value=\"none\">Without navigation</option>\n\t\t\t    <option value=\"select\">With select boxes</option>\n\t\t\t    <option value=\"arrows\">Without select boxes</option>\n\t\t\t  </select>\n\n\t\t\t  <select class=\"custom-select\" [(ngModel)]=\"showWeekNumbers\">\n\t\t\t    <option [ngValue]=\"true\">Week numbers</option>\n\t\t\t    <option [ngValue]=\"false\">No week numbers</option>\n\t\t\t  </select>\n\n\t\t\t  <select class=\"custom-select\" [(ngModel)]=\"outsideDays\">\n\t\t\t    <option value=\"visible\">Visible outside days</option>\n\t\t\t    <option value=\"hidden\">Hidden outside days</option>\n\t\t\t    <option value=\"collapsed\">Collapsed outside days</option>\n\t\t\t  </select>\n\t\t\t</div>\n\t\t</card>\n\t\t<card [title]=\"'Range selection'\">\n\t\t\t<p>Example of the range selection</p>\n\t\t\t<ngb-datepicker #dp3 (select)=\"onDateSelection($event)\" [displayMonths]=\"2\" [dayTemplate]=\"t\" outsideDays=\"hidden\">\n\t\t\t</ngb-datepicker>\n\t\t\t<ng-template #t let-date let-focused=\"focused\">\n\t\t\t  <span class=\"custom-day\"\n\t\t\t        [class.focused]=\"focused\"\n\t\t\t        [class.range]=\"isRange(date)\"\n\t\t\t        [class.faded]=\"isHovered(date) || isInside(date)\"\n\t\t\t        (mouseenter)=\"hoveredDate = date\"\n\t\t\t        (mouseleave)=\"hoveredDate = null\">\n\t\t\t    {{ date.day }}\n\t\t\t  </span>\n\t\t\t</ng-template>\n\t\t\t<hr>\n\t\t\t<pre>From: {{ fromDate | json }} </pre>\n\t\t\t<pre>To: {{ toDate | json }} </pre>\n\t\t</card>\n\t</div>\n\t<div class=\"col-lg-6\">\n\t\t<card [title]=\"'Disabled datepicker'\">\n\t\t\t<p>Disabled datepicker</p>\n\t\t\t<ngb-datepicker [(ngModel)]=\"thirdModel\" [disabled]=\"disabled\"></ngb-datepicker>\n\t\t\t<hr/>\n\t\t\t<button class=\"btn btn-sm btn-outline-{{disabled ? 'danger' : 'success'}}\" (click)=\"disabled = !disabled\">\n\t\t\t  {{ disabled ? \"disabled\" : \"enabled\"}}\n\t\t\t</button>\n\t\t</card>\n\t\t<card [title]=\"'Custom date adapter'\">\n\t\t\t<p>These datepickers use custom Date adapter that lets you use your own model implementation. In this example we are converting from and to a JS native Date object</p>\n\t\t\t  <div>\n\t\t\t    <ngb-datepicker #dp4 [(ngModel)]=\"model1\" #c1=\"ngModel\"></ngb-datepicker>\n\t\t\t    <hr/>\n\t\t\t    <button class=\"btn btn-sm btn-outline-primary\" (click)=\"model1 = today\">Select Today</button>\n\t\t\t    <hr/>\n\t\t\t    <pre>Model: {{ model1 | json }}</pre>\n\t\t\t    <pre>State: {{ c1.status }}</pre>\n\t\t\t  </div>\n\t\t\t  <hr>\n\t\t\t  <div>\n\t\t\t    <form class=\"form-inline\">\n\t\t\t      <div class=\"form-group\">\n\t\t\t        <div class=\"input-group\">\n\t\t\t          <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\n\t\t\t                 name=\"dp5\" #c2=\"ngModel\" [(ngModel)]=\"model2\" ngbDatepicker #dp5=\"ngbDatepicker\">\n\t\t\t          <div class=\"input-group-append\">\n\t\t\t            <button class=\"btn btn-outline-secondary\" (click)=\"dp5.toggle()\" type=\"button\"><i class=\"ti-calendar\"></i></button>\n\t\t\t          </div>\n\t\t\t        </div>\n\t\t\t      </div>\n\t\t\t    </form>\n\t\t\t    <hr/>\n\t\t\t    <button class=\"btn btn-sm btn-outline-primary\" (click)=\"model2 = today\">Select Today</button>\n\t\t\t    <hr/>\n\t\t\t    <pre>Model: {{ model2 | json }}</pre>\n\t\t\t    <pre>State: {{ c2.status }}</pre>\n\t\t\t  </div>\n\t\t</card>\n\t\t<card [title]=\"'Internationalization of datepickers'\">\n\t\t\t<p>Datepicker in French</p>\n\t\t\t<ngb-datepicker [(ngModel)]=\"fourthModel\"></ngb-datepicker>\n\t\t</card>\n\t\t<card [title]=\"'Custom day view'\">\n\t\t\t<p>This datepicker uses a custom template to display days. All week-ends are displayed with an orange background.</p>\n\t\t\t<form class=\"form-inline\">\n\t\t\t  <div class=\"form-group\">\n\t\t\t    <div class=\"input-group\">\n\t\t\t      <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\n\t\t\t             name=\"dp\" [(ngModel)]=\"fifthModel\" ngbDatepicker [dayTemplate]=\"customDay\" [markDisabled]=\"isDisabled\" #dp6=\"ngbDatepicker\">\n\t\t\t      <div class=\"input-group-append\">\n\t\t\t        <button class=\"btn btn-outline-secondary\" (click)=\"dp6.toggle()\" type=\"button\"><i class=\"ti-calendar\"></i></button>\n\t\t\t      </div>\n\t\t\t    </div>\n\t\t\t  </div>\n\t\t\t</form>\n\t\t\t<ng-template #customDay let-date let-currentMonth=\"currentMonth\" let-selected=\"selected\" let-disabled=\"disabled\" let-focused=\"focused\">\n\t\t\t  <span class=\"custom-day\" [class.weekend]=\"isWeekend(date)\" [class.focused]=\"focused\"\n\t\t\t        [class.bg-primary]=\"selected\" [class.hidden]=\"date.month !== currentMonth\" [class.text-muted]=\"disabled\">\n\t\t\t    {{ date.day }}\n\t\t\t  </span>\n\t\t\t</ng-template>\n\t\t</card>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/content/pages/ngbootstrap/datepicker/datepicker.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/content/pages/ngbootstrap/datepicker/datepicker.component.ts ***!
  \******************************************************************************/
/*! exports provided: I18n, CustomDatepickerI18n, DatepickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I18n", function() { return I18n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomDatepickerI18n", function() { return CustomDatepickerI18n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatepickerComponent", function() { return DatepickerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var I18N_VALUES = {
    'fr': {
        weekdays: ['Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa', 'Di'],
        months: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aou', 'Sep', 'Oct', 'Nov', 'Déc'],
    }
    // other languages you would support
};
// Define a service holding the language. You probably already have one if your app is i18ned. Or you could also
// use the Angular LOCALE_ID value
var I18n = /** @class */ (function () {
    function I18n() {
        this.language = 'fr';
    }
    I18n = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], I18n);
    return I18n;
}());

// Define custom service providing the months and weekdays translations
var CustomDatepickerI18n = /** @class */ (function (_super) {
    __extends(CustomDatepickerI18n, _super);
    function CustomDatepickerI18n(_i18n) {
        var _this = _super.call(this) || this;
        _this._i18n = _i18n;
        return _this;
    }
    CustomDatepickerI18n.prototype.getWeekdayShortName = function (weekday) {
        return I18N_VALUES[this._i18n.language].weekdays[weekday - 1];
    };
    CustomDatepickerI18n.prototype.getMonthShortName = function (month) {
        return I18N_VALUES[this._i18n.language].months[month - 1];
    };
    CustomDatepickerI18n.prototype.getMonthFullName = function (month) {
        return this.getMonthShortName(month);
    };
    CustomDatepickerI18n.prototype.getDayAriaLabel = function (date) {
        return date.day + "-" + date.month + "-" + date.year;
    };
    CustomDatepickerI18n = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [I18n])
    ], CustomDatepickerI18n);
    return CustomDatepickerI18n;
}(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDatepickerI18n"]));

var DatepickerComponent = /** @class */ (function () {
    function DatepickerComponent(calendar) {
        var _this = this;
        this.calendar = calendar;
        this.displayMonths = 2;
        this.navigation = 'select';
        this.showWeekNumbers = false;
        this.outsideDays = 'visible';
        this.disabled = true;
        this.isDisabled = function (date, current) { return date.month !== current.month; };
        this.isWeekend = function (date) { return _this.calendar.getWeekday(date) >= 6; };
        this.fromDate = calendar.getToday();
        this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
        this.thirdModel = calendar.getToday();
    }
    DatepickerComponent.prototype.selectToday = function () {
        this.model = this.calendar.getToday();
    };
    DatepickerComponent.prototype.onDateSelection = function (date) {
        if (!this.fromDate && !this.toDate) {
            this.fromDate = date;
        }
        else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
            this.toDate = date;
        }
        else {
            this.toDate = null;
            this.fromDate = date;
        }
    };
    DatepickerComponent.prototype.isHovered = function (date) {
        return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
    };
    DatepickerComponent.prototype.isInside = function (date) {
        return date.after(this.fromDate) && date.before(this.toDate);
    };
    DatepickerComponent.prototype.isRange = function (date) {
        return date.equals(this.fromDate) || date.equals(this.toDate) || this.isInside(date) || this.isHovered(date);
    };
    Object.defineProperty(DatepickerComponent.prototype, "today", {
        get: function () {
            return new Date();
        },
        enumerable: true,
        configurable: true
    });
    DatepickerComponent.prototype.ngOnInit = function () {
    };
    DatepickerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-datepicker',
            template: __webpack_require__(/*! ./datepicker.component.html */ "./src/app/content/pages/ngbootstrap/datepicker/datepicker.component.html"),
            providers: [{ provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateAdapter"], useClass: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateNativeAdapter"] }, I18n, { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDatepickerI18n"], useClass: CustomDatepickerI18n }] // define custom NgbDatepickerI18n provider
            ,
            styles: ["\n    select.custom-select {\n      margin: 0.5rem 0.5rem 0 0;\n      width: auto;\n    }\n    .custom-day {\n      text-align: center;\n      padding: 0.185rem 0.25rem;\n      display: inline-block;\n      height: 2rem;\n      width: 2rem;\n    }\n    .custom-day.focused {\n      background-color: #e6e6e6;\n    }\n    .custom-day.range, .custom-day:hover {\n      background-color: rgb(2, 117, 216);\n      color: white;\n    }\n    .custom-day.faded {\n      background-color: rgba(2, 117, 216, 0.5);\n    }\n    .custom-day-xx {\n      text-align: center;\n      padding: 0.185rem 0.25rem;\n      border-radius: 0.25rem;\n      display: inline-block;\n      width: 2rem;\n    }\n    .custom-day:hover, .custom-day.focused {\n      background-color: #e6e6e6;\n    }\n    .weekend {\n      background-color: #f0ad4e;\n      border-radius: 1rem;\n      color: white;\n    }\n    .hidden {\n      display: none;\n    }\n  "]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCalendar"]])
    ], DatepickerComponent);
    return DatepickerComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/ngbootstrap/dropdown/dropdown.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/content/pages/ngbootstrap/dropdown/dropdown.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<subheader [title]=\"'Dropdown'\" [breadcrumb]=\"['Ng-Bootstrap', 'Dropdown']\"></subheader>\n\n<div class=\"row\">\n\t<div class=\"col-lg-6\">\n\t\t<card [title]=\"'Dropdown'\">\n\t\t\t<div class=\"row\">\n\t\t\t  <div class=\"col\">\n\t\t\t    <div ngbDropdown class=\"d-inline-block\">\n\t\t\t      <button class=\"btn btn-outline-primary\" id=\"dropdownBasic1\" ngbDropdownToggle>Toggle dropdown</button>\n\t\t\t      <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\n\t\t\t        <button class=\"dropdown-item\">Action - 1</button>\n\t\t\t        <button class=\"dropdown-item\">Another Action</button>\n\t\t\t        <button class=\"dropdown-item\">Something else is here</button>\n\t\t\t      </div>\n\t\t\t    </div>\n\t\t\t  </div>\n\t\t\t  <div class=\"col text-right\">\n\t\t\t    <div ngbDropdown placement=\"top-right\" class=\"d-inline-block\">\n\t\t\t      <button class=\"btn btn-outline-primary\" id=\"dropdownBasic2\" ngbDropdownToggle>Toggle dropup</button>\n\t\t\t      <div ngbDropdownMenu aria-labelledby=\"dropdownBasic2\">\n\t\t\t        <button class=\"dropdown-item\">Action - 1</button>\n\t\t\t        <button class=\"dropdown-item\">Another Action</button>\n\t\t\t        <button class=\"dropdown-item\">Something else is here</button>\n\t\t\t      </div>\n\t\t\t    </div>\n\t\t\t  </div>\n\t\t\t</div>\n\t\t</card>\n\t\t<card [title]=\"'Manual and custom triggers'\">\n\t\t\t<p>You can easily control dropdowns programmatically using the exported dropdown instance.</p>\n\t\t\t<div class=\"d-inline-block\" ngbDropdown #myDrop=\"ngbDropdown\">\n\t\t\t  <button class=\"btn btn-outline-primary mr-2\" id=\"dropdownManual\" ngbDropdownAnchor (focus)=\"myDrop.open()\">Toggle dropdown</button>\n\t\t\t  <div ngbDropdownMenu aria-labelledby=\"dropdownManual\">\n\t\t\t    <button class=\"dropdown-item\">Action - 1</button>\n\t\t\t    <button class=\"dropdown-item\">Another Action</button>\n\t\t\t    <button class=\"dropdown-item\">Something else is here</button>\n\t\t\t  </div>\n\t\t\t  <button class=\"btn btn-outline-success mr-2\" (click)=\"$event.stopPropagation(); myDrop.open();\">Open from outside</button>\n\t\t\t  <button class=\"btn btn-outline-danger mr-2\" (click)=\"$event.stopPropagation(); myDrop.close();\">Close from outside</button>\n\t\t\t</div>\n\t\t</card>\n\t</div>\n\t<div class=\"col-lg-6\">\n\t\t<card [title]=\"'Button groups and split buttons'\">\n\t\t\t<p>Bootstrap split buttons and dropdowns on button groups are supported with the existing dropdown directives.</p>\n\t\t\t<div class=\"btn-group mr-3\">\n\t\t\t  <button type=\"button\" class=\"btn btn-outline-success\">Plain ol' button</button>\n\t\t\t  <div class=\"btn-group\" ngbDropdown role=\"group\" aria-label=\"Button group with nested dropdown\">\n\t\t\t    <button class=\"btn btn-outline-primary\" ngbDropdownToggle>Drop me</button>\n\t\t\t    <div class=\"dropdown-menu\" ngbDropdownMenu>\n\t\t\t      <button class=\"dropdown-item\">One</button>\n\t\t\t      <button class=\"dropdown-item\">Two</button>\n\t\t\t      <button class=\"dropdown-item\">Four!</button>\n\t\t\t    </div>\n\t\t\t  </div>\n\t\t\t</div>\n\t\t\t<div class=\"btn-group mr-3\">\n\t\t\t  <button type=\"button\" class=\"btn btn-primary\">Split me</button>\n\t\t\t  <div class=\"btn-group\" ngbDropdown role=\"group\" aria-label=\"Button group with nested dropdown\">\n\t\t\t    <button class=\"btn btn-primary dropdown-toggle-split\" ngbDropdownToggle></button>\n\t\t\t    <div class=\"dropdown-menu\" ngbDropdownMenu>\n\t\t\t      <button class=\"dropdown-item\">One</button>\n\t\t\t      <button class=\"dropdown-item\">Two</button>\n\t\t\t      <button class=\"dropdown-item\">Four!</button>\n\t\t\t    </div>\n\t\t\t  </div>\n\t\t\t</div>\n\t\t\t<div class=\"btn-group mr-3\">\n\t\t\t  <div class=\"btn-group\" ngbDropdown role=\"group\" aria-label=\"Button group with nested dropdown\">\n\t\t\t    <button class=\"btn btn-outline-danger\" ngbDropdownToggle>Select me</button>\n\t\t\t    <div class=\"dropdown-menu\" ngbDropdownMenu>\n\t\t\t      <button class=\"dropdown-item\">One</button>\n\t\t\t      <button class=\"dropdown-item\">Two</button>\n\t\t\t      <button class=\"dropdown-item\">Four!</button>\n\t\t\t    </div>\n\t\t\t  </div>\n\t\t\t  <div class=\"btn-group\" ngbDropdown role=\"group\" aria-label=\"Button group with nested dropdown\">\n\t\t\t    <button class=\"btn btn-outline-success\" ngbDropdownToggle>Or me</button>\n\t\t\t    <div class=\"dropdown-menu\" ngbDropdownMenu>\n\t\t\t      <button class=\"dropdown-item\">One</button>\n\t\t\t      <button class=\"dropdown-item\">Two</button>\n\t\t\t      <button class=\"dropdown-item\">Four!</button>\n\t\t\t    </div>\n\t\t\t  </div>\n\t\t\t</div>\n\t\t</card>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/content/pages/ngbootstrap/dropdown/dropdown.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/content/pages/ngbootstrap/dropdown/dropdown.component.ts ***!
  \**************************************************************************/
/*! exports provided: DropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownComponent", function() { return DropdownComponent; });
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

var DropdownComponent = /** @class */ (function () {
    function DropdownComponent() {
    }
    DropdownComponent.prototype.ngOnInit = function () {
    };
    DropdownComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dropdown',
            template: __webpack_require__(/*! ./dropdown.component.html */ "./src/app/content/pages/ngbootstrap/dropdown/dropdown.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], DropdownComponent);
    return DropdownComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/ngbootstrap/modal/modal.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/content/pages/ngbootstrap/modal/modal.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\t\n<subheader [title]=\"'Modal'\" [breadcrumb]=\"['Ng-Bootstrap', 'Modal']\"></subheader>\n\t\n<div class=\"row\">\n\t<div class=\"col-lg-6\">\n\t\t<card [title]=\"'Modal with default options'\">\n\t\t\t<ng-template #content let-modal>\n\t\t\t  <div class=\"modal-header\">\n\t\t\t    <h4 class=\"modal-title\" id=\"modal-basic-title\">Profile update</h4>\n\t\t\t    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n\t\t\t      <span aria-hidden=\"true\">&times;</span>\n\t\t\t    </button>\n\t\t\t  </div>\n\t\t\t  <div class=\"modal-body\">\n\t\t\t  \t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>\n\t\t\t    <form>\n\t\t\t      <div class=\"form-group\">\n\t\t\t        <label for=\"dateOfBirth\">Date of birth</label>\n\t\t\t        <div class=\"input-group\">\n\t\t\t          <input id=\"dateOfBirth\" class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp\" ngbDatepicker #dp=\"ngbDatepicker\">\n\t\t\t          <div class=\"input-group-append\">\n\t\t\t            <button class=\"btn btn-outline-secondary\" (click)=\"dp.toggle()\" type=\"button\"><i class=\"ti-calendar\"></i></button>\n\t\t\t          </div>\n\t\t\t        </div>\n\t\t\t      </div>\n\t\t\t    </form>\n\t\t\t  </div>\n\t\t\t  <div class=\"modal-footer\">\n\t\t\t    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close('Save click')\">Save</button>\n\t\t\t  </div>\n\t\t\t</ng-template>\n\t\t\t<button class=\"btn btn-lg btn-outline-primary\" (click)=\"open(content)\">Launch demo modal</button>\n\t\t\t<hr>\n\t\t\t<pre>{{closeResult}}</pre>\n\t\t</card>\n\t\t<card [title]=\"'Components as content'\">\n\t\t\t<p>You can pass an existing component as content of the modal window. In this case remember to add content component as an <code>entryComponents</code> section of your <code>NgModule</code>.</p>\n\t\t\t<button class=\"btn btn-lg btn-outline-primary\" (click)=\"open2()\">Launch demo modal</button>\n\t\t</card>\n\t</div>\n\t<div class=\"col-lg-6\">\n\t\t<card [title]=\"'Modal with options'\">\n\t\t\t<ng-template #content let-modal>\n\t\t\t  <div class=\"modal-header\">\n\t\t\t    <h4 class=\"modal-title\">Modal title</h4>\n\t\t\t    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n\t\t\t      <span aria-hidden=\"true\">&times;</span>\n\t\t\t    </button>\n\t\t\t  </div>\n\t\t\t  <div class=\"modal-body\">\n\t\t\t    <p>One fine body&hellip;</p>\n\t\t\t  </div>\n\t\t\t  <div class=\"modal-footer\">\n\t\t\t    <button type=\"button\" class=\"btn btn-light\" (click)=\"modal.close('Close click')\">Close</button>\n\t\t\t  </div>\n\t\t\t</ng-template>\n\t\t\t<button class=\"btn btn-outline-primary mb-2 mr-2\" (click)=\"openWindowCustomClass(content)\">Modal with window custom class</button>\n\t\t\t<button class=\"btn btn-outline-primary mb-2 mr-2\" (click)=\"openBackDropCustomClass(content)\">Modal with backdrop custom class</button>\n\t\t\t<button class=\"btn btn-outline-primary mb-2 mr-2\" (click)=\"openSm(content)\">Small modal</button>\n\t\t\t<button class=\"btn btn-outline-primary mb-2 mr-2\" (click)=\"openLg(content)\">Large modal</button>\n\t\t\t<button class=\"btn btn-outline-primary mb-2 mr-2\" (click)=\"openVerticallyCentered(content)\">Modal vertically centered</button>\n\t\t</card>\t\t\t\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/content/pages/ngbootstrap/modal/modal.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/content/pages/ngbootstrap/modal/modal.component.ts ***!
  \********************************************************************/
/*! exports provided: NgbdModalContentComponent, ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalContentComponent", function() { return NgbdModalContentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgbdModalContentComponent = /** @class */ (function () {
    function NgbdModalContentComponent(activeModal) {
        this.activeModal = activeModal;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NgbdModalContentComponent.prototype, "name", void 0);
    NgbdModalContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-modal-content',
            template: "\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">Hi there!</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <p>Hello, {{name}}!</p>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\n    </div>\n  "
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
    ], NgbdModalContentComponent);
    return NgbdModalContentComponent;
}());

var ModalComponent = /** @class */ (function () {
    function ModalComponent(modalService) {
        this.modalService = modalService;
    }
    ModalComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    ModalComponent.prototype.open2 = function () {
        var modalRef = this.modalService.open(NgbdModalContentComponent);
        modalRef.componentInstance.name = 'World';
    };
    ModalComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    ModalComponent.prototype.openBackDropCustomClass = function (content) {
        this.modalService.open(content, { backdropClass: 'light-blue-backdrop' });
    };
    ModalComponent.prototype.openWindowCustomClass = function (content) {
        this.modalService.open(content, { windowClass: 'dark-modal' });
    };
    ModalComponent.prototype.openSm = function (content) {
        this.modalService.open(content, { size: 'sm' });
    };
    ModalComponent.prototype.openLg = function (content) {
        this.modalService.open(content, { size: 'lg' });
    };
    ModalComponent.prototype.openVerticallyCentered = function (content) {
        this.modalService.open(content, { centered: true });
    };
    ModalComponent.prototype.ngOnInit = function () {
    };
    ModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal',
            template: __webpack_require__(/*! ./modal.component.html */ "./src/app/content/pages/ngbootstrap/modal/modal.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: ["\n    .dark-modal .modal-content {\n      background-color: #292b2c;\n      color: white;\n    }\n    .dark-modal .close {\n      color: white;\n    }\n    .light-blue-backdrop {\n      background-color: #5cb3fd;\n    }\n  "]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/ngbootstrap/ngbootstrap.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/content/pages/ngbootstrap/ngbootstrap.module.ts ***!
  \*****************************************************************/
/*! exports provided: NgbootstrapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbootstrapModule", function() { return NgbootstrapModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_core_components_card_card_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/components/card/card.module */ "./src/app/core/components/card/card.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_content_layout_components_subheader_subheader_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/content/layout/components/subheader/subheader.module */ "./src/app/content/layout/components/subheader/subheader.module.ts");
/* harmony import */ var _accordion_accordion_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./accordion/accordion.component */ "./src/app/content/pages/ngbootstrap/accordion/accordion.component.ts");
/* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./alert/alert.component */ "./src/app/content/pages/ngbootstrap/alert/alert.component.ts");
/* harmony import */ var _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./buttons/buttons.component */ "./src/app/content/pages/ngbootstrap/buttons/buttons.component.ts");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./carousel/carousel.component */ "./src/app/content/pages/ngbootstrap/carousel/carousel.component.ts");
/* harmony import */ var _collapse_collapse_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./collapse/collapse.component */ "./src/app/content/pages/ngbootstrap/collapse/collapse.component.ts");
/* harmony import */ var _datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./datepicker/datepicker.component */ "./src/app/content/pages/ngbootstrap/datepicker/datepicker.component.ts");
/* harmony import */ var _dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dropdown/dropdown.component */ "./src/app/content/pages/ngbootstrap/dropdown/dropdown.component.ts");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modal/modal.component */ "./src/app/content/pages/ngbootstrap/modal/modal.component.ts");
/* harmony import */ var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pagination/pagination.component */ "./src/app/content/pages/ngbootstrap/pagination/pagination.component.ts");
/* harmony import */ var _popover_popover_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./popover/popover.component */ "./src/app/content/pages/ngbootstrap/popover/popover.component.ts");
/* harmony import */ var _progressbar_progressbar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./progressbar/progressbar.component */ "./src/app/content/pages/ngbootstrap/progressbar/progressbar.component.ts");
/* harmony import */ var _rating_rating_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./rating/rating.component */ "./src/app/content/pages/ngbootstrap/rating/rating.component.ts");
/* harmony import */ var _tabset_tabset_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./tabset/tabset.component */ "./src/app/content/pages/ngbootstrap/tabset/tabset.component.ts");
/* harmony import */ var _timepicker_timepicker_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./timepicker/timepicker.component */ "./src/app/content/pages/ngbootstrap/timepicker/timepicker.component.ts");
/* harmony import */ var _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./tooltip/tooltip.component */ "./src/app/content/pages/ngbootstrap/tooltip/tooltip.component.ts");
/* harmony import */ var _typeahead_typeahead_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./typeahead/typeahead.component */ "./src/app/content/pages/ngbootstrap/typeahead/typeahead.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var routes = [
    {
        path: 'accordion',
        component: _accordion_accordion_component__WEBPACK_IMPORTED_MODULE_8__["AccordionComponent"],
    },
    {
        path: 'alert',
        component: _alert_alert_component__WEBPACK_IMPORTED_MODULE_9__["AlertComponent"],
    },
    {
        path: 'buttons',
        component: _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_10__["ButtonsComponent"],
    },
    {
        path: 'carousel',
        component: _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_11__["CarouselComponent"],
    },
    {
        path: 'collapse',
        component: _collapse_collapse_component__WEBPACK_IMPORTED_MODULE_12__["CollapseComponent"],
    },
    {
        path: 'datepicker',
        component: _datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_13__["DatepickerComponent"],
    },
    {
        path: 'dropdown',
        component: _dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_14__["DropdownComponent"],
    },
    {
        path: 'modal',
        component: _modal_modal_component__WEBPACK_IMPORTED_MODULE_15__["ModalComponent"],
    },
    {
        path: 'pagination',
        component: _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_16__["PaginationComponent"],
    },
    {
        path: 'popover',
        component: _popover_popover_component__WEBPACK_IMPORTED_MODULE_17__["PopoverComponent"],
    },
    {
        path: 'progressbar',
        component: _progressbar_progressbar_component__WEBPACK_IMPORTED_MODULE_18__["ProgressbarComponent"],
    },
    {
        path: 'rating',
        component: _rating_rating_component__WEBPACK_IMPORTED_MODULE_19__["RatingComponent"],
    },
    {
        path: 'tabset',
        component: _tabset_tabset_component__WEBPACK_IMPORTED_MODULE_20__["TabsetComponent"],
    },
    {
        path: 'timepicker',
        component: _timepicker_timepicker_component__WEBPACK_IMPORTED_MODULE_21__["TimepickerComponent"],
    },
    {
        path: 'tooltip',
        component: _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_22__["TooltipComponent"],
    },
    {
        path: 'typeahead',
        component: _typeahead_typeahead_component__WEBPACK_IMPORTED_MODULE_23__["TypeaheadComponent"],
    },
];
var NgbootstrapModule = /** @class */ (function () {
    function NgbootstrapModule() {
    }
    NgbootstrapModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                src_app_core_components_card_card_module__WEBPACK_IMPORTED_MODULE_5__["CardModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                src_app_content_layout_components_subheader_subheader_module__WEBPACK_IMPORTED_MODULE_7__["SubheaderModule"],
            ],
            declarations: [
                _accordion_accordion_component__WEBPACK_IMPORTED_MODULE_8__["AccordionComponent"],
                _alert_alert_component__WEBPACK_IMPORTED_MODULE_9__["AlertComponent"],
                _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_10__["ButtonsComponent"],
                _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_11__["CarouselComponent"],
                _collapse_collapse_component__WEBPACK_IMPORTED_MODULE_12__["CollapseComponent"],
                _datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_13__["DatepickerComponent"],
                _dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_14__["DropdownComponent"],
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_15__["ModalComponent"],
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_15__["NgbdModalContentComponent"],
                _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_16__["PaginationComponent"],
                _popover_popover_component__WEBPACK_IMPORTED_MODULE_17__["PopoverComponent"],
                _progressbar_progressbar_component__WEBPACK_IMPORTED_MODULE_18__["ProgressbarComponent"],
                _rating_rating_component__WEBPACK_IMPORTED_MODULE_19__["RatingComponent"],
                _tabset_tabset_component__WEBPACK_IMPORTED_MODULE_20__["TabsetComponent"],
                _timepicker_timepicker_component__WEBPACK_IMPORTED_MODULE_21__["TimepickerComponent"],
                _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_22__["TooltipComponent"],
                _typeahead_typeahead_component__WEBPACK_IMPORTED_MODULE_23__["TypeaheadComponent"],
            ],
            entryComponents: [
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_15__["NgbdModalContentComponent"]
            ]
        })
    ], NgbootstrapModule);
    return NgbootstrapModule;
}());



/***/ }),

/***/ "./src/app/content/pages/ngbootstrap/pagination/pagination.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/content/pages/ngbootstrap/pagination/pagination.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<subheader [title]=\"'Pagination'\" [breadcrumb]=\"['Ng-Bootstrap', 'Pagination']\"></subheader>\n\n<div class=\"row\">\n\t<div class=\"col-lg-6\">\n\t\t<card [title]=\"'Basic pagination'\">\n\t\t\t<p>Default pagination:</p>\n\t\t\t<ngb-pagination [collectionSize]=\"70\" [(page)]=\"page\" aria-label=\"Default pagination\"></ngb-pagination>\n\t\t\t<p>No direction links:</p>\n\t\t\t<ngb-pagination [collectionSize]=\"70\" [(page)]=\"page\" [directionLinks]=\"false\"></ngb-pagination>\n\t\t\t<p>With boundary links:</p>\n\t\t\t<ngb-pagination [collectionSize]=\"70\" [(page)]=\"page\" [boundaryLinks]=\"true\"></ngb-pagination>\n\t\t\t<hr>\n\t\t\t<pre>Current page: {{page}}</pre>\n\t\t</card>\n\t\t<card [title]=\"'Advanced pagination'\">\n\t\t\t<p>Restricted size, no rotation:</p>\n\t\t\t<ngb-pagination [collectionSize]=\"120\" [(page)]=\"page2\" [maxSize]=\"5\" [boundaryLinks]=\"true\"></ngb-pagination>\n\t\t\t<p>Restricted size with rotation:</p>\n\t\t\t<ngb-pagination [collectionSize]=\"120\" [(page)]=\"page2\" [maxSize]=\"5\" [rotate]=\"true\" [boundaryLinks]=\"true\"></ngb-pagination>\n\t\t\t<p>Restricted size with rotation and no ellipses:</p>\n\t\t\t<ngb-pagination [collectionSize]=\"120\" [(page)]=\"page2\" [maxSize]=\"5\" [rotate]=\"true\" [ellipses]=\"false\" [boundaryLinks]=\"true\"></ngb-pagination>\n\t\t\t<hr>\n\t\t\t<pre>Current page: {{page2}}</pre>\n\t\t</card>\n\t\t<card [title]=\"'Pagination size'\">\n\t\t\t<ngb-pagination [collectionSize]=\"50\" [(page)]=\"currentPage\" size=\"lg\"></ngb-pagination>\n\t\t\t<ngb-pagination [collectionSize]=\"50\" [(page)]=\"currentPage\"></ngb-pagination>\n\t\t\t<ngb-pagination [collectionSize]=\"50\" [(page)]=\"currentPage\" size=\"sm\"></ngb-pagination>\n\t\t</card>\n\t</div>\n\t<div class=\"col-lg-6\">\n\t\t<card [title]=\"'Pagination alignment'\">\n\t\t\t<p>Change the alignment of pagination components with flexbox utilities.</p>\n\t\t\t<ngb-pagination class=\"d-flex justify-content-start\" [collectionSize]=\"70\" [(page)]=\"page3\"></ngb-pagination>\n\t\t\t<ngb-pagination class=\"d-flex justify-content-center\" [collectionSize]=\"70\" [(page)]=\"page3\"></ngb-pagination>\n\t\t\t<ngb-pagination class=\"d-flex justify-content-end\" [collectionSize]=\"70\" [(page)]=\"page3\"></ngb-pagination>\n\t\t</card>\n\t\t<card [title]=\"'Disabled pagination'\">\n\t\t\t<p>Pagination control can be disabled:</p>\n\t\t\t<ngb-pagination [collectionSize]=\"70\" [(page)]=\"page4\" [disabled]='isDisabled'></ngb-pagination>\n\t\t\t<hr>\n\t\t\t<button class=\"btn btn-sm btn-outline-primary\" (click)=\"toggleDisabled()\">\n\t\t\t  Toggle disabled\n\t\t\t</button>\n\t\t</card>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/content/pages/ngbootstrap/pagination/pagination.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/content/pages/ngbootstrap/pagination/pagination.component.ts ***!
  \******************************************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
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

var PaginationComponent = /** @class */ (function () {
    function PaginationComponent() {
        this.page = 4;
        this.page2 = 1;
        this.page3 = 4;
        this.page4 = 3;
        this.currentPage = 3;
        this.isDisabled = true;
    }
    PaginationComponent.prototype.toggleDisabled = function () {
        this.isDisabled = !this.isDisabled;
    };
    PaginationComponent.prototype.ngOnInit = function () {
    };
    PaginationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pagination',
            template: __webpack_require__(/*! ./pagination.component.html */ "./src/app/content/pages/ngbootstrap/pagination/pagination.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], PaginationComponent);
    return PaginationComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/ngbootstrap/popover/popover.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/content/pages/ngbootstrap/popover/popover.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<subheader [title]=\"'Popover'\" [breadcrumb]=\"['Ng-Bootstrap', 'Popover']\"></subheader>\n\n<div class=\"row\">\n\t<div class=\"col-lg-6\">\n\t\t<card [title]=\"'Quick and easy popovers'\">\n\t\t\t<button type=\"button\" class=\"btn btn-outline-secondary mr-2\" placement=\"top\" ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on top\">\n\t\t\t  Popover on top\n\t\t\t</button>\n\t\t\t<button type=\"button\" class=\"btn btn-outline-secondary mr-2\" placement=\"right\" ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on right\">\n\t\t\t  Popover on right\n\t\t\t</button>\n\t\t\t<button type=\"button\" class=\"btn btn-outline-secondary mr-2\" placement=\"bottom\" ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on bottom\">\n\t\t\t  Popover on bottom\n\t\t\t</button>\n\t\t\t<button type=\"button\" class=\"btn btn-outline-secondary mr-2\" placement=\"left\" ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on left\">\n\t\t\t  Popover on left\n\t\t\t</button>\n\t\t</card>\n\t\t<card [title]=\"'HTML and bindings in popovers'\">\n\t\t\t<p>\n\t\t\t  Popovers can contain any arbitrary HTML, Angular bindings and even directives!\n\t\t\t  Simply enclose desired content or title in a <code>&lt;ng-template&gt;</code> element.\n\t\t\t</p>\n\t\t\t<ng-template #popContent>Hello, <b>{{name}}</b>!</ng-template>\n\t\t\t<ng-template #popTitle>Fancy <b>content!!</b></ng-template>\n\t\t\t<button type=\"button\" class=\"btn btn-outline-secondary\" [ngbPopover]=\"popContent\" [popoverTitle]=\"popTitle\">\n\t\t\t  I've got markup and bindings in my popover!\n\t\t\t</button>\n\t\t</card>\n\t\t<card [title]=\"'Custom and manual triggers'\">\n\t\t\t<p>\n\t\t\t  You can easily override open and close triggers by specifying event names (separated by <code>:</code>) in the <code>triggers</code> property.\n\t\t\t</p>\n\t\t\t<button type=\"button\" class=\"btn btn-outline-secondary\" ngbPopover=\"You see, I show up on hover!\" triggers=\"mouseenter:mouseleave\" popoverTitle=\"Pop title\">\n\t\t\t  Hover over me!\n\t\t\t</button>\n\t\t\t<hr>\n\t\t\t<p>\n\t\t\t  Alternatively you can take full manual control over popover opening / closing events.\n\t\t\t</p>\n\t\t\t<button type=\"button\" class=\"btn btn-outline-secondary mr-2\" ngbPopover=\"What a great tip!\" [autoClose]=\"false\" triggers=\"manual\" #p=\"ngbPopover\" (click)=\"p.open()\" popoverTitle=\"Pop title\">\n\t\t\t  Click me to open a popover\n\t\t\t</button>\n\t\t\t<button type=\"button\" class=\"btn btn-outline-secondary mr-2\" (click)=\"p.close()\">\n\t\t\t  Click me to close a popover\n\t\t\t</button>\n\t\t</card>\n\t\t<card [title]=\"'Automatic closing with keyboard and mouse'\">\n\t\t\t<p>As for some other popup-based widgets, you can set the popover to close automatically upon some events.</p>\n\t\t\t<p>In the following examples, they will all close on <code>Escape</code> as well as:</p>\n\t\t\t<ul>\n\t\t\t  <li class=\"mb-2\">\n\t\t\t    click inside:\n\t\t\t    <button\n\t\t\t      type=\"button\" class=\"btn btn-outline-secondary\" popoverTitle=\"Pop title\"\n\t\t\t      [autoClose]=\"'inside'\" ngbPopover=\"Click inside or press Escape to close\"\n\t\t\t    >\n\t\t\t        Click to toggle\n\t\t\t    </button>\n\t\t\t  </li>\n\t\t\t  <li class=\"mb-2\">\n\t\t\t    click outside:\n\t\t\t    <button\n\t\t\t      type=\"button\" class=\"btn btn-outline-secondary\" popoverTitle=\"Pop title\"\n\t\t\t      [autoClose]=\"'outside'\" ngbPopover=\"Click outside or press Escape to close\"\n\t\t\t    >\n\t\t\t      Click to toggle\n\t\t\t    </button>\n\t\t\t  </li>\n\t\t\t  <li class=\"mb-2\">\n\t\t\t      all clicks:\n\t\t\t      <button\n\t\t\t        type=\"button\" class=\"btn btn-outline-secondary\" popoverTitle=\"Pop title\"\n\t\t\t        [autoClose]=\"true\" ngbPopover=\"Click anywhere or press Escape to close (try the toggling element too)\"\n\t\t\t        #popover3=\"ngbPopover\"\n\t\t\t      >\n\t\t\t          Click to toggle\n\t\t\t      </button>\n\t\t\t      &nbsp;\n\t\t\t      <button type=\"button\" class=\"btn btn-outline-secondary mr-2\" (click)=\"popover3.toggle()\">\n\t\t\t        Click to toggle the external popover\n\t\t\t      </button>\n\t\t\t    </li>\n\t\t\t</ul>\n\t\t</card>\n\t</div>\n\t<div class=\"col-lg-6\">\n\t\t<card [title]=\"'Context and manual triggers'\">\n\t\t\t<p>\n\t\t\t  You can optionally pass in a context when manually triggering a popover.\n\t\t\t</p>\n\n\t\t\t<ng-template #popContent let-greeting=\"greeting\">{{greeting}}, <b>{{name}}</b>!</ng-template>\n\t\t\t<ng-template #popTitle let-language=\"language\">Greeting in {{language}}</ng-template>\n\t\t\t<button\n\t\t\t  type=\"button\" class=\"btn btn-outline-secondary mr-2\"\n\t\t\t  [ngbPopover]=\"popContent\" [popoverTitle]=\"popTitle\"\n\t\t\t  triggers=\"manual\" #p1=\"ngbPopover\" (click)=\"toggleWithGreeting(p1, 'Bonjour', 'French')\"\n\t\t\t>\n\t\t\t  French\n\t\t\t</button>\n\t\t\t<button\n\t\t\t  type=\"button\" class=\"btn btn-outline-secondary mr-2\"\n\t\t\t  [ngbPopover]=\"popContent\" [popoverTitle]=\"popTitle\"\n\t\t\t  triggers=\"manual\" #p2=\"ngbPopover\" (click)=\"toggleWithGreeting(p2, 'Gutentag', 'German')\"\n\t\t\t>\n\t\t\t  German\n\t\t\t</button>\n\t\t\t<button\n\t\t\t  type=\"button\" class=\"btn btn-outline-secondary mr-2\"\n\t\t\t  [ngbPopover]=\"popContent\" [popoverTitle]=\"popTitle\"\n\t\t\t  triggers=\"manual\" #p3=\"ngbPopover\" (click)=\"toggleWithGreeting(p3, 'Hello', 'English')\"\n\t\t\t>\n\t\t\t  English\n\t\t\t</button>\n\t\t</card>\n\t\t<card [title]=\"'Popover visibility events'\">\n\t\t\t<button type=\"button\" class=\"btn btn-outline-secondary\" placement=\"top\"\n\t\t        ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on top\"\n\t\t        #popover=\"ngbPopover\" (shown)=\"recordShown()\" (hidden)=\"recordHidden()\">\n\t\t\t  Open Popover\n\t\t\t</button>\n\t\t\t<hr>\n\t\t\t<ul>\n\t\t\t  <li>Popover is currently: <code>{{ popover.isOpen() ? 'open' : 'closed' }}</code></li>\n\t\t\t  <li>Last shown at: <code>{{lastShown | date:'h:mm:ss'}}</code></li>\n\t\t\t  <li>Last hidden at: <code>{{lastHidden | date:'h:mm:ss'}}</code></li>\n\t\t\t</ul>\n\t\t</card>\n\t\t<card [title]=\"'Popover with custom class'\">\n\t\t\t<p>\n\t\t\t  You can optionally pass in a custom class via <code>popoverClass</code>\n\t\t\t</p>\n\n\t\t\t<button type=\"button\" class=\"btn btn-outline-secondary\" ngbPopover=\"Nice class!\"\n\t\t\t  popoverClass=\"my-custom-class\">\n\t\t\t  Popover with custom class\n\t\t\t</button>\n\t\t</card>\t\t\t\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/content/pages/ngbootstrap/popover/popover.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/content/pages/ngbootstrap/popover/popover.component.ts ***!
  \************************************************************************/
/*! exports provided: PopoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverComponent", function() { return PopoverComponent; });
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

var PopoverComponent = /** @class */ (function () {
    function PopoverComponent() {
        this.name = 'World';
    }
    PopoverComponent.prototype.toggleWithGreeting = function (popover, greeting, language) {
        if (popover.isOpen()) {
            popover.close();
        }
        else {
            popover.open({ greeting: greeting, language: language });
        }
    };
    PopoverComponent.prototype.recordShown = function () {
        this.lastShown = new Date();
    };
    PopoverComponent.prototype.recordHidden = function () {
        this.lastHidden = new Date();
    };
    PopoverComponent.prototype.ngOnInit = function () {
    };
    PopoverComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-popover',
            template: __webpack_require__(/*! ./popover.component.html */ "./src/app/content/pages/ngbootstrap/popover/popover.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: ["\n    .my-custom-class {\n      background: aliceblue;\n      font-size: 125%;\n    }\n    .my-custom-class .arrow::after {\n      border-top-color: aliceblue;\n    }\n  "]
        }),
        __metadata("design:paramtypes", [])
    ], PopoverComponent);
    return PopoverComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/ngbootstrap/progressbar/progressbar.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/content/pages/ngbootstrap/progressbar/progressbar.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<subheader [title]=\"'Progressbar'\" [breadcrumb]=\"['Ng-Bootstrap', 'Progressbar']\"></subheader>\n\n<div class=\"row\">\n\t<div class=\"col-lg-6\">\n\t\t<card [title]=\"'Contextual progress bars'\">\n\t\t\t<p><ngb-progressbar type=\"success\" [value]=\"25\"></ngb-progressbar></p>\n\t\t\t<p><ngb-progressbar type=\"info\" [value]=\"50\"></ngb-progressbar></p>\n\t\t\t<p><ngb-progressbar type=\"warning\" [value]=\"75\"></ngb-progressbar></p>\n\t\t\t<p><ngb-progressbar type=\"danger\" [value]=\"100\"></ngb-progressbar></p>\n\t\t</card>\n\t\t<card [title]=\"'Progress bars with current value labels'\">\n\t\t\t<p><ngb-progressbar showValue=\"true\" type=\"success\" [value]=\"25\"></ngb-progressbar></p>\n\t\t\t<p><ngb-progressbar [showValue]=\"true\" type=\"info\" [value]=\"50\"></ngb-progressbar></p>\n\t\t\t<p><ngb-progressbar showValue=\"true\" type=\"warning\" [value]=\"150\" [max]=\"200\"></ngb-progressbar></p>\n\t\t\t<p><ngb-progressbar [showValue]=\"true\" type=\"danger\" [value]=\"150\" [max]=\"150\"></ngb-progressbar></p>\n\t\t</card>\n\t\t<card [title]=\"'Striped progress bars'\">\n\t\t\t<p><ngb-progressbar type=\"success\" [value]=\"25\" [striped]=\"true\"></ngb-progressbar></p>\n\t\t\t<p><ngb-progressbar type=\"info\" [value]=\"50\" [striped]=\"true\"></ngb-progressbar></p>\n\t\t\t<p><ngb-progressbar type=\"warning\" [value]=\"75\" [striped]=\"true\"></ngb-progressbar></p>\n\t\t\t<p><ngb-progressbar type=\"danger\" [value]=\"100\" [striped]=\"true\"></ngb-progressbar></p>\n\t\t</card>\t\t\t\n\t</div>\n\t<div class=\"col-lg-6\">\n\t\t<card [title]=\"'Progress bars with custom labels'\">\n\t\t\t<p><ngb-progressbar type=\"success\" [value]=\"25\">25</ngb-progressbar></p>\n\t\t\t<p><ngb-progressbar type=\"info\" [value]=\"50\">Copying file <b>2 of 4</b>...</ngb-progressbar></p>\n\t\t\t<p><ngb-progressbar type=\"warning\" [value]=\"75\" [striped]=\"true\" [animated]=\"true\"><i>50%</i></ngb-progressbar></p>\n\t\t\t<p><ngb-progressbar type=\"danger\" [value]=\"100\" [striped]=\"true\">Completed!</ngb-progressbar></p>\n\t\t</card>\n\t\t<card [title]=\"'Progress bars with height'\">\n\t\t\t<p><ngb-progressbar type=\"success\" [value]=\"25\">default</ngb-progressbar></p>\n\t\t\t<p><ngb-progressbar type=\"info\" [value]=\"50\" height=\"10px\">10px</ngb-progressbar></p>\n\t\t\t<p><ngb-progressbar type=\"warning\" [value]=\"75\" height=\".5rem\">.5rem</ngb-progressbar></p>\n\t\t\t<p><ngb-progressbar type=\"danger\" [value]=\"100\" [height]=\"height\">{{height}}</ngb-progressbar></p>\n\t\t</card>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/content/pages/ngbootstrap/progressbar/progressbar.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/content/pages/ngbootstrap/progressbar/progressbar.component.ts ***!
  \********************************************************************************/
/*! exports provided: ProgressbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressbarComponent", function() { return ProgressbarComponent; });
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

var ProgressbarComponent = /** @class */ (function () {
    function ProgressbarComponent() {
        this.height = '20px';
    }
    ProgressbarComponent.prototype.ngOnInit = function () {
    };
    ProgressbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-progressbar',
            template: __webpack_require__(/*! ./progressbar.component.html */ "./src/app/content/pages/ngbootstrap/progressbar/progressbar.component.html"),
            styles: ["\n    ngb-progressbar {\n      margin-top: 5rem;\n    }\n  "]
        }),
        __metadata("design:paramtypes", [])
    ], ProgressbarComponent);
    return ProgressbarComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/ngbootstrap/rating/rating.component.html":
/*!************************************************************************!*\
  !*** ./src/app/content/pages/ngbootstrap/rating/rating.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<subheader [title]=\"'Rating'\" [breadcrumb]=\"['Ng-Bootstrap', 'Rating']\"></subheader>\n\n<div class=\"row\">\n\t<div class=\"col-lg-6\">\n\t\t<card [title]=\"'Basic demo'\">\n\t\t\t<ngb-rating [(rate)]=\"currentRate\"></ngb-rating>\n\t\t\t<hr>\n\t\t\t<pre>Rate: <b>{{currentRate}}</b></pre>\n\t\t</card>\n\t\t<card [title]=\"'Events and readonly ratings'\">\n\t\t\t<ngb-rating [(rate)]=\"selected\" (hover)=\"hovered=$event\" (leave)=\"hovered=0\" [readonly]=\"readonly\"></ngb-rating>\n\t\t\t<hr>\n\t\t\t<pre>\n\t\t\tSelected: <b>{{selected}}</b>\n\t\t\tHovered: <b>{{hovered}}</b>\n\t\t\t</pre>\n\t\t\t<button class=\"btn btn-sm btn-outline-{{readonly ? 'danger' : 'success'}}\" (click)=\"readonly = !readonly\">\n\t\t\t  {{ readonly ? \"readonly\" : \"editable\"}}\n\t\t\t</button>\n\t\t</card>\n\t\t<card [title]=\"'Custom star template'\">\n\t\t\t<p>Custom rating template provided as child element</p>\n\t\t\t<ngb-rating [(rate)]=\"currentRate\">\n\t\t\t  <ng-template let-fill=\"fill\" let-index=\"index\">\n\t\t\t    <span class=\"star\" [class.filled]=\"fill === 100\" [class.bad]=\"index < 3\">&#9733;</span>\n\t\t\t  </ng-template>\n\t\t\t</ngb-rating>\n\t\t\t<hr>\n\t\t\t<pre>Rate: <b>{{currentRate}}</b></pre>\n\t\t</card>\t\t\t\n\t</div>\n\t<div class=\"col-lg-6\">\n\t\t<card [title]=\"'Custom decimal rating'\">\n\t\t\t<p>Custom rating template provided via a variable. Shows fine-grained rating display</p>\n\t\t\t<ng-template #t let-fill=\"fill\">\n\t\t\t  <span class=\"star2\" [class.full]=\"fill === 100\">\n\t\t\t    <span class=\"half\" [style.width.%]=\"fill\">&hearts;</span>&hearts;\n\t\t\t  </span>\n\t\t\t</ng-template>\n\t\t\t<ngb-rating [(rate)]=\"currentRate2\" [starTemplate]=\"t\" [readonly]=\"true\" max=\"5\"></ngb-rating>\n\t\t\t<hr>\n\t\t\t<pre>Rate: <b>{{currentRate2}}</b></pre>\n\t\t\t<button class=\"btn btn-sm btn-outline-primary mr-2\" (click)=\"currentRate2 = 1.35\">1.35</button>\n\t\t\t<button class=\"btn btn-sm btn-outline-primary mr-2\" (click)=\"currentRate2 = 4.72\">4.72</button>\n\t\t</card>\n\t\t<card [title]=\"'Form integration'\">\n\t\t\t<p>NgModel and reactive forms can be used without the 'rate' binding</p>\n\t\t\t<div class=\"form-group\">\n\t\t\t  <ngb-rating [formControl]=\"ctrl\"></ngb-rating>\n\t\t\t  <div class=\"form-text small\">\n\t\t\t    <div *ngIf=\"ctrl.valid\" class=\"text-success\">Thanks!</div>\n\t\t\t    <div *ngIf=\"ctrl.invalid\" class=\"text-danger\">Please rate us</div>\n\t\t\t  </div>\n\t\t\t</div>\n\t\t\t<hr>\n\t\t\t<pre>Model: <b>{{ ctrl.value }}</b></pre>\n\t\t\t<button class=\"btn btn-sm btn-outline-{{ ctrl.disabled ? 'danger' : 'success'}} mr-2\" (click)=\"toggle()\">\n\t\t\t  {{ ctrl.disabled ? \"control disabled\" : \" control enabled\" }}\n\t\t\t</button>\n\t\t\t<button class=\"btn btn-sm btn-outline-primary mr-2\" (click)=\"ctrl.setValue(null)\">Clear</button>\n\t\t</card>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/content/pages/ngbootstrap/rating/rating.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/content/pages/ngbootstrap/rating/rating.component.ts ***!
  \**********************************************************************/
/*! exports provided: RatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingComponent", function() { return RatingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RatingComponent = /** @class */ (function () {
    function RatingComponent() {
        this.currentRate = 8;
        this.currentRate1 = 6;
        this.currentRate2 = 3.14;
        this.selected = 0;
        this.hovered = 0;
        this.readonly = false;
        this.ctrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
    }
    RatingComponent.prototype.toggle = function () {
        if (this.ctrl.disabled) {
            this.ctrl.enable();
        }
        else {
            this.ctrl.disable();
        }
    };
    RatingComponent.prototype.ngOnInit = function () {
    };
    RatingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rating',
            template: __webpack_require__(/*! ./rating.component.html */ "./src/app/content/pages/ngbootstrap/rating/rating.component.html"),
            styles: ["\n    .star {\n      font-size: 1.5rem;\n      color: #b0c4de;\n    }\n    .filled {\n      color: #1e90ff;\n    }\n    .bad {\n      color: #deb0b0;\n    }\n    .filled.bad {\n      color: #ff1e1e;\n    }\n    .star2 {\n      position: relative;\n      display: inline-block;\n      font-size: 3rem;\n      color: #d3d3d3;\n    }\n    .full {\n      color: red;\n    }\n    .half {\n      position: absolute;\n      display: inline-block;\n      overflow: hidden;\n      color: red;\n    }\n  "]
        }),
        __metadata("design:paramtypes", [])
    ], RatingComponent);
    return RatingComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/ngbootstrap/tabset/tabset.component.html":
/*!************************************************************************!*\
  !*** ./src/app/content/pages/ngbootstrap/tabset/tabset.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<subheader [title]=\"'Tabset'\" [breadcrumb]=\"['Ng-Bootstrap', 'Tabset']\"></subheader>\n\n<div class=\"row\">\n\t<div class=\"col-lg-6\">\n\t\t<card [title]=\"'Tabset'\">\n\t\t\t<ngb-tabset>\n\t\t\t  <ngb-tab title=\"Simple\">\n\t\t\t    <ng-template ngbTabContent>\n\t\t\t      <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth\n\t\t\t      master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh\n\t\t\t      dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum\n\t\t\t      iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\n\t\t\t    </ng-template>\n\t\t\t  </ngb-tab>\n\t\t\t  <ngb-tab>\n\t\t\t    <ng-template ngbTabTitle><b>Fancy</b> title</ng-template>\n\t\t\t    <ng-template ngbTabContent>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid.\n\t\t\t      <p>Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table\n\t\t\t      craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl\n\t\t\t      cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia\n\t\t\t      yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean\n\t\t\t      shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero\n\t\t\t      sint qui sapiente accusamus tattooed echo park.</p>\n\t\t\t    </ng-template>\n\t\t\t  </ngb-tab>\n\t\t\t  <ngb-tab title=\"Disabled\" [disabled]=\"true\">\n\t\t\t    <ng-template ngbTabContent>\n\t\t\t      <p>Sed commodo, leo at suscipit dictum, quam est porttitor sapien, eget sodales nibh elit id diam. Nulla facilisi. Donec egestas ligula vitae odio interdum aliquet. Duis lectus turpis, luctus eget tincidunt eu, congue et odio. Duis pharetra et nisl at faucibus. Quisque luctus pulvinar arcu, et molestie lectus ultrices et. Sed diam urna, egestas ut ipsum vel, volutpat volutpat neque. Praesent fringilla tortor arcu. Vivamus faucibus nisl enim, nec tristique ipsum euismod facilisis. Morbi ut bibendum est, eu tincidunt odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris aliquet odio ac lorem aliquet ultricies in eget neque. Phasellus nec tortor vel tellus pulvinar feugiat.</p>\n\t\t\t    </ng-template>\n\t\t\t  </ngb-tab>\n\t\t\t</ngb-tabset>\n\t\t</card>\n\t\t<card [title]=\"'Pills'\">\n\t\t\t<ngb-tabset type=\"pills\">\n\t\t\t  <ngb-tab title=\"Simple\">\n\t\t\t    <ng-template ngbTabContent>\n\t\t\t      <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth\n\t\t\t      master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh\n\t\t\t      dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum\n\t\t\t      iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\n\t\t\t    </ng-template>\n\t\t\t  </ngb-tab>\n\t\t\t  <ngb-tab>\n\t\t\t    <ng-template ngbTabTitle><b>Fancy</b> title</ng-template>\n\t\t\t    <ng-template ngbTabContent>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid.\n\t\t\t      <p>Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table\n\t\t\t      craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl\n\t\t\t      cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia\n\t\t\t      yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean\n\t\t\t      shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero\n\t\t\t      sint qui sapiente accusamus tattooed echo park.</p>\n\t\t\t    </ng-template>\n\t\t\t  </ngb-tab>\n\t\t\t  <ngb-tab title=\"Disabled\" [disabled]=\"true\">\n\t\t\t    <ng-template ngbTabContent>\n\t\t\t      <p>Sed commodo, leo at suscipit dictum, quam est porttitor sapien, eget sodales nibh elit id diam. Nulla facilisi. Donec egestas ligula vitae odio interdum aliquet. Duis lectus turpis, luctus eget tincidunt eu, congue et odio. Duis pharetra et nisl at faucibus. Quisque luctus pulvinar arcu, et molestie lectus ultrices et. Sed diam urna, egestas ut ipsum vel, volutpat volutpat neque. Praesent fringilla tortor arcu. Vivamus faucibus nisl enim, nec tristique ipsum euismod facilisis. Morbi ut bibendum est, eu tincidunt odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris aliquet odio ac lorem aliquet ultricies in eget neque. Phasellus nec tortor vel tellus pulvinar feugiat.</p>\n\t\t\t    </ng-template>\n\t\t\t  </ngb-tab>\n\t\t\t</ngb-tabset>\n\t\t</card>\n\t\t<card [title]=\"'Select an active tab by id'\">\n\t\t\t<ngb-tabset #t=\"ngbTabset\">\n\t\t\t  <ngb-tab id=\"tab-selectbyid1\" title=\"Simple\">\n\t\t\t    <ng-template ngbTabContent>\n\t\t\t      <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth\n\t\t\t      master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh\n\t\t\t      dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum\n\t\t\t      iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\n\t\t\t    </ng-template>\n\t\t\t  </ngb-tab>\n\t\t\t  <ngb-tab id=\"tab-selectbyid2\">\n\t\t\t    <ng-template ngbTabTitle><b>Fancy</b> title</ng-template>\n\t\t\t    <ng-template ngbTabContent>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid.\n\t\t\t      <p>Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table\n\t\t\t      craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl\n\t\t\t      cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia\n\t\t\t      yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean\n\t\t\t      shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero\n\t\t\t      sint qui sapiente accusamus tattooed echo park.</p>\n\t\t\t    </ng-template>\n\t\t\t  </ngb-tab>\n\t\t\t</ngb-tabset>\n\t\t\t<p>\n\t\t\t  <button class=\"btn btn-outline-primary\" (click)=\"t.select('tab-selectbyid2')\">Selected tab with \"tab-selectbyid2\" id</button>\n\t\t\t</p>\n\t\t</card>\t\t\t\n\t</div>\n\t<div class=\"col-lg-6\">\n\t\t<card [title]=\"'Prevent tab change'\">\n\t\t\t<ngb-tabset (tabChange)=\"beforeChange($event)\">\n\t\t\t  <ngb-tab id=\"tab-preventchange1\" title=\"Simple\">\n\t\t\t    <ng-template ngbTabContent>\n\t\t\t      <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth\n\t\t\t      master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh\n\t\t\t      dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum\n\t\t\t      iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\n\t\t\t    </ng-template>\n\t\t\t  </ngb-tab>\n\t\t\t  <ngb-tab id=\"tab-preventchange2\" title=\"I can't be selected...\">\n\t\t\t    <ng-template ngbTabContent>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid.\n\t\t\t      <p>Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table\n\t\t\t      craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl\n\t\t\t      cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia\n\t\t\t      yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean\n\t\t\t      shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero\n\t\t\t      sint qui sapiente accusamus tattooed echo park.</p>\n\t\t\t    </ng-template>\n\t\t\t  </ngb-tab>\n\t\t\t  <ngb-tab title=\"But I can!\" >\n\t\t\t    <ng-template ngbTabContent>\n\t\t\t      <p>Sed commodo, leo at suscipit dictum, quam est porttitor sapien, eget sodales nibh elit id diam. Nulla facilisi. Donec egestas ligula vitae odio interdum aliquet. Duis lectus turpis, luctus eget tincidunt eu, congue et odio. Duis pharetra et nisl at faucibus. Quisque luctus pulvinar arcu, et molestie lectus ultrices et. Sed diam urna, egestas ut ipsum vel, volutpat volutpat neque. Praesent fringilla tortor arcu. Vivamus faucibus nisl enim, nec tristique ipsum euismod facilisis. Morbi ut bibendum est, eu tincidunt odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris aliquet odio ac lorem aliquet ultricies in eget neque. Phasellus nec tortor vel tellus pulvinar feugiat.</p>\n\t\t\t    </ng-template>\n\t\t\t  </ngb-tab>\n\t\t\t</ngb-tabset>\n\t\t</card>\n\t\t<card [title]=\"'Nav justification'\">\n\t\t\t<ngb-tabset [justify]=\"currentJustify\">\n\t\t\t  <ngb-tab title=\"Simple\">\n\t\t\t    <ng-template ngbTabContent>\n\t\t\t      <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth\n\t\t\t      master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh\n\t\t\t      dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum\n\t\t\t      iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\n\t\t\t    </ng-template>\n\t\t\t  </ngb-tab>\n\t\t\t  <ngb-tab>\n\t\t\t    <ng-template ngbTabTitle><b>Fancy</b> title</ng-template>\n\t\t\t    <ng-template ngbTabContent>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid.\n\t\t\t      <p>Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table\n\t\t\t      craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl\n\t\t\t      cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia\n\t\t\t      yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean\n\t\t\t      shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero\n\t\t\t      sint qui sapiente accusamus tattooed echo park.</p>\n\t\t\t    </ng-template>\n\t\t\t  </ngb-tab>\n\t\t\t  <ngb-tab title=\"A very long nav title\">\n\t\t\t    <ng-template ngbTabContent>\n\t\t\t      <p>Sed commodo, leo at suscipit dictum, quam est porttitor sapien, eget sodales nibh elit id diam. Nulla facilisi. Donec egestas ligula vitae odio interdum aliquet. Duis lectus turpis, luctus eget tincidunt eu, congue et odio. Duis pharetra et nisl at faucibus. Quisque luctus pulvinar arcu, et molestie lectus ultrices et. Sed diam urna, egestas ut ipsum vel, volutpat volutpat neque. Praesent fringilla tortor arcu. Vivamus faucibus nisl enim, nec tristique ipsum euismod facilisis. Morbi ut bibendum est, eu tincidunt odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris aliquet odio ac lorem aliquet ultricies in eget neque. Phasellus nec tortor vel tellus pulvinar feugiat.</p>\n\t\t\t    </ng-template>\n\t\t\t  </ngb-tab>\n\t\t\t</ngb-tabset>\n\t\t\t<div class=\"btn-group btn-group-toggle\" ngbRadioGroup [(ngModel)]=\"currentJustify\">\n\t\t\t  <label ngbButtonLabel class=\"btn-outline-primary btn-sm\">\n\t\t\t    <input ngbButton type=\"radio\" value=\"start\">Start\n\t\t\t  </label>\n\t\t\t  <label ngbButtonLabel class=\"btn-outline-primary btn-sm\">\n\t\t\t    <input ngbButton type=\"radio\" value=\"center\">Center\n\t\t\t  </label>\n\t\t\t  <label ngbButtonLabel class=\"btn-outline-primary btn-sm\">\n\t\t\t    <input ngbButton type=\"radio\" value=\"end\">End\n\t\t\t  </label>\n\t\t\t  <label ngbButtonLabel class=\"btn-outline-primary btn-sm\">\n\t\t\t    <input ngbButton type=\"radio\" value=\"fill\">Fill\n\t\t\t  </label>\n\t\t\t  <label ngbButtonLabel class=\"btn-outline-primary btn-sm\">\n\t\t\t    <input ngbButton type=\"radio\" value=\"justified\">Justified\n\t\t\t  </label>\n\t\t\t</div>\n\t\t</card>\n\t\t<card [title]=\"'Nav orientation'\">\n\t\t\t<ngb-tabset type=\"pills\" [orientation]=\"currentOrientation\">\n\t\t\t  <ngb-tab title=\"Simple\">\n\t\t\t    <ng-template ngbTabContent>\n\t\t\t      <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth\n\t\t\t      master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh\n\t\t\t      dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum\n\t\t\t      iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\n\t\t\t    </ng-template>\n\t\t\t  </ngb-tab>\n\t\t\t  <ngb-tab>\n\t\t\t    <ng-template ngbTabTitle><b>Fancy</b> title</ng-template>\n\t\t\t    <ng-template ngbTabContent>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid.\n\t\t\t      <p>Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table\n\t\t\t      craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl\n\t\t\t      cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia\n\t\t\t      yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean\n\t\t\t      shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero\n\t\t\t      sint qui sapiente accusamus tattooed echo park.</p>\n\t\t\t    </ng-template>\n\t\t\t  </ngb-tab>\n\t\t\t  <ngb-tab title=\"Disabled\" [disabled]=\"true\">\n\t\t\t    <ng-template ngbTabContent>\n\t\t\t      <p>Sed commodo, leo at suscipit dictum, quam est porttitor sapien, eget sodales nibh elit id diam. Nulla facilisi. Donec egestas ligula vitae odio interdum aliquet. Duis lectus turpis, luctus eget tincidunt eu, congue et odio. Duis pharetra et nisl at faucibus. Quisque luctus pulvinar arcu, et molestie lectus ultrices et. Sed diam urna, egestas ut ipsum vel, volutpat volutpat neque. Praesent fringilla tortor arcu. Vivamus faucibus nisl enim, nec tristique ipsum euismod facilisis. Morbi ut bibendum est, eu tincidunt odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris aliquet odio ac lorem aliquet ultricies in eget neque. Phasellus nec tortor vel tellus pulvinar feugiat.</p>\n\t\t\t    </ng-template>\n\t\t\t  </ngb-tab>\n\t\t\t</ngb-tabset>\n\t\t\t<div class=\"btn-group btn-group-toggle\" ngbRadioGroup [(ngModel)]=\"currentOrientation\">\n\t\t\t  <label ngbButtonLabel class=\"btn-outline-primary btn-sm\">\n\t\t\t    <input ngbButton type=\"radio\" value=\"horizontal\">Horizontal\n\t\t\t  </label>\n\t\t\t  <label ngbButtonLabel class=\"btn-outline-primary btn-sm\">\n\t\t\t    <input ngbButton type=\"radio\" value=\"vertical\">Vertical\n\t\t\t  </label>\n\t\t\t</div>\n\t\t</card>\t\t\t\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/content/pages/ngbootstrap/tabset/tabset.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/content/pages/ngbootstrap/tabset/tabset.component.ts ***!
  \**********************************************************************/
/*! exports provided: TabsetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsetComponent", function() { return TabsetComponent; });
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

var TabsetComponent = /** @class */ (function () {
    function TabsetComponent() {
        this.currentJustify = 'start';
        this.currentOrientation = 'horizontal';
    }
    TabsetComponent.prototype.beforeChange = function ($event) {
        if ($event.nextId === 'tab-preventchange2') {
            $event.preventDefault();
        }
    };
    TabsetComponent.prototype.ngOnInit = function () {
    };
    TabsetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tabset',
            template: __webpack_require__(/*! ./tabset.component.html */ "./src/app/content/pages/ngbootstrap/tabset/tabset.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], TabsetComponent);
    return TabsetComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/ngbootstrap/timepicker/timepicker.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/content/pages/ngbootstrap/timepicker/timepicker.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<subheader [title]=\"'Timepicker'\" [breadcrumb]=\"['Ng-Bootstrap', 'Timepicker']\"></subheader>\n\n<div class=\"row\">\n\t<div class=\"col-lg-6\">\n\t\t<card [title]=\"'Timepicker'\">\n\t\t\t<ngb-timepicker [(ngModel)]=\"time\"></ngb-timepicker>\n\t\t\t<hr>\n\t\t\t<pre>Selected time: {{time | json}}</pre>\n\t\t</card>\n\t\t<card [title]=\"'Meridian'\">\n\t\t\t<ngb-timepicker [(ngModel)]=\"time\" [meridian]=\"meridian\"></ngb-timepicker>\n\t\t\t<button class=\"btn btn-sm btn-outline-{{meridian ? 'success' : 'danger'}}\" (click)=\"toggleMeridian()\">\n\t\t\t    Meridian - {{meridian ? \"ON\" : \"OFF\"}}\n\t\t\t</button>\n\t\t\t<hr>\n\t\t\t<pre>Selected time: {{time | json}}</pre>\n\t\t</card>\n\t\t<card [title]=\"'Seconds'\">\n\t\t\t<ngb-timepicker [(ngModel)]=\"time3\" [seconds]=\"seconds\"></ngb-timepicker>\n\t\t\t<button class=\"btn btn-sm btn-outline-{{seconds ? 'success' : 'danger'}}\" (click)=\"toggleSeconds()\">\n\t\t\t    Seconds - {{seconds ? \"ON\" : \"OFF\"}}\n\t\t\t</button>\n\t\t\t<hr>\n\t\t\t<pre>Selected time: {{time3 | json}}</pre>\n\t\t</card>\t\n\t</div>\n\t<div class=\"col-lg-6\">\n\t\t<card [title]=\"'Spinners'\">\n\t\t\t<ngb-timepicker [(ngModel)]=\"time4\" [spinners]=\"spinners\"></ngb-timepicker>\n\t\t\t<hr/>\n\t\t\t<button class=\"m-t-1 btn btn-sm btn-outline-{{spinners ? 'success' : 'danger'}}\" (click)=\"toggleSpinners()\">\n\t\t\t    Spinners - {{spinners ? \"ON\" : \"OFF\"}}\n\t\t\t</button>\n\t\t</card>\n\t\t<card [title]=\"'Custom steps'\">\n\t\t\t<ngb-timepicker [(ngModel)]=\"time5\" [seconds]=\"true\" [hourStep]=\"hourStep\" [minuteStep]=\"minuteStep\" [secondStep]=\"secondStep\"></ngb-timepicker>\n\t\t\t<div class=\"row\">\n\t\t\t    <div class=\"col-sm-3\">\n\t\t\t        <label for=\"changeHourStep\">Hour Step</label>\n\t\t\t        <input id=\"changeHourStep\" type=\"number\" class=\"form-control form-control-sm\" [(ngModel)]=\"hourStep\" />\n\t\t\t    </div>\n\t\t\t    <div class=\"col-sm-3\">\n\t\t\t        <label for=\"changeMinuteStep\">Minute Step</label>\n\t\t\t        <input id=\"changeMinuteStep\" type=\"number\" class=\"form-control form-control-sm\" [(ngModel)]=\"minuteStep\" />\n\t\t\t    </div>\n\t\t\t    <div class=\"col-sm-3\">\n\t\t\t        <label for=\"changeSecondStep\">Second Step</label>\n\t\t\t        <input id=\"changeSecondStep\" type=\"number\" class=\"form-control form-control-sm\" [(ngModel)]=\"secondStep\" />\n\t\t\t    </div>\n\t\t\t</div>\n\t\t\t<hr>\n\t\t\t<pre>Selected time: {{time5 | json}}</pre>\n\t\t</card>\n\t\t<card [title]=\"'Custom validation'\">\n\t\t\t<p>Illustrates custom validation, you have to select time between 12:00 and 13:59</p>\n\t\t\t<div class=\"form-group\">\n\t\t\t  <ngb-timepicker [formControl]=\"ctrl\" required></ngb-timepicker>\n\t\t\t  <div *ngIf=\"ctrl.valid\" class=\"small form-text text-success\">Great choice</div>\n\t\t\t  <div class=\"small form-text text-danger\" *ngIf=\"!ctrl.valid\">\n\t\t\t    <div *ngIf=\"ctrl.errors['required']\">Select some time during lunchtime</div>\n\t\t\t    <div *ngIf=\"ctrl.errors['tooLate']\">Oh no, it's way too late</div>\n\t\t\t    <div *ngIf=\"ctrl.errors['tooEarly']\">It's a bit too early</div>\n\t\t\t  </div>\n\t\t\t</div>\n\t\t\t<hr>\n\t\t\t<pre>Selected time: {{ctrl.value | json}}</pre>\n\t\t</card>\n\t</div>\t\t\n</div>\n"

/***/ }),

/***/ "./src/app/content/pages/ngbootstrap/timepicker/timepicker.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/content/pages/ngbootstrap/timepicker/timepicker.component.ts ***!
  \******************************************************************************/
/*! exports provided: TimepickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimepickerComponent", function() { return TimepickerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TimepickerComponent = /** @class */ (function () {
    function TimepickerComponent() {
        this.time = { hour: 13, minute: 30 };
        this.time2 = { hour: 13, minute: 30 };
        this.time3 = { hour: 13, minute: 30, second: 30 };
        this.time4 = { hour: 13, minute: 30 };
        this.time5 = { hour: 13, minute: 30, second: 0 };
        this.meridian = true;
        this.seconds = true;
        this.spinners = true;
        this.hourStep = 1;
        this.minuteStep = 15;
        this.secondStep = 30;
        this.ctrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', function (control) {
            var value = control.value;
            if (!value) {
                return null;
            }
            if (value.hour < 12) {
                return { tooEarly: true };
            }
            if (value.hour > 13) {
                return { tooLate: true };
            }
            return null;
        });
    }
    TimepickerComponent.prototype.toggleMeridian = function () {
        this.meridian = !this.meridian;
    };
    TimepickerComponent.prototype.toggleSeconds = function () {
        this.seconds = !this.seconds;
    };
    TimepickerComponent.prototype.toggleSpinners = function () {
        this.spinners = !this.spinners;
    };
    TimepickerComponent.prototype.ngOnInit = function () {
    };
    TimepickerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-timepicker',
            template: __webpack_require__(/*! ./timepicker.component.html */ "./src/app/content/pages/ngbootstrap/timepicker/timepicker.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], TimepickerComponent);
    return TimepickerComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/ngbootstrap/tooltip/tooltip.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/content/pages/ngbootstrap/tooltip/tooltip.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<subheader [title]=\"'Tooltip'\" [breadcrumb]=\"['Ng-Bootstrap', 'Tooltip']\"></subheader>\n\n<div class=\"row\">\n\t<div class=\"col-lg-6\">\n\t\t<card [title]=\"'Quick and easy tooltips'\">\n\t\t\t<button type=\"button\" class=\"btn btn-outline-secondary mr-2\" placement=\"top\" ngbTooltip=\"Tooltip on top\">\n\t\t\t  Tooltip on top\n\t\t\t</button>\n\t\t\t<button type=\"button\" class=\"btn btn-outline-secondary mr-2\" placement=\"right\" ngbTooltip=\"Tooltip on right\">\n\t\t\t  Tooltip on right\n\t\t\t</button>\n\t\t\t<button type=\"button\" class=\"btn btn-outline-secondary mr-2\" placement=\"bottom\" ngbTooltip=\"Tooltip on bottom\">\n\t\t\t  Tooltip on bottom\n\t\t\t</button>\n\t\t\t<button type=\"button\" class=\"btn btn-outline-secondary mr-2\" placement=\"left\" ngbTooltip=\"Tooltip on left\">\n\t\t\t  Tooltip on left\n\t\t\t</button>\n\t\t</card>\n\t\t<card [title]=\"'HTML and bindings in tooltips'\">\n\t\t\t<p>\n\t\t\t  Tooltips can contain any arbitrary HTML, Angular bindings and even directives!\n\t\t\t  Simply enclose desired content in a <code>&lt;ng-template&gt;</code> element.\n\t\t\t</p>\n\t\t\t<ng-template #tipContent>Hello, <b>{{name}}</b>!</ng-template>\n\t\t\t<button type=\"button\" class=\"btn btn-outline-secondary\" [ngbTooltip]=\"tipContent\">\n\t\t\t  I've got markup and bindings in my tooltip!\n\t\t\t</button>\n\t\t</card>\n\t\t<card [title]=\"'Custom and manual triggers'\">\n\t\t\t<p>\n\t\t\t  You can easily override open and close triggers by specifying event names (separated by <code>:</code>) in the <code>triggers</code> property.\n\t\t\t</p>\n\t\t\t<button type=\"button\" class=\"btn btn-outline-secondary\" ngbTooltip=\"You see, I show up on click!\" triggers=\"click:blur\">\n\t\t\t  Click me!\n\t\t\t</button>\n\t\t\t<hr>\n\t\t\t<p>\n\t\t\t  Alternatively you can take full manual control over tooltip opening / closing events.\n\t\t\t</p>\n\t\t\t<button type=\"button\" class=\"btn btn-outline-secondary mr-2\" ngbTooltip=\"What a great tip!\" [autoClose]=\"false\" triggers=\"manual\" #t=\"ngbTooltip\" (click)=\"t.open()\">\n\t\t\t  Click me to open a tooltip\n\t\t\t</button>\n\t\t\t<button type=\"button\" class=\"btn btn-outline-secondary mr-2\" (click)=\"t.close()\">\n\t\t\t  Click me to close a tooltip\n\t\t\t</button>\n\t\t</card>\n\t\t<card [title]=\"'Automatic closing with keyboard and mouse'\">\n\t\t\t<p>As for some other popup-based widgets, you can set the tooltip to close automatically upon some events.</p>\n\t\t\t<p>In the following examples, they will all close on <code>Escape</code> as well as:</p>\n\t\t\t<ul>\n\t\t\t  <li class=\"mb-2\">\n\t\t\t    click inside:\n\t\t\t    <button\n\t\t\t      type=\"button\" class=\"btn btn-outline-secondary\"\n\t\t\t      triggers=\"click\" [autoClose]=\"'inside'\" ngbTooltip=\"Click inside or press Escape to close\"\n\t\t\t    >\n\t\t\t        Click to toggle\n\t\t\t    </button>\n\t\t\t  </li>\n\t\t\t  <li class=\"mb-2\">\n\t\t\t    click outside:\n\t\t\t    <button\n\t\t\t      type=\"button\" class=\"btn btn-outline-secondary\"\n\t\t\t      triggers=\"click\" [autoClose]=\"'outside'\" ngbTooltip=\"Click outside or press Escape to close\"\n\t\t\t    >\n\t\t\t      Click to toggle\n\t\t\t    </button>\n\t\t\t  </li>\n\t\t\t  <li class=\"mb-2\">\n\t\t\t      all clicks:\n\t\t\t      <button\n\t\t\t        type=\"button\" class=\"btn btn-outline-secondary\"\n\t\t\t        triggers=\"click\" [autoClose]=\"true\" ngbTooltip=\"Click anywhere or press Escape to close (try the toggling element too)\"\n\t\t\t        #tooltip3=\"ngbTooltip\"\n\t\t\t      >\n\t\t\t          Click to toggle\n\t\t\t      </button>\n\t\t\t      &nbsp;\n\t\t\t      <button type=\"button\" class=\"btn btn-outline-secondary mr-2\" (click)=\"tooltip3.toggle()\">\n\t\t\t        Click to toggle the external tooltip\n\t\t\t      </button>\n\t\t\t    </li>\n\t\t\t</ul>\n\t\t</card>\n\t</div>\n\t<div class=\"col-lg-6\">\n\t\t<card [title]=\"'Context and manual triggers'\">\n\t\t\t<p>\n\t\t\t  You can optionally pass in a context when manually triggering a tooltip.\n\t\t\t</p>\n\n\t\t\t<ng-template #tipContent let-greeting=\"greeting\">{{greeting}}, <b>{{name}}</b>!</ng-template>\n\t\t\t<button\n\t\t\t  type=\"button\" class=\"btn btn-outline-secondary mr-2\"\n\t\t\t  [ngbTooltip]=\"tipContent\"\n\t\t\t  triggers=\"manual\" #t1=\"ngbTooltip\" (click)=\"toggleWithGreeting(t1, 'Bonjour')\"\n\t\t\t>\n\t\t\t  French\n\t\t\t</button>\n\t\t\t<button\n\t\t\t  type=\"button\" class=\"btn btn-outline-secondary mr-2\"\n\t\t\t  [ngbTooltip]=\"tipContent\"\n\t\t\t  triggers=\"manual\" #t2=\"ngbTooltip\" (click)=\"toggleWithGreeting(t2, 'Gutentag')\"\n\t\t\t>\n\t\t\t  German\n\t\t\t</button>\n\t\t\t<button\n\t\t\t  type=\"button\" class=\"btn btn-outline-secondary mr-2\"\n\t\t\t  [ngbTooltip]=\"tipContent\"\n\t\t\t  triggers=\"manual\" #t3=\"ngbTooltip\" (click)=\"toggleWithGreeting(t3, 'Hello')\"\n\t\t\t>\n\t\t\t  English\n\t\t\t</button>\n\t\t</card>\n\t\t<card [title]=\"'Append tooltip in the body'\">\n\t\t\t<p>\n\t\t\t\tSet the <code>container</code> property to \"body\" to have the tooltip be appended to the body instead of the triggering element's parent. This option is useful if the element triggering the tooltip is inside an element that clips its contents (i.e. <code>overflow: hidden</code>).\n\t\t\t</p>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"card px-1 py-5\">\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-outline-secondary mb-2\"\n\t\t\t\t\t\t\t\t\tngbTooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\">\n\t\t\t\t\t\tDefault tooltip\n\t\t\t\t\t</button>\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-outline-secondary\"\n\t\t\t\t\t\t\t\t\tngbTooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" container=\"body\">\n\t\t\t\t\t\tTooltip appended to body\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</card>\n\t\t<card [title]=\"'Tooltip with custom class'\">\n\t\t\t<p>\n\t\t\t  You can optionally pass in a custom class via <code>tooltipClass</code>\n\t\t\t</p>\n\n\t\t\t<button type=\"button\" class=\"btn btn-outline-secondary\" ngbTooltip=\"Nice class!\"\n\t\t\t  tooltipClass=\"my-custom-class\">\n\t\t\t  Tooltip with custom class\n\t\t\t</button>\n\t\t</card>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/content/pages/ngbootstrap/tooltip/tooltip.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/content/pages/ngbootstrap/tooltip/tooltip.component.ts ***!
  \************************************************************************/
/*! exports provided: TooltipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipComponent", function() { return TooltipComponent; });
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

var TooltipComponent = /** @class */ (function () {
    function TooltipComponent() {
        this.name = 'World';
    }
    TooltipComponent.prototype.toggleWithGreeting = function (tooltip, greeting) {
        if (tooltip.isOpen()) {
            tooltip.close();
        }
        else {
            tooltip.open({ greeting: greeting });
        }
    };
    TooltipComponent.prototype.ngOnInit = function () {
    };
    TooltipComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tooltip',
            template: __webpack_require__(/*! ./tooltip.component.html */ "./src/app/content/pages/ngbootstrap/tooltip/tooltip.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: ["\n    .card { overflow:hidden }\n    .my-custom-class .tooltip-inner {\n      background-color: darkgreen;\n      font-size: 125%;\n    }\n    .my-custom-class .arrow::before {\n      border-top-color: darkgreen;\n    }\n  "]
        }),
        __metadata("design:paramtypes", [])
    ], TooltipComponent);
    return TooltipComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/ngbootstrap/typeahead/typeahead.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/content/pages/ngbootstrap/typeahead/typeahead.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<subheader [title]=\"'Typeahead'\" [breadcrumb]=\"['Ng-Bootstrap', 'Typeahead']\"></subheader>\n\n<div class=\"row\">\n\t<div class=\"col-lg-6\">\n\t\t<card [title]=\"'Simple Typeahead'\">\n\t\t\tA typeahead example that gets values from a static <code>string[]</code>\n\t\t\t<ul>\n\t\t\t  <li><code>debounceTime</code> operator</li>\n\t\t\t  <li>kicks in only if 2+ characters typed</li>\n\t\t\t  <li>limits to 10 results</li>\n\t\t\t</ul>\n\n\t\t\t<label for=\"typeahead-basic\">Search for a state:</label>\n\t\t\t<input id=\"typeahead-basic\" type=\"text\" class=\"form-control\" [(ngModel)]=\"model\" [ngbTypeahead]=\"search\"/>\n\t\t\t<hr>\n\t\t\t<pre>Model: {{ model | json }}</pre>\n\t\t</card>\t\t\n\t\t<card [title]=\"'Open on focus'\">\n\t\t\tIt is possible to get the focus events with the current input value to emit results on focus with a great flexibility.\n\t\t\tIn this simple example, a search is done no matter the content of the input:\n\t\t\t<ul>\n\t\t\t  <li>on empty input all options will be taken</li>\n\t\t\t  <li>otherwise options will be filtered against the search term</li>\n\t\t\t  <li>it will limit the display to 10 results in all cases</li>\n\t\t\t</ul>\n\t\t\t<label for=\"typeahead-focus\">Search for a state:</label>\n\t\t\t<input\n\t\t\t  id=\"typeahead-focus\"\n\t\t\t  type=\"text\"\n\t\t\t  class=\"form-control\"\n\t\t\t  [(ngModel)]=\"model2\"\n\t\t\t  [ngbTypeahead]=\"search2\"\n\t\t\t  (focus)=\"focus$.next($event.target.value)\"\n\t\t\t  (click)=\"click$.next($event.target.value)\"\n\t\t\t  #instance=\"ngbTypeahead\"\n\t\t\t/>\n\t\t\t<hr>\n\t\t\t<pre>Model: {{ model2 | json }}</pre>\n\t\t</card>\n\t\t<card [title]=\"'Formatted results'\">\n\t\t\t<p>A typeahead example that uses a formatter function for string results</p>\n\t\t\t<label for=\"typeahead-format\">Search for a state:</label>\n\t\t\t<input id=\"typeahead-format\" type=\"text\" class=\"form-control\" [(ngModel)]=\"model3\" [ngbTypeahead]=\"search3\" [resultFormatter]=\"formatter\" />\n\t\t\t<hr>\n\t\t\t<pre>Model: {{ model3 | json }}</pre>\n\t\t</card>\n\t</div>\n\t<div class=\"col-lg-6\">\n\t\t<card [title]=\"'Wikipedia search'\">\n\t\t\tA typeahead example that gets values from the <code>WikipediaService</code>\n\t\t\t<ul>\n\t\t\t  <li>remote data retrieval</li>\n\t\t\t  <li><code>debounceTime</code> operator</li>\n\t\t\t  <li><code>do</code> operator</li>\n\t\t\t  <li><code>distinctUntilChanged</code> operator</li>\n\t\t\t  <li><code>switchMap</code> operator</li>\n\t\t\t  <li><code>catch</code> operator to display an error message in case of connectivity issue</li>\n\t\t\t</ul>\n\n\t\t\t<div class=\"form-group\">\n\t\t\t  <label for=\"typeahead-http\">Search for a wiki page:</label>\n\t\t\t  <input id=\"typeahead-http\" type=\"text\" class=\"form-control\" [class.is-invalid]=\"searchFailed\" [(ngModel)]=\"model4\" [ngbTypeahead]=\"search4\" placeholder=\"Wikipedia search\" />\n\t\t\t  <span *ngIf=\"searching\">searching...</span>\n\t\t\t  <div class=\"invalid-feedback\" *ngIf=\"searchFailed\">Sorry, suggestions could not be loaded.</div>\n\t\t\t</div>\n\n\t\t\t<hr>\n\t\t\t<pre>Model: {{ model4 | json }}</pre>\n\t\t</card>\t\t\t\n\t\t<card [title]=\"'Template for results'\">\n\t\t\t<p>A typeahead example that uses a custom template for results display, an object as the model,\n\t\t\t  and the highlight directive to highlight the term inside the custom template.\n\t\t\t</p>\n\n\t\t\t<ng-template #rt let-r=\"result\" let-t=\"term\">\n\t\t\t  <img [src]=\"'https://upload.wikimedia.org/wikipedia/commons/thumb/' + r['flag']\" class=\"mr-1\" style=\"width: 16px\">\n\t\t\t  <ngb-highlight [result]=\"r.name\" [term]=\"t\"></ngb-highlight>\n\t\t\t</ng-template>\n\n\t\t\t<label for=\"typeahead-template\">Search for a state:</label>\n\t\t\t<input id=\"typeahead-template\" type=\"text\" class=\"form-control\" [(ngModel)]=\"model5\" [ngbTypeahead]=\"search5\" [resultTemplate]=\"rt\"\n\t\t\t  [inputFormatter]=\"formatter2\" />\n\t\t\t<hr>\n\t\t\t<pre>Model: {{ model5 | json }}</pre>\n\t\t</card>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/content/pages/ngbootstrap/typeahead/typeahead.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/content/pages/ngbootstrap/typeahead/typeahead.component.ts ***!
  \****************************************************************************/
/*! exports provided: WikipediaService, TypeaheadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WikipediaService", function() { return WikipediaService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeaheadComponent", function() { return TypeaheadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
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





var states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
    'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',
    'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
    'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
    'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
    'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
    'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',
    'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
var statesWithFlags = [
    { 'name': 'Alabama', 'flag': '5/5c/Flag_of_Alabama.svg/45px-Flag_of_Alabama.svg.png' },
    { 'name': 'Alaska', 'flag': 'e/e6/Flag_of_Alaska.svg/43px-Flag_of_Alaska.svg.png' },
    { 'name': 'Arizona', 'flag': '9/9d/Flag_of_Arizona.svg/45px-Flag_of_Arizona.svg.png' },
    { 'name': 'Arkansas', 'flag': '9/9d/Flag_of_Arkansas.svg/45px-Flag_of_Arkansas.svg.png' },
    { 'name': 'California', 'flag': '0/01/Flag_of_California.svg/45px-Flag_of_California.svg.png' },
    { 'name': 'Colorado', 'flag': '4/46/Flag_of_Colorado.svg/45px-Flag_of_Colorado.svg.png' },
    { 'name': 'Connecticut', 'flag': '9/96/Flag_of_Connecticut.svg/39px-Flag_of_Connecticut.svg.png' },
    { 'name': 'Delaware', 'flag': 'c/c6/Flag_of_Delaware.svg/45px-Flag_of_Delaware.svg.png' },
    { 'name': 'Florida', 'flag': 'f/f7/Flag_of_Florida.svg/45px-Flag_of_Florida.svg.png' },
    {
        'name': 'Georgia',
        'flag': '5/54/Flag_of_Georgia_%28U.S._state%29.svg/46px-Flag_of_Georgia_%28U.S._state%29.svg.png'
    },
    { 'name': 'Hawaii', 'flag': 'e/ef/Flag_of_Hawaii.svg/46px-Flag_of_Hawaii.svg.png' },
    { 'name': 'Idaho', 'flag': 'a/a4/Flag_of_Idaho.svg/38px-Flag_of_Idaho.svg.png' },
    { 'name': 'Illinois', 'flag': '0/01/Flag_of_Illinois.svg/46px-Flag_of_Illinois.svg.png' },
    { 'name': 'Indiana', 'flag': 'a/ac/Flag_of_Indiana.svg/45px-Flag_of_Indiana.svg.png' },
    { 'name': 'Iowa', 'flag': 'a/aa/Flag_of_Iowa.svg/44px-Flag_of_Iowa.svg.png' },
    { 'name': 'Kansas', 'flag': 'd/da/Flag_of_Kansas.svg/46px-Flag_of_Kansas.svg.png' },
    { 'name': 'Kentucky', 'flag': '8/8d/Flag_of_Kentucky.svg/46px-Flag_of_Kentucky.svg.png' },
    { 'name': 'Louisiana', 'flag': 'e/e0/Flag_of_Louisiana.svg/46px-Flag_of_Louisiana.svg.png' },
    { 'name': 'Maine', 'flag': '3/35/Flag_of_Maine.svg/45px-Flag_of_Maine.svg.png' },
    { 'name': 'Maryland', 'flag': 'a/a0/Flag_of_Maryland.svg/45px-Flag_of_Maryland.svg.png' },
    { 'name': 'Massachusetts', 'flag': 'f/f2/Flag_of_Massachusetts.svg/46px-Flag_of_Massachusetts.svg.png' },
    { 'name': 'Michigan', 'flag': 'b/b5/Flag_of_Michigan.svg/45px-Flag_of_Michigan.svg.png' },
    { 'name': 'Minnesota', 'flag': 'b/b9/Flag_of_Minnesota.svg/46px-Flag_of_Minnesota.svg.png' },
    { 'name': 'Mississippi', 'flag': '4/42/Flag_of_Mississippi.svg/45px-Flag_of_Mississippi.svg.png' },
    { 'name': 'Missouri', 'flag': '5/5a/Flag_of_Missouri.svg/46px-Flag_of_Missouri.svg.png' },
    { 'name': 'Montana', 'flag': 'c/cb/Flag_of_Montana.svg/45px-Flag_of_Montana.svg.png' },
    { 'name': 'Nebraska', 'flag': '4/4d/Flag_of_Nebraska.svg/46px-Flag_of_Nebraska.svg.png' },
    { 'name': 'Nevada', 'flag': 'f/f1/Flag_of_Nevada.svg/45px-Flag_of_Nevada.svg.png' },
    { 'name': 'New Hampshire', 'flag': '2/28/Flag_of_New_Hampshire.svg/45px-Flag_of_New_Hampshire.svg.png' },
    { 'name': 'New Jersey', 'flag': '9/92/Flag_of_New_Jersey.svg/45px-Flag_of_New_Jersey.svg.png' },
    { 'name': 'New Mexico', 'flag': 'c/c3/Flag_of_New_Mexico.svg/45px-Flag_of_New_Mexico.svg.png' },
    { 'name': 'New York', 'flag': '1/1a/Flag_of_New_York.svg/46px-Flag_of_New_York.svg.png' },
    { 'name': 'North Carolina', 'flag': 'b/bb/Flag_of_North_Carolina.svg/45px-Flag_of_North_Carolina.svg.png' },
    { 'name': 'North Dakota', 'flag': 'e/ee/Flag_of_North_Dakota.svg/38px-Flag_of_North_Dakota.svg.png' },
    { 'name': 'Ohio', 'flag': '4/4c/Flag_of_Ohio.svg/46px-Flag_of_Ohio.svg.png' },
    { 'name': 'Oklahoma', 'flag': '6/6e/Flag_of_Oklahoma.svg/45px-Flag_of_Oklahoma.svg.png' },
    { 'name': 'Oregon', 'flag': 'b/b9/Flag_of_Oregon.svg/46px-Flag_of_Oregon.svg.png' },
    { 'name': 'Pennsylvania', 'flag': 'f/f7/Flag_of_Pennsylvania.svg/45px-Flag_of_Pennsylvania.svg.png' },
    { 'name': 'Rhode Island', 'flag': 'f/f3/Flag_of_Rhode_Island.svg/32px-Flag_of_Rhode_Island.svg.png' },
    { 'name': 'South Carolina', 'flag': '6/69/Flag_of_South_Carolina.svg/45px-Flag_of_South_Carolina.svg.png' },
    { 'name': 'South Dakota', 'flag': '1/1a/Flag_of_South_Dakota.svg/46px-Flag_of_South_Dakota.svg.png' },
    { 'name': 'Tennessee', 'flag': '9/9e/Flag_of_Tennessee.svg/46px-Flag_of_Tennessee.svg.png' },
    { 'name': 'Texas', 'flag': 'f/f7/Flag_of_Texas.svg/45px-Flag_of_Texas.svg.png' },
    { 'name': 'Utah', 'flag': 'f/f6/Flag_of_Utah.svg/45px-Flag_of_Utah.svg.png' },
    { 'name': 'Vermont', 'flag': '4/49/Flag_of_Vermont.svg/46px-Flag_of_Vermont.svg.png' },
    { 'name': 'Virginia', 'flag': '4/47/Flag_of_Virginia.svg/44px-Flag_of_Virginia.svg.png' },
    { 'name': 'Washington', 'flag': '5/54/Flag_of_Washington.svg/46px-Flag_of_Washington.svg.png' },
    { 'name': 'West Virginia', 'flag': '2/22/Flag_of_West_Virginia.svg/46px-Flag_of_West_Virginia.svg.png' },
    { 'name': 'Wisconsin', 'flag': '2/22/Flag_of_Wisconsin.svg/45px-Flag_of_Wisconsin.svg.png' },
    { 'name': 'Wyoming', 'flag': 'b/bc/Flag_of_Wyoming.svg/43px-Flag_of_Wyoming.svg.png' }
];
var WIKI_URL = 'https://en.wikipedia.org/w/api.php';
var PARAMS = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({
    fromObject: {
        action: 'opensearch',
        format: 'json',
        origin: '*'
    }
});
var WikipediaService = /** @class */ (function () {
    function WikipediaService(http) {
        this.http = http;
    }
    WikipediaService.prototype.search = function (term) {
        if (term === '') {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([]);
        }
        return this.http
            .get(WIKI_URL, { params: PARAMS.set('search', term) }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response[1]; }));
    };
    WikipediaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], WikipediaService);
    return WikipediaService;
}());

;
var TypeaheadComponent = /** @class */ (function () {
    function TypeaheadComponent(_service) {
        var _this = this;
        this._service = _service;
        this.searching = false;
        this.searchFailed = false;
        this.focus$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.click$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.search = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (term) { return term.length < 2 ? []
                : states.filter(function (v) { return v.toLowerCase().indexOf(term.toLowerCase()) > -1; }).slice(0, 10); }));
        };
        this.search2 = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])());
            var clicksWithClosedPopup$ = _this.click$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function () { return !_this.instance.isPopupOpen(); }));
            var inputFocus$ = _this.focus$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (term) { return (term === '' ? states
                : states.filter(function (v) { return v.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 10); }));
        };
        this.formatter = function (result) { return result.toUpperCase(); };
        this.search3 = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (term) { return term === '' ? []
                : states.filter(function (v) { return v.toLowerCase().indexOf(term.toLowerCase()) > -1; }).slice(0, 10); }));
        };
        this.search4 = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () { return _this.searching = true; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (term) {
                return _this._service.search(term).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () { return _this.searchFailed = false; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function () {
                    _this.searchFailed = true;
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([]);
                }));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () { return _this.searching = false; }));
        };
        this.search5 = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (term) { return term === '' ? []
                : statesWithFlags.filter(function (v) { return v.name.toLowerCase().indexOf(term.toLowerCase()) > -1; }).slice(0, 10); }));
        };
        this.formatter2 = function (x) { return x.name; };
    }
    TypeaheadComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('instance'),
        __metadata("design:type", _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTypeahead"])
    ], TypeaheadComponent.prototype, "instance", void 0);
    TypeaheadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-typeahead',
            template: __webpack_require__(/*! ./typeahead.component.html */ "./src/app/content/pages/ngbootstrap/typeahead/typeahead.component.html"),
            providers: [WikipediaService],
            styles: [".form-control { width: 300px; }"]
        }),
        __metadata("design:paramtypes", [WikipediaService])
    ], TypeaheadComponent);
    return TypeaheadComponent;
}());



/***/ }),

/***/ "./src/app/core/components/card/card.component.html":
/*!**********************************************************!*\
  !*** ./src/app/core/components/card/card.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"card {{cardClass}}\" [ngClass]=\"{'card-fullheight': fullheight}\">\n\t<div class=\"card-header\" *ngIf=\"header && title\">\n\t\t<h5 class=\"box-title\">{{title}}</h5>\n\t\t<div class=\"card-actions\" *ngIf=\"actions\">\n\t\t\t<a *ngIf=\"actions.collapsible\" (click)=\"collapse()\" class=\"ibox-collapse\" href=\"javascript:;\">\n\t\t\t\t<i *ngIf=\"!collapsed\" class=\"ti-angle-down\"></i>\n\t\t\t\t<i *ngIf=\"collapsed\" class=\"ti-angle-up\"></i>\n\t\t\t</a>\n\t\t\t<a *ngIf=\"actions.removable\" (click)=\"remove()\" class=\"ibox-remove\" href=\"javascript:;\"><i class=\"ti-close\"></i></a>\n\t\t\t<a *ngIf=\"actions.fullscreen\" (click)=\"toggleFullscreen()\" class=\"ibox-fullscreen-link\" href=\"javascript:;\"><i class=\"ti-fullscreen\"></i></a>\n\t\t</div>\n\t</div>\n\t<div  class=\"card-body\">\n\t\t<h5 *ngIf=\"title\" class=\"box-title\">{{title}}</h5>\n\t\t<ng-content></ng-content>\n\t</div>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/core/components/card/card.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/core/components/card/card.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .card {\n  margin-bottom: 1.8rem; }\n  :host .card.card-fullheight {\n    height: calc(100% - 1.8rem); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RoZWVyYWpzL0Rlc2t0b3AvVHJhZGVxdWlyeV9hbmd1bGFyL3NyYy9hcHAvY29yZS9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUVLLHFCQUhzQixFQUFBO0VBQzNCO0lBSUcsMkJBQTJDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNhcmQtbWFyZ2luLWJvdHRvbTogMS44cmVtO1xuOmhvc3Qge1xuICAgIC5jYXJkIHtcbiAgICBcdG1hcmdpbi1ib3R0b206ICRjYXJkLW1hcmdpbi1ib3R0b207XG5cdFx0Ji5jYXJkLWZ1bGxoZWlnaHQge1xuXHRcdFx0aGVpZ2h0OiBjYWxjKDEwMCUgLSAjeyRjYXJkLW1hcmdpbi1ib3R0b219KTtcblx0XHR9XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/core/components/card/card.component.ts":
/*!********************************************************!*\
  !*** ./src/app/core/components/card/card.component.ts ***!
  \********************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
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

var CardComponent = /** @class */ (function () {
    function CardComponent(_el, renderer) {
        this._el = _el;
        this.renderer = renderer;
        this.cardClass = '';
        this.fullheight = false;
        this.header = false;
        this.collapsed = false;
        this.extended = false;
    }
    CardComponent.prototype.ngOnInit = function () {
    };
    CardComponent.prototype.collapse = function () {
        this.collapsed = !this.collapsed;
    };
    CardComponent.prototype.remove = function () {
        this.renderer.removeChild(this._el.nativeElement, this._el.nativeElement);
    };
    CardComponent.prototype.toggleFullscreen = function () {
        if (!this.extended) {
            document.body.classList.add('fullscreen-mode');
            this.renderer.addClass(this._el.nativeElement.children[0], 'card-fullscreen');
            this.extended = true;
        }
        else {
            document.body.classList.remove('fullscreen-mode');
            this.renderer.removeClass(this._el.nativeElement.children[0], 'card-fullscreen');
            this.extended = false;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CardComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CardComponent.prototype, "cardClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], CardComponent.prototype, "fullheight", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], CardComponent.prototype, "header", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CardComponent.prototype, "actions", void 0);
    CardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'card',
            template: __webpack_require__(/*! ./card.component.html */ "./src/app/core/components/card/card.component.html"),
            styles: [__webpack_require__(/*! ./card.component.scss */ "./src/app/core/components/card/card.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/core/components/card/card.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/components/card/card.module.ts ***!
  \*****************************************************/
/*! exports provided: CardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardModule", function() { return CardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card.component */ "./src/app/core/components/card/card.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CardModule = /** @class */ (function () {
    function CardModule() {
    }
    CardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"]],
            exports: [_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"]],
        })
    ], CardModule);
    return CardModule;
}());



/***/ })

}]);
//# sourceMappingURL=content-pages-ngbootstrap-ngbootstrap-module.js.map