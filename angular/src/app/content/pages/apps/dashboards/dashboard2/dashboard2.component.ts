import { Component, OnInit } from '@angular/core';

import { ThemeConfig } from 'src/app/config';

declare let Chart: any;

@Component({
    selector: 'app-dashboard2',
    templateUrl: './dashboard2.component.html',
    styleUrls: ['./dashboard2.component.css']
})
export class Dashboard2Component implements OnInit {


    
    colors: any;
    disabled = false;
    compact = false;
    disableinvertX = true;
    invertY = false;
   
    
    
    public barChart;
    public chartActiveTimePeriod: string = 'this_week';
    public chartTimePeriodData: any;
    public doughnutChartLabels: string[] = ['Cash', 'Stocks', 'Algorithm Allocated'];
    public doughnutChartData: number[] = [28, 9570, 3540];
    public doughnutChartType: string = 'doughnut';

    // events
    public chartClicked(e: any): void {
        console.log(e);
    }

    // public chartHovered(e: any): void {
    //     console.log(e);
    // }



    constructor() { }
    
    
    
    ngOnInit() {
        
        var colors = ThemeConfig.colors;
        var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        var MONTHS_S = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var DAYS = ["Sunday", "Munday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var DAYS_S = ["S", "M", "T", "W", "T", "F", "S"];
        var DAYS_SS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        var color = Chart.helpers.color;

        this.chartTimePeriodData = {
            this_week: {
                labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                data: {
                    sessions: [20, 18, 40, 50, 35, 24, 40],
                    page_views: [64, 54, 60, 65, 52, 85, 48],
                }
            },
            last_week: {
                labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                data: {
                    sessions: [65, 59, 80, 81, 56, 55, 40],
                    page_views: [28, 48, 40, 19, 86, 27, 90],
                }
            },
            year: {
                labels: MONTHS_S,
                data: {
                    sessions: [85, 60, 59, 35, 80, 81, 56, 55, 40, 20, 75, 55],
                    page_views: [28, 32, 48, 40, 19, 42, 86, 27, 90, 30, 35, 70],
                }
            }
        }

        /*
         * Bar Chart Data
         */
        this.barChart = {
            type: 'bar',
            data: [
                {
                    data: this.chartTimePeriodData.this_week.data.sessions,
                    label: 'Sessions',
                    stack: 'Stack 0',
                },
                {
                    data: this.chartTimePeriodData.this_week.data.page_views,
                    label: 'Page Views',
                    stack: 'Stack 1',
                }
            ],
            labels: this.chartTimePeriodData.this_week.labels,
            legend: true,
            colors: [
                { backgroundColor: colors.primary },
                { backgroundColor: color(colors.primary).alpha(0.4).rgbString() },
            ],
            options: {
                scaleShowVerticalLines: false,
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    xAxes: [{
                        gridLines: {
                            display: false,
                        },
                        barPercentage: 0.7,
                        categoryPercentage: 0.5
                    }],
                    yAxes: [{
                        gridLines: {
                            display: false,
                            drawBorder: false,
                        },
                    }]
                },
                legend: {
                    labels: {
                        boxWidth: 12
                    }
                },
            },
        };
    }

    setChartTimePeriod(period) {
        switch (period) {
            case 'this_week':
                this.barChart.labels = this.chartTimePeriodData.this_week.labels;
                this.barChart.data[0].data = this.chartTimePeriodData.this_week.data.sessions;
                this.barChart.data[1].data = this.chartTimePeriodData.this_week.data.page_views;
                this.chartActiveTimePeriod = 'this_week';
                break;

            case 'last_week':
                this.barChart.labels = this.chartTimePeriodData.last_week.labels;
                this.barChart.data[0].data = this.chartTimePeriodData.last_week.data.sessions;
                this.barChart.data[1].data = this.chartTimePeriodData.last_week.data.page_views;
                this.chartActiveTimePeriod = 'last_week';
                break;

            case 'year':
                this.barChart.labels = this.chartTimePeriodData.year.labels;
                this.barChart.data[0].data = this.chartTimePeriodData.year.data.sessions;
                this.barChart.data[1].data = this.chartTimePeriodData.year.data.page_views;
                this.chartActiveTimePeriod = 'year';
                break;

        }

    }
   
}
