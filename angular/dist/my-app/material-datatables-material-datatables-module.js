(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["material-datatables-material-datatables-module"],{

/***/ "./src/app/content/pages/ui/material-datatables/material-datatables.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/content/pages/ui/material-datatables/material-datatables.module.ts ***!
  \************************************************************************************/
/*! exports provided: MaterialDatatablesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialDatatablesModule", function() { return MaterialDatatablesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_core_components_card_card_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/components/card/card.module */ "./src/app/core/components/card/card.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_content_layout_components_subheader_subheader_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/content/layout/components/subheader/subheader.module */ "./src/app/content/layout/components/subheader/subheader.module.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _paginator_paginator_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./paginator/paginator.component */ "./src/app/content/pages/ui/material-datatables/paginator/paginator.component.ts");
/* harmony import */ var _sort_header_sort_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sort-header/sort-header.component */ "./src/app/content/pages/ui/material-datatables/sort-header/sort-header.component.ts");
/* harmony import */ var _material_table_material_table_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./material-table/material-table.component */ "./src/app/content/pages/ui/material-datatables/material-table/material-table.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var routes = [
    {
        path: 'paginator',
        component: _paginator_paginator_component__WEBPACK_IMPORTED_MODULE_11__["PaginatorComponent"],
    },
    {
        path: 'sort-header',
        component: _sort_header_sort_header_component__WEBPACK_IMPORTED_MODULE_12__["SortHeaderComponent"],
    },
    {
        path: 'table',
        component: _material_table_material_table_component__WEBPACK_IMPORTED_MODULE_13__["MaterialTableComponent"],
    }
];
var MaterialDatatablesModule = /** @class */ (function () {
    function MaterialDatatablesModule() {
    }
    MaterialDatatablesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                src_app_core_components_card_card_module__WEBPACK_IMPORTED_MODULE_3__["CardModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                src_app_content_layout_components_subheader_subheader_module__WEBPACK_IMPORTED_MODULE_5__["SubheaderModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__["MatSortModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"],
            ],
            declarations: [
                _paginator_paginator_component__WEBPACK_IMPORTED_MODULE_11__["PaginatorComponent"],
                _sort_header_sort_header_component__WEBPACK_IMPORTED_MODULE_12__["SortHeaderComponent"],
                _material_table_material_table_component__WEBPACK_IMPORTED_MODULE_13__["MaterialTableComponent"],
            ]
        })
    ], MaterialDatatablesModule);
    return MaterialDatatablesModule;
}());



/***/ }),

/***/ "./src/app/content/pages/ui/material-datatables/material-table/material-table.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/content/pages/ui/material-datatables/material-table/material-table.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<subheader title='Table' [breadcrumb]=\"['Angular Material Datatables', 'Table']\"></subheader>\n\n<div class=\"alert alert-primary alert-bordered mb-4\">\n\t<p>Angular Material Datatables: Material Design styled data-table that can be used to display rows of data.<br>See more examples in</p>\n\t<a href=\"https://material.angular.io/components/categories\" class=\"btn btn-primary\" target=\"_blank\">Official Website</a>\n</div>\n\n<card title='Basic table'>\n\t<table mat-table [dataSource]=\"dataSource1\" class=\"mat-elevation-z8\">\n\n\t  <!--- Note that these columns can be defined in any order.\n\t        The actual rendered columns are set as a property on the row definition\" -->\n\n\t  <!-- Position Column -->\n\t  <ng-container matColumnDef=\"position\">\n\t    <th mat-header-cell *matHeaderCellDef> No. </th>\n\t    <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n\t  </ng-container>\n\n\t  <!-- Name Column -->\n\t  <ng-container matColumnDef=\"name\">\n\t    <th mat-header-cell *matHeaderCellDef> Name </th>\n\t    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n\t  </ng-container>\n\n\t  <!-- Weight Column -->\n\t  <ng-container matColumnDef=\"weight\">\n\t    <th mat-header-cell *matHeaderCellDef> Weight </th>\n\t    <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\n\t  </ng-container>\n\n\t  <!-- Symbol Column -->\n\t  <ng-container matColumnDef=\"symbol\">\n\t    <th mat-header-cell *matHeaderCellDef> Symbol </th>\n\t    <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n\t  </ng-container>\n\n\t  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n\t  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\t</table>\n</card>\n\n<card title='Table with pagination and sorting'>\n\t<div class=\"mat-elevation-z8\">\n\t  <table mat-table matSort #sort1=\"matSort\" [dataSource]=\"dataSource2\">\n\n\t    <!-- Position Column -->\n\t    <ng-container matColumnDef=\"position\">\n\t      <th mat-header-cell *matHeaderCellDef mat-sort-header> No. </th>\n\t      <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n\t    </ng-container>\n\n\t    <!-- Name Column -->\n\t    <ng-container matColumnDef=\"name\">\n\t      <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\n\t      <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n\t    </ng-container>\n\n\t    <!-- Weight Column -->\n\t    <ng-container matColumnDef=\"weight\">\n\t      <th mat-header-cell *matHeaderCellDef mat-sort-header> Weight </th>\n\t      <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\n\t    </ng-container>\n\n\t    <!-- Symbol Column -->\n\t    <ng-container matColumnDef=\"symbol\">\n\t      <th mat-header-cell *matHeaderCellDef mat-sort-header> Symbol </th>\n\t      <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n\t    </ng-container>\n\n\t    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n\t    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\t  </table>\n\n\t  <mat-paginator #matPaginator1 [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n\t</div>\n</card>\n\n<card title='Table with sorting'>\n</card>\n\n<card title='Table with filtering'>\n\t<mat-form-field class='w-100'>\n\t  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n\t</mat-form-field>\n\n\t<table mat-table [dataSource]=\"dataSource3\" class=\"mat-elevation-z8\">\n\n\t  <!-- Position Column -->\n\t  <ng-container matColumnDef=\"position\">\n\t    <th mat-header-cell *matHeaderCellDef> No. </th>\n\t    <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n\t  </ng-container>\n\n\t  <!-- Name Column -->\n\t  <ng-container matColumnDef=\"name\">\n\t    <th mat-header-cell *matHeaderCellDef> Name </th>\n\t    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n\t  </ng-container>\n\n\t  <!-- Weight Column -->\n\t  <ng-container matColumnDef=\"weight\">\n\t    <th mat-header-cell *matHeaderCellDef> Weight </th>\n\t    <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\n\t  </ng-container>\n\n\t  <!-- Symbol Column -->\n\t  <ng-container matColumnDef=\"symbol\">\n\t    <th mat-header-cell *matHeaderCellDef> Symbol </th>\n\t    <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n\t  </ng-container>\n\n\t  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n\t  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\t</table>\n</card>\n\n<card title='Table with selection'>\n\t<table mat-table [dataSource]=\"dataSource4\" class=\"mat-elevation-z8\">\n\n\t  <!-- Checkbox Column -->\n\t  <ng-container matColumnDef=\"select\">\n\t    <th mat-header-cell *matHeaderCellDef>\n\t      <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n\t                    [checked]=\"selection.hasValue() && isAllSelected()\"\n\t                    [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n\t      </mat-checkbox>\n\t    </th>\n\t    <td mat-cell *matCellDef=\"let row\">\n\t      <mat-checkbox (click)=\"$event.stopPropagation()\"\n\t                    (change)=\"$event ? selection.toggle(row) : null\"\n\t                    [checked]=\"selection.isSelected(row)\">\n\t      </mat-checkbox>\n\t    </td>\n\t  </ng-container>\n\n\t  <!-- Position Column -->\n\t  <ng-container matColumnDef=\"position\">\n\t    <th mat-header-cell *matHeaderCellDef> No. </th>\n\t    <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n\t  </ng-container>\n\n\t  <!-- Name Column -->\n\t  <ng-container matColumnDef=\"name\">\n\t    <th mat-header-cell *matHeaderCellDef> Name </th>\n\t    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n\t  </ng-container>\n\n\t  <!-- Weight Column -->\n\t  <ng-container matColumnDef=\"weight\">\n\t    <th mat-header-cell *matHeaderCellDef> Weight </th>\n\t    <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\n\t  </ng-container>\n\n\t  <!-- Symbol Column -->\n\t  <ng-container matColumnDef=\"symbol\">\n\t    <th mat-header-cell *matHeaderCellDef> Symbol </th>\n\t    <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n\t  </ng-container>\n\n\t  <tr mat-header-row *matHeaderRowDef=\"displayedColumns2\"></tr>\n\t  <tr mat-row *matRowDef=\"let row; columns: displayedColumns2;\"\n\t      (click)=\"selection.toggle(row)\">\n\t  </tr>\n\t</table>\n</card>\n\n<card title='Table with sticky header'>\n\t<div class=\"mat-elevation-z8\" style=\"height: 400px; overflow: auto;\">\n\t  <table mat-table [dataSource]=\"dataSource1\">\n\n\t    <!-- Position Column -->\n\t    <ng-container matColumnDef=\"position\">\n\t      <th mat-header-cell *matHeaderCellDef> No. </th>\n\t      <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n\t    </ng-container>\n\n\t    <!-- Name Column -->\n\t    <ng-container matColumnDef=\"name\">\n\t      <th mat-header-cell *matHeaderCellDef> Name </th>\n\t      <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n\t    </ng-container>\n\n\t    <!-- Weight Column -->\n\t    <ng-container matColumnDef=\"weight\">\n\t      <th mat-header-cell *matHeaderCellDef> Weight </th>\n\t      <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\n\t    </ng-container>\n\n\t    <!-- Symbol Column -->\n\t    <ng-container matColumnDef=\"symbol\">\n\t      <th mat-header-cell *matHeaderCellDef> Symbol </th>\n\t      <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n\t    </ng-container>\n\n\t    <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\n\t    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\t  </table>\n\t</div>\n</card>\n\n<card title='Table with sticky footer'>\n\t<div class=\"mat-elevation-z8\" style=\"height: 270px; overflow: auto;\">\n\t  <table mat-table [dataSource]=\"transactions\">\n\t    <!-- Item Column -->\n\t    <ng-container matColumnDef=\"item\">\n\t      <th mat-header-cell *matHeaderCellDef> Item </th>\n\t      <td mat-cell *matCellDef=\"let transaction\"> {{transaction.item}} </td>\n\t      <td mat-footer-cell *matFooterCellDef> Total </td>\n\t    </ng-container>\n\n\t    <!-- Cost Column -->\n\t    <ng-container matColumnDef=\"cost\">\n\t      <th mat-header-cell *matHeaderCellDef> Cost </th>\n\t      <td mat-cell *matCellDef=\"let transaction\"> {{transaction.cost | currency}} </td>\n\t      <td mat-footer-cell *matFooterCellDef> {{getTotalCost() | currency}} </td>\n\t    </ng-container>\n\n\t    <tr mat-header-row *matHeaderRowDef=\"displayedColumns3\"></tr>\n\t    <tr mat-row *matRowDef=\"let row; columns: displayedColumns3;\"></tr>\n\t    <tr mat-footer-row *matFooterRowDef=\"displayedColumns3; sticky: true\"></tr>\n\t  </table>\n\t</div>\n</card>\n\n<card title='Table with sticky columns'>\n\t<div class=\"ex-sticky-columns mat-elevation-z8\">\n\t  <table mat-table [dataSource]=\"dataSource1\">\n\n\t    <!-- Name Column -->\n\t    <ng-container matColumnDef=\"name\" sticky>\n\t      <th mat-header-cell *matHeaderCellDef> Name </th>\n\t      <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n\t    </ng-container>\n\n\t    <!-- Position Column -->\n\t    <ng-container matColumnDef=\"position\">\n\t      <th mat-header-cell *matHeaderCellDef> No. </th>\n\t      <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n\t    </ng-container>\n\n\t    <!-- Weight Column -->\n\t    <ng-container matColumnDef=\"weight\">\n\t      <th mat-header-cell *matHeaderCellDef> Weight </th>\n\t      <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\n\t    </ng-container>\n\n\t    <!-- Symbol Column -->\n\t    <ng-container matColumnDef=\"symbol\">\n\t      <th mat-header-cell *matHeaderCellDef> Symbol </th>\n\t      <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n\t    </ng-container>\n\n\t    <!-- Star Column -->\n\t    <ng-container matColumnDef=\"star\" stickyEnd>\n\t      <th mat-header-cell *matHeaderCellDef></th>\n\t      <td mat-cell *matCellDef=\"let element\">\n\t        <mat-icon>more_vert</mat-icon>\n\t      </td>\n\t    </ng-container>\n\n\t    <tr mat-header-row *matHeaderRowDef=\"displayedColumns4\"></tr>\n\t    <tr mat-row *matRowDef=\"let row; columns: displayedColumns4;\"></tr>\n\t  </table>\n\t</div>\n</card>\n\n<card title='Table with multiple header and footer rows'>\n\t<table mat-table [dataSource]=\"transactions\" class=\"mat-elevation-z8 ex-multiple-header-footer-row\">\n\t  <!-- Item Column -->\n\t  <ng-container matColumnDef=\"item\">\n\t    <th mat-header-cell *matHeaderCellDef> Item </th>\n\t    <td mat-cell *matCellDef=\"let transaction\"> {{transaction.item}} </td>\n\t    <td mat-footer-cell *matFooterCellDef> Total </td>\n\t  </ng-container>\n\n\t  <!-- Cost Column -->\n\t  <ng-container matColumnDef=\"cost\">\n\t    <th mat-header-cell *matHeaderCellDef> Cost </th>\n\t    <td mat-cell *matCellDef=\"let transaction\"> {{transaction.cost | currency}} </td>\n\t    <td mat-footer-cell *matFooterCellDef> {{getTotalCost() | currency}} </td>\n\t  </ng-container>\n\n\t  <!-- Item Description Column -->\n\t  <ng-container matColumnDef=\"item-description\">\n\t    <th mat-header-cell *matHeaderCellDef> Name of the item purchased </th>\n\t  </ng-container>\n\n\t  <!-- Cost Description Column -->\n\t  <ng-container matColumnDef=\"cost-description\">\n\t    <th mat-header-cell *matHeaderCellDef> Cost of the item in USD </th>\n\t  </ng-container>\n\n\t  <!-- Disclaimer column -->\n\t  <ng-container matColumnDef=\"disclaimer\">\n\t    <td mat-footer-cell *matFooterCellDef colspan=\"2\">\n\t      Please note that the cost of items displayed are completely and totally made up.\n\t    </td>\n\t  </ng-container>\n\n\t  <!-- The table will render two header rows, one data row per data object, and two footer rows. -->\n\t  <tr mat-header-row *matHeaderRowDef=\"displayedColumns3\"\n\t      class=\"example-first-header-row\">\n\t  </tr>\n\t  <tr mat-header-row *matHeaderRowDef=\"['item-description', 'cost-description']\"\n\t      class=\"example-second-header-row\">\n\t  </tr>\n\n\t  <tr mat-row *matRowDef=\"let row; columns: displayedColumns3;\"></tr>\n\n\t  <tr mat-footer-row *matFooterRowDef=\"displayedColumns3\" class=\"example-first-footer-row\"></tr>\n\t  <tr mat-footer-row *matFooterRowDef=\"['disclaimer']\" class=\"example-second-footer-row\"></tr>\n\t</table>\n</card>"

/***/ }),

/***/ "./src/app/content/pages/ui/material-datatables/material-table/material-table.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/content/pages/ui/material-datatables/material-table/material-table.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table, mat-table {\n  width: 100%; }\n\ntr.mat-footer-row {\n  font-weight: bold; }\n\n.mat-table-sticky {\n  border-top: 1px solid #e0e0e0; }\n\n.ex-sticky-columns {\n  height: 400px;\n  width: 550px;\n  overflow: auto; }\n\n.ex-sticky-columns table {\n    width: 800px; }\n\n.ex-sticky-columns td.mat-column-star {\n    width: 20px;\n    padding-right: 8px; }\n\n.ex-sticky-columns th.mat-column-position, .ex-sticky-columns td.mat-column-position {\n    padding-left: 8px; }\n\n.ex-sticky-columns .mat-table-sticky:first-child {\n    border-right: 1px solid #e0e0e0; }\n\n.ex-sticky-columns .mat-table-sticky:last-child {\n    border-left: 1px solid #e0e0e0; }\n\n.ex-multiple-header-footer-row .example-first-header-row th {\n  border-bottom: none; }\n\n.ex-multiple-header-footer-row .example-second-header-row {\n  font-style: italic; }\n\n.ex-multiple-header-footer-row .example-first-footer-row {\n  font-weight: bold; }\n\n.ex-multiple-header-footer-row .example-second-footer-row td {\n  color: #900000; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RoZWVyYWpzL0Rlc2t0b3AvVHJhZGVxdWlyeV9hbmd1bGFyL3NyYy9hcHAvY29udGVudC9wYWdlcy91aS9tYXRlcmlhbC1kYXRhdGFibGVzL21hdGVyaWFsLXRhYmxlL21hdGVyaWFsLXRhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVyxFQUFBOztBQUViO0VBQ0UsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsNkJBQTZCLEVBQUE7O0FBRy9CO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixjQUFjLEVBQUE7O0FBSGhCO0lBS0ksWUFBWSxFQUFBOztBQUxoQjtJQVFJLFdBQVc7SUFDWCxrQkFBa0IsRUFBQTs7QUFUdEI7SUFZSSxpQkFBaUIsRUFBQTs7QUFackI7SUFlSSwrQkFBK0IsRUFBQTs7QUFmbkM7SUFrQkksOEJBQThCLEVBQUE7O0FBSWxDO0VBRUksbUJBQW1CLEVBQUE7O0FBRnZCO0VBTUksa0JBQWtCLEVBQUE7O0FBTnRCO0VBVUksaUJBQWlCLEVBQUE7O0FBVnJCO0VBY0ksY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29udGVudC9wYWdlcy91aS9tYXRlcmlhbC1kYXRhdGFibGVzL21hdGVyaWFsLXRhYmxlL21hdGVyaWFsLXRhYmxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUsIG1hdC10YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxudHIubWF0LWZvb3Rlci1yb3cge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm1hdC10YWJsZS1zdGlja3kge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2UwZTBlMDtcbn1cblxuLmV4LXN0aWNreS1jb2x1bW5zIHtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgd2lkdGg6IDU1MHB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgdGFibGUge1xuICAgIHdpZHRoOiA4MDBweDtcbiAgfVxuICB0ZC5tYXQtY29sdW1uLXN0YXIge1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgfVxuICB0aC5tYXQtY29sdW1uLXBvc2l0aW9uLCB0ZC5tYXQtY29sdW1uLXBvc2l0aW9uIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgfVxuICAubWF0LXRhYmxlLXN0aWNreTpmaXJzdC1jaGlsZCB7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2UwZTBlMDtcbiAgfVxuICAubWF0LXRhYmxlLXN0aWNreTpsYXN0LWNoaWxkIHtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlMGUwZTA7XG4gIH1cbn1cblxuLmV4LW11bHRpcGxlLWhlYWRlci1mb290ZXItcm93IHtcbiAgLmV4YW1wbGUtZmlyc3QtaGVhZGVyLXJvdyB0aCB7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgfVxuXG4gIC5leGFtcGxlLXNlY29uZC1oZWFkZXItcm93IHtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIH1cblxuICAuZXhhbXBsZS1maXJzdC1mb290ZXItcm93IHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG4gIC5leGFtcGxlLXNlY29uZC1mb290ZXItcm93IHRkIHtcbiAgICBjb2xvcjogIzkwMDAwMDtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/content/pages/ui/material-datatables/material-table/material-table.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/content/pages/ui/material-datatables/material-table/material-table.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: MaterialTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialTableComponent", function() { return MaterialTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
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
var ELEMENT_DATA_2 = [
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
    { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
    { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
    { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
    { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
    { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
    { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
    { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
    { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
    { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
    { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];
var transactions = [
    { item: 'Beach ball', cost: 4 },
    { item: 'Towel', cost: 5 },
    { item: 'Frisbee', cost: 2 },
    { item: 'Sunscreen', cost: 4 },
    { item: 'Cooler', cost: 25 },
    { item: 'Swim suit', cost: 15 },
];
var MaterialTableComponent = /** @class */ (function () {
    function MaterialTableComponent() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.displayedColumns2 = ['select', 'position', 'name', 'weight', 'symbol'];
        this.displayedColumns3 = ['item', 'cost'];
        this.displayedColumns4 = ['name', 'position', 'weight', 'symbol', 'position', 'weight', 'symbol', 'star'];
        this.transactions = transactions;
        this.dataSource1 = ELEMENT_DATA;
        this.dataSource2 = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](ELEMENT_DATA_2);
        this.dataSource3 = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](ELEMENT_DATA);
        this.dataSource4 = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](ELEMENT_DATA);
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["SelectionModel"](true, []);
    }
    MaterialTableComponent.prototype.ngOnInit = function () {
        this.dataSource2.paginator = this.paginator1;
        this.dataSource2.sort = this.sort1;
    };
    MaterialTableComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource3.filter = filterValue.trim().toLowerCase();
    };
    /** Whether the number of selected elements matches the total number of rows. */
    MaterialTableComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.dataSource4.data.length;
        return numSelected === numRows;
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    MaterialTableComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource4.data.forEach(function (row) { return _this.selection.select(row); });
    };
    MaterialTableComponent.prototype.getTotalCost = function () {
        return this.transactions.map(function (t) { return t.cost; }).reduce(function (acc, value) { return acc + value; }, 0);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('matPaginator1'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], MaterialTableComponent.prototype, "paginator1", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sort1'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], MaterialTableComponent.prototype, "sort1", void 0);
    MaterialTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-material-table',
            template: __webpack_require__(/*! ./material-table.component.html */ "./src/app/content/pages/ui/material-datatables/material-table/material-table.component.html"),
            styles: [__webpack_require__(/*! ./material-table.component.scss */ "./src/app/content/pages/ui/material-datatables/material-table/material-table.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MaterialTableComponent);
    return MaterialTableComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/ui/material-datatables/paginator/paginator.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/content/pages/ui/material-datatables/paginator/paginator.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvcGFnZXMvdWkvbWF0ZXJpYWwtZGF0YXRhYmxlcy9wYWdpbmF0b3IvcGFnaW5hdG9yLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/content/pages/ui/material-datatables/paginator/paginator.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/content/pages/ui/material-datatables/paginator/paginator.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<subheader title='Paginator' [breadcrumb]=\"['Angular Material Datatables', 'Paginator']\"></subheader>\n\n<div class=\"alert alert-primary alert-bordered\">\n  <p>Angular Material Datatables: Material Design styled data-table that can be used to display rows of data.<br>See more examples in</p>\n  <a href=\"https://material.angular.io/components/categories\" class=\"btn btn-primary\" target=\"_blank\">Official Website</a>\n</div>\n\n<card title='Paginator'>\n    <p class=\"mb-4\">\n        <code>&lt;mat-paginator&gt;</code> provides navigation for paged information, typically used with a table.\n    </p>\n    <mat-paginator [length]=\"100\"\n      [pageSize]=\"10\"\n      [pageSizeOptions]=\"[5, 10, 25, 100]\">\n    </mat-paginator>\n</card>\n\n<card title='Configurable paginator'>\n    <mat-form-field>\n      List length:\n      <input matInput [(ngModel)]=\"length\">\n    </mat-form-field>\n\n    <mat-form-field>\n      Page size:\n      <input matInput [(ngModel)]=\"pageSize\">\n    </mat-form-field>\n    <mat-form-field>\n      Page size options:\n      <input matInput\n             [ngModel]=\"pageSizeOptions\"\n             (ngModelChange)=\"setPageSizeOptions($event)\">\n    </mat-form-field>\n\n    <mat-paginator [length]=\"length\"\n                  [pageSize]=\"pageSize\"\n                  [pageSizeOptions]=\"pageSizeOptions\"\n                  (page)=\"pageEvent = $event\">\n    </mat-paginator>\n\n    <div *ngIf=\"pageEvent\">\n      <h5>Page Change Event Properties</h5>\n      <div>List length: {{pageEvent.length}}</div>\n      <div>Page size: {{pageEvent.pageSize}}</div>\n      <div>Page index: {{pageEvent.pageIndex}}</div>\n    </div>\n</card>"

/***/ }),

/***/ "./src/app/content/pages/ui/material-datatables/paginator/paginator.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/content/pages/ui/material-datatables/paginator/paginator.component.ts ***!
  \***************************************************************************************/
/*! exports provided: PaginatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatorComponent", function() { return PaginatorComponent; });
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

var PaginatorComponent = /** @class */ (function () {
    function PaginatorComponent() {
        this.length = 100;
        this.pageSize = 10;
        this.pageSizeOptions = [5, 10, 25, 100];
    }
    PaginatorComponent.prototype.ngOnInit = function () {
    };
    PaginatorComponent.prototype.setPageSizeOptions = function (setPageSizeOptionsInput) {
        this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(function (str) { return +str; });
    };
    PaginatorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-paginator',
            template: __webpack_require__(/*! ./paginator.component.html */ "./src/app/content/pages/ui/material-datatables/paginator/paginator.component.html"),
            styles: [__webpack_require__(/*! ./paginator.component.css */ "./src/app/content/pages/ui/material-datatables/paginator/paginator.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PaginatorComponent);
    return PaginatorComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/ui/material-datatables/sort-header/sort-header.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/content/pages/ui/material-datatables/sort-header/sort-header.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvcGFnZXMvdWkvbWF0ZXJpYWwtZGF0YXRhYmxlcy9zb3J0LWhlYWRlci9zb3J0LWhlYWRlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/content/pages/ui/material-datatables/sort-header/sort-header.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/content/pages/ui/material-datatables/sort-header/sort-header.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<subheader title='Sort Header' [breadcrumb]=\"['Angular Material Datatables', 'Sort Header']\"></subheader>\n\n<div class=\"alert alert-primary alert-bordered\">\n\t<p>Angular Material Datatables: Material Design styled data-table that can be used to display rows of data.<br>See more examples in</p>\n\t<a href=\"https://material.angular.io/components/categories\" class=\"btn btn-primary\" target=\"_blank\">Official Website</a>\n</div>\n\n<card title='Sorting overview'>\n\t<table matSort #sort1=\"matSort\" (matSortChange)=\"sortData($event)\">\n\t  <tr>\n\t    <th mat-sort-header=\"name\">Dessert (100g)</th>\n\t    <th mat-sort-header=\"calories\">Calories</th>\n\t    <th mat-sort-header=\"fat\">Fat (g)</th>\n\t    <th mat-sort-header=\"carbs\">Carbs (g)</th>\n\t    <th mat-sort-header=\"protein\">Protein (g)</th>\n\t  </tr>\n\n\t  <tr *ngFor=\"let dessert of sortedData\">\n\t    <td>{{dessert.name}}</td>\n\t    <td>{{dessert.calories}}</td>\n\t    <td>{{dessert.fat}}</td>\n\t    <td>{{dessert.carbs}}</td>\n\t    <td>{{dessert.protein}}</td>\n\t  </tr>\n\t</table>\n</card>\n\n<card title='Table with sorting'>\n\t<table mat-table [dataSource]=\"dataSource\" #sort2=\"matSort\" matSort class=\"mat-elevation-z8\">\n\n\t  <!-- Position Column -->\n\t  <ng-container matColumnDef=\"position\">\n\t    <th mat-header-cell *matHeaderCellDef mat-sort-header> No. </th>\n\t    <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n\t  </ng-container>\n\n\t  <!-- Name Column -->\n\t  <ng-container matColumnDef=\"name\">\n\t    <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\n\t    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n\t  </ng-container>\n\n\t  <!-- Weight Column -->\n\t  <ng-container matColumnDef=\"weight\">\n\t    <th mat-header-cell *matHeaderCellDef mat-sort-header> Weight </th>\n\t    <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\n\t  </ng-container>\n\n\t  <!-- Symbol Column -->\n\t  <ng-container matColumnDef=\"symbol\">\n\t    <th mat-header-cell *matHeaderCellDef mat-sort-header> Symbol </th>\n\t    <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n\t  </ng-container>\n\n\t  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n\t  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\t</table>\n</card>"

/***/ }),

/***/ "./src/app/content/pages/ui/material-datatables/sort-header/sort-header.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/content/pages/ui/material-datatables/sort-header/sort-header.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: SortHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortHeaderComponent", function() { return SortHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
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
function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
var SortHeaderComponent = /** @class */ (function () {
    function SortHeaderComponent() {
        this.desserts = [
            { name: 'Frozen yogurt', calories: 159, fat: 6, carbs: 24, protein: 4 },
            { name: 'Ice cream sandwich', calories: 237, fat: 9, carbs: 37, protein: 4 },
            { name: 'Eclair', calories: 262, fat: 16, carbs: 24, protein: 6 },
            { name: 'Cupcake', calories: 305, fat: 4, carbs: 67, protein: 4 },
            { name: 'Gingerbread', calories: 356, fat: 16, carbs: 49, protein: 4 },
        ];
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](ELEMENT_DATA);
        this.sortedData = this.desserts.slice();
    }
    SortHeaderComponent.prototype.ngOnInit = function () {
        this.dataSource.sort = this.sort2;
    };
    SortHeaderComponent.prototype.sortData = function (sort) {
        var data = this.desserts.slice();
        if (!sort.active || sort.direction === '') {
            this.sortedData = data;
            return;
        }
        this.sortedData = data.sort(function (a, b) {
            var isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'name': return compare(a.name, b.name, isAsc);
                case 'calories': return compare(a.calories, b.calories, isAsc);
                case 'fat': return compare(a.fat, b.fat, isAsc);
                case 'carbs': return compare(a.carbs, b.carbs, isAsc);
                case 'protein': return compare(a.protein, b.protein, isAsc);
                default: return 0;
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sort1'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], SortHeaderComponent.prototype, "sort1", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sort2'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], SortHeaderComponent.prototype, "sort2", void 0);
    SortHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sort-header',
            template: __webpack_require__(/*! ./sort-header.component.html */ "./src/app/content/pages/ui/material-datatables/sort-header/sort-header.component.html"),
            styles: ["\n\t.mat-sort-header-container {\n\t  align-items: center;\n\t}\n\t.example-container {\n\t  display: flex;\n\t  flex-direction: column;\n\t  min-width: 300px;\n\t}\n\t.mat-table {\n\t  overflow: auto;\n\t  max-height: 500px;\n\t}\n\t.mat-header-cell.mat-sort-header-sorted {\n\t  color: black;\n\t}\n  ", __webpack_require__(/*! ./sort-header.component.css */ "./src/app/content/pages/ui/material-datatables/sort-header/sort-header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SortHeaderComponent);
    return SortHeaderComponent;
}());



/***/ })

}]);
//# sourceMappingURL=material-datatables-material-datatables-module.js.map