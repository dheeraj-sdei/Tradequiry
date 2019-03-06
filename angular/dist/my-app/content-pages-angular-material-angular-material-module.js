(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["content-pages-angular-material-angular-material-module"],{

/***/ "./src/app/content/pages/angular-material/angular-material.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/content/pages/angular-material/angular-material.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvcGFnZXMvYW5ndWxhci1tYXRlcmlhbC9hbmd1bGFyLW1hdGVyaWFsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/content/pages/angular-material/angular-material.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/content/pages/angular-material/angular-material.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<subheader title='Angular Material' [breadcrumb]=\"['UI INTERFACE', 'Angular Material']\"></subheader>\n\n<card>\n    <p>Angular Material - Material Design components for Angular. Angular Material comprises a range of components which implement common interaction patterns according to the Material Design specification.</p>\n    <p class=\"font-16 font-weight-bold text-primary\">The template also integrates Angular Material.</p>\n    <div class=\"text-center\"><a class=\"btn btn-primary\" href='https://material.angular.io/components/categories' target=\"_blank\">See Angular Material demos</a></div>\n</card>"

/***/ }),

/***/ "./src/app/content/pages/angular-material/angular-material.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/content/pages/angular-material/angular-material.component.ts ***!
  \******************************************************************************/
/*! exports provided: AngularMaterialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMaterialComponent", function() { return AngularMaterialComponent; });
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

var ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
var AngularMaterialComponent = /** @class */ (function () {
    function AngularMaterialComponent() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = ELEMENT_DATA;
    }
    AngularMaterialComponent.prototype.ngOnInit = function () {
    };
    AngularMaterialComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-angular-material',
            template: __webpack_require__(/*! ./angular-material.component.html */ "./src/app/content/pages/angular-material/angular-material.component.html"),
            styles: [__webpack_require__(/*! ./angular-material.component.css */ "./src/app/content/pages/angular-material/angular-material.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AngularMaterialComponent);
    return AngularMaterialComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/angular-material/angular-material.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/content/pages/angular-material/angular-material.module.ts ***!
  \***************************************************************************/
/*! exports provided: AngularMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function() { return AngularMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_core_components_card_card_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/components/card/card.module */ "./src/app/core/components/card/card.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_content_layout_components_subheader_subheader_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/content/layout/components/subheader/subheader.module */ "./src/app/content/layout/components/subheader/subheader.module.ts");
/* harmony import */ var _angular_material_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./angular-material.component */ "./src/app/content/pages/angular-material/angular-material.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        component: _angular_material_component__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialComponent"]
    },
];
var AngularMaterialModule = /** @class */ (function () {
    function AngularMaterialModule() {
    }
    AngularMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                src_app_core_components_card_card_module__WEBPACK_IMPORTED_MODULE_3__["CardModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                src_app_content_layout_components_subheader_subheader_module__WEBPACK_IMPORTED_MODULE_5__["SubheaderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormField"],
            ],
            declarations: [_angular_material_component__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialComponent"]]
        })
    ], AngularMaterialModule);
    return AngularMaterialModule;
}());



/***/ })

}]);
//# sourceMappingURL=content-pages-angular-material-angular-material-module.js.map