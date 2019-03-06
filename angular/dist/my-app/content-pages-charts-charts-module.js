(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["content-pages-charts-charts-module"],{

/***/ "./src/app/content/pages/charts/chartjs/chartjs.component.css":
/*!********************************************************************!*\
  !*** ./src/app/content/pages/charts/chartjs/chartjs.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvcGFnZXMvY2hhcnRzL2NoYXJ0anMvY2hhcnRqcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/content/pages/charts/chartjs/chartjs.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/content/pages/charts/chartjs/chartjs.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<subheader title='Chart.js' [breadcrumb]=\"['Charts', 'Chart.js']\"></subheader>\n\n<div class=\"alert alert-primary alert-bordered mb-4\">\n    <p>ng2-charts: Angular2 directives for Chart.js<br>See more examples in</p>\n    <a href=\"https://valor-software.com/ng2-charts\" class=\"btn btn-primary\" target=\"_blank\">Official Website</a>\n</div>\n\n<card title='Area Chart'>\n    <div>\n        <canvas baseChart height=\"300\"\n            [datasets]=\"areaChart.data\"\n            [labels]=\"areaChart.labels\"\n            [options]=\"areaChart.options\"\n            [colors]=\"areaChart.colors\"\n            [chartType]=\"areaChart.type\">\n            </canvas>\n    </div>\n</card>\n\n<card title='Bar Chart'>\n    <div>\n        <canvas baseChart height=\"300\"\n            [datasets]=\"barChart.data\"\n            [labels]=\"barChart.labels\"\n            [options]=\"barChart.options\"\n            [legend]=\"barChart.legend\"\n            [colors]=\"barChart.colors\"\n            [chartType]=\"barChart.type\"\n            (chartHover)=\"barChart.chartHovered($event)\"\n            (chartClick)=\"barChart.chartClicked($event)\">\n            </canvas>\n    </div>\n</card>\n\n<div class='row'>\n    <div class=\"col-lg-6\">\n        <card title='Line chart' fullheight='true'>\n            <div>\n                <canvas baseChart height=\"300\"\n                    [datasets]=\"lineChart2.data\"\n                    [labels]=\"lineChart2.labels\"\n                    [options]=\"lineChart2.options\"\n                    [colors]=\"lineChart2.colors\"\n                    [chartType]=\"lineChart2.type\">\n                    </canvas>\n            </div>\n        </card>\n    </div>\n    <div class=\"col-lg-6\">\n        <card title='Bar Chart' fullheight='true'>\n            <div>\n                <canvas baseChart height=\"300\"\n                    [datasets]=\"barChart2.data\"\n                    [labels]=\"barChart2.labels\"\n                    [options]=\"barChart2.options\"\n                    [legend]=\"barChart2.legend\"\n                    [colors]=\"barChart2.colors\"\n                    [chartType]=\"barChart2.type\">\n                    </canvas>\n            </div>\n        </card>\n    </div>\n</div>\n\n<card title='Line Chart'>\n    <div>\n        <canvas baseChart height=\"300\"\n            [datasets]=\"lineChart.data\"\n            [labels]=\"lineChart.labels\"\n            [options]=\"lineChart.options\"\n            [colors]=\"lineChart.colors\"\n            [chartType]=\"lineChart.type\">\n            </canvas>\n    </div>\n</card>\n\n<div class=\"row\">\n    <div class=\"col-lg-6\">\n        <card title='Area Chart' fullheight='true'>\n            <div>\n                <canvas baseChart height=\"300\"\n                    [datasets]=\"areaChart2.data\"\n                    [labels]=\"areaChart2.labels\"\n                    [options]=\"areaChart2.options\"\n                    [colors]=\"areaChart2.colors\"\n                    [chartType]=\"areaChart2.type\">\n                    </canvas>\n            </div>\n        </card>\n    </div>\n    <div class=\"col-lg-6\">\n        <card title='Line Chart' fullheight='true'>\n            <div>\n                <canvas baseChart height=\"300\"\n                    [datasets]=\"lineChart3.data\"\n                    [labels]=\"lineChart3.labels\"\n                    [options]=\"lineChart3.options\"\n                    [colors]=\"lineChart3.colors\"\n                    [chartType]=\"lineChart3.type\">\n                    </canvas>\n            </div>\n        </card>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-lg-6\">\n        <card title='Line chart' fullheight='true'>\n            <div>\n                <canvas baseChart height=\"300\"\n                    [datasets]=\"lineChart4.data\"\n                    [labels]=\"lineChart4.labels\"\n                    [options]=\"lineChart4.options\"\n                    [colors]=\"lineChart4.colors\"\n                    [chartType]=\"lineChart4.type\">\n                    </canvas>\n            </div>\n        </card>\n    </div>\n    <div class=\"col-lg-6\">\n        <card title='Area Chart' fullheight='true'>\n            <div>\n                <canvas baseChart height=\"300\"\n                    [datasets]=\"areaChart3.data\"\n                    [labels]=\"areaChart3.labels\"\n                    [options]=\"areaChart3.options\"\n                    [colors]=\"areaChart3.colors\"\n                    [chartType]=\"areaChart3.type\">\n                    </canvas>\n            </div>\n        </card>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-lg-6\">\n        <card title='Stacked bars' fullheight='true'>\n            <div>\n                <canvas baseChart height=\"300\"\n                    [datasets]=\"stackedBarChart.data\"\n                    [labels]=\"stackedBarChart.labels\"\n                    [options]=\"stackedBarChart.options\"\n                    [colors]=\"stackedBarChart.colors\"\n                    [chartType]=\"stackedBarChart.type\">\n                    </canvas>\n            </div>\n        </card>\n    </div>\n    <div class=\"col-lg-6\">\n        <card title='Stacked groups' fullheight='true'>\n            <div>\n                <canvas baseChart height=\"300\"\n                    [datasets]=\"stackedBarChart2.data\"\n                    [labels]=\"stackedBarChart2.labels\"\n                    [options]=\"stackedBarChart2.options\"\n                    [colors]=\"stackedBarChart2.colors\"\n                    [chartType]=\"stackedBarChart2.type\">\n                    </canvas>\n            </div>\n        </card>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-lg-6\">\n        <card title='Horizonal bars' fullheight='true'>\n            <div>\n                <canvas baseChart height=\"300\"\n                    [datasets]=\"horizonalBarChart.data\"\n                    [labels]=\"horizonalBarChart.labels\"\n                    [options]=\"horizonalBarChart.options\"\n                    [colors]=\"horizonalBarChart.colors\"\n                    [chartType]=\"horizonalBarChart.type\">\n                    </canvas>\n            </div>\n        </card>\n    </div>\n    <div class=\"col-lg-6\">\n        <card title='Combo bar/line chart' fullheight='true'>\n            <div>\n                <canvas baseChart height=\"300\"\n                    [datasets]=\"comboChart.data\"\n                    [labels]=\"comboChart.labels\"\n                    [options]=\"comboChart.options\"\n                    [colors]=\"comboChart.colors\"\n                    [chartType]=\"comboChart.type\">\n                    </canvas>\n            </div>\n        </card>\n    </div>\n</div>\n\n\n<div class=\"row\">\n    <div class=\"col-lg-6\">\n        <card title='Pie Chart' fullheight='true'>\n            <div>\n                <canvas baseChart height=\"250\"\n                    [data]=\"pieChart.data\"\n                    [labels]=\"pieChart.labels\"\n                    [legend]=\"pieChart.legend\"\n                    [chartType]=\"pieChart.type\"\n                    [colors]=\"pieChart.colors\"\n                    [options]=\"pieChart.options\"></canvas>\n            </div>\n        </card>\n    </div>\n    <div class=\"col-lg-6\">\n        <card title='Doughnut Chart' fullheight='true'>\n            <div>\n                <canvas baseChart height=\"250\"\n                    [data]=\"doughnutChart.data\"\n                    [labels]=\"doughnutChart.labels\"\n                    [chartType]=\"doughnutChart.type\"\n                    [legend]=\"doughnutChart.legend\"\n                    [colors]=\"doughnutChart.colors\"\n                    [options]=\"doughnutChart.options\"></canvas>\n            </div>\n        </card>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-lg-6\">\n        <card title='Polar area' fullheight='true'>\n            <div>\n                <canvas baseChart height=\"250\"\n                    [data]=\"polarAreaChart.data\"\n                    [labels]=\"polarAreaChart.labels\"\n                    [legend]=\"polarAreaChart.legend\"\n                    [chartType]=\"polarAreaChart.type\"\n                    [colors]=\"polarAreaChart.colors\"\n                    [options]=\"polarAreaChart.options\"></canvas>\n            </div>\n        </card>\n    </div>\n    <div class=\"col-lg-6\">\n        <card title='Radar Chart' fullheight='true'>\n            <div>\n                <canvas baseChart height=\"250\"\n                    [datasets]=\"radarChart.data\"\n                    [labels]=\"radarChart.labels\"\n                    [chartType]=\"radarChart.type\"\n                    [legend]=\"radarChart.legend\"\n                    [colors]=\"radarChart.colors\"\n                    [options]=\"radarChart.options\"></canvas>\n            </div>\n        </card>\n    </div>\n</div>\n\n<card title='Scatter Chart - Logarithmic scale'>\n    <div>\n        <canvas baseChart height=\"400\"\n            [datasets]=\"scatterLogXChart.data\"\n            [options]=\"scatterLogXChart.options\"\n            [legend]=\"scatterLogXChart.legend\"\n            [colors]=\"scatterLogXChart.colors\"\n            [chartType]=\"scatterLogXChart.type\">\n            </canvas>\n    </div>\n</card>\n\n<card title='Scatter Chart'>\n    <div>\n        <canvas baseChart height=\"400\"\n            [datasets]=\"scatterChart.data\"\n            [labels]=\"scatterChart.labels\"\n            [options]=\"scatterChart.options\"\n            [legend]=\"scatterChart.legend\"\n            [colors]=\"scatterChart.colors\"\n            [chartType]=\"scatterChart.type\">\n            </canvas>\n    </div>\n</card>\n\n<p>See More examples in <a class=\"btn btn-primary btn-sm ml-2\" href=\"https://valor-software.com/ng2-charts/\" target=\"_blank\">Official Website</a></p>\n"

/***/ }),

/***/ "./src/app/content/pages/charts/chartjs/chartjs.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/content/pages/charts/chartjs/chartjs.component.ts ***!
  \*******************************************************************/
/*! exports provided: ChartjsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartjsComponent", function() { return ChartjsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/config */ "./src/app/config/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChartjsComponent = /** @class */ (function () {
    function ChartjsComponent() {
    }
    ChartjsComponent.prototype.ngOnInit = function () {
        var colors = src_app_config__WEBPACK_IMPORTED_MODULE_1__["ThemeConfig"].colors;
        var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        var DAYS = ["Sunday", "Munday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var DAYS_S = ["S", "M", "T", "W", "T", "F", "S"];
        var color = Chart.helpers.color;
        var r = function (min, max) {
            if (min === void 0) { min = 1; }
            if (max === void 0) { max = 99; }
            var rand = min - 0.5 + Math.random() * (max - min + 1);
            rand = Math.round(rand);
            return rand;
        };
        /*
         * Line Chart Data
         */
        this.lineChart = {
            type: 'line',
            data: [
                { data: [30, 50, 35, 70, 58, 88, 70], label: 'Series A' },
                { data: [50, 70, 65, 100, 85, 120, 98], label: 'Series B' },
            ],
            labels: DAYS,
            legend: true,
            colors: [
                {
                    borderColor: colors.primary,
                    fill: false,
                    borderWidth: 2,
                    lineTension: 0.1,
                    pointBackgroundColor: colors.primary,
                    pointRadius: 0,
                    pointHoverRadius: 5,
                    pointHitRadius: 30,
                    borderDash: [5, 5],
                },
                {
                    borderColor: colors.danger,
                    fill: false,
                    lineTension: 0.1,
                    pointBackgroundColor: '#fff',
                    pointHitRadius: 30,
                    pointBorderWidth: 3,
                    pointHoverBorderWidth: 5,
                    pointHoverRadius: 6,
                },
            ],
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    yAxes: [{
                            ticks: {
                                beginAtZero: true,
                            }
                        }]
                },
            },
        };
        this.lineChart2 = {
            type: 'line',
            data: [
                { data: [30, 50, 35, 70, 58, 88, 70], label: 'Dataset' },
            ],
            labels: DAYS_S,
            legend: true,
            colors: [
                {
                    borderColor: colors.primary,
                    backgroundColor: color(colors.primary).alpha(0.5).rgbString(),
                    fill: false,
                    borderWidth: 4,
                    pointHitRadius: 30,
                    pointBackgroundColor: '#fff',
                    pointBorderColor: colors.primary,
                    pointHoverBorderColor: '#fff',
                    pointHoverBackgroundColor: colors.primary,
                    pointRadius: 5,
                    pointBorderWidth: 2,
                    pointHoverRadius: 7,
                },
            ],
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    yAxes: [{
                            ticks: {
                                beginAtZero: true,
                            }
                        }]
                },
            },
        };
        this.lineChart3 = {
            type: 'line',
            data: [
                { data: [30, 50, 35, 70, 58, 88, 70], label: 'Series A' },
                { data: [50, 70, 65, 100, 85, 120, 98], label: 'Series B' },
            ],
            labels: DAYS_S,
            legend: true,
            colors: [
                {
                    borderColor: colors.purple,
                    fill: false,
                    borderWidth: 4,
                    pointHitRadius: 30,
                    pointBackgroundColor: '#fff',
                    pointBorderColor: colors.purple,
                    pointHoverBorderColor: '#fff',
                    pointHoverBackgroundColor: colors.purple,
                    pointRadius: 0,
                    pointBorderWidth: 2,
                    pointHoverRadius: 6,
                },
                {
                    borderColor: colors.pink,
                    fill: false,
                    borderWidth: 4,
                    pointHitRadius: 30,
                    pointBackgroundColor: '#fff',
                    pointBorderColor: colors.pink,
                    pointRadius: 0,
                    pointBorderWidth: 2,
                    pointHoverRadius: 6,
                },
            ],
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    yAxes: [{
                            ticks: {
                                beginAtZero: true,
                            }
                        }]
                },
            },
        };
        this.lineChart4 = {
            type: 'line',
            data: [
                { data: [30, 50, 35, 70, 58, 88, 70], label: 'Dataset' },
            ],
            labels: DAYS_S,
            legend: true,
            colors: [
                {
                    borderColor: colors.primary,
                    borderWidth: 2,
                    fill: false,
                    lineTension: 0.1,
                    pointHitRadius: 30,
                    pointBackgroundColor: colors.primary,
                    pointBorderColor: colors.primary,
                    pointHoverBorderWidth: 5,
                }
            ],
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    yAxes: [{
                            ticks: {
                                beginAtZero: true,
                            }
                        }]
                },
            },
        };
        /*
         * Bar Chart Data
         */
        this.barChart = {
            type: 'bar',
            data: [
                { data: [65, 59, 80, 81, 56, 55, 40, 20, 55], label: 'Series A' },
                { data: [28, 48, 40, 19, 86, 27, 90, 30, 70], label: 'Series B' }
            ],
            labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
            legend: true,
            colors: [
                { backgroundColor: colors.primary },
                { backgroundColor: colors.purple },
            ],
            options: {
                scaleShowVerticalLines: false,
                responsive: true,
                maintainAspectRatio: false,
            },
            chartClicked: function (e) {
                console.log(e);
            },
            chartHovered: function (e) {
                console.log(e);
            }
        };
        this.barChart2 = {
            type: 'bar',
            data: [
                { data: [28, 58, 50, 19, 86, 37, 90, 42, 70], label: 'Series B' }
            ],
            labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014'],
            legend: true,
            colors: [
                { backgroundColor: colors.pink },
            ],
            options: {
                scaleShowVerticalLines: false,
                responsive: true,
                maintainAspectRatio: false,
            },
        };
        /*
         * Area Chart Data
         */
        this.areaChart = {
            type: 'line',
            data: [
                { data: [20, 18, 40, 50, 35, 24, 40], label: 'Series A' },
                { data: [28, 48, 24, 35, 70, 33, 32], label: 'Series B' }
            ],
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            legend: true,
            colors: [
                {
                    backgroundColor: color(colors.primary).alpha(0.5).rgbString(),
                    borderColor: 'transparent',
                    pointBackgroundColor: '#fff',
                    pointBorderColor: colors.primary,
                    pointHoverBorderColor: '#fff',
                    pointHoverBackgroundColor: colors.primary,
                    pointHitRadius: 30,
                    pointBorderWidth: 2,
                    pointRadius: 4,
                    pointHoverRadius: 6,
                },
                {
                    backgroundColor: color(colors.purple).alpha(0.7).rgbString(),
                    borderColor: 'transparent',
                    pointBackgroundColor: '#fff',
                    pointBorderColor: colors.purple,
                    pointHoverBorderColor: '#fff',
                    pointHoverBackgroundColor: colors.purple,
                    pointHitRadius: 30,
                    pointBorderWidth: 2,
                    pointRadius: 4,
                    pointHoverRadius: 6,
                },
            ],
            options: {
                responsive: true,
                maintainAspectRatio: false,
            },
        };
        this.areaChart2 = {
            type: 'line',
            data: [
                { data: [30, 50, 35, 70, 58, 88, 70], label: 'Dataset' },
            ],
            labels: DAYS_S,
            legend: true,
            colors: [
                {
                    borderColor: colors.purple,
                    backgroundColor: color(colors.purple).alpha(0.5).rgbString(),
                    borderWidth: 4,
                    pointHitRadius: 30,
                    pointBackgroundColor: '#fff',
                    pointBorderColor: colors.purple,
                    pointRadius: 6,
                    pointBorderWidth: 2,
                    pointHoverRadius: 8,
                },
            ],
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    yAxes: [{
                            ticks: {
                                beginAtZero: true,
                            }
                        }]
                },
            },
        };
        this.areaChart3 = {
            type: 'line',
            data: [
                {
                    data: [50, 80, 28, 61, 28, 75, 12],
                    label: 'Dataset',
                    fill: 'start',
                },
            ],
            labels: DAYS_S,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                spanGaps: false,
                elements: {
                    line: {
                        tension: 0.000001
                    }
                },
            },
            colors: [{
                    backgroundColor: color(colors.primary).alpha(0.4).rgbString(),
                    borderColor: colors.primary,
                    pointHitRadius: 30,
                    pointBackgroundColor: colors.primary,
                    pointBorderColor: colors.primary,
                    pointHoverBorderWidth: 5,
                }],
        };
        /*
         * Horizonal Bars Chart Data
         */
        this.horizonalBarChart = {
            type: 'horizontalBar',
            data: [
                {
                    data: [r(-100, 100), r(-100, 100), r(-100, 100), r(-100, 100), r(-100, 100), r(-100, 100), r(-100, 100),],
                    label: 'Dataset 1',
                },
                {
                    data: [r(-100, 100), r(-100, 100), r(-100, 100), r(-100, 100), r(-100, 100), r(-100, 100), r(-100, 100),],
                    label: 'Dataset 2',
                },
            ],
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            options: {
                scaleShowVerticalLines: false,
                responsive: true,
                maintainAspectRatio: false,
            },
            colors: [
                {
                    backgroundColor: colors.primary,
                    borderColor: colors.primary,
                },
                {
                    backgroundColor: colors.danger,
                    borderColor: colors.danger,
                },
            ],
        };
        /*
         * Stacked Bars Chart Data
         */
        this.stackedBarChart = {
            type: 'bar',
            data: [
                {
                    data: [r(-100, 100), r(-100, 100), r(-100, 100), r(), r(-100, 100), r(-100, 100), r(-100, 100)],
                    label: 'Dataset 1',
                },
                {
                    data: [r(-100, 100), r(-100, 100), r(-100, 100), r(), r(-100, 100), r(-100, 100), r(-100, 100)],
                    label: 'Dataset 2',
                },
                {
                    data: [r(-100, 100), r(-100, 100), r(-100, 100), r(), r(-100, 100), r(-100, 100), r(-100, 100)],
                    label: 'Dataset 3',
                },
            ],
            labels: DAYS_S,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    xAxes: [{
                            stacked: true,
                        }],
                    yAxes: [{
                            stacked: true
                        }]
                }
            },
            colors: [
                {
                    backgroundColor: colors.primary,
                },
                {
                    backgroundColor: colors.success,
                },
                {
                    backgroundColor: colors.danger,
                },
            ],
        };
        this.stackedBarChart2 = {
            type: 'bar',
            data: [
                {
                    data: [r(), r(), r(), r(), r(), r(), r()],
                    label: 'Dataset 1',
                    stack: 'Stack 0'
                },
                {
                    data: [r(), r(), r(), r(), r(), r(), r()],
                    label: 'Dataset 2',
                    stack: 'Stack 0'
                },
                {
                    data: [r(), r(), r(), r(), r(), r(), r()],
                    label: 'Dataset 3',
                    stack: 'Stack 1'
                },
            ],
            labels: DAYS_S,
            options: {
                scaleShowVerticalLines: false,
                responsive: true,
                maintainAspectRatio: false,
            },
            colors: [
                {
                    backgroundColor: colors.primary,
                },
                {
                    backgroundColor: colors.success,
                },
                {
                    backgroundColor: colors.warning,
                },
            ],
        };
        /*
         * Combo Chart Data
         */
        this.comboChart = {
            type: 'bar',
            data: [
                {
                    type: 'line',
                    data: [r(-100, 100), r(-100, 100), r(-100, 100), r(-100, 100), r(-100, 100), r(-100, 100), r(-100, 100),],
                    label: 'Dataset 1',
                    fill: false,
                    borderWidth: 2,
                },
                {
                    data: [r(-100, 100), r(-100, 100), r(-100, 100), r(-100, 100), r(-100, 100), r(-100, 100), r(-100, 100),],
                    label: 'Dataset 2',
                },
                {
                    data: [r(-100, 100), r(-100, 100), r(-100, 100), r(-100, 100), r(-100, 100), r(-100, 100), r(-100, 100),],
                    label: 'Dataset 3',
                },
            ],
            labels: DAYS_S,
            options: {
                scaleShowVerticalLines: false,
                responsive: true,
                maintainAspectRatio: false,
            },
            colors: [
                {
                    borderColor: colors.primary,
                },
                {
                    backgroundColor: colors.purple,
                },
                {
                    backgroundColor: colors.pink,
                },
            ],
        };
        /*
         * Pie Chart Data
         */
        this.pieChart = {
            type: 'pie',
            data: [300, 500, 100],
            labels: ['Download Sales', 'In-Store Sales', 'Mail Sales'],
            legend: true,
            colors: [{ backgroundColor: [colors.primary, colors.purple, colors.danger] }],
            options: {
                maintainAspectRatio: false
            }
        };
        /*
         * Doughnut Chart Data
         */
        this.doughnutChart = {
            type: 'doughnut',
            data: [350, 450, 100],
            labels: ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'],
            colors: [{ backgroundColor: [colors.primary, colors.purple, colors.danger] }],
            legend: true,
            options: {
                maintainAspectRatio: false
            }
        };
        /*
         * Polar Area Chart Data
         */
        this.polarAreaChart = {
            type: 'polarArea',
            data: [300, 500, 120, 80, 150],
            labels: ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'],
            legend: true,
            colors: [{ backgroundColor: [colors.primary, colors.purple, colors.danger, colors.success, colors.warning] }],
            options: {
                maintainAspectRatio: false
            }
        };
        /*
         * Radar Chart Data
         */
        this.radarChart = {
            type: 'radar',
            data: [
                { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
                { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
            ],
            labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
            legend: true,
            colors: [
                { backgroundColor: color(colors.primary).alpha(0.5).rgbString(), borderColor: colors.primary },
                { backgroundColor: color(colors.purple).alpha(0.5).rgbString(), borderColor: colors.purple }
            ],
            options: {
                maintainAspectRatio: false
            }
        };
        /*
         * Scatter Chart Data
         */
        this.scatterChart = {
            type: 'scatter',
            data: [
                {
                    label: 'My First dataset',
                    data: [{
                            x: r(-100, 100),
                            y: r(-100, 100),
                        }, {
                            x: r(-100, 100),
                            y: r(-100, 100),
                        }, {
                            x: r(-100, 100),
                            y: r(-100, 100),
                        }, {
                            x: r(-100, 100),
                            y: r(-100, 100),
                        }, {
                            x: r(-100, 100),
                            y: r(-100, 100),
                        }, {
                            x: r(-100, 100),
                            y: r(-100, 100),
                        }, {
                            x: r(-100, 100),
                            y: r(-100, 100),
                        }]
                },
                {
                    label: 'My Second dataset',
                    data: [{
                            x: r(-100, 100),
                            y: r(-100, 100),
                        }, {
                            x: r(-100, 100),
                            y: r(-100, 100),
                        }, {
                            x: r(-100, 100),
                            y: r(-100, 100),
                        }, {
                            x: r(-100, 100),
                            y: r(-100, 100),
                        }, {
                            x: r(-100, 100),
                            y: r(-100, 100),
                        }, {
                            x: r(-100, 100),
                            y: r(-100, 100),
                        }, {
                            x: r(-100, 100),
                            y: r(-100, 100),
                        }]
                }
            ],
            legend: true,
            colors: [
                {
                    borderColor: 'transparent',
                    backgroundColor: color(colors.danger).alpha(0.5).rgbString(),
                    pointBackgroundColor: '#FFF',
                    pointBorderColor: colors.danger,
                    pointHoverBackgroundColor: colors.danger,
                    pointHitRadius: 30,
                    pointBorderWidth: 2,
                    pointRadius: 4,
                    pointHoverRadius: 6,
                },
                {
                    borderColor: 'transparent',
                    backgroundColor: color(colors.primary).alpha(0.5).rgbString(),
                    pointBackgroundColor: '#FFF',
                    pointBorderColor: colors.primary,
                    pointHoverBackgroundColor: colors.primary,
                    pointHitRadius: 30,
                    pointBorderWidth: 2,
                    pointRadius: 4,
                    pointHoverRadius: 6,
                },
            ],
            options: {
                maintainAspectRatio: false,
                title: {
                    display: true,
                    text: 'Chart.js Scatter Chart'
                },
            }
        };
        /*
         * Scatter Logarithmic scale Chart Data
         */
        this.scatterLogXChart = {
            type: 'scatter',
            data: [
                {
                    label: 'V(node2)',
                    data: [{
                            x: 1,
                            y: -1.711e-2,
                        }, {
                            x: 1.26,
                            y: -2.708e-2,
                        }, {
                            x: 1.58,
                            y: -4.285e-2,
                        }, {
                            x: 2.0,
                            y: -6.772e-2,
                        }, {
                            x: 2.51,
                            y: -1.068e-1,
                        }, {
                            x: 3.16,
                            y: -1.681e-1,
                        }, {
                            x: 3.98,
                            y: -2.635e-1,
                        }, {
                            x: 5.01,
                            y: -4.106e-1,
                        }, {
                            x: 6.31,
                            y: -6.339e-1,
                        }, {
                            x: 7.94,
                            y: -9.659e-1,
                        }, {
                            x: 10.00,
                            y: -1.445,
                        }, {
                            x: 12.6,
                            y: -2.110,
                        }, {
                            x: 15.8,
                            y: -2.992,
                        }, {
                            x: 20.0,
                            y: -4.102,
                        }, {
                            x: 25.1,
                            y: -5.429,
                        }, {
                            x: 31.6,
                            y: -6.944,
                        }, {
                            x: 39.8,
                            y: -8.607,
                        }, {
                            x: 50.1,
                            y: -1.038e1,
                        }, {
                            x: 63.1,
                            y: -1.223e1,
                        }, {
                            x: 79.4,
                            y: -1.413e1,
                        }, {
                            x: 100.00,
                            y: -1.607e1,
                        }, {
                            x: 126,
                            y: -1.803e1,
                        }, {
                            x: 158,
                            y: -2e1,
                        }, {
                            x: 200,
                            y: -2.199e1,
                        }, {
                            x: 251,
                            y: -2.398e1,
                        }, {
                            x: 316,
                            y: -2.597e1,
                        }, {
                            x: 398,
                            y: -2.797e1,
                        }, {
                            x: 501,
                            y: -2.996e1,
                        }, {
                            x: 631,
                            y: -3.196e1,
                        }, {
                            x: 794,
                            y: -3.396e1,
                        }, {
                            x: 1000,
                            y: -3.596e1,
                        }],
                }
            ],
            labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
            legend: true,
            colors: [
                {
                    borderColor: 'transparent',
                    backgroundColor: color(colors.primary).alpha(0.5).rgbString(),
                    pointBackgroundColor: '#FFF',
                    pointBorderColor: colors.primary,
                    pointHoverBackgroundColor: colors.primary,
                    pointHitRadius: 30,
                    pointBorderWidth: 2,
                    pointRadius: 4,
                    pointHoverRadius: 6,
                },
            ],
            options: {
                maintainAspectRatio: false,
                title: {
                    display: true,
                    text: 'Chart.js Scatter Chart - Logarithmic X-Axis'
                },
                scales: {
                    xAxes: [{
                            type: 'logarithmic',
                            position: 'bottom',
                            ticks: {
                                userCallback: function (tick) {
                                    var remain = tick / (Math.pow(10, Math.floor(Chart.helpers.log10(tick))));
                                    if (remain === 1 || remain === 2 || remain === 5) {
                                        return tick.toString() + 'Hz';
                                    }
                                    return '';
                                },
                            },
                            scaleLabel: {
                                labelString: 'Frequency',
                                display: true,
                            },
                        }],
                    yAxes: [{
                            type: 'linear',
                            ticks: {
                                userCallback: function (tick) {
                                    return tick.toString() + 'dB';
                                }
                            },
                            scaleLabel: {
                                labelString: 'Voltage',
                                display: true
                            },
                        }]
                }
            }
        };
    };
    ChartjsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chartjs',
            template: __webpack_require__(/*! ./chartjs.component.html */ "./src/app/content/pages/charts/chartjs/chartjs.component.html"),
            styles: [__webpack_require__(/*! ./chartjs.component.css */ "./src/app/content/pages/charts/chartjs/chartjs.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ChartjsComponent);
    return ChartjsComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/charts/charts.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/content/pages/charts/charts.module.ts ***!
  \*******************************************************/
/*! exports provided: ThemeChartsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeChartsModule", function() { return ThemeChartsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_core_components_card_card_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/components/card/card.module */ "./src/app/core/components/card/card.module.ts");
/* harmony import */ var src_app_content_layout_components_subheader_subheader_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/content/layout/components/subheader/subheader.module */ "./src/app/content/layout/components/subheader/subheader.module.ts");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/esm.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/index.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng2_charts__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _chartjs_chartjs_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chartjs/chartjs.component */ "./src/app/content/pages/charts/chartjs/chartjs.component.ts");
/* harmony import */ var _ngx_charts_ngx_charts_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ngx-charts/ngx-charts.component */ "./src/app/content/pages/charts/ngx-charts/ngx-charts.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: 'chartjs',
        component: _chartjs_chartjs_component__WEBPACK_IMPORTED_MODULE_7__["ChartjsComponent"],
    },
    {
        path: 'ngx-charts',
        component: _ngx_charts_ngx_charts_component__WEBPACK_IMPORTED_MODULE_8__["NgxChartsComponent"],
    },
];
var ThemeChartsModule = /** @class */ (function () {
    function ThemeChartsModule() {
    }
    ThemeChartsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                src_app_core_components_card_card_module__WEBPACK_IMPORTED_MODULE_3__["CardModule"],
                src_app_content_layout_components_subheader_subheader_module__WEBPACK_IMPORTED_MODULE_4__["SubheaderModule"],
                _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_5__["NgxChartsModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_6__["ChartsModule"],
            ],
            declarations: [_chartjs_chartjs_component__WEBPACK_IMPORTED_MODULE_7__["ChartjsComponent"], _ngx_charts_ngx_charts_component__WEBPACK_IMPORTED_MODULE_8__["NgxChartsComponent"]]
        })
    ], ThemeChartsModule);
    return ThemeChartsModule;
}());



/***/ }),

/***/ "./src/app/content/pages/charts/ngx-charts/charts-data.ts":
/*!****************************************************************!*\
  !*** ./src/app/content/pages/charts/ngx-charts/charts-data.ts ***!
  \****************************************************************/
/*! exports provided: lineChartMulti, areaChartMulti, barChartSingle, barChartmulti, pieChartSingle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineChartMulti", function() { return lineChartMulti; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "areaChartMulti", function() { return areaChartMulti; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "barChartSingle", function() { return barChartSingle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "barChartmulti", function() { return barChartmulti; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pieChartSingle", function() { return pieChartSingle; });
//Line Chart
var lineChartMulti = [
    {
        "name": "Spain",
        "series": [
            {
                "value": 6708,
                "name": "2016-09-19T17:25:06.233Z"
            },
            {
                "value": 6858,
                "name": "2016-09-17T01:40:38.571Z"
            },
            {
                "value": 5341,
                "name": "2016-09-20T15:17:21.028Z"
            },
            {
                "value": 3415,
                "name": "2016-09-13T19:58:33.509Z"
            },
            {
                "value": 5665,
                "name": "2016-09-23T19:51:43.561Z"
            }
        ]
    },
    {
        "name": "Maldives",
        "series": [
            {
                "value": 6975,
                "name": "2016-09-19T17:25:06.233Z"
            },
            {
                "value": 4681,
                "name": "2016-09-17T01:40:38.571Z"
            },
            {
                "value": 5257,
                "name": "2016-09-20T15:17:21.028Z"
            },
            {
                "value": 5741,
                "name": "2016-09-13T19:58:33.509Z"
            },
            {
                "value": 6199,
                "name": "2016-09-23T19:51:43.561Z"
            }
        ]
    },
    {
        "name": "Argentina",
        "series": [
            {
                "value": 2276,
                "name": "2016-09-19T17:25:06.233Z"
            },
            {
                "value": 3348,
                "name": "2016-09-17T01:40:38.571Z"
            },
            {
                "value": 5473,
                "name": "2016-09-20T15:17:21.028Z"
            },
            {
                "value": 6768,
                "name": "2016-09-13T19:58:33.509Z"
            },
            {
                "value": 2121,
                "name": "2016-09-23T19:51:43.561Z"
            }
        ]
    },
    {
        "name": "Bulgaria",
        "series": [
            {
                "value": 6814,
                "name": "2016-09-19T17:25:06.233Z"
            },
            {
                "value": 4449,
                "name": "2016-09-17T01:40:38.571Z"
            },
            {
                "value": 3261,
                "name": "2016-09-20T15:17:21.028Z"
            },
            {
                "value": 6110,
                "name": "2016-09-13T19:58:33.509Z"
            },
            {
                "value": 3852,
                "name": "2016-09-23T19:51:43.561Z"
            }
        ]
    },
    {
        "name": "Albania",
        "series": [
            {
                "value": 3709,
                "name": "2016-09-19T17:25:06.233Z"
            },
            {
                "value": 2483,
                "name": "2016-09-17T01:40:38.571Z"
            },
            {
                "value": 3188,
                "name": "2016-09-20T15:17:21.028Z"
            },
            {
                "value": 4902,
                "name": "2016-09-13T19:58:33.509Z"
            },
            {
                "value": 5809,
                "name": "2016-09-23T19:51:43.561Z"
            }
        ]
    }
];
//Area Chart
var areaChartMulti = [
    {
        "name": "Germany",
        "series": [
            {
                "name": "2010",
                "value": 28
            },
            {
                "name": "2011",
                "value": 48
            },
            {
                "name": "2012",
                "value": 40
            },
            {
                "name": "2013",
                "value": 35
            },
            {
                "name": "2014",
                "value": 70
            },
            {
                "name": "2015",
                "value": 33
            },
            {
                "name": "2016",
                "value": 30
            }
        ]
    },
    {
        "name": "USA",
        "series": [
            {
                "name": "2010",
                "value": 20
            },
            {
                "name": "2011",
                "value": 18
            },
            {
                "name": "2012",
                "value": 40
            },
            {
                "name": "2013",
                "value": 50
            },
            {
                "name": "2014",
                "value": 35
            },
            {
                "name": "2015",
                "value": 24
            },
            {
                "name": "2016",
                "value": 40
            }
        ]
    },
];
//Bar chart Data
var barChartSingle = [
    {
        "name": "Germany",
        "value": 550
    },
    {
        "name": "USA",
        "value": 820
    },
    {
        "name": "India",
        "value": 720
    },
    {
        "name": "Australia",
        "value": 620
    },
    {
        "name": "France",
        "value": 750
    },
    {
        "name": "Spain",
        "value": 500
    },
];
var barChartmulti = [
    {
        "name": "Germany",
        "series": [
            {
                "name": "2010",
                "value": 40632
            },
            {
                "name": "2000",
                "value": 36953
            },
            {
                "name": "1990",
                "value": 31476
            }
        ]
    },
    {
        "name": "United States",
        "series": [
            {
                "name": "2010",
                "value": 49737
            },
            {
                "name": "2000",
                "value": 45986
            },
            {
                "name": "1990",
                "value": 37060
            }
        ]
    },
    {
        "name": "France",
        "series": [
            {
                "name": "2010",
                "value": 36745
            },
            {
                "name": "2000",
                "value": 34774
            },
            {
                "name": "1990",
                "value": 29476
            }
        ]
    },
    {
        "name": "United Kingdom",
        "series": [
            {
                "name": "2010",
                "value": 36240
            },
            {
                "name": "2000",
                "value": 32543
            },
            {
                "name": "1990",
                "value": 26424
            }
        ]
    },
    {
        "name": "Spain",
        "series": [
            {
                "name": "2010",
                "value": 49737
            },
            {
                "name": "2000",
                "value": 45986
            },
            {
                "name": "1990",
                "value": 37060
            }
        ]
    },
];
//Pie chart Data
var pieChartSingle = [
    {
        "name": "India",
        "value": 40632
    },
    {
        "name": "France",
        "value": 36745
    },
    {
        "name": "Spain",
        "value": 33000
    },
    {
        "name": "Italy",
        "value": 35800
    },
    {
        "name": "UK",
        "value": 46060
    },
    {
        "name": "Brazil",
        "value": 56438
    }
];


/***/ }),

/***/ "./src/app/content/pages/charts/ngx-charts/ngx-charts.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/content/pages/charts/ngx-charts/ngx-charts.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<subheader title='NGX Charts' [breadcrumb]=\"['Charts', 'NGX Charts']\"></subheader>\n\n<div class=\"alert alert-primary alert-bordered mb-4\">\n  <p>Declarative Charting Framework for Angular.<br>See more examples in <a class=\"text-underline\" href=\"https://swimlane.github.io/ngx-charts/\" target=\"_blank\">demos</a></p>\n  <a href=\"https://github.com/swimlane/ngx-charts\" class=\"btn btn-primary\" target=\"_blank\">Official Website</a>\n</div>\n\n<card title='Area Chart'>\n    <div style=\"height: 400px\">\n        <ngx-charts-area-chart\n          [scheme]=\"areaChart.colorScheme\"\n          [results]=\"areaChart.data\"\n          [gradient]=\"areaChart.gradient\"\n          [xAxis]=\"areaChart.showXAxis\"\n          [yAxis]=\"areaChart.showYAxis\"\n          [legend]=\"areaChart.showLegend\"\n          [showXAxisLabel]=\"areaChart.showXAxisLabel\"\n          [showYAxisLabel]=\"areaChart.showYAxisLabel\"\n          [xAxisLabel]=\"areaChart.xAxisLabel\"\n          [yAxisLabel]=\"areaChart.yAxisLabel\"\n          [autoScale]=\"areaChart.autoScale\"\n          [curve]=\"areaChart.lineInterpolation\">\n        </ngx-charts-area-chart>\n    </div>\n</card>\n\n<card title='Area Chart'>\n    <div style=\"height: 400px\">\n        <ngx-charts-area-chart\n          [scheme]=\"areaChart2.colorScheme\"\n          [results]=\"areaChart2.data\"\n          [gradient]=\"areaChart2.gradient\"\n          [xAxis]=\"areaChart2.showXAxis\"\n          [yAxis]=\"areaChart2.showYAxis\"\n          [legend]=\"areaChart2.showLegend\"\n          [showXAxisLabel]=\"areaChart2.showXAxisLabel\"\n          [showYAxisLabel]=\"areaChart2.showYAxisLabel\"\n          [xAxisLabel]=\"areaChart2.xAxisLabel\"\n          [yAxisLabel]=\"areaChart2.yAxisLabel\"\n          [autoScale]=\"areaChart2.autoScale\">\n        </ngx-charts-area-chart>\n    </div>\n</card>\n\n<card title='Line Chart'>\n    <div style=\"height: 400px\">\n        <ngx-charts-line-chart\n          [scheme]=\"lineChart.colorScheme\"\n          [results]=\"lineChart.data\"\n          [gradient]=\"lineChart.gradient\"\n          [xAxis]=\"lineChart.showXAxis\"\n          [yAxis]=\"lineChart.showYAxis\"\n          [legend]=\"lineChart.showLegend\"\n          [showXAxisLabel]=\"lineChart.showXAxisLabel\"\n          [showYAxisLabel]=\"lineChart.showYAxisLabel\"\n          [xAxisLabel]=\"lineChart.xAxisLabel\"\n          [yAxisLabel]=\"lineChart.yAxisLabel\"\n          [autoScale]=\"lineChart.autoScale\">\n        </ngx-charts-line-chart>\n    </div>\n</card>\n\n<div class=\"row\">\n    <div class=\"col-lg-6\">\n        <card title='Bar Chart' fullheight='true'>\n            <div style=\"height: 350px\">\n                <ngx-charts-bar-vertical\n                  [scheme]=\"barChart.colorScheme\"\n                  [results]=\"barChart.data\"\n                  [gradient]=\"barChart.gradient\"\n                  [xAxis]=\"barChart.showXAxis\"\n                  [yAxis]=\"barChart.showYAxis\"\n                  [legend]=\"barChart.showLegend\"\n                  [showXAxisLabel]=\"barChart.showXAxisLabel\"\n                  [showYAxisLabel]=\"barChart.showYAxisLabel\"\n                  [xAxisLabel]=\"barChart.xAxisLabel\"\n                  [yAxisLabel]=\"barChart.yAxisLabel\"\n                  barPadding=\"15\">\n                </ngx-charts-bar-vertical>\n            </div>\n        </card>\n    </div>\n    <div class=\"col-lg-6\">\n        <card title='Grouped Bar Chart' fullheight='true'>\n            <div style=\"height: 350px\">\n                <ngx-charts-bar-vertical-2d\n                  [scheme]=\"barChart_grouped.colorScheme\"\n                  [results]=\"barChart_grouped.data\"\n                  [gradient]=\"barChart_grouped.gradient\"\n                  [xAxis]=\"barChart_grouped.showXAxis\"\n                  [yAxis]=\"barChart_grouped.showYAxis\"\n                  [legend]=\"barChart_grouped.showLegend\"\n                  [showXAxisLabel]=\"barChart_grouped.showXAxisLabel\"\n                  [showYAxisLabel]=\"barChart_grouped.showYAxisLabel\"\n                  [xAxisLabel]=\"barChart_grouped.xAxisLabel\"\n                  [yAxisLabel]=\"barChart_grouped.yAxisLabel\">\n                </ngx-charts-bar-vertical-2d>\n            </div>\n        </card>\n    </div>\n</div>\n\n<card title='Grouped Bar Chart'>\n    <div style=\"height: 350px\">\n        <ngx-charts-bar-vertical-2d\n          [scheme]=\"barChart_grouped2.colorScheme\"\n          [results]=\"barChart_grouped2.data\"\n          [gradient]=\"barChart_grouped2.gradient\"\n          [xAxis]=\"barChart_grouped2.showXAxis\"\n          [yAxis]=\"barChart_grouped2.showYAxis\"\n          [legend]=\"barChart_grouped2.showLegend\"\n          [showXAxisLabel]=\"barChart_grouped2.showXAxisLabel\"\n          [showYAxisLabel]=\"barChart_grouped2.showYAxisLabel\"\n          [xAxisLabel]=\"barChart_grouped2.xAxisLabel\"\n          [yAxisLabel]=\"barChart_grouped2.yAxisLabel\">\n        </ngx-charts-bar-vertical-2d>\n    </div>\n</card>\n\n<card title='Horizonal Bar Chart'>\n    <div style=\"height: 350px\">\n        <ngx-charts-bar-horizontal\n          [scheme]=\"barChart_horizonal.colorScheme\"\n          [results]=\"barChart_horizonal.data\"\n          [gradient]=\"barChart_horizonal.gradient\"\n          [xAxis]=\"barChart_horizonal.showXAxis\"\n          [yAxis]=\"barChart_horizonal.showYAxis\"\n          [legend]=\"barChart_horizonal.showLegend\"\n          [showXAxisLabel]=\"barChart_horizonal.showXAxisLabel\"\n          [showYAxisLabel]=\"barChart_horizonal.showYAxisLabel\"\n          [xAxisLabel]=\"barChart_horizonal.xAxisLabel\"\n          [yAxisLabel]=\"barChart_horizonal.yAxisLabel\">\n        </ngx-charts-bar-horizontal>\n    </div>\n</card>\n<card title='Horizonal Bar Chart'>\n    <div style=\"height: 350px\">\n        <ngx-charts-bar-horizontal-2d\n          [scheme]=\"barChart_grouped_horizontal.colorScheme\"\n          [results]=\"barChart_grouped_horizontal.data\"\n          [gradient]=\"barChart_grouped_horizontal.gradient\"\n          [xAxis]=\"barChart_grouped_horizontal.showXAxis\"\n          [yAxis]=\"barChart_grouped_horizontal.showYAxis\"\n          [legend]=\"barChart_grouped_horizontal.showLegend\"\n          [showXAxisLabel]=\"barChart_grouped_horizontal.showXAxisLabel\"\n          [showYAxisLabel]=\"barChart_grouped_horizontal.showYAxisLabel\"\n          [xAxisLabel]=\"barChart_grouped_horizontal.xAxisLabel\"\n          [yAxisLabel]=\"barChart_grouped_horizontal.yAxisLabel\"\n          groupPadding=\"25\">\n        </ngx-charts-bar-horizontal-2d>\n    </div>\n</card>\n\n<card title='Pie Chart'>\n    <div style=\"height: 350px\">\n        <ngx-charts-pie-chart\n          [results]=\"pieChart.data\"\n          [scheme]=\"pieChart.colorScheme\"\n          [gradient]=\"pieChart.gradient\"\n          [legend]=\"pieChart.showLegend\"\n          [labels]=\"pieChart.showLabels\" \n          [explodeSlices]=\"pieChart.explodeSlices\"\n          [doughnut]=\"pieChart.doughnut\">\n        </ngx-charts-pie-chart>\n    </div>\n</card>\n\n<card title='Advanced Pie Chart'>\n    <div style=\"height: 350px;\">\n        <ngx-charts-advanced-pie-chart\n          [results]=\"advancedPieChart.data\"\n          [scheme]=\"advancedPieChart.colorScheme\"\n          [gradient]=\"advancedPieChart.gradient\">\n        </ngx-charts-advanced-pie-chart>\n    </div>\n</card>\n\n<div class=\"row\">\n    <div class=\"col-lg-6\">\n        <card title='Doughnut option' fullheight='true'>\n            <div style=\"height: 350px\">\n                <ngx-charts-pie-chart\n                  [results]=\"pieChart2.data\"\n                  [scheme]=\"pieChart2.colorScheme\"\n                  [gradient]=\"pieChart2.gradient\"\n                  [legend]=\"pieChart2.showLegend\"\n                  [labels]=\"pieChart2.showLabels\" \n                  [explodeSlices]=\"pieChart2.explodeSlices\"\n                  [doughnut]=\"pieChart2.doughnut\">\n                </ngx-charts-pie-chart>\n            </div>\n        </card>\n    </div>\n    <div class=\"col-lg-6\">\n        <card title='Explode Slices option' fullheight='true'>\n            <div style=\"height: 350px\">\n                <ngx-charts-pie-chart\n                  [results]=\"pieChart3.data\"\n                  [scheme]=\"pieChart3.colorScheme\"\n                  [gradient]=\"pieChart3.gradient\"\n                  [legend]=\"pieChart3.showLegend\"\n                  [labels]=\"pieChart3.showLabels\" \n                  [explodeSlices]=\"pieChart3.explodeSlices\"\n                  [doughnut]=\"pieChart3.doughnut\">\n                </ngx-charts-pie-chart>\n            </div>\n        </card>\n    </div>\n</div>\n\n<card title='Pie Grid'>\n    <div class=\"mx-auto\" style=\"height: 350px; max-width: 800px\">\n        <ngx-charts-pie-grid\n          [results]=\"pieGrid.data\"\n          [scheme]=\"pieGrid.colorScheme\">\n        </ngx-charts-pie-grid>\n    </div>\n</card>\n\n<p>See More examples in <a class=\"btn btn-primary btn-sm ml-2\" href=\"https://swimlane.github.io/ngx-charts/#/ngx-charts/bar-vertical\" target=\"_blank\">Official Website</a></p>\n"

/***/ }),

/***/ "./src/app/content/pages/charts/ngx-charts/ngx-charts.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/content/pages/charts/ngx-charts/ngx-charts.component.ts ***!
  \*************************************************************************/
/*! exports provided: NgxChartsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxChartsComponent", function() { return NgxChartsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/config */ "./src/app/config/index.ts");
/* harmony import */ var _charts_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./charts-data */ "./src/app/content/pages/charts/ngx-charts/charts-data.ts");
/* harmony import */ var d3_shape__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-shape */ "./node_modules/d3-shape/src/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NgxChartsComponent = /** @class */ (function () {
    function NgxChartsComponent() {
        //Chart Data
        this.barChartSingle = _charts_data__WEBPACK_IMPORTED_MODULE_2__["barChartSingle"];
        this.lineChartMulti = _charts_data__WEBPACK_IMPORTED_MODULE_2__["lineChartMulti"];
        this.areaChartMulti = _charts_data__WEBPACK_IMPORTED_MODULE_2__["areaChartMulti"];
        this.barChartmulti = _charts_data__WEBPACK_IMPORTED_MODULE_2__["barChartmulti"];
        this.pieChartSingle = _charts_data__WEBPACK_IMPORTED_MODULE_2__["pieChartSingle"];
    }
    NgxChartsComponent.prototype.ngOnInit = function () {
        var colors = src_app_config__WEBPACK_IMPORTED_MODULE_1__["ThemeConfig"].colors;
        /*
         * Area Chart Data
         */
        this.areaChart = {
            colorScheme: {
                domain: [colors.primary, colors.purple]
            },
            data: _charts_data__WEBPACK_IMPORTED_MODULE_2__["areaChartMulti"],
            gradient: false,
            showXAxis: true,
            showYAxis: true,
            showLegend: false,
            showXAxisLabel: true,
            showYAxisLabel: true,
            xAxisLabel: 'Country',
            yAxisLabel: 'Population',
            autoScale: true,
            lineInterpolation: d3_shape__WEBPACK_IMPORTED_MODULE_3__["curveBasis"],
        };
        this.areaChart2 = {
            colorScheme: {
                domain: [colors.primary, colors.purple]
            },
            data: _charts_data__WEBPACK_IMPORTED_MODULE_2__["areaChartMulti"],
            gradient: false,
            showXAxis: true,
            showYAxis: true,
            showLegend: false,
            showXAxisLabel: true,
            showYAxisLabel: true,
            xAxisLabel: 'Country',
            yAxisLabel: 'Population',
            autoScale: true,
        };
        /*
         * Line Chart Data
         */
        this.lineChart = {
            colorScheme: {
                domain: [
                    colors.primary,
                    colors.danger,
                    colors.success,
                    colors.warning,
                    colors.secondary
                ],
            },
            data: _charts_data__WEBPACK_IMPORTED_MODULE_2__["lineChartMulti"],
            gradient: false,
            showXAxis: true,
            showYAxis: true,
            showLegend: true,
            showXAxisLabel: true,
            showYAxisLabel: true,
            xAxisLabel: 'Country',
            yAxisLabel: 'Population',
            autoScale: true,
        };
        /*
         * Bar Chart Data
         */
        this.barChart = {
            colorScheme: {
                domain: [colors.primary]
            },
            data: _charts_data__WEBPACK_IMPORTED_MODULE_2__["barChartSingle"],
            gradient: false,
            showXAxis: true,
            showYAxis: true,
            showLegend: false,
            showXAxisLabel: true,
            showYAxisLabel: true,
            xAxisLabel: 'Country',
            yAxisLabel: 'Population',
        };
        /*
         * Grouped Bar Chart Data
         */
        this.barChart_grouped = {
            colorScheme: {
                domain: [colors.primary, colors.purple]
            },
            data: [
                {
                    "name": "Germany",
                    "series": [
                        {
                            "name": "2010",
                            "value": 730
                        },
                        {
                            "name": "2011",
                            "value": 894
                        }
                    ]
                },
                {
                    "name": "USA",
                    "series": [
                        {
                            "name": "2010",
                            "value": 787
                        },
                        {
                            "name": "2011",
                            "value": 827
                        }
                    ]
                },
                {
                    "name": "France",
                    "series": [
                        {
                            "name": "2010",
                            "value": 500
                        },
                        {
                            "name": "2011",
                            "value": 580
                        }
                    ]
                },
                {
                    "name": "Australia",
                    "series": [
                        {
                            "name": "2010",
                            "value": 600
                        },
                        {
                            "name": "2011",
                            "value": 650
                        }
                    ]
                },
                {
                    "name": "Russia",
                    "series": [
                        {
                            "name": "2010",
                            "value": 780
                        },
                        {
                            "name": "2011",
                            "value": 820
                        }
                    ]
                },
                {
                    "name": "Spain",
                    "series": [
                        {
                            "name": "2010",
                            "value": 600
                        },
                        {
                            "name": "2011",
                            "value": 450
                        }
                    ]
                }
            ],
            gradient: false,
            showXAxis: true,
            showYAxis: true,
            showLegend: false,
            showXAxisLabel: true,
            showYAxisLabel: true,
            xAxisLabel: 'Country',
            yAxisLabel: 'Population',
        };
        this.barChart_grouped2 = {
            colorScheme: {
                domain: [colors.primary, colors.success, colors.pink]
            },
            data: _charts_data__WEBPACK_IMPORTED_MODULE_2__["barChartmulti"],
            gradient: false,
            showXAxis: true,
            showYAxis: true,
            showLegend: false,
            showXAxisLabel: true,
            showYAxisLabel: true,
            xAxisLabel: 'Country',
            yAxisLabel: 'Population',
        };
        /*
         * Horizontal Bar Chart Data
         */
        this.barChart_horizonal = {
            colorScheme: {
                domain: [
                    colors.info,
                    colors.purple,
                    colors.warning,
                    colors.primary,
                    colors.success,
                    colors.pink,
                ]
            },
            data: _charts_data__WEBPACK_IMPORTED_MODULE_2__["barChartSingle"],
            gradient: false,
            showXAxis: true,
            showYAxis: true,
            showLegend: true,
            showXAxisLabel: true,
            showYAxisLabel: true,
            xAxisLabel: 'Country',
            yAxisLabel: 'Population',
        };
        this.barChart_grouped_horizontal = {
            colorScheme: {
                domain: [colors.primary, colors.purple]
            },
            data: [
                {
                    "name": "Germany",
                    "series": [
                        {
                            "name": "2010",
                            "value": 730
                        },
                        {
                            "name": "2011",
                            "value": 894
                        }
                    ]
                },
                {
                    "name": "USA",
                    "series": [
                        {
                            "name": "2010",
                            "value": 787
                        },
                        {
                            "name": "2011",
                            "value": 827
                        }
                    ]
                },
                {
                    "name": "France",
                    "series": [
                        {
                            "name": "2010",
                            "value": 500
                        },
                        {
                            "name": "2011",
                            "value": 580
                        }
                    ]
                },
                {
                    "name": "Australia",
                    "series": [
                        {
                            "name": "2010",
                            "value": 600
                        },
                        {
                            "name": "2011",
                            "value": 650
                        }
                    ]
                },
                {
                    "name": "Spain",
                    "series": [
                        {
                            "name": "2010",
                            "value": 600
                        },
                        {
                            "name": "2011",
                            "value": 450
                        }
                    ]
                }
            ],
            gradient: false,
            showXAxis: true,
            showYAxis: true,
            showLegend: true,
            showXAxisLabel: true,
            showYAxisLabel: true,
            xAxisLabel: 'Country',
            yAxisLabel: 'Population',
        };
        /*
         * Pie Chart Data
         */
        this.pieChart = {
            colorScheme: {
                domain: [
                    colors.primary,
                    colors.danger,
                    colors.purple,
                    colors.pink,
                    colors.info,
                    colors.success,
                ]
            },
            data: _charts_data__WEBPACK_IMPORTED_MODULE_2__["pieChartSingle"],
            gradient: false,
            showLegend: true,
            showLabels: true,
            doughnut: false,
            explodeSlices: false,
        };
        this.pieChart2 = {
            colorScheme: {
                domain: [
                    colors.primary,
                    colors.danger,
                    colors.purple,
                    colors.pink,
                    colors.success,
                    colors.info,
                ]
            },
            data: _charts_data__WEBPACK_IMPORTED_MODULE_2__["pieChartSingle"],
            gradient: false,
            showLegend: false,
            showLabels: true,
            doughnut: true,
            explodeSlices: false,
        };
        this.pieChart3 = {
            colorScheme: {
                domain: [
                    colors.primary,
                    colors.info,
                    colors.pink,
                    colors.success,
                    colors.danger,
                    colors.purple,
                ]
            },
            data: _charts_data__WEBPACK_IMPORTED_MODULE_2__["pieChartSingle"],
            gradient: false,
            showLegend: false,
            showLabels: true,
            doughnut: false,
            explodeSlices: true,
        };
        this.advancedPieChart = {
            colorScheme: {
                domain: [
                    colors.primary,
                    colors.purple,
                    colors.pink,
                    colors.success,
                ]
            },
            data: [
                {
                    "name": "India",
                    "value": 40632
                },
                {
                    "name": "France",
                    "value": 36745
                },
                {
                    "name": "UK",
                    "value": 46060
                },
                {
                    "name": "Brazil",
                    "value": 56438
                }
            ],
            gradient: false,
        };
        /*
         * Pie Grid Data
         */
        this.pieGrid = {
            colorScheme: {
                domain: [
                    colors.primary,
                    colors.danger,
                    colors.purple,
                    colors.pink,
                    colors.success,
                    colors.info,
                ]
            },
            data: _charts_data__WEBPACK_IMPORTED_MODULE_2__["pieChartSingle"],
        };
    };
    NgxChartsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ngx-charts',
            template: __webpack_require__(/*! ./ngx-charts.component.html */ "./src/app/content/pages/charts/ngx-charts/ngx-charts.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], NgxChartsComponent);
    return NgxChartsComponent;
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
//# sourceMappingURL=content-pages-charts-charts-module.js.map