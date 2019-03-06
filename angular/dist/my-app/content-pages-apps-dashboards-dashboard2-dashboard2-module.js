(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["content-pages-apps-dashboards-dashboard2-dashboard2-module"],{

/***/ "./node_modules/ngx-scrollbar/fesm5/ngx-scrollbar.js":
/*!***********************************************************!*\
  !*** ./node_modules/ngx-scrollbar/fesm5/ngx-scrollbar.js ***!
  \***********************************************************/
/*! exports provided: NgScrollbarModule, NgScrollbar, SmoothScrollModule, smoothScroll, easeInOutQuad, easeInCubic, inOutQuintic, SmoothScroll, ɵb, ɵc, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgScrollbarModule", function() { return NgScrollbarModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgScrollbar", function() { return NgScrollbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmoothScrollModule", function() { return SmoothScrollModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "smoothScroll", function() { return smoothScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInOutQuad", function() { return easeInOutQuad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInCubic", function() { return easeInCubic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inOutQuintic", function() { return inOutQuintic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmoothScroll", function() { return SmoothScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return NgScrollbarThumb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return NgScrollbarX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return NgScrollbarY; });
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");










/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SmoothScroll = /** @class */ (function () {
    function SmoothScroll(_platform, el) {
        this._platform = _platform;
        this.view = el.nativeElement;
    }
    /**
     * @private
     * @param {?} left
     * @param {?} top
     * @return {?}
     */
    SmoothScroll.prototype.scrollFunc = /**
     * @private
     * @param {?} left
     * @param {?} top
     * @return {?}
     */
    function (left, top) {
        if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["supportsScrollBehavior"])()) {
            this.view.scrollTo({ top: top, left: left });
        }
        else {
            this.view.scrollTop = top;
            this.view.scrollLeft = left;
        }
    };
    /**
     * @param {?} options
     * @return {?}
     */
    SmoothScroll.prototype.scrollTo = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        var _this = this;
        // Avoid SSR error
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["isPlatformBrowser"])(this._platform)) {
            /** @type {?} */
            var scrollFunc = function (left, top) {
                if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["supportsScrollBehavior"])()) {
                    _this.view.scrollTo({ top: top, left: left });
                }
                else {
                    _this.view.scrollTop = top;
                    _this.view.scrollLeft = left;
                }
            };
            if (options.duration) {
                /** @type {?} */
                var smoothScrollOptions = {
                    top: options.top,
                    left: options.left,
                    duration: options.duration,
                    easeFunc: options.easeFunc || easeInOutQuad,
                    offsetTop: this.view.scrollTop,
                    offsetLeft: this.view.scrollLeft,
                    scrollFunc: scrollFunc
                };
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["from"])(smoothScroll(smoothScrollOptions));
            }
            this.scrollFunc(options.left, options.top);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])();
    };
    /**
     * @param {?} selector
     * @param {?=} offset
     * @param {?=} duration
     * @param {?=} easeFunc
     * @return {?}
     */
    SmoothScroll.prototype.scrollToElement = /**
     * @param {?} selector
     * @param {?=} offset
     * @param {?=} duration
     * @param {?=} easeFunc
     * @return {?}
     */
    function (selector, offset, duration, easeFunc) {
        if (offset === void 0) { offset = 0; }
        /** @type {?} */
        var target = this.view.querySelector(selector);
        return target ? this.scrollTo({ left: target.offsetLeft, top: target.offsetTop - offset, duration: duration, easeFunc: easeFunc }) : Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])();
    };
    /**
     * @param {?} left
     * @param {?=} duration
     * @param {?=} easeFunc
     * @return {?}
     */
    SmoothScroll.prototype.scrollXTo = /**
     * @param {?} left
     * @param {?=} duration
     * @param {?=} easeFunc
     * @return {?}
     */
    function (left, duration, easeFunc) {
        return this.scrollTo({ left: left, duration: duration, easeFunc: easeFunc });
    };
    /**
     * @param {?} top
     * @param {?=} duration
     * @param {?=} easeFunc
     * @return {?}
     */
    SmoothScroll.prototype.scrollYTo = /**
     * @param {?} top
     * @param {?=} duration
     * @param {?=} easeFunc
     * @return {?}
     */
    function (top, duration, easeFunc) {
        return this.scrollTo({ top: top, duration: duration, easeFunc: easeFunc });
    };
    /**
     * @param {?=} duration
     * @param {?=} easeFunc
     * @return {?}
     */
    SmoothScroll.prototype.scrollToTop = /**
     * @param {?=} duration
     * @param {?=} easeFunc
     * @return {?}
     */
    function (duration, easeFunc) {
        return this.scrollYTo(0, duration, easeFunc);
    };
    /**
     * @param {?=} duration
     * @param {?=} easeFunc
     * @return {?}
     */
    SmoothScroll.prototype.scrollToBottom = /**
     * @param {?=} duration
     * @param {?=} easeFunc
     * @return {?}
     */
    function (duration, easeFunc) {
        return this.scrollYTo(this.view.scrollHeight - this.view.clientHeight, duration, easeFunc);
    };
    /**
     * @param {?=} duration
     * @param {?=} easeFunc
     * @return {?}
     */
    SmoothScroll.prototype.scrollToRight = /**
     * @param {?=} duration
     * @param {?=} easeFunc
     * @return {?}
     */
    function (duration, easeFunc) {
        return this.scrollXTo(this.view.scrollWidth, duration, easeFunc);
    };
    /**
     * @param {?=} duration
     * @param {?=} easeFunc
     * @return {?}
     */
    SmoothScroll.prototype.scrollToLeft = /**
     * @param {?=} duration
     * @param {?=} easeFunc
     * @return {?}
     */
    function (duration, easeFunc) {
        return this.scrollXTo(0, duration, easeFunc);
    };
    SmoothScroll.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"], args: [{
                    selector: '[smoothScroll], [smooth-scroll]'
                },] }
    ];
    /** @nocollapse */
    SmoothScroll.ctorParameters = function () { return [
        { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["PLATFORM_ID"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] }
    ]; };
    return SmoothScroll;
}());
/**
 * @param {?} options
 * @return {?}
 */
function smoothScroll(options) {
    return new Promise(function (resolve) {
        /** @type {?} */
        var currentTime = 0;
        /** @type {?} */
        var increment = 10;
        /** @type {?} */
        var valX = options.offsetLeft;
        /** @type {?} */
        var valY = options.offsetTop;
        /** @type {?} */
        var animateScroll = function () {
            // increment the time
            currentTime += increment;
            // find the value with the easing function
            if (typeof options.left !== 'undefined') {
                /** @type {?} */
                var deltaX = options.left - options.offsetLeft;
                valX = options.easeFunc(currentTime, options.offsetLeft, deltaX, options.duration);
            }
            if (typeof options.top !== 'undefined') {
                /** @type {?} */
                var deltaY = options.top - options.offsetTop;
                valY = options.easeFunc(currentTime, options.offsetTop, deltaY, options.duration);
            }
            // scroll to position
            options.scrollFunc(valX, valY);
            // do the animation unless its over
            if (currentTime < options.duration) {
                rxjs__WEBPACK_IMPORTED_MODULE_7__["animationFrameScheduler"].schedule(animateScroll);
            }
            else {
                resolve();
            }
        };
        animateScroll();
    });
}
// easing functions http://goo.gl/5HLl8
/**
 * @param {?} t
 * @param {?} b
 * @param {?} c
 * @param {?} d
 * @return {?}
 */
function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) {
        return (c / 2) * t * t + b;
    }
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
}
/**
 * @param {?} t
 * @param {?} b
 * @param {?} c
 * @param {?} d
 * @return {?}
 */
function easeInCubic(t, b, c, d) {
    /** @type {?} */
    var tc = (t /= d) * t * t;
    return b + c * tc;
}
/**
 * @param {?} t
 * @param {?} b
 * @param {?} c
 * @param {?} d
 * @return {?}
 */
function inOutQuintic(t, b, c, d) {
    /** @type {?} */
    var ts = (t /= d) * t;
    /** @type {?} */
    var tc = ts * t;
    return b + c * (6 * tc * ts + -15 * ts * ts + 10 * tc);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SmoothScrollModule = /** @class */ (function () {
    function SmoothScrollModule() {
    }
    SmoothScrollModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"], args: [{
                    imports: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollingModule"]],
                    declarations: [SmoothScroll],
                    exports: [SmoothScroll]
                },] }
    ];
    return SmoothScrollModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Native scrollbar size is 17px on all browsers,
// This value will be used to push the native scrollbar out of the scroll view to hide them
// An extra 1px is added to hide them properly on Edge browser
/** @type {?} */
var NATIVE_SCROLLBAR_SIZE = '18px';
var NgScrollbar = /** @class */ (function () {
    function NgScrollbar(_changeDetectorRef, _breakpointObserver, _platform) {
        this._changeDetectorRef = _changeDetectorRef;
        this._breakpointObserver = _breakpointObserver;
        this._platform = _platform;
        /**
         * Horizontal custom scrollbar
         */
        this.trackX = false;
        /**
         * Vertical custom Scrollbar
         */
        this.trackY = true;
        /**
         * Scrollbar visibility
         */
        this.shown = 'native';
        /**
         * Auto update scrollbars on content changes (Mutation Observer)
         */
        this.autoUpdate = true;
        /**
         * The smooth scroll duration when a scrollbar is clicked
         */
        this.scrollToDuration = 300;
        /**
         * Disable custom scrollbars on specific breakpoints
         */
        this.disableOnBreakpoints = [
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].HandsetLandscape,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].HandsetPortrait
        ];
        this._disabled = false;
        /**
         * Mutation observer subscription
         */
        this._updateObserverSub$ = rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"].EMPTY;
        /**
         * CDK breakpoint subscription
         */
        this._breakpointSub$ = rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"].EMPTY;
        /**
         * Steam that emits when scrollbar thumbnail needs to update (for internal uses)
         */
        this._updateObserver = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.updateObserver = this._updateObserver.asObservable();
    }
    Object.defineProperty(NgScrollbar.prototype, "disabled", {
        /** Disable custom scrollbars and switch back to native scrollbars */
        get: /**
         * Disable custom scrollbars and switch back to native scrollbars
         * @return {?}
         */
        function () {
            return this._disabled;
        },
        set: /**
         * @param {?} disable
         * @return {?}
         */
        function (disable) {
            disable ? this.disable() : this.enable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgScrollbar.prototype, "hideNativeScrollbars", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var size = this.disabled ? '100%' : "calc(100% + " + NATIVE_SCROLLBAR_SIZE + ")";
            return {
                width: this.trackY ? size : '100%',
                height: this.trackX ? size : '100%'
            };
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NgScrollbar.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.view = this.scrollable.getElementRef().nativeElement;
        // Avoid 'expression has changed after it was checked' error when 'disableOnBreakpoints' is set to false
        Promise.resolve().then(function () {
            if (!_this.disabled) {
                if (_this.disableOnBreakpoints) {
                    // Enable/Disable custom scrollbar on breakpoints (Used to disable scrollbars on mobile phones)
                    _this._breakpointSub$ = _this._breakpointObserver.observe(_this.disableOnBreakpoints).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])(function (result) { return result.matches ? _this.disable() : _this.enable(); })).subscribe();
                }
                else {
                    _this.enable();
                }
            }
            // Update state on content changes
            _this._updateObserverSub$ = _this.updateObserver.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["throttleTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])(function () { return _this._changeDetectorRef.markForCheck(); })).subscribe();
        });
    };
    /**
     * @return {?}
     */
    NgScrollbar.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._breakpointSub$.unsubscribe();
        this._updateObserverSub$.unsubscribe();
        if (this._observer) {
            this._observer.disconnect();
        }
    };
    /**
     * Update scrollbar thumbnail position
     */
    /**
     * Update scrollbar thumbnail position
     * @return {?}
     */
    NgScrollbar.prototype.update = /**
     * Update scrollbar thumbnail position
     * @return {?}
     */
    function () {
        if (!this.disabled) {
            this._updateObserver.next();
        }
    };
    /**
     * Enable custom scrollbar
     */
    /**
     * Enable custom scrollbar
     * @return {?}
     */
    NgScrollbar.prototype.enable = /**
     * Enable custom scrollbar
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.view) {
            this._disabled = false;
            // Update view
            this._changeDetectorRef.markForCheck();
            if (this.autoUpdate && Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["isPlatformBrowser"])(this._platform)) {
                // Observe content changes
                this._observer = new MutationObserver(function () { return _this.update(); });
                this._observer.observe(this.view, { subtree: true, childList: true, characterData: true });
            }
        }
    };
    /**
     * Disable custom scrollbar
     */
    /**
     * Disable custom scrollbar
     * @return {?}
     */
    NgScrollbar.prototype.disable = /**
     * Disable custom scrollbar
     * @return {?}
     */
    function () {
        this._disabled = true;
        if (this._observer) {
            this._observer.disconnect();
        }
    };
    /**
     * @param {?} options
     * @return {?}
     */
    NgScrollbar.prototype.scrollTo = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        return this.smoothScroll.scrollTo(options);
    };
    /**
     * @param {?} selector
     * @param {?=} offset
     * @param {?=} duration
     * @param {?=} easeFunc
     * @return {?}
     */
    NgScrollbar.prototype.scrollToElement = /**
     * @param {?} selector
     * @param {?=} offset
     * @param {?=} duration
     * @param {?=} easeFunc
     * @return {?}
     */
    function (selector, offset, duration, easeFunc) {
        if (offset === void 0) { offset = 0; }
        return this.smoothScroll.scrollToElement(selector, offset, duration, easeFunc);
    };
    /**
     * @param {?} to
     * @param {?=} duration
     * @param {?=} easeFunc
     * @return {?}
     */
    NgScrollbar.prototype.scrollXTo = /**
     * @param {?} to
     * @param {?=} duration
     * @param {?=} easeFunc
     * @return {?}
     */
    function (to, duration, easeFunc) {
        return this.smoothScroll.scrollXTo(to, duration, easeFunc);
    };
    /**
     * @param {?} to
     * @param {?=} duration
     * @param {?=} easeFunc
     * @return {?}
     */
    NgScrollbar.prototype.scrollYTo = /**
     * @param {?} to
     * @param {?=} duration
     * @param {?=} easeFunc
     * @return {?}
     */
    function (to, duration, easeFunc) {
        return this.smoothScroll.scrollYTo(to, duration, easeFunc);
    };
    /**
     * @param {?=} duration
     * @param {?=} easeFunc
     * @return {?}
     */
    NgScrollbar.prototype.scrollToTop = /**
     * @param {?=} duration
     * @param {?=} easeFunc
     * @return {?}
     */
    function (duration, easeFunc) {
        return this.smoothScroll.scrollToTop(duration, easeFunc);
    };
    /**
     * @param {?=} duration
     * @param {?=} easeFunc
     * @return {?}
     */
    NgScrollbar.prototype.scrollToBottom = /**
     * @param {?=} duration
     * @param {?=} easeFunc
     * @return {?}
     */
    function (duration, easeFunc) {
        return this.smoothScroll.scrollToBottom(duration, easeFunc);
    };
    /**
     * @param {?=} duration
     * @param {?=} easeFunc
     * @return {?}
     */
    NgScrollbar.prototype.scrollToRight = /**
     * @param {?=} duration
     * @param {?=} easeFunc
     * @return {?}
     */
    function (duration, easeFunc) {
        return this.smoothScroll.scrollToRight(duration, easeFunc);
    };
    /**
     * @param {?=} duration
     * @param {?=} easeFunc
     * @return {?}
     */
    NgScrollbar.prototype.scrollToLeft = /**
     * @param {?=} duration
     * @param {?=} easeFunc
     * @return {?}
     */
    function (duration, easeFunc) {
        return this.smoothScroll.scrollToLeft(duration, easeFunc);
    };
    NgScrollbar.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'ng-scrollbar',
                    template: "<div class=\"ng-scrollbar-layout ng-scrollbar-x-layout\"\r\n     [class.ng-scrollbar-invert]=\"invertX\">\r\n\r\n  <div class=\"ng-scrollbar-layout ng-scrollbar-y-layout\"\r\n       [class.ng-scrollbar-invert]=\"invertY\">\r\n\r\n    <div class=\"ng-scroll-view-container\">\r\n      <div #view\r\n           cdkScrollable\r\n           smoothScroll\r\n           class=\"ng-scroll-view {{viewClass}}\"\r\n           [ngStyle]=\"hideNativeScrollbars\">\r\n        <ng-content></ng-content>\r\n      </div>\r\n    </div>\r\n\r\n    <ng-scrollbar-y #y\r\n                    *ngIf=\"!disabled && trackY\"\r\n                    [class.ng-scrollbar-visible]=\"shown === 'always' || view.scrollHeight > view.clientHeight\"\r\n                    [barClass]=\"barClass\"\r\n                    [thumbClass]=\"thumbClass\"\r\n                    [scrollToDuration]=\"scrollToDuration\">\r\n    </ng-scrollbar-y>\r\n  </div>\r\n\r\n  <ng-scrollbar-x #x\r\n                  *ngIf=\"!disabled && trackX\"\r\n                  [class.ng-scrollbar-visible]=\"shown === 'always' || view.scrollWidth > view.clientWidth\"\r\n                  [barClass]=\"barClass\"\r\n                  [thumbClass]=\"thumbClass\"\r\n                  [scrollToDuration]=\"scrollToDuration\">\r\n  </ng-scrollbar-x>\r\n\r\n</div>\r\n",
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
                    host: {
                        '[attr.trackX]': 'trackX',
                        '[attr.trackY]': 'trackY',
                        '[attr.compact]': 'compact',
                        '[attr.autoHide]': 'shown === "hover"'
                    },
                    styles: [":host{display:block;overflow:hidden;--scrollbar-color:transparent;--scrollbar-container-color:transparent;--scrollbar-thumb-color:rgba(0, 0, 0, 0.2);--scrollbar-thumb-hover-color:rgba(0, 0, 0, 0.3);--scrollbar-border-radius:4px;--scrollbar-size:6px;--scrollbar-padding:8px;--scroll-view-margin:0;--scroll-view-color:transparent}:host[trackY=true]>.ng-scrollbar-layout>.ng-scrollbar-layout>.ng-scroll-view-container>.ng-scroll-view{overflow-y:scroll}:host[trackX=true]>.ng-scrollbar-layout>.ng-scrollbar-layout>.ng-scroll-view-container>.ng-scroll-view{overflow-x:scroll}:host>.ng-scrollbar-x-layout{flex-direction:column}:host>.ng-scrollbar-x-layout.ng-scrollbar-invert{flex-direction:column-reverse}:host>.ng-scrollbar-x-layout>.ng-scrollbar-y-layout{flex-direction:row}:host>.ng-scrollbar-x-layout>.ng-scrollbar-y-layout.ng-scrollbar-invert{flex-direction:row-reverse}:host[compact=true]>.ng-scrollbar-x-layout>ng-scrollbar-x{position:absolute;bottom:0}:host[compact=true]>.ng-scrollbar-x-layout.ng-scrollbar-invert>ng-scrollbar-x{top:0;bottom:unset}:host[compact=true]>.ng-scrollbar-x-layout>.ng-scrollbar-y-layout>ng-scrollbar-y{position:absolute;right:0;left:unset}:host[compact=true]>.ng-scrollbar-x-layout>.ng-scrollbar-y-layout.ng-scrollbar-invert>ng-scrollbar-y{right:unset;left:0}:host[autoHide=true]>.ng-scrollbar-layout>.ng-scrollbar-layout>ng-scrollbar-y,:host[autoHide=true]>.ng-scrollbar-layout>ng-scrollbar-x{opacity:0;transition:opacity 120ms ease-out}:host[autoHide=true]:active>.ng-scrollbar-layout>.ng-scrollbar-layout>ng-scrollbar-y,:host[autoHide=true]:active>.ng-scrollbar-layout>ng-scrollbar-x,:host[autoHide=true]:focus>.ng-scrollbar-layout>.ng-scrollbar-layout>ng-scrollbar-y,:host[autoHide=true]:focus>.ng-scrollbar-layout>ng-scrollbar-x,:host[autoHide=true]:hover>.ng-scrollbar-layout>.ng-scrollbar-layout>ng-scrollbar-y,:host[autoHide=true]:hover>.ng-scrollbar-layout>ng-scrollbar-x{opacity:1;transition:opacity 340ms ease-out}.ng-scroll-view,.ng-scrollbar-layout,:host{position:relative;height:100%;width:100%}.ng-scrollbar-layout{display:flex;min-height:0}.ng-scroll-view-container{flex:1;position:relative;overflow:hidden;margin:var(--scroll-view-margin)}.ng-scroll-view{box-sizing:content-box;-webkit-transform:translateZ(0);transform:translateZ(0);background:var(--scroll-view-color);-webkit-overflow-scrolling:touch}ng-scrollbar-x,ng-scrollbar-y{display:none;box-sizing:border-box;padding:var(--scrollbar-padding);background:var(--scrollbar-container-color)}ng-scrollbar-x.ng-scrollbar-visible,ng-scrollbar-y.ng-scrollbar-visible{display:block}ng-scrollbar-y{top:0;bottom:0}ng-scrollbar-x{left:0;right:0}::ng-deep ng-scrollbar-y .ng-scrollbar{width:var(--scrollbar-size)}::ng-deep ng-scrollbar-y .ng-scrollbar-thumb{width:100%}::ng-deep ng-scrollbar-x .ng-scrollbar{height:var(--scrollbar-size)}::ng-deep ng-scrollbar-x .ng-scrollbar-thumb{height:100%}::ng-deep .ng-scrollbar{height:100%;width:100%;z-index:1;border-radius:var(--scrollbar-border-radius);background-color:var(--scrollbar-color)}::ng-deep .ng-scrollbar-thumb{box-sizing:border-box;position:relative;width:0;height:0;border-radius:inherit;background-color:var(--scrollbar-thumb-color);-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);transition:height ease-out 150ms}::ng-deep .ng-scrollbar-thumb:active,::ng-deep .ng-scrollbar-thumb:hover{background-color:var(--scrollbar-thumb-hover-color)}"]
                }] }
    ];
    /** @nocollapse */
    NgScrollbar.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] },
        { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"] },
        { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["PLATFORM_ID"],] }] }
    ]; };
    NgScrollbar.propDecorators = {
        trackX: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        trackY: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        shown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        autoUpdate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        viewClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        barClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        thumbClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        scrollToDuration: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        compact: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        invertY: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        invertX: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        disableOnBreakpoints: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['disabled',] }],
        scrollable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["CdkScrollable"],] }],
        smoothScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: [SmoothScroll,] }],
        verticalScrollbar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['y', { read: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },] }],
        horizontalScrollbar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['x', { read: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },] }]
    };
    return NgScrollbar;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgScrollbarThumb = /** @class */ (function () {
    function NgScrollbarThumb(_parent, _platform, _zone) {
        this._parent = _parent;
        this._platform = _platform;
        this._zone = _zone;
        this._minThumbSize = 20;
        this._naturalThumbSize = 0;
        this._thumbSize = 0;
        this._trackMax = 0;
        this._scrollMax = 0;
        this._currPos = 0;
        this._scroll$ = rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"].EMPTY;
        this._thumbDrag$ = rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"].EMPTY;
        this._updateObserver$ = rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"].EMPTY;
        this._state = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"]({
            transform: 'translate3d(0, 0, 0)'
        });
        /**
         * Scrollbar styles
         */
        this.scrollbarStyle = this._state.asObservable();
    }
    Object.defineProperty(NgScrollbarThumb.prototype, "thumbSize", {
        get: /**
         * @return {?}
         */
        function () {
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NgScrollbarThumb.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Avoid SSR Error
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["isPlatformBrowser"])(this._platform)) {
            this._view = this._parent.scrollable.getElementRef().nativeElement;
            // Start view scroll event
            this._scroll$ = this._parent.scrollable.elementScrolled()
                .subscribe(function () { return _this.updateScrollbar(); });
            // Start scrollbar thumbnail drag events
            this._zone.runOutsideAngular(function () {
                return _this._thumbDrag$ = _this.startThumbEvents().subscribe();
            });
            // Update scrollbar thumbnail size on content changes
            this._updateObserver$ = this._parent.updateObserver.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["throttleTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])(function () { return _this.updateScrollbar(); }), 
            // Make sure scrollbar thumbnail position is correct after the new content is rendered
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])(function () { return _this.updateScrollbar(); })).subscribe();
            // Initialize scrollbar
            setTimeout(function () { return _this.updateScrollbar(); }, 200);
        }
    };
    /**
     * @return {?}
     */
    NgScrollbarThumb.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._scroll$.unsubscribe();
        this._thumbDrag$.unsubscribe();
        this._updateObserver$.unsubscribe();
    };
    /**
     * Scrollbar click
     * @param e Mouse event
     */
    /**
     * Scrollbar click
     * @param {?} e Mouse event
     * @return {?}
     */
    NgScrollbarThumb.prototype.onScrollbarHolderClick = /**
     * Scrollbar click
     * @param {?} e Mouse event
     * @return {?}
     */
    function (e) {
    };
    /**
     * Update scrollbar
     */
    /**
     * Update scrollbar
     * @protected
     * @return {?}
     */
    NgScrollbarThumb.prototype.updateScrollbar = /**
     * Update scrollbar
     * @protected
     * @return {?}
     */
    function () {
    };
    /**
     * Start vertical thumb worker
     */
    /**
     * Start vertical thumb worker
     * @protected
     * @return {?}
     */
    NgScrollbarThumb.prototype.startThumbEvents = /**
     * Start vertical thumb worker
     * @protected
     * @return {?}
     */
    function () {
        return undefined;
    };
    /**
     * Get scrollbar thumb size
     * @param naturalThumbSize
     * @param scrollMax
     */
    /**
     * Get scrollbar thumb size
     * @protected
     * @param {?} naturalThumbSize
     * @param {?} scrollMax
     * @return {?}
     */
    NgScrollbarThumb.prototype.scrollBoundaries = /**
     * Get scrollbar thumb size
     * @protected
     * @param {?} naturalThumbSize
     * @param {?} scrollMax
     * @return {?}
     */
    function (naturalThumbSize, scrollMax) {
        return (naturalThumbSize < this._minThumbSize) ? this._minThumbSize : scrollMax ? naturalThumbSize : 0;
    };
    /**
     * @protected
     * @param {?} state
     * @return {?}
     */
    NgScrollbarThumb.prototype.updateState = /**
     * @protected
     * @param {?} state
     * @return {?}
     */
    function (state) {
        this._state.next(Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__assign"])({}, this._state.value, state));
    };
    NgScrollbarThumb.propDecorators = {
        barClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        thumbClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        scrollToDuration: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        bar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['bar',] }],
        thumb: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['thumb',] }]
    };
    return NgScrollbarThumb;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgScrollbarY = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(NgScrollbarY, _super);
    function NgScrollbarY(_document, _parent, _platform, _zone) {
        var _this = _super.call(this, _parent, _platform, _zone) || this;
        _this._document = _document;
        _this._parent = _parent;
        _this._zone = _zone;
        return _this;
    }
    Object.defineProperty(NgScrollbarY.prototype, "thumbSize", {
        /**
         * Calculate scrollbar thumbnail size
         */
        get: /**
         * Calculate scrollbar thumbnail size
         * @return {?}
         */
        function () {
            /** @type {?} */
            var barClientHeight = this.bar.nativeElement.clientHeight;
            /** @type {?} */
            var viewClientHeight = this._view.clientHeight;
            /** @type {?} */
            var viewScrollHeight = this._view.scrollHeight;
            this._naturalThumbSize = barClientHeight / viewScrollHeight * barClientHeight;
            this._scrollMax = viewScrollHeight - viewClientHeight;
            return this.scrollBoundaries(this._naturalThumbSize, this._scrollMax);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Scrollbar click
     * @param e Mouse event
     */
    /**
     * Scrollbar click
     * @param {?} e Mouse event
     * @return {?}
     */
    NgScrollbarY.prototype.onScrollbarHolderClick = /**
     * Scrollbar click
     * @param {?} e Mouse event
     * @return {?}
     */
    function (e) {
        if (e.target === e.currentTarget) {
            /** @type {?} */
            var offsetY = e.offsetY - this._naturalThumbSize * .5;
            /** @type {?} */
            var thumbPositionPercentage = offsetY * 100 / this.bar.nativeElement.clientHeight;
            /** @type {?} */
            var value = thumbPositionPercentage * this._view.scrollHeight / 100;
            this._parent.scrollTo((/** @type {?} */ ({ top: value, duration: this.scrollToDuration }))).subscribe();
        }
    };
    /**
     * Update scrollbar
     */
    /**
     * Update scrollbar
     * @protected
     * @return {?}
     */
    NgScrollbarY.prototype.updateScrollbar = /**
     * Update scrollbar
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        this._thumbSize = this.thumb.nativeElement.clientHeight;
        this._trackMax = this.bar.nativeElement.clientHeight - this._thumbSize;
        this._currPos = this._view.scrollTop * this._trackMax / this._scrollMax;
        this._zone.run(function () {
            rxjs__WEBPACK_IMPORTED_MODULE_7__["animationFrameScheduler"].schedule(function () {
                return _this.updateState({
                    transform: "translate3d(0, " + _this._currPos + "px, 0)",
                    height: _this.thumbSize + "px"
                });
            });
        });
    };
    /**
     * Start vertical thumb worker
     */
    /**
     * Start vertical thumb worker
     * @protected
     * @return {?}
     */
    NgScrollbarY.prototype.startThumbEvents = /**
     * Start vertical thumb worker
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var mouseDown$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(this.thumb.nativeElement, 'mousedown');
        /** @type {?} */
        var mouseMove$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(this._document, 'mousemove');
        /** @type {?} */
        var mouseUp$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(this._document, 'mouseup').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])(function () { return _this._document.onselectstart = null; }));
        return mouseDown$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])(function () {
            _this._document.onselectstart = function () { return false; };
            // Initialize trackMax for before start dragging
            _this._trackMax = _this.bar.nativeElement.clientHeight - _this._thumbSize;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["pluck"])('offsetY'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["mergeMap"])(function (mouseDownOffset) { return mouseMove$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(mouseUp$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["pluck"])('clientY'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])(function (mouseMoveClient) {
            /** @type {?} */
            var offsetY = mouseMoveClient - _this.bar.nativeElement.getBoundingClientRect().top;
            /** @type {?} */
            var value = _this._scrollMax * (offsetY - mouseDownOffset) / _this._trackMax;
            _this._parent.scrollable.scrollTo({ top: value });
        })); }));
    };
    NgScrollbarY.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'ng-scrollbar-y',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
                    template: "\n    <div #bar class=\"ng-scrollbar {{barClass}}\" (mousedown)=\"onScrollbarHolderClick($event)\">\n      <div #thumb class=\"ng-scrollbar-thumb {{thumbClass}}\" [ngStyle]=\"scrollbarStyle | async\"></div>\n    </div>\n  "
                }] }
    ];
    /** @nocollapse */
    NgScrollbarY.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"],] }] },
        { type: NgScrollbar, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function () { return NgScrollbar; }),] }] },
        { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["PLATFORM_ID"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"] }
    ]; };
    return NgScrollbarY;
}(NgScrollbarThumb));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgScrollbarX = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(NgScrollbarX, _super);
    function NgScrollbarX(_document, _parent, _platform, _dir, _zone) {
        var _this = _super.call(this, _parent, _platform, _zone) || this;
        _this._document = _document;
        _this._parent = _parent;
        _this._dir = _dir;
        _this._zone = _zone;
        return _this;
    }
    Object.defineProperty(NgScrollbarX.prototype, "thumbSize", {
        /**
         * Calculate scrollbar thumbnail size
         */
        get: /**
         * Calculate scrollbar thumbnail size
         * @return {?}
         */
        function () {
            /** @type {?} */
            var barClientWidth = this.bar.nativeElement.clientWidth;
            /** @type {?} */
            var viewClientWidth = this._view.clientWidth;
            /** @type {?} */
            var viewScrollWidth = this._view.scrollWidth;
            this._naturalThumbSize = barClientWidth / viewScrollWidth * barClientWidth;
            this._scrollMax = viewScrollWidth - viewClientWidth;
            return this.scrollBoundaries(this._naturalThumbSize, this._scrollMax);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Scrollbar click
     * @param e Mouse event
     */
    /**
     * Scrollbar click
     * @param {?} e Mouse event
     * @return {?}
     */
    NgScrollbarX.prototype.onScrollbarHolderClick = /**
     * Scrollbar click
     * @param {?} e Mouse event
     * @return {?}
     */
    function (e) {
        if (e.target === e.currentTarget) {
            /** @type {?} */
            var offsetX = e.offsetX - this._naturalThumbSize * .5;
            /** @type {?} */
            var thumbPositionPercentage = offsetX * 100 / this.bar.nativeElement.clientWidth;
            /** @type {?} */
            var value = thumbPositionPercentage * this._view.scrollWidth / 100;
            this._parent.scrollTo((/** @type {?} */ ({ left: value, duration: this.scrollToDuration }))).subscribe();
        }
    };
    /**
     * Update scrollbar
     */
    /**
     * Update scrollbar
     * @protected
     * @return {?}
     */
    NgScrollbarX.prototype.updateScrollbar = /**
     * Update scrollbar
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        this._thumbSize = this.thumb.nativeElement.clientWidth;
        this._trackMax = this.bar.nativeElement.clientWidth - this._thumbSize;
        this._currPos = this._view.scrollLeft * this._trackMax / this._scrollMax;
        this._zone.run(function () {
            rxjs__WEBPACK_IMPORTED_MODULE_7__["animationFrameScheduler"].schedule(function () {
                return _this.updateState({
                    transform: "translate3d(" + (_this._dir.value === 'rtl' ? _this._currPos - _this._trackMax : _this._currPos) + "px, 0, 0)",
                    width: _this.thumbSize + "px"
                });
            });
        });
    };
    /**
     * Start horizontal thumb worker
     */
    /**
     * Start horizontal thumb worker
     * @protected
     * @return {?}
     */
    NgScrollbarX.prototype.startThumbEvents = /**
     * Start horizontal thumb worker
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var mouseDown$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(this.thumb.nativeElement, 'mousedown');
        /** @type {?} */
        var mouseMove$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(this._document, 'mousemove');
        /** @type {?} */
        var mouseUp$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(this._document, 'mouseup').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])(function () { return _this._document.onselectstart = null; }));
        return mouseDown$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])(function () {
            _this._document.onselectstart = function () { return false; };
            // Initialize trackMax for before start dragging
            _this._trackMax = _this.bar.nativeElement.clientWidth - _this._thumbSize;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["pluck"])('offsetX'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["mergeMap"])(function (mouseDownOffset) { return mouseMove$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(mouseUp$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["pluck"])('clientX'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])(function (mouseMoveClient) {
            /** @type {?} */
            var offsetX = mouseMoveClient - _this.bar.nativeElement.getBoundingClientRect().left;
            /** @type {?} */
            var value = _this._scrollMax * (offsetX - mouseDownOffset) / _this._trackMax;
            if (_this._dir.value === 'rtl') {
                value = value === 0 ? offsetX - _this._trackMax : value;
            }
            _this._parent.scrollable.scrollTo({ left: value });
        })); }));
    };
    NgScrollbarX.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'ng-scrollbar-x',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
                    template: "\n    <div #bar class=\"ng-scrollbar {{barClass}}\" (mousedown)=\"onScrollbarHolderClick($event)\">\n      <div #thumb class=\"ng-scrollbar-thumb {{thumbClass}}\" [ngStyle]=\"scrollbarStyle | async\"></div>\n    </div>\n  "
                }] }
    ];
    /** @nocollapse */
    NgScrollbarX.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"],] }] },
        { type: NgScrollbar, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function () { return NgScrollbar; }),] }] },
        { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["PLATFORM_ID"],] }] },
        { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"] }
    ]; };
    return NgScrollbarX;
}(NgScrollbarThumb));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgScrollbarModule = /** @class */ (function () {
    function NgScrollbarModule() {
    }
    NgScrollbarModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollingModule"],
                        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["LayoutModule"],
                        _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["BidiModule"],
                        SmoothScrollModule
                    ],
                    declarations: [
                        NgScrollbar,
                        NgScrollbarY,
                        NgScrollbarX
                    ],
                    exports: [
                        NgScrollbar
                    ]
                },] }
    ];
    return NgScrollbarModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-scrollbar.js.map

/***/ }),

/***/ "./src/app/content/pages/apps/dashboards/dashboard2/dashboard2.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/content/pages/apps/dashboards/dashboard2/dashboard2.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tasks-list>li {\r\npadding-right: 0;\r\npadding-left: 0;\r\npadding: .8rem 1.5rem;\r\n}\r\n.task-actions {\r\ndisplay: none;\r\nposition: absolute;\r\nright: 20px;\r\ntop: 50%;\r\nmargin-top: -15px;\r\n}\r\n.task-actions>a.dropdown-toggle {\r\ncolor: #aaa;\r\nheight: 30px;\r\nwidth: 30px;\r\ndisplay: inline-flex;\r\nalign-items: center;\r\njustify-content: center;\r\n}\r\n.task-info {\r\npadding-left: 34px;\r\n}\r\n.tasks-list>li .checkbox input:checked~span {\r\ntext-decoration: line-through;\r\n}\r\n.tasks-list>li:hover .task-actions {\r\ndisplay: block\r\n}\r\n.ng-scrollbar {\r\n    --scrollbar-size: 8px;\r\n    --scrollbar-thumb-color: rgb(94, 175, 255);\r\n    --scrollbar-thumb-hover-color: dodgerblue;\r\n    --scrollbar-border-radius: 4px;\r\n  }\r\n/* .scroll_bar{\r\n    overflow-x: hidden;\r\n} */\r\n/* .ng-scrollbar-layout[_ngcontent-c10] > .ng-scrollbar-layout[_ngcontent-c10] > .ng-scroll-view-container[_ngcontent-c10] > .ng-scroll-view[_ngcontent-c10]{\r\n    overflow-x: unset !important;\r\n}\r\n */\r\n/* .removebar{\r\n     overflow-y: unset !important\r\n } */\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudC9wYWdlcy9hcHBzL2Rhc2hib2FyZHMvZGFzaGJvYXJkMi9kYXNoYm9hcmQyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxnQkFBZ0I7QUFDaEIsZUFBZTtBQUNmLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsYUFBYTtBQUNiLGtCQUFrQjtBQUNsQixXQUFXO0FBQ1gsUUFBUTtBQUNSLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsV0FBVztBQUNYLFlBQVk7QUFDWixXQUFXO0FBQ1gsb0JBQW9CO0FBQ3BCLG1CQUFtQjtBQUNuQix1QkFBdUI7QUFDdkI7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBR0E7SUFDSSxxQkFBcUI7SUFDckIsMENBQTBDO0lBQzFDLHlDQUF5QztJQUN6Qyw4QkFBOEI7RUFDaEM7QUFDRjs7R0FFRztBQUlIOzs7RUFHRTtBQUNEOztJQUVHIiwiZmlsZSI6InNyYy9hcHAvY29udGVudC9wYWdlcy9hcHBzL2Rhc2hib2FyZHMvZGFzaGJvYXJkMi9kYXNoYm9hcmQyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFza3MtbGlzdD5saSB7XHJcbnBhZGRpbmctcmlnaHQ6IDA7XHJcbnBhZGRpbmctbGVmdDogMDtcclxucGFkZGluZzogLjhyZW0gMS41cmVtO1xyXG59XHJcbi50YXNrLWFjdGlvbnMge1xyXG5kaXNwbGF5OiBub25lO1xyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcbnJpZ2h0OiAyMHB4O1xyXG50b3A6IDUwJTtcclxubWFyZ2luLXRvcDogLTE1cHg7XHJcbn1cclxuLnRhc2stYWN0aW9ucz5hLmRyb3Bkb3duLXRvZ2dsZSB7XHJcbmNvbG9yOiAjYWFhO1xyXG5oZWlnaHQ6IDMwcHg7XHJcbndpZHRoOiAzMHB4O1xyXG5kaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLnRhc2staW5mbyB7XHJcbnBhZGRpbmctbGVmdDogMzRweDtcclxufVxyXG4udGFza3MtbGlzdD5saSAuY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZH5zcGFuIHtcclxudGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbn1cclxuLnRhc2tzLWxpc3Q+bGk6aG92ZXIgLnRhc2stYWN0aW9ucyB7XHJcbmRpc3BsYXk6IGJsb2NrXHJcbn1cclxuXHJcbiAgICBcclxuLm5nLXNjcm9sbGJhciB7XHJcbiAgICAtLXNjcm9sbGJhci1zaXplOiA4cHg7XHJcbiAgICAtLXNjcm9sbGJhci10aHVtYi1jb2xvcjogcmdiKDk0LCAxNzUsIDI1NSk7XHJcbiAgICAtLXNjcm9sbGJhci10aHVtYi1ob3Zlci1jb2xvcjogZG9kZ2VyYmx1ZTtcclxuICAgIC0tc2Nyb2xsYmFyLWJvcmRlci1yYWRpdXM6IDRweDtcclxuICB9XHJcbi8qIC5zY3JvbGxfYmFye1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59ICovXHJcblxyXG5cclxuXHJcbi8qIC5uZy1zY3JvbGxiYXItbGF5b3V0W19uZ2NvbnRlbnQtYzEwXSA+IC5uZy1zY3JvbGxiYXItbGF5b3V0W19uZ2NvbnRlbnQtYzEwXSA+IC5uZy1zY3JvbGwtdmlldy1jb250YWluZXJbX25nY29udGVudC1jMTBdID4gLm5nLXNjcm9sbC12aWV3W19uZ2NvbnRlbnQtYzEwXXtcclxuICAgIG92ZXJmbG93LXg6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbn1cclxuICovXHJcbiAvKiAucmVtb3ZlYmFye1xyXG4gICAgIG92ZXJmbG93LXk6IHVuc2V0ICFpbXBvcnRhbnRcclxuIH0gKi9cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/content/pages/apps/dashboards/dashboard2/dashboard2.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/content/pages/apps/dashboards/dashboard2/dashboard2.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-6\">\n        <subheader title=\"Dashboard\" [breadcrumb]=\"['Dashboards', '']\"></subheader>\n    </div>\n    <div class=\"col-md-6\">\n        <div class=\"d-flex justify-content-end align-items-center\">\n            <span class=\"flexbox pr-4 mr-4 border-right\">\n                <span class=\"h6 mb-0 text-success\">$ 54,105.00 USD</span>\n            </span>\n            <select class=\"form-control form-control-line\">\n                <option>Tradequiry Simulated Broker</option>\n                <option>EURO</option>\n                <option>GBP</option>\n            </select>\n        </div>\n    </div>\n</div>\n\n<div class=\"card\">\n    <div>\n\n        <div class=\"card-body py-3\">\n            <div class=\"row\">\n\n                <div class=\"col-sm-6 col-lg-3 border-right py-3\">\n                    <div class=\"d-flex align-items-center\">\n                        <div class=\"flex-grow-1\">\n                            <div class=\"flexbox mb-3\">\n                                <span class=\"text\">Total Returns</span>\n                                <span class=\"text-danger\">-1.12%</span>\n                            </div>\n                            <div class=\"h5 mb-0 font-20 text-success\">+$548.50</div>\n                        </div>\n                        <div class=\"ml-3 d-none d-md-block\">\n                            <span class=\"sparkline\">\n                                <canvas width=\"70\" height=\"35\" style=\"display: inline-block; width: 70px; height: 35px; vertical-align: top;\"></canvas>\n                            </span>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-sm-6 col-lg-3 border-right py-3\">\n                    <div class=\"d-flex align-items-center\">\n                        <div class=\"flex-grow-1\">\n                            <div class=\"flexbox mb-3\">\n                                <span class=\"text\">Today's Returns</span>\n                                <span class=\"text-success\">+2.08%</span>\n                            </div>\n                            <div class=\"h5 mb-0 font-20 text-success\">+$1,948.50</div>\n                        </div>\n                        <div class=\"ml-3 d-none d-md-block\">\n                            <span class=\"sparkline\">\n                                <canvas width=\"70\" height=\"35\" style=\"display: inline-block; width: 70px; height: 35px; vertical-align: top;\"></canvas>\n                            </span>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-sm-6 col-lg-3 border-right py-3\">\n                    <div class=\"d-flex align-items-center\">\n                        <div class=\"flex-grow-1\">\n                            <div class=\"flexbox mb-3\">\n                                <span class=\"text\">Today's Algorithm Returns</span>\n                                <span class=\"text-success\">+1.45%</span>\n                            </div>\n                            <div class=\"h5 mb-0 font-20 text-secondary\">+$0</div>\n                        </div>\n                        <div class=\"ml-3 d-none d-md-block\">\n                            <span class=\"sparkline\">\n                                <canvas width=\"70\" height=\"35\" style=\"display: inline-block; width: 70px; height: 35px; vertical-align: top;\"></canvas>\n                            </span>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-sm-6 col-lg-3 py-3\">\n                    <div class=\"d-flex align-items-center\">\n                        <div class=\"flex-grow-1\">\n                            <div class=\"flexbox mb-3\">\n                                <span class=\"text\">Total Algorithm Returns</span>\n                                <span class=\"text-danger\">-0.95%</span>\n                            </div>\n                            <div class=\"h5 mb-0 font-20 text-danger\">-$9,548.50</div>\n                        </div>\n                        <div class=\"ml-3 d-none d-md-block\">\n                            <span class=\"sparkline\">\n                                <canvas width=\"70\" height=\"35\" style=\"display: inline-block; width: 70px; height: 35px; vertical-align: top;\"></canvas>\n                            </span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-4\">\n            <div class=\"card card-fullheight\">\n                <div class=\"card-body\">\n                    <div class=\"d-flex justify-content-between mb-5\">\n                        <div>\n                            <h5 class=\"box-title mb-2\">Portfolio Makeup</h5>\n\n\n\n\n                            <div class=\"text-muted font-13\">Simple Subtitle</div>\n\n                        </div>\n                        <a class=\"text-muted\" href=\"#\">\n                            <i class=\"ti-info-alt\"></i>\n                        </a>\n                    </div>\n                    <!-- <div class=\"mb-5\"><div class=\"chartjs-size-monitor\" style=\"position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;\"><div class=\"chartjs-size-monitor-expand\" style=\"position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;\"><div style=\"position:absolute;width:1000000px;height:1000000px;left:0;top:0\"></div></div><div class=\"chartjs-size-monitor-shrink\" style=\"position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;\"><div style=\"position:absolute;width:200%;height:200%;left:0; top:0\"></div></div></div><canvas id=\"donut_chart_1\" style=\"height: 220px; display: block; width: 459px;\" width=\"459\" height=\"220\" class=\"chartjs-render-monitor\"></canvas></div> -->\n                    <div class=\"mb-5\" style=\"display: block\">\n                        <canvas baseChart [data]=\"doughnutChartData\" [labels]=\"doughnutChartLabels\" [chartType]=\"doughnutChartType\" (chartHover)=\"chartHovered($event)\"\n                            (chartClick)=\"chartClicked($event)\"></canvas>\n                    </div>\n                    <div>\n                        <div class=\"flexbox mb-3\">\n                            <div>\n                                <span class=\"badge-point badge-warning rounded-0 mr-2\"></span>\n                                <span>Cash</span>\n                            </div>\n                            <span class=\"h6 mb-0 font-16\">+28%</span>\n                        </div>\n                        <div class=\"flexbox mb-3\">\n                            <div>\n                                <span class=\"badge-point badge-primary rounded-0 mr-2\"></span>\n                                <span>Stocks</span>\n                            </div>\n                            <span class=\"h6 mb-0 font-16\">$9570</span>\n                        </div>\n                        <div class=\"flexbox mb-2\">\n                            <div>\n                                <span class=\"badge-point badge-danger rounded-0 mr-2\"></span>\n                                <span>Algorithm Allocated</span>\n                            </div>\n                            <span class=\"h6 mb-0 font-16\">$3540</span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-lg-4\">\n            <div class=\"card card-fullheight\">\n                <div class=\"card-body\">\n                    <div class=\"d-flex justify-content-between mb-4\">\n                        <div>\n                            <h5 class=\"box-title mb-0\">Stocks Held</h5>\n                        </div>\n                        <a class=\"text-muted\" href=\"#\">\n                            <i class=\"ti-more-alt\"></i>\n                        </a>\n                    </div>\n                     <div class=\"tab-content\">\n                        <div  style=\"height: 340px;\">\n                                 <ng-scrollbar style=\"overflow:hidden !important\">\n                 \n                                        <div style=\"padding: 1em; width:100% ;overflow-x: hidden;\" class=\"tab-pane fade active show tab_scroll\" id=\"tab-btc\">\n                                                <div class=\"card-fullwidth-block mb-4\">\n                                                        <div class=\"px-4 py-3 bg-success-50\">\n                                                            <div class=\"flexbox mb-1 font-weight-bold\">\n                                                                <span>GOOG</span>\n                                                                <span>$10.245.00</span>\n                                                            </div>\n                                                            <div class=\"flexbox\">\n                                                                <span class=\"text-success\">\n                                                                    <i class=\"fas fa-caret-up\"></i> 2.04%</span>\n                                                                <span class=\"text-muted\">5 shares</span>\n                                                            </div>\n                                                        </div>\n                \n                                                        <div class=\"px-4 py-3 bg-danger-50\">\n                                                            <div class=\"flexbox mb-1 font-weight-bold\">\n                                                                <span>YELP</span>\n                                                                <span>$10.245.00</span>\n                                                            </div>\n                                                            <div class=\"flexbox\">\n                                                                <span class=\"text-danger\">\n                                                                    <i class=\"fas fa-caret-down\"></i> 1.24%</span>\n                                                                <span class=\"text-muted\">120 shares</span>\n                                                            </div>\n                                                        </div>\n                                                        <div class=\"px-4 py-3\">\n                                                            <div class=\"flexbox mb-1 font-weight-bold\">\n                                                                <span>CGC</span>\n                                                                <span>$10.245.00</span>\n                                                            </div>\n                                                            <div class=\"flexbox\">\n                                                                <span class=\"text\">\n                                                                    <i class=\"fas fa-caret-up\"></i>0%</span>\n                                                                <span class=\"text-muted\">205.4 GBP</span>\n                                                            </div>\n                                                        </div>\n                                                        <div class=\"px-4 py-3 bg-danger-50\">\n                                                            <div class=\"flexbox mb-1 font-weight-bold\">\n                                                                <span>AMZN</span>\n                                                                <span>$10.245.00</span>\n                                                            </div>\n                                                            <div class=\"flexbox\">\n                                                                <span class=\"text-danger\">\n                                                                    <i class=\"fas fa-caret-down\"></i> 1.24%</span>\n                                                                <span class=\"text-muted\">2 shares</span>\n                                                            </div>\n                                                        </div>\n                                                        <div class=\"px-4 py-3 bg-success-50\">\n                                                            <div class=\"flexbox mb-1 font-weight-bold\">\n                                                                <span>TSLA</span>\n                                                                <span>$10.245.00</span>\n                                                            </div>\n                                                            <div class=\"flexbox\">\n                                                                <span class=\"text-success\">\n                                                                    <i class=\"fas fa-caret-up\"></i> 2.37%</span>\n                                                                <span class=\"text-muted\">10 shares</span>\n                                                            </div>\n                                                        </div>\n                                                </div>\n                                            </div>\n                                </ng-scrollbar> \n                               \n\n                        </div>\n\n\n                        <div class=\"tab-pane fade\" id=\"tab-eth\">\n                            <div class=\"card-fullwidth-block mb-4\">\n                                <div class=\"px-4 py-3\">\n                                    <div class=\"flexbox mb-1 font-weight-bold\">\n                                        <span>ETH/USD</span>\n                                        <span>$10.245.00</span>\n                                    </div>\n                                    <div class=\"flexbox\">\n                                        <span class=\"text-success\">\n                                            <i class=\"fas fa-caret-up\"></i> 2.04%</span>\n                                        <span class=\"text-muted\">340.5 USD</span>\n                                    </div>\n                                </div>\n                                <div class=\"px-4 py-3 bg-secondary-50\">\n                                    <div class=\"flexbox mb-1 font-weight-bold\">\n                                        <span>ETH/EURO</span>\n                                        <span>$10.245.00</span>\n                                    </div>\n                                    <div class=\"flexbox\">\n                                        <span class=\"text-danger\">\n                                            <i class=\"fas fa-caret-down\"></i> 1.24%</span>\n                                        <span class=\"text-muted\">120.2 EURO</span>\n                                    </div>\n                                </div>\n                                <div class=\"px-4 py-3\">\n                                    <div class=\"flexbox mb-1 font-weight-bold\">\n                                        <span>ETH/GBP</span>\n                                        <span>$10.245.00</span>\n                                    </div>\n                                    <div class=\"flexbox\">\n                                        <span class=\"text-success\">\n                                            <i class=\"fas fa-caret-up\"></i> 2.37%</span>\n                                        <span class=\"text-muted\">205.4 GBP</span>\n                                    </div>\n                                </div>\n                                <div class=\"px-4 py-3 bg-danger-50\">\n                                    <div class=\"flexbox mb-1 font-weight-bold\">\n                                        <span>ETH/CAD</span>\n                                        <span>$10.245.00</span>\n                                    </div>\n                                    <div class=\"flexbox\">\n                                        <span class=\"text-danger\">\n                                            <i class=\"fas fa-caret-down\"></i> 1.24%</span>\n                                        <span class=\"text-muted\">120.2 CAD</span>\n                                    </div>\n                                </div>\n                                <div class=\"px-4 py-3\">\n                                    <div class=\"flexbox mb-1 font-weight-bold\">\n                                        <span>ETH/USDT</span>\n                                        <span>$10.245.00</span>\n                                    </div>\n                                    <div class=\"flexbox\">\n                                        <span class=\"text-success\">\n                                            <i class=\"fas fa-caret-up\"></i> 2.37%</span>\n                                        <span class=\"text-muted\">205.4 USDT</span>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"tab-pane fade\" id=\"tab-ltc\">\n                            <div class=\"card-fullwidth-block mb-4\">\n                                <div class=\"px-4 py-3\">\n                                    <div class=\"flexbox mb-1 font-weight-bold\">\n                                        <span>LTC/USD</span>\n                                        <span>$10.245.00</span>\n                                    </div>\n                                    <div class=\"flexbox\">\n                                        <span class=\"text-success\">\n                                            <i class=\"fas fa-caret-up\"></i> 2.04%</span>\n                                        <span class=\"text-muted\">340.5 USD</span>\n                                    </div>\n                                </div>\n                                <div class=\"px-4 py-3 bg-secondary-50\">\n                                    <div class=\"flexbox mb-1 font-weight-bold\">\n                                        <span>LTC/EURO</span>\n                                        <span>$10.245.00</span>\n                                    </div>\n                                    <div class=\"flexbox\">\n                                        <span class=\"text-danger\">\n                                            <i class=\"fas fa-caret-down\"></i> 1.24%</span>\n                                        <span class=\"text-muted\">120.2 EURO</span>\n                                    </div>\n                                </div>\n                                <div class=\"px-4 py-3\">\n                                    <div class=\"flexbox mb-1 font-weight-bold\">\n                                        <span>LTC/GBP</span>\n                                        <span>$10.245.00</span>\n                                    </div>\n                                    <div class=\"flexbox\">\n                                        <span class=\"text-success\">\n                                            <i class=\"fas fa-caret-up\"></i> 2.37%</span>\n                                        <span class=\"text-muted\">205.4 GBP</span>\n                                    </div>\n                                </div>\n                                <div class=\"px-4 py-3 bg-danger-50\">\n                                    <div class=\"flexbox mb-1 font-weight-bold\">\n                                        <span>LTC/CAD</span>\n                                        <span>$10.245.00</span>\n                                    </div>\n                                    <div class=\"flexbox\">\n                                        <span class=\"text-danger\">\n                                            <i class=\"fas fa-caret-down\"></i> 1.24%</span>\n                                        <span class=\"text-muted\">120.2 CAD</span>\n                                    </div>\n                                </div>\n                                <div class=\"px-4 py-3\">\n                                    <div class=\"flexbox mb-1 font-weight-bold\">\n                                        <span>LTC/USDT</span>\n                                        <span>$10.245.00</span>\n                                    </div>\n                                    <div class=\"flexbox\">\n                                        <span class=\"text-success\">\n                                            <i class=\"fas fa-caret-up\"></i> 2.37%</span>\n                                        <span class=\"text-muted\">205.4 USDT</span>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n\n\n\n\n\n\n\n                </div>\n            </div>\n        </div>\n        <div class=\"col-lg-4\">\n            <div class=\"card card-fullheight\">\n                <div class=\"card-body\">\n                    <div class=\"d-flex justify-content-between mb-5\">\n                        <h5 class=\"box-title mb-0\">Algorithm Activity</h5>\n                        <a class=\"text-muted\" href=\"#\">View All</a>\n                    </div>\n                    <ul class=\"timeline timeline-default\">\n                        <li class=\"timeline-item\">2 Issue fixed\n                            <span class=\"font-13 text-muted ml-2\">Just now</span>\n                        </li>\n                        <li class=\"timeline-item\">\n                            <span>15 New orders\n                                <span class=\"badge badge-primary badge-pill ml-2\">important</span>\n                            </span>\n                            <span class=\"font-13 text-muted ml-2\">5 mins</span>\n                        </li>\n                        <li class=\"timeline-item\">18 new orders sent\n                            <span class=\"font-13 text-muted ml-2\">24 mins</span>\n                        </li>\n                        <li class=\"timeline-item\">15 New messages\n                            <span class=\"font-13 text-muted ml-2\">45 mins</span>\n                        </li>\n                        <li class=\"timeline-item\">The invoice is ready\n                            <span class=\"font-13 text-muted ml-2\">1 hrs</span>\n                        </li>\n                        <li class=\"timeline-item\">\n                            <span>Server Error\n                                <span class=\"badge badge-success badge-pill ml-2\">resolved</span>\n                            </span>\n                            <span class=\"font-13 text-muted ml-2\">2 hrs</span>\n                        </li>\n                        <li class=\"timeline-item\">\n                            <span>System Warning\n                                <a class=\"text-purple ml-2\">Check</a>\n                            </span>\n                            <span class=\"font-13 text-muted ml-2\">12:07</span>\n                        </li>\n                        <li class=\"timeline-item\">24 new users registered\n                            <span class=\"font-13 text-muted ml-2\">12:30</span>\n                        </li>\n                        <li class=\"timeline-item\">\n                            <span>5 New Orders\n                                <span class=\"badge badge-warning badge-pill ml-2\">important</span>\n                            </span>\n                            <span class=\"font-13 text-muted ml-2\">13:45</span>\n                        </li>\n\n\n\n\n\n\n\n                    </ul>\n                </div>\n            </div>\n        </div>\n\n    </div>\n    <div class=\"row\">\n        <div class=\"col-lg-4\">\n            <div class=\"card\">\n                <div class=\"card-body text-center\">\n                    <div class=\"mb-4 pb-3\">\n                        <i class=\"ti-briefcase text-muted font-40\"></i>\n                    </div>\n                    <h5 class=\"mb-3\">Manage Algorithms </h5>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore neque.</p>\n                    <div>\n                        <a class=\"d-inline-flex align-items-center text-danger\" href=\"javascript:;\">\n                            <span class=\"mr-2\">View More</span>\n                            <i class=\"fas fa-angle-right font-16\"></i>\n                        </a>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-lg-4\">\n            <div class=\"card\">\n                <div class=\"card-body text-center\">\n                    <div class=\"mb-4 pb-3\">\n                        <i class=\"ti-announcement text-muted font-40\"></i>\n                    </div>\n                    <h5 class=\"mb-3\">Manage Brokers</h5>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore neque.</p>\n                    <div>\n                        <a class=\"d-inline-flex align-items-center text-danger\" href=\"javascript:;\">\n                            <span class=\"mr-2\">View More</span>\n                            <i class=\"fas fa-angle-right font-16\"></i>\n                        </a>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-lg-4\">\n            <div class=\"card\">\n                <div class=\"card-body text-center\">\n                    <div class=\"mb-4 pb-3\">\n                        <i class=\"ti-world text-muted font-40\"></i>\n                    </div>\n                    <h5 class=\"mb-3\">Marketplace</h5>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore neque.</p>\n                    <div>\n                        <a class=\"d-inline-flex align-items-center text-danger\" href=\"javascript:;\">\n                            <span class=\"mr-2\">View More</span>\n                            <i class=\"fas fa-angle-right font-16\"></i>\n                        </a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/content/pages/apps/dashboards/dashboard2/dashboard2.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/content/pages/apps/dashboards/dashboard2/dashboard2.component.ts ***!
  \**********************************************************************************/
/*! exports provided: Dashboard2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dashboard2Component", function() { return Dashboard2Component; });
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


var Dashboard2Component = /** @class */ (function () {
    // public chartHovered(e: any): void {
    //     console.log(e);
    // }
    function Dashboard2Component() {
        this.disabled = false;
        this.compact = false;
        this.disableinvertX = true;
        this.invertY = false;
        this.chartActiveTimePeriod = 'this_week';
        this.doughnutChartLabels = ['Cash', 'Stocks', 'Algorithm Allocated'];
        this.doughnutChartData = [28, 9570, 3540];
        this.doughnutChartType = 'doughnut';
    }
    // events
    Dashboard2Component.prototype.chartClicked = function (e) {
        console.log(e);
    };
    Dashboard2Component.prototype.ngOnInit = function () {
        var colors = src_app_config__WEBPACK_IMPORTED_MODULE_1__["ThemeConfig"].colors;
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
        };
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
    };
    Dashboard2Component.prototype.setChartTimePeriod = function (period) {
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
    };
    Dashboard2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard2',
            template: __webpack_require__(/*! ./dashboard2.component.html */ "./src/app/content/pages/apps/dashboards/dashboard2/dashboard2.component.html"),
            styles: [__webpack_require__(/*! ./dashboard2.component.css */ "./src/app/content/pages/apps/dashboards/dashboard2/dashboard2.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Dashboard2Component);
    return Dashboard2Component;
}());



/***/ }),

/***/ "./src/app/content/pages/apps/dashboards/dashboard2/dashboard2.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/content/pages/apps/dashboards/dashboard2/dashboard2.module.ts ***!
  \*******************************************************************************/
/*! exports provided: Dashboard2Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dashboard2Module", function() { return Dashboard2Module; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_core_components_card_card_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/components/card/card.module */ "./src/app/core/components/card/card.module.ts");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/index.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_charts__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/esm.js");
/* harmony import */ var src_app_content_layout_components_subheader_subheader_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/content/layout/components/subheader/subheader.module */ "./src/app/content/layout/components/subheader/subheader.module.ts");
/* harmony import */ var _dashboard2_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard2.component */ "./src/app/content/pages/apps/dashboards/dashboard2/dashboard2.component.ts");
/* harmony import */ var ngx_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-scrollbar */ "./node_modules/ngx-scrollbar/fesm5/ngx-scrollbar.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: _dashboard2_component__WEBPACK_IMPORTED_MODULE_7__["Dashboard2Component"],
    }
];
var Dashboard2Module = /** @class */ (function () {
    function Dashboard2Module() {
    }
    Dashboard2Module = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                src_app_content_layout_components_subheader_subheader_module__WEBPACK_IMPORTED_MODULE_6__["SubheaderModule"],
                src_app_core_components_card_card_module__WEBPACK_IMPORTED_MODULE_3__["CardModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_4__["ChartsModule"],
                _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_5__["NgxChartsModule"],
                ngx_scrollbar__WEBPACK_IMPORTED_MODULE_8__["NgScrollbarModule"]
            ],
            declarations: [_dashboard2_component__WEBPACK_IMPORTED_MODULE_7__["Dashboard2Component"]]
        })
    ], Dashboard2Module);
    return Dashboard2Module;
}());



/***/ })

}]);
//# sourceMappingURL=content-pages-apps-dashboards-dashboard2-dashboard2-module.js.map