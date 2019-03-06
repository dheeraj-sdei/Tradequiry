(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["content-pages-snippets-snippets-module"],{

/***/ "./src/app/content/pages/snippets/authentication/forgot-password/forgot-password.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/content/pages/snippets/authentication/forgot-password/forgot-password.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <div class=\"card\">\n        <div class=\"text-center\"><span class=\"auth-head-icon text-primary\"><i class=\"la la-key\"></i></span></div>\n        <div class=\"card-body pt-1\">\n            <h4 class=\"text-center mb-4\">Reset Password</h4>\n            <p class=\"mb-4 text-center\">Enter your email address below and we'll send you password reset instructions.</p>\n            <form id=\"reset-password-form\" action=\"javascript:;\">\n                <div class=\"md-form mb-0\">\n                \t<input class=\"md-form-control\" type=\"email\" placeholder=\"Email\" [(ngModel)]=\"user.EmailId\" name=\"EmailID\"/>\n                \t\n                </div>\n                <button class=\"btn btn-primary btn-rounded btn-block mt-4\" (click)=\"click()\">SUBMIT</button>\n            </form>\n        </div>\n    </div>\n    <a class=\"btn btn-link home-link\" routerLink=\"/\">\n            <span class=\"btn-icon\">\n                <i class=\"ti-arrow-left font-20\"></i>Go Login</span>\n        </a>\n    <div class=\"text-center text-muted font-13\">© All rights reserved</div>\n</div>\n<!-- <a class=\"btn btn-link home-link\" routerLink='/index'>\n\t<span class=\"btn-icon\"><i class=\"ti-arrow-left font-20\"></i>Go Home</span>\n</a> -->\n"

/***/ }),

/***/ "./src/app/content/pages/snippets/authentication/forgot-password/forgot-password.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/content/pages/snippets/authentication/forgot-password/forgot-password.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  flex: 1 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #eff4ff;\n  padding: 50px 15px 30px 15px; }\n\n:host .card {\n  max-width: 400px;\n  flex-basis: 400px;\n  box-shadow: 0 5px 20px #d6dee4; }\n\n.auth-head-icon {\n  position: relative;\n  height: 60px;\n  width: 60px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 30px;\n  background-color: #fff;\n  box-shadow: 0 5px 20px #d6dee4;\n  border-radius: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  z-index: 2; }\n\n.home-link {\n  position: absolute;\n  left: 5px;\n  top: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RoZWVyYWpzL0Rlc2t0b3AvVHJhZGVxdWlyeV9hbmd1bGFyL3NyYy9hcHAvY29udGVudC9wYWdlcy9zbmlwcGV0cy9hdXRoZW50aWNhdGlvbi9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBYztFQUNkLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6Qiw0QkFBNEIsRUFBQTs7QUFHaEM7RUFDSSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLDhCQUE4QixFQUFBOztBQUdsQztFQUNJLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLGtCQUFrQjtFQUNsQixtQ0FBMkI7VUFBM0IsMkJBQTJCO0VBQzNCLFVBQVUsRUFBQTs7QUFHZDtFQUNJLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsU0FBUyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29udGVudC9wYWdlcy9zbmlwcGV0cy9hdXRoZW50aWNhdGlvbi9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZmxleDogMSAwIGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZjRmZjtcclxuICAgIHBhZGRpbmc6IDUwcHggMTVweCAzMHB4IDE1cHg7XHJcbn1cclxuXHJcbjpob3N0IC5jYXJkIHtcclxuICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICBmbGV4LWJhc2lzOiA0MDBweDtcclxuICAgIGJveC1zaGFkb3c6IDAgNXB4IDIwcHggI2Q2ZGVlNDtcclxufVxyXG5cclxuLmF1dGgtaGVhZC1pY29uIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggMjBweCAjZDZkZWU0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgei1pbmRleDogMjtcclxufVxyXG5cclxuLmhvbWUtbGluayB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA1cHg7XHJcbiAgICB0b3A6IDEwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/content/pages/snippets/authentication/forgot-password/forgot-password.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/content/pages/snippets/authentication/forgot-password/forgot-password.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../login/user.model */ "./src/app/content/pages/snippets/authentication/login/user.model.ts");
/* harmony import */ var _login_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login/user.service */ "./src/app/content/pages/snippets/authentication/login/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { Injectable } from '@angular/core';
//import * as firebase from 'firebase';



var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(route, userService) {
        this.route = route;
        this.userService = userService;
        this.user = new _login_user_model__WEBPACK_IMPORTED_MODULE_1__["User"]();
    }
    // resetPassword(email: string) {
    // var auth = firebase.auth();
    //   return auth.sendPasswordResetEmail(email)
    //     .then(() => console.log("email sent"))
    //     .catch((error) => console.log(error))
    // }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotPasswordComponent.prototype.click = function () {
        this.email = { EmailId: this.user.EmailId };
        console.log("aaaaaa" + this.user.EmailId);
        this.userService.forgotPassword(this.email).subscribe(function (res) {
            alert("Please check your Email to Re-set Password");
            //this.route.navigate(['/dashboard/home']);
        }, function (err) {
            console.log(err.error.message);
            alert(err.error.message);
        });
    };
    ForgotPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! ./forgot-password.component.html */ "./src/app/content/pages/snippets/authentication/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__(/*! ./forgot-password.component.scss */ "./src/app/content/pages/snippets/authentication/forgot-password/forgot-password.component.scss")]
        })
        //@Injectable()
        ,
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _login_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/snippets/authentication/lockscreen/lockscreen.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/content/pages/snippets/authentication/lockscreen/lockscreen.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <div class=\"card\">\n        <div class=\"text-center\"><span class=\"auth-head-icon text-primary\"><i class=\"ti-lock\"></i></span></div>\n        <div class=\"card-body pt-1\">\n            <h4 class=\"text-center mb-4\">Lockscreen</h4>\n            <div class=\"row\">\n                <div class=\"col-4\"><img class=\"rounded-circle\" src=\"./assets/img/users/u1.jpg\" alt=\"image\" width=\"110\" /></div>\n                <div class=\"col-8\">\n                    <p class=\"font-13\">Your are in lock screen. Enter your password to retrieve your session</p>\n                    <form id=\"lockscreen-form\" action=\"javascript:;\">\n                        <div class=\"md-form mb-0\">\n                        \t<input class=\"md-form-control\" type=\"password\" name=\"password\">\n                        \t<label>*****</label>\n                        </div>\n                        <button class=\"btn btn-primary btn-block mt-4\" type=\"submit\"><span class=\"btn-icon\"><i class=\"ti-lock\"></i>UNLOCK</span></button>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"text-center text-muted font-13\">© All rights reserved</div>\n</div>\n<a class=\"btn btn-link home-link\" routerLink='/index'>\n\t<span class=\"btn-icon\"><i class=\"ti-arrow-left font-20\"></i>Go Home</span>\n</a>\n"

/***/ }),

/***/ "./src/app/content/pages/snippets/authentication/lockscreen/lockscreen.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/content/pages/snippets/authentication/lockscreen/lockscreen.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  flex: 1 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #eff4ff;\n  padding: 50px 15px 30px 15px; }\n\n:host .card {\n  max-width: 450px;\n  flex-basis: 450px;\n  box-shadow: 0 5px 20px #d6dee4; }\n\n.auth-head-icon {\n  position: relative;\n  height: 60px;\n  width: 60px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 30px;\n  background-color: #fff;\n  box-shadow: 0 5px 20px #d6dee4;\n  border-radius: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  z-index: 2; }\n\n.home-link {\n  position: absolute;\n  left: 5px;\n  top: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RoZWVyYWpzL0Rlc2t0b3AvVHJhZGVxdWlyeV9hbmd1bGFyL3NyYy9hcHAvY29udGVudC9wYWdlcy9zbmlwcGV0cy9hdXRoZW50aWNhdGlvbi9sb2Nrc2NyZWVuL2xvY2tzY3JlZW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFjO0VBQ2QsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLDRCQUE0QixFQUFBOztBQUdoQztFQUNJLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsOEJBQThCLEVBQUE7O0FBR2xDO0VBQ0ksa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLG1DQUEyQjtVQUEzQiwyQkFBMkI7RUFDM0IsVUFBVSxFQUFBOztBQUdkO0VBQ0ksa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxTQUFTLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb250ZW50L3BhZ2VzL3NuaXBwZXRzL2F1dGhlbnRpY2F0aW9uL2xvY2tzY3JlZW4vbG9ja3NjcmVlbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGZsZXg6IDEgMCBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmY0ZmY7XHJcbiAgICBwYWRkaW5nOiA1MHB4IDE1cHggMzBweCAxNXB4O1xyXG59XHJcblxyXG46aG9zdCAuY2FyZCB7XHJcbiAgICBtYXgtd2lkdGg6IDQ1MHB4O1xyXG4gICAgZmxleC1iYXNpczogNDUwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDVweCAyMHB4ICNkNmRlZTQ7XHJcbn1cclxuXHJcbi5hdXRoLWhlYWQtaWNvbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJveC1zaGFkb3c6IDAgNXB4IDIwcHggI2Q2ZGVlNDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5ob21lLWxpbmsge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNXB4O1xyXG4gICAgdG9wOiAxMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/content/pages/snippets/authentication/lockscreen/lockscreen.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/content/pages/snippets/authentication/lockscreen/lockscreen.component.ts ***!
  \******************************************************************************************/
/*! exports provided: LockscreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LockscreenComponent", function() { return LockscreenComponent; });
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

var LockscreenComponent = /** @class */ (function () {
    function LockscreenComponent() {
    }
    LockscreenComponent.prototype.ngOnInit = function () {
    };
    LockscreenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lockscreen',
            template: __webpack_require__(/*! ./lockscreen.component.html */ "./src/app/content/pages/snippets/authentication/lockscreen/lockscreen.component.html"),
            styles: [__webpack_require__(/*! ./lockscreen.component.scss */ "./src/app/content/pages/snippets/authentication/lockscreen/lockscreen.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LockscreenComponent);
    return LockscreenComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/snippets/authentication/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/content/pages/snippets/authentication/login/login.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <!DOCTYPE html>\n<html lang=\"en\"> -->\n\n<head>\n    <meta charset=\"UTF-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\n    <meta name=\"keywords\" content=\"admin template, angular admin template, bootstrap admin template, modern admin template, modern design admin template, dashboard template, responsive admin template, angular web app, crypto dashboard, bitcoin dashboard\">\n    <title>Bootstrap &amp; Angular admin template + crypto dashboard - modern design admin | Login</title><!-- GLOBAL VENDORS-->\n   \n</head>\n\n\n    <div class=\"page-wrapper\">\n        <div class=\"auth-wrapper\">\n            <div class=\"row auth-content mx-0\">\n                <div class=\"col-md-6 bg-white p-5\">\n                    <div>\n                        <div class=\"text-center mb-5\">\n                            <h4 class=\"mb-3\">Login to Your accaunt</h4>\n                            <div class=\"text-muted\">Still no account?<a class=\"ml-2\" routerLink=\"sign-up\" style=\"border-bottom: 1px solid\">Create account</a></div>\n                        </div>\n                        <form id=\"login-form\" >\n                            <div class=\"form-group mb-4\"><input class=\"form-control\" type=\"email\" [(ngModel)]=\"user.EmailId\" name=\"email\" placeholder=\"Enter email\"></div>\n                            <div class=\"form-group mb-4\"><input class=\"form-control\" type=\"password\"[(ngModel)]=\"user.Password\" name=\"password\" placeholder=\"Enter Password\"></div>\n                            <div class=\"flexbox my-5\"><label class=\"checkbox checkbox-primary\"><input type=\"checkbox\" checked=\"\"><span>Remember Me</span></label><a routerLink=\"forgot\">Forgot password?</a></div>\n                            <div class=\"text-center\"><button class=\"btn btn-primary btn-rounded\" style=\"min-width: 200px\"(click)=\"login()\">LOGIN</button></div>\n                        </form>\n                    </div>\n                </div>\n                <div class=\"col-md-6 bg-danger text-white p-5 d-flex flex-column justify-content-between\">\n                    <!-- <h3 class=\"mb-0\">Reidius</h3> -->\n                    <h3 class=\"mb-0\">Tradequiry</h3>\n                    <div>\n                        <h4 class=\"font-40 mb-4\">Join our group</h4>\n                        <p class=\"mb-0\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt</p>\n                    </div>\n                    <div class=\"flexbox font-13 text-white-50\"><span>2019 © All rights reserved</span><span><a class=\"text-white-50\" href=\"#\" style=\"border-bottom: 1px solid;\">About</a><a class=\"ml-3 text-white-50\" href=\"#\" style=\"border-bottom: 1px solid;\">Policy</a></span></div>\n                </div>\n            </div>\n        <!-- </div><a class=\"btn btn-link home-link\" href=\"index.html\"><span class=\"btn-icon\"><i class=\"ti-arrow-left font-20\"></i>Go Home</span></a> -->\n    </div><!-- BEGIN: Page backdrops-->\n    <div class=\"sidenav-backdrop backdrop\"></div>\n    <div class=\"preloader-backdrop\">\n        <div class=\"page-preloader\">Loading</div> \n    </div><!-- END: Page backdrops-->\n    <!-- CORE PLUGINS-->\n    <script src=\"./assets/vendors/jquery/dist/jquery.min.js\"></script>\n    <script src=\"./assets/vendors/bootstrap/dist/js/bootstrap.bundle.min.js\"></script><!-- PAGE LEVEL PLUGINS-->\n    <script src=\"./assets/vendors/jquery-validation/dist/jquery.validate.min.js\"></script><!-- CORE SCRIPTS-->\n    <script src=\"./assets/js/app.min.js\"></script><!--PAGE LEVEL SCRIPTS-->\n    <script>\n        $(function() {\n            $('#login-form').validate({\n                rules: {\n                    email: {\n                        required: true,\n                        email: true\n                    },\n                    password: {\n                        required: true\n                    }\n                },\n                errorClass: 'invalid-feedback',\n                validClass: 'valid-feedback',\n                errorPlacement: function(error, element) {\n                    if (element.hasClass('md-form-control')) {\n                        error.insertAfter(element.closest('.md-form'));\n                    } else {\n                        error.insertAfter(element);\n                    }\n                },\n                highlight: function(e) {\n                    $(e).addClass(\"is-invalid\").removeClass('is-valid');\n                },\n                unhighlight: function(e) {\n                    $(e).removeClass(\"is-invalid\").addClass('is-valid');\n                },\n            });\n        });\n    </script>\n    \n\n\n"

/***/ }),

/***/ "./src/app/content/pages/snippets/authentication/login/login.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/content/pages/snippets/authentication/login/login.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background-color: #eff4ff; }\n\n.auth-wrapper {\n  flex: 1 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 50px 15px 30px 15px; }\n\n.auth-content {\n  max-width: 900px;\n  flex-basis: 900px;\n  box-shadow: 0 1px 15px 1px rgba(62, 57, 107, 0.07); }\n\n.home-link {\n  position: absolute;\n  left: 5px;\n  top: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RoZWVyYWpzL0Rlc2t0b3AvVHJhZGVxdWlyeV9hbmd1bGFyL3NyYy9hcHAvY29udGVudC9wYWdlcy9zbmlwcGV0cy9hdXRoZW50aWNhdGlvbi9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQkE7RUFDQyx5QkFBeUIsRUFBQTs7QUFFMUI7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsNEJBQTRCLEVBQUE7O0FBRTlCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrREFBaUQsRUFBQTs7QUFFbkQ7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFNBQVMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvcGFnZXMvc25pcHBldHMvYXV0aGVudGljYXRpb24vbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLy8gOmhvc3Qge1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZjRmZjtcclxuLy8gICAgIGZsZXg6IDEgMCBhdXRvO1xyXG4vLyAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuLy8gICAgIHBhZGRpbmc6IDUwcHggMTVweCAzMHB4IDE1cHg7XHJcbi8vIH1cclxuXHJcbi8vIC5hdXRoLWNvbnRlbnQge1xyXG4vLyAgICAgbWF4LXdpZHRoOiA0MDBweDtcclxuLy8gICAgIGZsZXgtYmFzaXM6IDQwMHB4O1xyXG4vLyAgICAgYm94LXNoYWRvdzogMCA1cHggMjBweCAjZDZkZWU0O1xyXG4vLyB9XHJcblxyXG4vLyAuaG9tZS1saW5rIHtcclxuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgIGxlZnQ6IDVweDtcclxuLy8gICAgIHRvcDogMTBweDtcclxuLy8gfVxyXG5ib2R5IHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZWZmNGZmO1xyXG59XHJcbi5hdXRoLXdyYXBwZXIge1xyXG5cdFx0ZmxleDogMSAwIGF1dG87XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0cGFkZGluZzogNTBweCAxNXB4IDMwcHggMTVweDtcclxufVxyXG4uYXV0aC1jb250ZW50IHtcclxuXHRcdG1heC13aWR0aDogOTAwcHg7XHJcblx0XHRmbGV4LWJhc2lzOiA5MDBweDtcclxuXHRcdGJveC1zaGFkb3c6IDAgMXB4IDE1cHggMXB4IHJnYmEoNjIsIDU3LCAxMDcsIC4wNyk7XHJcbn1cclxuLmhvbWUtbGluayB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRsZWZ0OiA1cHg7XHJcblx0XHR0b3A6IDEwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/content/pages/snippets/authentication/login/login.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/content/pages/snippets/authentication/login/login.component.ts ***!
  \********************************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.model */ "./src/app/content/pages/snippets/authentication/login/user.model.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ "./src/app/content/pages/snippets/authentication/login/user.service.ts");
/* harmony import */ var _jwt_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jwt.service */ "./src/app/content/pages/snippets/authentication/login/jwt.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { HttpClient } from "@angular/common/http";
// import { HttpHeaders } from '@angular/common/http';
//import {MatDialog} from '@angular/material';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(route, userService, jwtService) {
        this.route = route;
        this.userService = userService;
        this.jwtService = jwtService;
        this.user = new _user_model__WEBPACK_IMPORTED_MODULE_2__["User"]();
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        //console.log("aaaaaaaaaaaaaaaaa", this.user)
        this.userService.login(this.user).subscribe(function (res) {
            console.log("res['data']['_id']", res['data']['_id']);
            _this.token = res['token'];
            _this.id = res['data']['_id'];
            _this.username = res['data']['Username'];
            _this.userService.sendUserName(_this.username);
            console.log(_this.username, "user name");
            _this.jwtService.saveToken(_this.token);
            _this.jwtService.saveUsername(_this.username);
            _this.jwtService.saveId(_this.id);
            _this.route.navigate(['/dashboard/home']);
        }, function (err) {
            console.log(err.error.message);
            alert(err.error.message);
        });
        // this.httpClient.post("http://localhost:3000/api/calendar-events/",{"EmailId":"fdfd","Password":"dfdf"}).subscribe(vall=>console.log(vall));
    };
    LoginComponent.prototype.ngOnInit = function () {
        var token = this.jwtService.getToken();
        if (token) {
            this.route.navigate(['/dashboard/home']);
        }
        else {
            this.route.navigate(['/']);
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/content/pages/snippets/authentication/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/content/pages/snippets/authentication/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _jwt_service__WEBPACK_IMPORTED_MODULE_4__["JwtService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/snippets/authentication/reset-password/reset-password.component.css":
/*!***************************************************************************************************!*\
  !*** ./src/app/content/pages/snippets/authentication/reset-password/reset-password.component.css ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\nbody {\n\tbackground-color: #eff4ff;\n}\n\n.auth-wrapper {\n\tflex: 1 0 auto;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n    padding: 50px 15px 30px 15px;\n}\n\n.auth-content {\n\tmax-width: 400px;\n\tflex-basis: 400px;\n    box-shadow: 0 5px 20px #d6dee4;\n}\n\n.home-link {\n\tposition: absolute;\n\tleft: 5px;\n\ttop: 10px;\n}\n\n.example-container {\n\tdisplay: flex;\n\tflex-direction: column;\n  }\n\n.example-container > * {\n\twidth: 100%;\n  }\n\n.sign{\n\t  border-radius: 10%;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudC9wYWdlcy9zbmlwcGV0cy9hdXRoZW50aWNhdGlvbi9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtDQUNDLHlCQUF5QjtBQUMxQjs7QUFFQTtDQUNDLGNBQWM7Q0FDZCxhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLHVCQUF1QjtJQUNwQiw0QkFBNEI7QUFDaEM7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsaUJBQWlCO0lBQ2QsOEJBQThCO0FBQ2xDOztBQUNBO0NBQ0Msa0JBQWtCO0NBQ2xCLFNBQVM7Q0FDVCxTQUFTO0FBQ1Y7O0FBRUE7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0VBQ3JCOztBQUVBO0NBQ0QsV0FBVztFQUNWOztBQUNBO0dBQ0Msa0JBQWtCO0VBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29udGVudC9wYWdlcy9zbmlwcGV0cy9hdXRoZW50aWNhdGlvbi9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5ib2R5IHtcblx0YmFja2dyb3VuZC1jb2xvcjogI2VmZjRmZjtcbn1cblxuLmF1dGgtd3JhcHBlciB7XG5cdGZsZXg6IDEgMCBhdXRvO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA1MHB4IDE1cHggMzBweCAxNXB4O1xufVxuXG4uYXV0aC1jb250ZW50IHtcblx0bWF4LXdpZHRoOiA0MDBweDtcblx0ZmxleC1iYXNpczogNDAwcHg7XG4gICAgYm94LXNoYWRvdzogMCA1cHggMjBweCAjZDZkZWU0O1xufVxuLmhvbWUtbGluayB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0bGVmdDogNXB4O1xuXHR0b3A6IDEwcHg7XG59XG5cbi5leGFtcGxlLWNvbnRhaW5lciB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgXG4gIC5leGFtcGxlLWNvbnRhaW5lciA+ICoge1xuXHR3aWR0aDogMTAwJTtcbiAgfVxuICAuc2lnbntcblx0ICBib3JkZXItcmFkaXVzOiAxMCU7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/content/pages/snippets/authentication/reset-password/reset-password.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/content/pages/snippets/authentication/reset-password/reset-password.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n    <meta charset=\"UTF-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\n    <meta name=\"keywords\" content=\"admin template, angular admin template, bootstrap admin template, modern admin template, modern design admin template, dashboard template, responsive admin template, angular web app, crypto dashboard, bitcoin dashboard\">\n    <title>Bootstrap &amp; Angular admin template + crypto dashboard - modern design admin | Sign Up</title>\n    <!-- GLOBAL VENDORS-->\n    <!-- <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700%7CRoboto:300,400,500,600,700\" media=\"all\">\n    <link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\" /> -->\n    <!-- <link href=\"./assets/vendors/@fortawesome/fontawesome-free/css/all.min.css\" rel=\"stylesheet\" /> -->\n    <!-- <link href=\"./assets/vendors/themify-icons/themify-icons.css\" rel=\"stylesheet\" /> -->\n    <!-- <link href=\"./assets/vendors/line-awesome/css/line-awesome.min.css\" rel=\"stylesheet\" /><!-- PAGE LEVEL VENDORS -->\n    <!-- THEME STYLES-->\n    <!-- <link href=\"./assets/css/app.min.css\" rel=\"stylesheet\" />PAGE LEVEL STYLES -->\n\n</head>\n\n\n<div class=\"page-wrapper\">\n    <div class=\"auth-wrapper\">\n        <div class=\"card auth-content mb-0\">\n            <div class=\"card-body py-5\">\n                <div class=\"text-center mb-5\">\n                    <h3 class=\"mb-3 text-primary\">Tradequery</h3>\n                    <div class=\"font-18 text-center\">Change Password</div>\n                </div>\n                <form id=\"register-form\">\n                    <div class=\"mb-4\">\n                        <div class=\"md-form mb-0\"><input class=\"md-form-control\" id=\"password\" type=\"password\" [(ngModel)]=\"user.oldPassword\" name=\"password\" placeholder=\"Old-Password\" /></div>\n                       </div>\n                  <div class=\"mb-4\">\n                    <div class=\"md-form mb-0\"><input class=\"md-form-control\" id=\"new_password\" type=\"password\" [(ngModel)]=\"user.Password\" name=\"password\" placeholder=\"New-Password\" /></div>\n                   </div>\n                 <div class=\"mb-5\">\n                    <div class=\"md-form mb-0\"><input class=\"md-form-control\" type=\"password\" [(ngModel)]=\"user.Password_confirmation\" name=\"password_confirmation\" placeholder=\"Confirm password\" /></div>\n                  </div>\n                    <div class=\"flexbox mb-5\"><button class=\"btn btn-primary btn-rounded\" style=\"min-width: 100px; margin-left: 130px\" type=\"submit\" (click)=\"onSubmit()\" >Submit</button></div> \n                   \n\n                </form>\n            </div>\n        </div>\n        <a class=\"btn btn-link home-link\" routerLink=\"/\">\n          <span class=\"btn-icon\">\n              <i class=\"ti-arrow-left font-20\"></i>Go Login</span>\n      </a>\n    </div>\n</div>\n<!-- BEGIN: Page backdrops-->\n<div class=\"sidenav-backdrop backdrop\"></div>\n<div class=\"preloader-backdrop\">\n    <!-- <div class=\"page-preloader\">Loading</div> -->\n</div>\n\n<script>\n    $(function () {\n        $('#register-form').validate({\n            rules: {\n                email: {\n                    required: true,\n                    email: true\n                },\n                password: {\n                    required: true\n                },\n                password_confirmation: {\n                    required: true,\n                    equalTo: \"#password\"\n                }\n            },\n            errorClass: 'invalid-feedback',\n            validClass: 'valid-feedback',\n            errorPlacement: function (error, element) {\n                if (element.hasClass('md-form-control')) {\n                    error.insertAfter(element.closest('.md-form'));\n                } else {\n                    error.insertAfter(element);\n                }\n            },\n            highlight: function(e) {\n                $(e).addClass(\"invalid\").removeClass('valid');\n            },\n            unhighlight: function(e) {\n                $(e).removeClass(\"invalid\").addClass('valid');\n            },\n        });\n    });\n</script>\n\n\n</html>"

/***/ }),

/***/ "./src/app/content/pages/snippets/authentication/reset-password/reset-password.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/content/pages/snippets/authentication/reset-password/reset-password.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../login/user.model */ "./src/app/content/pages/snippets/authentication/login/user.model.ts");
/* harmony import */ var _login_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login/user.service */ "./src/app/content/pages/snippets/authentication/login/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_jwt_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../login/jwt.service */ "./src/app/content/pages/snippets/authentication/login/jwt.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(route, userService, jwtService) {
        this.route = route;
        this.userService = userService;
        this.jwtService = jwtService;
        this.user = new _login_user_model__WEBPACK_IMPORTED_MODULE_1__["User"]();
        this.userData = [];
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
    };
    // onSubmit() {
    //   this.changePasswordData = this.changePasswordForm.value;
    //   // console.log(this.changePasswordData);
    //   this.apiService.changePassword(this.changePasswordData).subscribe(
    //     res => {
    //       this.toasterService.showSuccess(res['message'], 'Success');
    //       console.log(res,' =-=-=-=--=');
    //       this.changePasswordForm.reset();
    //       this.router.navigate(['/user']);
    //       // const userDetails = { data : setnewpassword , isLogin : true };
    //       // this.jwtService.saveToken(setnewpassword.token);
    //       // this.apiService.sendIsLoginValue(userDetails);
    //       // this.router.navigate(['/user']);
    //     },
    //     error => {
    //       this.toasterService.showError(error.error.message, 'Error');
    //     }
    //   );
    // }
    ResetPasswordComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log("aaaaaaaaaaaaaaaaa", this.user);
        this.userService.changePassword(this.user).subscribe(function (res) {
            console.log("resettttttt" + _this.user);
            _this.route.navigate(['/']);
        }, function (err) {
            console.log(err.error.message);
            alert(err.error.message);
        });
        // this.httpClient.post("http://localhost:3000/api/calendar-events/",{"EmailId":"fdfd","Password":"dfdf"}).subscribe(vall=>console.log(vall));
    };
    ResetPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reset-password',
            template: __webpack_require__(/*! ./reset-password.component.html */ "./src/app/content/pages/snippets/authentication/reset-password/reset-password.component.html"),
            styles: [__webpack_require__(/*! ./reset-password.component.css */ "./src/app/content/pages/snippets/authentication/reset-password/reset-password.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _login_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _login_jwt_service__WEBPACK_IMPORTED_MODULE_4__["JwtService"]])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/snippets/authentication/sign-up/sign-up.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/content/pages/snippets/authentication/sign-up/sign-up.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n    <meta charset=\"UTF-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\n    <meta name=\"keywords\" content=\"admin template, angular admin template, bootstrap admin template, modern admin template, modern design admin template, dashboard template, responsive admin template, angular web app, crypto dashboard, bitcoin dashboard\">\n    <title>Bootstrap &amp; Angular admin template + crypto dashboard - modern design admin | Sign Up</title>\n    <!-- GLOBAL VENDORS-->\n    <!-- <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700%7CRoboto:300,400,500,600,700\" media=\"all\">\n    <link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\" /> -->\n    <!-- <link href=\"./assets/vendors/@fortawesome/fontawesome-free/css/all.min.css\" rel=\"stylesheet\" /> -->\n    <!-- <link href=\"./assets/vendors/themify-icons/themify-icons.css\" rel=\"stylesheet\" /> -->\n    <!-- <link href=\"./assets/vendors/line-awesome/css/line-awesome.min.css\" rel=\"stylesheet\" /><!-- PAGE LEVEL VENDORS -->\n    <!-- THEME STYLES-->\n    <!-- <link href=\"./assets/css/app.min.css\" rel=\"stylesheet\" />PAGE LEVEL STYLES -->\n\n</head>\n\n\n<div class=\"page-wrapper\">\n    <div class=\"auth-wrapper\">\n        <div class=\"card auth-content mb-0\">\n            <div class=\"card-body py-5\">\n                <div class=\"text-center mb-5\">\n                    <h3 class=\"mb-3 text-primary\">Tradequery</h3>\n                    <div class=\"font-18 text-center\">Create an account</div>\n                </div>\n                <form id=\"register-form\">\n                    <!-- <div class=\"example-container\">\n                        <mat-form-field>\n                            <input matInput placeholder=\"Full name\" [(ngModel)]=\"user.Username\">\n                        </mat-form-field>\n\n                        \n                        <mat-form-field>\n                            <input matInput placeholder=\"Email\" [(ngModel)]=\"user.EmailId\">\n                        </mat-form-field>\n\n                       \n                        <mat-form-field>\n                            <input matInput placeholder=\"Company(optional)\" [(ngModel)]=\"user.Company\">\n                        </mat-form-field>\n                        <mat-form-field>\n                                <input matInput placeholder=\"Password\">\n                            </mat-form-field>\n    \n                            \n                            <mat-form-field>\n                                <input matInput placeholder=\"Confirm password\">\n                            </mat-form-field>\n    \n                          </div>\n                          <div class=\"flexbox mb-5\"><label class=\"checkbox checkbox-primary mt-2\"><input type=\"checkbox\" checked=\"\"><span>I accept the terms</span></label><button class=\"btn btn-primary btn-rounded\" style=\"min-width: 100px\" type=\"submit\">SIGN UP</button></div>\n                           <div>\n                                <mat-checkbox color=\"primary\">I accept the terms</mat-checkbox>\n                                <button mat-button  class=\"sign\">SIGN UP</button>\n                        </div> -->\n                    <div class=\"mb-4\">\n                        <div class=\"md-form mb-0\"><input class=\"md-form-control\" type=\"text\" [(ngModel)]=\"user.Username\" name=\"username\" placeholder=\"Full name\" /></div>\n                    </div>\n                            <div class=\"mb-4\">\n                                <div class=\"md-form mb-0\"><input class=\"md-form-control\" type=\"email\" [(ngModel)]=\"user.EmailId\" name=\"email\" placeholder=\"Email\" /></div>\n                            </div>\n                            <div class=\"mb-4\">\n                                    <div class=\"md-form mb-0\"><input class=\"md-form-control\" type=\"text\" [(ngModel)]=\"user.Company\" name=\"company\" placeholder=\"Company(optional)\" /></div>\n                                </div>\n                            <div class=\"mb-4\">\n                                <div class=\"md-form mb-0\"><input class=\"md-form-control\" id=\"password\" type=\"password\" [(ngModel)]=\"user.Password\" name=\"password\" placeholder=\"Password\" /></div>\n                            </div>\n                            <div class=\"mb-5\">\n                                <div class=\"md-form mb-0\"><input class=\"md-form-control\" type=\"password\" [(ngModel)]=\"user.Password_confirmation\" name=\"password_confirmation\" placeholder=\"Confirm password\" /></div>\n                            </div>\n                    <div class=\"flexbox mb-5\"><label class=\"checkbox checkbox-primary mt-2\"><input type=\"checkbox\" checked=\"\"><span>I accept the terms</span></label><button class=\"btn btn-primary btn-rounded\" style=\"min-width: 100px\" type=\"submit\" (click)=\"saveData()\" >SIGN UP</button></div> \n                     <!-- <p class=\"mt-5 mb-4 text-muted text-center\">Or login with social networks</p>\n                            <div class=\"flex-center\"><a class=\"btn btn-facebook btn-floating mr-3\" href=\"#\"><i class=\"fab fa-facebook-f\"></i></a><a class=\"btn btn-twitter btn-floating mr-3\" href=\"#\"><i class=\"fab fa-twitter\"></i></a><a class=\"btn btn-google btn-floating mr-3\" href=\"#\"><i class=\"fab fa-google-plus-g\"></i></a><a class=\"btn btn-linkedin btn-floating\" href=\"#\"><i class=\"fab fa-linkedin-in\"></i></a></div> -->\n\n                </form>\n            </div>\n        </div>\n        <a class=\"btn btn-link home-link\" routerLink=\"/\">\n            <span class=\"btn-icon\">\n                <i class=\"ti-arrow-left font-20\"></i>Go Login</span>\n        </a>\n    </div>\n</div>\n<!-- BEGIN: Page backdrops-->\n<div class=\"sidenav-backdrop backdrop\"></div>\n<div class=\"preloader-backdrop\">\n    <div class=\"page-preloader\">Loading</div>\n</div>\n<!-- END: Page backdrops-->\n<!-- CORE PLUGINS-->\n<!-- <script src=\"./assets/vendors/jquery/dist/jquery.min.js\"></script> -->\n<!-- <script src=\"./assets/vendors/bootstrap/dist/js/bootstrap.bundle.min.js\"></script>PAGE LEVEL PLUGINS -->\n<!-- <script src=\"./assets/vendors/jquery-validation/dist/jquery.validate.min.js\"></script>CORE SCRIPTS -->\n<!-- <script src=\"./assets/js/app.min.js\"></script> -->\n\n<!-- PAGE LEVEL SCRIPTS-->\n<script>\n    $(function () {\n        $('#register-form').validate({\n            rules: {\n                email: {\n                    required: true,\n                    email: true\n                },\n                password: {\n                    required: true\n                },\n                password_confirmation: {\n                    required: true,\n                    equalTo: \"#password\"\n                }\n            },\n            errorClass: 'invalid-feedback',\n            validClass: 'valid-feedback',\n            errorPlacement: function (error, element) {\n                if (element.hasClass('md-form-control')) {\n                    error.insertAfter(element.closest('.md-form'));\n                } else {\n                    error.insertAfter(element);\n                }\n            },\n            highlight: function(e) {\n                $(e).addClass(\"invalid\").removeClass('valid');\n            },\n            unhighlight: function(e) {\n                $(e).removeClass(\"invalid\").addClass('valid');\n            },\n        });\n    });\n</script>\n\n\n</html>"

/***/ }),

/***/ "./src/app/content/pages/snippets/authentication/sign-up/sign-up.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/content/pages/snippets/authentication/sign-up/sign-up.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background-color: #eff4ff; }\n\n.auth-wrapper {\n  flex: 1 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 50px 15px 30px 15px; }\n\n.auth-content {\n  max-width: 400px;\n  flex-basis: 400px;\n  box-shadow: 0 5px 20px #d6dee4; }\n\n.home-link {\n  position: absolute;\n  left: 5px;\n  top: 10px; }\n\n.example-container {\n  display: flex;\n  flex-direction: column; }\n\n.example-container > * {\n  width: 100%; }\n\n.sign {\n  border-radius: 10%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RoZWVyYWpzL0Rlc2t0b3AvVHJhZGVxdWlyeV9hbmd1bGFyL3NyYy9hcHAvY29udGVudC9wYWdlcy9zbmlwcGV0cy9hdXRoZW50aWNhdGlvbi9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDQyx5QkFBeUIsRUFBQTs7QUFHMUI7RUFDQyxjQUFjO0VBQ2QsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDcEIsNEJBQTRCLEVBQUE7O0FBR2hDO0VBQ0MsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNkLDhCQUE4QixFQUFBOztBQUVsQztFQUNDLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsU0FBUyxFQUFBOztBQUdWO0VBQ0MsYUFBYTtFQUNiLHNCQUFzQixFQUFBOztBQUdyQjtFQUNELFdBQVcsRUFBQTs7QUFFVjtFQUNDLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29udGVudC9wYWdlcy9zbmlwcGV0cy9hdXRoZW50aWNhdGlvbi9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuYm9keSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2VmZjRmZjtcclxufVxyXG5cclxuLmF1dGgtd3JhcHBlciB7XHJcblx0ZmxleDogMSAwIGF1dG87XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZzogNTBweCAxNXB4IDMwcHggMTVweDtcclxufVxyXG5cclxuLmF1dGgtY29udGVudCB7XHJcblx0bWF4LXdpZHRoOiA0MDBweDtcclxuXHRmbGV4LWJhc2lzOiA0MDBweDtcclxuICAgIGJveC1zaGFkb3c6IDAgNXB4IDIwcHggI2Q2ZGVlNDtcclxufVxyXG4uaG9tZS1saW5rIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0bGVmdDogNXB4O1xyXG5cdHRvcDogMTBweDtcclxufVxyXG5cclxuLmV4YW1wbGUtY29udGFpbmVyIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWNvbnRhaW5lciA+ICoge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAuc2lnbntcclxuXHQgIGJvcmRlci1yYWRpdXM6IDEwJTtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/content/pages/snippets/authentication/sign-up/sign-up.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/content/pages/snippets/authentication/sign-up/sign-up.component.ts ***!
  \************************************************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.model */ "./src/app/content/pages/snippets/authentication/sign-up/user.model.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ "./src/app/content/pages/snippets/authentication/sign-up/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignUpComponent = /** @class */ (function () {
    // btnText = "Save";
    function SignUpComponent(route, userService) {
        this.route = route;
        this.userService = userService;
        this.user = new _user_model__WEBPACK_IMPORTED_MODULE_2__["User"]();
        this.userData = [];
    }
    SignUpComponent.prototype.ngOnInit = function () {
    };
    // signup() : void {
    //     this.router.navigate(["login"]);
    //     }
    SignUpComponent.prototype.saveData = function () {
        this.userService.saveData(this.user).subscribe(function (x) {
            if (x.userResponse.message == "success") {
                //this.getAllData();
                // this.route.navigate(["/"]);
                alert("Please check your email for verification");
            }
            else {
                console.log("hello its me");
                alert(x.userResponse.message);
            }
        });
    };
    SignUpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! ./sign-up.component.html */ "./src/app/content/pages/snippets/authentication/sign-up/sign-up.component.html"),
            providers: [_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]],
            styles: [__webpack_require__(/*! ./sign-up.component.scss */ "./src/app/content/pages/snippets/authentication/sign-up/sign-up.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/snippets/authentication/sign-up/user.model.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/content/pages/snippets/authentication/sign-up/user.model.ts ***!
  \*****************************************************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/content/pages/snippets/authentication/sign-up/user.service.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/content/pages/snippets/authentication/sign-up/user.service.ts ***!
  \*******************************************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.URL = "";
        //this.URL = "http://localhost:3000/api/user/";
        this.URL = "http://54.71.18.74:4517/api/user/";
        // this.URL = "http://localhost:4517/api/user/";
    }
    ///user: User =new User();
    UserService.prototype.saveData = function (obj) {
        return this.http.post(this.URL + 'createUser', obj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (x) {
            return x;
        }));
    };
    UserService.prototype.getAllData = function () {
        return this.http.get(this.URL + 'getAllUser').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (x) {
            return x;
        }));
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/content/pages/snippets/errors/error-404/error-404.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/content/pages/snippets/errors/error-404/error-404.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box-wrapper\">\n    <div class=\"error-content py-3\">\n        <h1 class=\"error-code text-primary font-weight-normal\" style=\"font-size: 120px\">404</h1>\n        <h3 class=\"text-muted mb-5\">Sorry but we could not find the page you are looking for</h3>\n        <div class=\"mb-5\"><a class=\"btn btn-outline-primary\" routerLink='/index'><span class=\"btn-icon\"><i class=\"material-icons\">arrow_back</i>Go Homepage</span></a></div>\n        <form class=\"input-group-icon input-group-icon-left input-group-lg mb-4\" action=\"javascript:;\" method=\"POST\"><span class=\"input-icon font-16\"><i class=\"ti-search\"></i></span><input class=\"form-control shadow\" type=\"text\" placeholder=\"Search ...\"></form>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/content/pages/snippets/errors/error-404/error-404.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/content/pages/snippets/errors/error-404/error-404.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  height: 100%;\n  background-color: #eff4ff;\n  flex: 1 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.box-wrapper {\n  flex: 1 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.error-content {\n  max-width: 540px;\n  flex-basis: 540px;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RoZWVyYWpzL0Rlc2t0b3AvVHJhZGVxdWlyeV9hbmd1bGFyL3NyYy9hcHAvY29udGVudC9wYWdlcy9zbmlwcGV0cy9lcnJvcnMvZXJyb3ItNDA0L2Vycm9yLTQwNC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLFlBQVk7RUFDVCx5QkFBeUI7RUFDekIsY0FBYztFQUNkLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCLEVBQUE7O0FBRzNCO0VBQ0ksY0FBYztFQUNkLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQ0osRUFBQTs7QUFFQTtFQUNJLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb250ZW50L3BhZ2VzL3NuaXBwZXRzL2Vycm9ycy9lcnJvci00MDQvZXJyb3ItNDA0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG5cdGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmY0ZmY7XHJcbiAgICBmbGV4OiAxIDAgYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ib3gtd3JhcHBlciB7XHJcbiAgICBmbGV4OiAxIDAgYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXJcclxufVxyXG5cclxuLmVycm9yLWNvbnRlbnQge1xyXG4gICAgbWF4LXdpZHRoOiA1NDBweDtcclxuICAgIGZsZXgtYmFzaXM6IDU0MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/content/pages/snippets/errors/error-404/error-404.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/content/pages/snippets/errors/error-404/error-404.component.ts ***!
  \********************************************************************************/
/*! exports provided: Error404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error404Component", function() { return Error404Component; });
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

var Error404Component = /** @class */ (function () {
    function Error404Component() {
    }
    Error404Component.prototype.ngOnInit = function () {
    };
    Error404Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'error-404',
            template: __webpack_require__(/*! ./error-404.component.html */ "./src/app/content/pages/snippets/errors/error-404/error-404.component.html"),
            styles: [__webpack_require__(/*! ./error-404.component.scss */ "./src/app/content/pages/snippets/errors/error-404/error-404.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], Error404Component);
    return Error404Component;
}());



/***/ }),

/***/ "./src/app/content/pages/snippets/errors/error-500/error-500.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/content/pages/snippets/errors/error-500/error-500.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box-wrapper\">\n    <div class=\"error-content py-3\">\n        <h1 class=\"error-code text-primary font-weight-normal\" style=\"font-size: 120px\">500</h1>\n        <h3 class=\"text-muted mb-4\">Internal Server Error</h3>\n        <p class=\"text-muted mb-4 font-16\">Sorry, There is a problem with the resource you are looking for, and it can not displayed.</p>\n        <div><a class=\"btn btn-outline-primary\" routerLink='/index'><span class=\"btn-icon\"><i class=\"material-icons\">arrow_back</i>Go Homepage</span></a></div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/content/pages/snippets/errors/error-500/error-500.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/content/pages/snippets/errors/error-500/error-500.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  height: 100%;\n  background-color: #eff4ff;\n  flex: 1 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.box-wrapper {\n  flex: 1 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.error-content {\n  max-width: 540px;\n  flex-basis: 540px;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RoZWVyYWpzL0Rlc2t0b3AvVHJhZGVxdWlyeV9hbmd1bGFyL3NyYy9hcHAvY29udGVudC9wYWdlcy9zbmlwcGV0cy9lcnJvcnMvZXJyb3ItNTAwL2Vycm9yLTUwMC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLFlBQVk7RUFDVCx5QkFBeUI7RUFDekIsY0FBYztFQUNkLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCLEVBQUE7O0FBRzNCO0VBQ0ksY0FBYztFQUNkLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQ0osRUFBQTs7QUFFQTtFQUNJLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb250ZW50L3BhZ2VzL3NuaXBwZXRzL2Vycm9ycy9lcnJvci01MDAvZXJyb3ItNTAwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG5cdGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmY0ZmY7XHJcbiAgICBmbGV4OiAxIDAgYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ib3gtd3JhcHBlciB7XHJcbiAgICBmbGV4OiAxIDAgYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXJcclxufVxyXG5cclxuLmVycm9yLWNvbnRlbnQge1xyXG4gICAgbWF4LXdpZHRoOiA1NDBweDtcclxuICAgIGZsZXgtYmFzaXM6IDU0MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/content/pages/snippets/errors/error-500/error-500.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/content/pages/snippets/errors/error-500/error-500.component.ts ***!
  \********************************************************************************/
/*! exports provided: Error500Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error500Component", function() { return Error500Component; });
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

var Error500Component = /** @class */ (function () {
    function Error500Component() {
    }
    Error500Component.prototype.ngOnInit = function () {
    };
    Error500Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'error-500',
            template: __webpack_require__(/*! ./error-500.component.html */ "./src/app/content/pages/snippets/errors/error-500/error-500.component.html"),
            styles: [__webpack_require__(/*! ./error-500.component.scss */ "./src/app/content/pages/snippets/errors/error-500/error-500.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], Error500Component);
    return Error500Component;
}());



/***/ }),

/***/ "./src/app/content/pages/snippets/snippets.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/content/pages/snippets/snippets.module.ts ***!
  \***********************************************************/
/*! exports provided: SnippetsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnippetsModule", function() { return SnippetsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_core_components_card_card_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/components/card/card.module */ "./src/app/core/components/card/card.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_content_layout_components_subheader_subheader_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/content/layout/components/subheader/subheader.module */ "./src/app/content/layout/components/subheader/subheader.module.ts");
/* harmony import */ var _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./authentication/login/login.component */ "./src/app/content/pages/snippets/authentication/login/login.component.ts");
/* harmony import */ var _authentication_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./authentication/sign-up/sign-up.component */ "./src/app/content/pages/snippets/authentication/sign-up/sign-up.component.ts");
/* harmony import */ var _authentication_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./authentication/forgot-password/forgot-password.component */ "./src/app/content/pages/snippets/authentication/forgot-password/forgot-password.component.ts");
/* harmony import */ var _authentication_lockscreen_lockscreen_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./authentication/lockscreen/lockscreen.component */ "./src/app/content/pages/snippets/authentication/lockscreen/lockscreen.component.ts");
/* harmony import */ var _errors_error_404_error_404_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./errors/error-404/error-404.component */ "./src/app/content/pages/snippets/errors/error-404/error-404.component.ts");
/* harmony import */ var _errors_error_500_error_500_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./errors/error-500/error-500.component */ "./src/app/content/pages/snippets/errors/error-500/error-500.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _authentication_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./authentication/reset-password/reset-password.component */ "./src/app/content/pages/snippets/authentication/reset-password/reset-password.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var routes = [
    {
        path: '',
        component: _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
    },
    {
        path: 'sign-up',
        component: _authentication_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_7__["SignUpComponent"],
    },
    {
        path: 'forgot',
        component: _authentication_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_8__["ForgotPasswordComponent"],
    },
    {
        path: 'reset-password',
        component: _authentication_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_17__["ResetPasswordComponent"],
    },
    {
        path: 'auth/lockscreen',
        component: _authentication_lockscreen_lockscreen_component__WEBPACK_IMPORTED_MODULE_9__["LockscreenComponent"],
    },
    {
        path: 'error-404',
        component: _errors_error_404_error_404_component__WEBPACK_IMPORTED_MODULE_10__["Error404Component"],
    },
    {
        path: 'error-500',
        component: _errors_error_500_error_500_component__WEBPACK_IMPORTED_MODULE_11__["Error500Component"],
    },
];
var SnippetsModule = /** @class */ (function () {
    function SnippetsModule() {
    }
    SnippetsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                src_app_core_components_card_card_module__WEBPACK_IMPORTED_MODULE_3__["CardModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                src_app_content_layout_components_subheader_subheader_module__WEBPACK_IMPORTED_MODULE_5__["SubheaderModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"],
            ],
            declarations: [_authentication_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], _authentication_lockscreen_lockscreen_component__WEBPACK_IMPORTED_MODULE_9__["LockscreenComponent"], _authentication_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_8__["ForgotPasswordComponent"], _authentication_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_7__["SignUpComponent"], _errors_error_404_error_404_component__WEBPACK_IMPORTED_MODULE_10__["Error404Component"], _errors_error_500_error_500_component__WEBPACK_IMPORTED_MODULE_11__["Error500Component"], _authentication_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_17__["ResetPasswordComponent"]],
            providers: [],
        })
    ], SnippetsModule);
    return SnippetsModule;
}());



/***/ })

}]);
//# sourceMappingURL=content-pages-snippets-snippets-module.js.map