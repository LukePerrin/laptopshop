(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/C43":
/*!****************************************************!*\
  !*** ./ClientApp/app/laptopShop/shop.component.ts ***!
  \****************************************************/
/*! exports provided: ShopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopComponent", function() { return ShopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_productRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/productRow */ "j91e");
/* harmony import */ var _shared_dataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/dataService */ "g4ZZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function ShopComponent_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShopComponent_div_5_div_1_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); var product_r4 = ctx.$implicit; var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.goToDetails(product_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Configure");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var product_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "clientapp/assets/img/", product_r4.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("alt", "", product_r4.title, " Laptop");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", product_r4.title, " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 4, product_r4.price, "GBP"), "");
} }
function ShopComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ShopComponent_div_5_div_1_Template, 8, 7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var productRow_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", productRow_r2.row);
} }
function ShopComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.errorMessage);
} }
var ShopComponent = /** @class */ (function () {
    function ShopComponent(data, router) {
        this.data = data;
        this.router = router;
        this.title = 'laptop-shop';
        this.products = new Array();
        this.productRows = new Array();
        this.errorMessage = '';
        //using private automatically creates a property available to our class :)
    }
    ShopComponent.prototype.goToDetails = function (product) {
        //update our service with the chosen product        
        this.data.selectedProduct = product;
        this.router.navigate(["details"]);
    };
    ShopComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getProducts().subscribe({
            next: function (products) {
                _this.products = products;
                _this.mapProductsToRows();
            },
            error: function (err) {
                _this.errorMessage = err;
            }
        });
    };
    //structure our products into 2 column rows so it matches my design and our view is data driven    
    ShopComponent.prototype.mapProductsToRows = function () {
        for (var i = 0; i < this.products.length; i++) {
            if (i % 2 === 0) {
                var prods = [];
                prods.push(this.products[i]);
                prods.push(this.products[i + 1]);
                var row = new _shared_productRow__WEBPACK_IMPORTED_MODULE_1__["ProductRow"](prods);
                this.productRows.push(row);
            }
        }
    };
    ShopComponent.ɵfac = function ShopComponent_Factory(t) { return new (t || ShopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
    ShopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShopComponent, selectors: [["the-shop"]], decls: 7, vars: 2, consts: [[1, "container", "marketing"], [1, "text-center", "m-2"], ["class", "row", 4, "ngFor", "ngForOf"], ["class", "alert alert-success", "role", "alert", 4, "ngIf"], [1, "row"], ["class", "col text-center p-2", 4, "ngFor", "ngForOf"], [1, "col", "text-center", "p-2"], [1, "laptop-img", 3, "src", "alt"], [1, "btn", "btn-primary", "align-self-center", 3, "click"], ["role", "alert", 1, "alert", "alert-success"]], template: function ShopComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "The UK's #1 Resource for Laptops");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Select your laptop and proceed to configuration");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ShopComponent_div_5_Template, 2, 1, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ShopComponent_div_6_Template, 5, 1, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.productRows);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage != "");
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CurrencyPipe"]], encapsulation: 2 });
    return ShopComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShopComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'the-shop',
                templateUrl: './shop.component.html'
            }]
    }], function () { return [{ type: _shared_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!*********************************!*\
  !*** multi ./ClientApp/main.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Repo\LaptopShop\laptopshop\ClientApp\main.ts */"QqbR");


/***/ }),

/***/ "5WrZ":
/*!*******************************************************************!*\
  !*** ./ClientApp/app/laptopCheckout/laptop-checkout.component.ts ***!
  \*******************************************************************/
/*! exports provided: LaptopCheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LaptopCheckoutComponent", function() { return LaptopCheckoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/dataService */ "g4ZZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






function LaptopCheckoutComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No items in your basket");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LaptopCheckoutComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "clientapp/assets/img/", item_r2.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r2.description, " Laptop");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Base Unit: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 12, item_r2.basePrice, "GBP"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("RAM: ", item_r2.ramCode, " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](14, 15, item_r2.ramprice, "GBP"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("HDD: ", item_r2.hardDiskCode, " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](17, 18, item_r2.hddprice, "GBP"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Colour: ", item_r2.colourDescription, " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](20, 21, item_r2.colourprice, "GBP"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("CPU: ", item_r2.cpuDescription, " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](23, 24, item_r2.cpuprice, "GBP"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total Price: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](27, 27, item_r2.totalPrice, "GBP"), "");
} }
var LaptopCheckoutComponent = /** @class */ (function () {
    function LaptopCheckoutComponent(data, router) {
        this.data = data;
        this.router = router;
        this.title = 'laptop-shop';
        this.basket = [];
    }
    LaptopCheckoutComponent.prototype.ngOnInit = function () {
        this.basket = this.data.basket;
        this.grossTotal = 0;
        //calculate gross total for all basket items
        for (var i = 0; i < this.basket.length; i++) {
            this.grossTotal += this.basket[i].totalPrice;
        }
    };
    LaptopCheckoutComponent.ɵfac = function LaptopCheckoutComponent_Factory(t) { return new (t || LaptopCheckoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
    LaptopCheckoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LaptopCheckoutComponent, selectors: [["laptop-checkout"]], decls: 70, vars: 6, consts: [[1, "container", "d-flex", "flex-column", "align-items-center", "p-3"], [1, "row"], [1, "col-12", "col-lg-6"], [4, "ngIf"], ["class", "card shadow mb-3", 4, "ngFor", "ngForOf"], [1, "card", "shadow"], [1, "card-body"], [1, "col"], [2, "font-size", "18px"], [1, "col", "text-right"], [2, "background-color", "#323232"], ["ngNativeValidate", "", 1, "text-left", "payment-form"], [1, "form-group"], ["for", "username"], ["type", "text", "name", "username", "placeholder", "John Doe", "required", "", 1, "form-control"], ["for", "card-number"], [1, "input-group"], [1, "input-group-prepend"], ["type", "text", "name", "cardnumber", "placeholder", "Your card number", "required", "", 1, "form-control"], [1, "input-group-append"], [1, "input-group-text", "input-group-text", "text-muted"], [1, "fa", "fa-cc-visa", "mx-1"], [1, "fa", "fa-cc-amex", "mx-1"], [1, "fa", "fa-cc-mastercard", "mx-1"], [1, "form-row"], [1, "col-sm-8"], ["type", "number", "placeholder", "MM", "required", "", 1, "form-control"], ["type", "number", "placeholder", "YY", "required", "", 1, "form-control"], [1, "col-sm-4"], ["data-toggle", "tooltip", "data-bs-tooltip", "", "title", "Three-digits code on the back of your card"], [1, "fa", "fa-question-circle"], ["type", "text", "required", "", 1, "form-control"], [1, "text-center"], ["data-target", "#upgrade-modal", "data-toggle", "modal", "type", "submit", 1, "btn", "btn-primary"], ["role", "dialog", "tabindex", "-1", "id", "upgrade-modal", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "fa", "fa-close"], [1, "modal-body"], [1, "fa", "fa-smile-o"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-light"], [1, "card", "shadow", "mb-3"], [1, "col-4", "text-center"], [1, "img-fluid", "border", "rounded", "shadow", 3, "src"], [1, "mt-2"]], template: function LaptopCheckoutComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LaptopCheckoutComponent_div_3_Template, 3, 0, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LaptopCheckoutComponent_div_4_Template, 28, 30, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Gross Total");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "currency");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "hr", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "form", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Full name (on the card)");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Card Number");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Expiration");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "CVV\u00A0");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "i", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Buy Now");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h4", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Luke's Laptops Ltd");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "button", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "i", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "To continue please upgrade to the full version. We offer a\u00A0");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "complete e-commerce fulfilment solution! SSL, Online Payments, and more!\u00A0");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "i", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "button", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Close");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.basket.length == 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.basket);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](17, 3, ctx.grossTotal, "GBP"));
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"]], encapsulation: 2 });
    return LaptopCheckoutComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LaptopCheckoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'laptop-checkout',
                templateUrl: './laptop-checkout.component.html'
            }]
    }], function () { return [{ type: _shared_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "FhR5":
/*!***********************************************!*\
  !*** ./ClientApp/environments/environment.ts ***!
  \***********************************************/
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

/***/ "HJlE":
/*!****************************************!*\
  !*** ./ClientApp/app/app.component.ts ***!
  \****************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/dataService */ "g4ZZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




var AppComponent = /** @class */ (function () {
    function AppComponent(data) {
        this.data = data;
        this.title = 'laptop-shop';
        this.items = 0;
    }
    ;
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 50, vars: 1, consts: [[1, "navbar", "navbar-dark", "navbar-expand-md", "bg-dark", "text-uppercase", "navigation-clean"], [1, "container"], ["routerLink", "/", 1, "navbar-brand"], ["data-toggle", "collapse", "data-target", "#navcol-1", 1, "navbar-toggler"], [1, "sr-only"], [1, "navbar-toggler-icon"], ["id", "navcol-1", 1, "collapse", "navbar-collapse"], [1, "nav", "navbar-nav", "ml-auto"], [1, "nav-item"], ["routerLink", "/", 1, "nav-link"], [1, "fa", "fa-home"], ["routerLink", "/checkout", 1, "nav-link"], [1, "fa", "fa-shopping-basket"], [1, "footer-basic"], [1, "text-uppercase", "text-light", "bg-dark", "p-3"], [1, "social"], ["routerLink", "/"], [1, "icon", "ion-social-instagram"], [1, "icon", "ion-social-snapchat"], [1, "icon", "ion-social-twitter"], [1, "icon", "ion-social-facebook"], [1, "list-inline"], [1, "list-inline-item"], [1, "copyright"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Luke's Laptops Ltd");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Toggle navigation");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u00A0Home");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u00A0Basket");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "footer", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ul", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Home");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Services");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "About");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Terms");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Privacy Policy");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "LApTOPS LTD \uFFFD 2021");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0(", ctx.data.basket.length, ")");
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], encapsulation: 2 });
    return AppComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html'
            }]
    }], function () { return [{ type: _shared_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"] }]; }, null); })();


/***/ }),

/***/ "J4hL":
/*!*************************************!*\
  !*** ./ClientApp/app/app.module.ts ***!
  \*************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "JS56");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "HJlE");
/* harmony import */ var _laptopShop_shop_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./laptopShop/shop.component */ "/C43");
/* harmony import */ var _shared_dataService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/dataService */ "g4ZZ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _laptopCheckout_laptop_checkout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./laptopCheckout/laptop-checkout.component */ "5WrZ");
/* harmony import */ var _laptopConfig_laptop_config_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./laptopConfig/laptop-config.component */ "zIKr");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
            //inject this service into our compoenents
            _shared_dataService__WEBPACK_IMPORTED_MODULE_6__["DataService"]
        ], imports: [[
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
            ]] });
    return AppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _laptopShop_shop_component__WEBPACK_IMPORTED_MODULE_5__["ShopComponent"],
        _laptopConfig_laptop_config_component__WEBPACK_IMPORTED_MODULE_9__["LaptopConfigComponent"],
        _laptopCheckout_laptop_checkout_component__WEBPACK_IMPORTED_MODULE_8__["LaptopCheckoutComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _laptopShop_shop_component__WEBPACK_IMPORTED_MODULE_5__["ShopComponent"],
                    _laptopConfig_laptop_config_component__WEBPACK_IMPORTED_MODULE_9__["LaptopConfigComponent"],
                    _laptopCheckout_laptop_checkout_component__WEBPACK_IMPORTED_MODULE_8__["LaptopCheckoutComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
                ],
                providers: [
                    //inject this service into our compoenents
                    _shared_dataService__WEBPACK_IMPORTED_MODULE_6__["DataService"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "JS56":
/*!*********************************************!*\
  !*** ./ClientApp/app/app-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _laptopCheckout_laptop_checkout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./laptopCheckout/laptop-checkout.component */ "5WrZ");
/* harmony import */ var _laptopConfig_laptop_config_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./laptopConfig/laptop-config.component */ "zIKr");
/* harmony import */ var _laptopShop_shop_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./laptopShop/shop.component */ "/C43");







var routes = [
    { path: "", component: _laptopShop_shop_component__WEBPACK_IMPORTED_MODULE_4__["ShopComponent"] },
    { path: "details", component: _laptopConfig_laptop_config_component__WEBPACK_IMPORTED_MODULE_3__["LaptopConfigComponent"] },
    { path: "checkout", component: _laptopCheckout_laptop_checkout_component__WEBPACK_IMPORTED_MODULE_2__["LaptopCheckoutComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                    useHash: false,
                    enableTracing: false
                })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return AppRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                        useHash: false,
                        enableTracing: false
                    })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "QqbR":
/*!***************************!*\
  !*** ./ClientApp/main.ts ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "FhR5");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "J4hL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "g4ZZ":
/*!*********************************************!*\
  !*** ./ClientApp/app/shared/dataService.ts ***!
  \*********************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





//this service has other dependencies ie HttpModule
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.laptopConfigs = [];
        this.basket = [];
        this.url = "http://localhost:4999/api/products";
        this.configUrl = "http://localhost:4999/api/laptopConfig";
    }
    DataService.prototype.getProducts = function () {
        //this wont omit values till we subscribe - tap allows us to sneek peek first
        return this.http.get(this.url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (data) { return console.log('All: ' + JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    DataService.prototype.getLaptopConfigs = function () {
        return this.http.get(this.configUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (data) { return console.log('All: ' + JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    DataService.prototype.handleError = function (err) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        var errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = "An error occurred: " + err.error;
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = "Server returned code: " + err.status + ", error message is: " + err.message;
        }
        console.error(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errorMessage);
    };
    DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
    DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac });
    return DataService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "j91e":
/*!********************************************!*\
  !*** ./ClientApp/app/shared/productRow.ts ***!
  \********************************************/
/*! exports provided: ProductRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductRow", function() { return ProductRow; });
var ProductRow = /** @class */ (function () {
    function ProductRow(row) {
        this.row = row;
    }
    return ProductRow;
}());



/***/ }),

/***/ "z/4Q":
/*!**********************************************!*\
  !*** ./ClientApp/app/shared/configSelect.ts ***!
  \**********************************************/
/*! exports provided: ConfigSelection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigSelection", function() { return ConfigSelection; });
var ConfigSelection = /** @class */ (function () {
    function ConfigSelection() {
        this.totalPrice = 0;
        this.ramCode = "";
        this.hardDiskCode = "";
        this.colourCode = "";
        this.cpuCode = "";
        this.image = "";
        this.description = "";
    }
    return ConfigSelection;
}());



/***/ }),

/***/ "zIKr":
/*!***************************************************************!*\
  !*** ./ClientApp/app/laptopConfig/laptop-config.component.ts ***!
  \***************************************************************/
/*! exports provided: LaptopConfigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LaptopConfigComponent", function() { return LaptopConfigComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_configSelect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/configSelect */ "z/4Q");
/* harmony import */ var _shared_dataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/dataService */ "g4ZZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function LaptopConfigComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please select RAM");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LaptopConfigComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please select hard disk size");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LaptopConfigComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please select a colour");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LaptopConfigComponent_div_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please select CPU");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LaptopConfigComponent_div_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Item Added!\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Add More Items");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Proceed To Checkout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LaptopConfigComponent_div_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.errorMessage);
} }
var LaptopConfigComponent = /** @class */ (function () {
    function LaptopConfigComponent(data, router) {
        this.data = data;
        this.router = router;
        this.errorMessage = '';
        this.submitted = false;
        this.selectedConfig = new _shared_configSelect__WEBPACK_IMPORTED_MODULE_1__["ConfigSelection"]();
        this.valid = false;
        this.showAdded = false;
    }
    LaptopConfigComponent.prototype.addToBasket = function () {
        this.submitted = true;
        if (this.valid) {
            this.showAdded = true;
            this.data.basket.push(this.selectedConfig);
        }
    };
    LaptopConfigComponent.prototype.calculatePrice = function () {
        var _this = this;
        this.totalPrice = this.selectedProduct.price;
        var ramprice = 0;
        var diskprice = 0;
        var colourprice = 0;
        var cpuprice = 0;
        //match the laptop config code taken from the radio buttons with the allConfigs api list to get price 
        if (this.selectedConfig.ramCode != "")
            ramprice = this.allConfigs.filter(function (x) { return x.code == _this.selectedConfig.ramCode; })[0].price;
        if (this.selectedConfig.hardDiskCode != "")
            diskprice = this.allConfigs.filter(function (x) { return x.code == _this.selectedConfig.hardDiskCode; })[0].price;
        if (this.selectedConfig.colourCode != "") {
            colourprice = this.allConfigs.filter(function (x) { return x.code == _this.selectedConfig.colourCode; })[0].price;
            this.selectedConfig.colourDescription = this.allConfigs.filter(function (x) { return x.code == _this.selectedConfig.colourCode; })[0].description;
        }
        if (this.selectedConfig.cpuCode != "") {
            cpuprice = this.allConfigs.filter(function (x) { return x.code == _this.selectedConfig.cpuCode; })[0].price;
            this.selectedConfig.cpuDescription = this.allConfigs.filter(function (x) { return x.code == _this.selectedConfig.cpuCode; })[0].description;
        }
        this.totalPrice += (ramprice + diskprice + colourprice + cpuprice);
        if (ramprice && diskprice && colourprice && cpuprice)
            this.valid = true;
        //update selection to show on basket
        this.selectedConfig.totalPrice = this.totalPrice;
        this.selectedConfig.description = this.selectedProduct.title;
        this.selectedConfig.image = this.selectedProduct.image;
        this.selectedConfig.ramprice = ramprice;
        this.selectedConfig.hddprice = diskprice;
        this.selectedConfig.colourprice = colourprice;
        this.selectedConfig.cpuprice = cpuprice;
        this.selectedConfig.basePrice = this.selectedProduct.price;
    };
    LaptopConfigComponent.prototype.ngOnInit = function () {
        var _this = this;
        //product was set on the main shop page
        this.selectedProduct = this.data.selectedProduct;
        //init base price
        this.totalPrice = this.selectedProduct.price;
        this.data.getLaptopConfigs().subscribe({
            next: function (configs) {
                _this.allConfigs = configs;
            },
            error: function (err) { return _this.errorMessage = err; }
        });
    };
    LaptopConfigComponent.ɵfac = function LaptopConfigComponent_Factory(t) { return new (t || LaptopConfigComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
    LaptopConfigComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LaptopConfigComponent, selectors: [["laptop-config"]], decls: 60, vars: 24, consts: [[1, "container"], [1, "form-row"], [1, "col", "text-center", "p-2"], ["alt", "Selected Laptop Image", 1, "laptop-img", 3, "src"], [1, "form-group"], [1, "config"], [1, "config-select"], ["type", "radio", "name", "ram", "value", "8GB", "required", "", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "ram", "value", "16GB", "required", "", 3, "ngModel", "ngModelChange"], ["class", "text-danger", 4, "ngIf"], ["type", "radio", "name", "disk", "value", "500GB", "required", "", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "disk", "value", "1TB", "required", "", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "colour", "value", "blue", "required", "", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "colour", "value", "red", "required", "", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "cpu", "value", "i3", "required", "", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "cpu", "value", "i7", "required", "", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-primary", "m-3", 3, "click"], ["class", "alert alert-success", "role", "alert", 4, "ngIf"], [1, "text-danger"], ["role", "alert", 1, "alert", "alert-success"], ["routerLink", "", 1, "btn", "btn-info", "btn-sm", "m-2"], ["routerLink", "/checkout", 1, "btn", "btn-info", "btn-sm", "m-2"]], template: function LaptopConfigComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "currency");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Please make your selections");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "RAM:\u00A0");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " 8GB\u00A0 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LaptopConfigComponent_Template_input_ngModelChange_16_listener($event) { return ctx.selectedConfig.ramCode = $event; })("ngModelChange", function LaptopConfigComponent_Template_input_ngModelChange_16_listener() { return ctx.calculatePrice(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " 16GB\u00A0 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LaptopConfigComponent_Template_input_ngModelChange_19_listener($event) { return ctx.selectedConfig.ramCode = $event; })("ngModelChange", function LaptopConfigComponent_Template_input_ngModelChange_19_listener() { return ctx.calculatePrice(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, LaptopConfigComponent_div_20_Template, 2, 0, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Hard Disk Size:\u00A0");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " 500GB\u00A0 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LaptopConfigComponent_Template_input_ngModelChange_26_listener($event) { return ctx.selectedConfig.hardDiskCode = $event; })("ngModelChange", function LaptopConfigComponent_Template_input_ngModelChange_26_listener() { return ctx.calculatePrice(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " 1TB\u00A0 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LaptopConfigComponent_Template_input_ngModelChange_29_listener($event) { return ctx.selectedConfig.hardDiskCode = $event; })("ngModelChange", function LaptopConfigComponent_Template_input_ngModelChange_29_listener() { return ctx.calculatePrice(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, LaptopConfigComponent_div_30_Template, 2, 0, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Colour:\u00A0");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Blue\u00A0 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "input", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LaptopConfigComponent_Template_input_ngModelChange_36_listener($event) { return ctx.selectedConfig.colourCode = $event; })("ngModelChange", function LaptopConfigComponent_Template_input_ngModelChange_36_listener() { return ctx.calculatePrice(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Red\u00A0 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "input", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LaptopConfigComponent_Template_input_ngModelChange_39_listener($event) { return ctx.selectedConfig.colourCode = $event; })("ngModelChange", function LaptopConfigComponent_Template_input_ngModelChange_39_listener() { return ctx.calculatePrice(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, LaptopConfigComponent_div_40_Template, 2, 0, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "CPU:\u00A0");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Intel Core i3\u00A0 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "input", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LaptopConfigComponent_Template_input_ngModelChange_46_listener($event) { return ctx.selectedConfig.cpuCode = $event; })("ngModelChange", function LaptopConfigComponent_Template_input_ngModelChange_46_listener() { return ctx.calculatePrice(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Intel Core i7\u00A0 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "input", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LaptopConfigComponent_Template_input_ngModelChange_49_listener($event) { return ctx.selectedConfig.cpuCode = $event; })("ngModelChange", function LaptopConfigComponent_Template_input_ngModelChange_49_listener() { return ctx.calculatePrice(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, LaptopConfigComponent_div_50_Template, 2, 0, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Total Cost\u00A0 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](55, "currency");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "button", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LaptopConfigComponent_Template_button_click_56_listener() { return ctx.addToBasket(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Add To Basket");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, LaptopConfigComponent_div_58_Template, 9, 0, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, LaptopConfigComponent_div_59_Template, 5, 1, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "clientapp/assets/img/", ctx.selectedProduct.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.selectedProduct.title, " Net Price ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 18, ctx.selectedProduct.price, "GBP"), "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedConfig.ramCode);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedConfig.ramCode);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedConfig.ramCode == "" && ctx.submitted);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedConfig.hardDiskCode);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedConfig.hardDiskCode);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedConfig.hardDiskCode == "" && ctx.submitted);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedConfig.colourCode);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedConfig.colourCode);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedConfig.colourCode == "" && ctx.submitted);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedConfig.cpuCode);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedConfig.cpuCode);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedConfig.cpuCode == "" && ctx.submitted);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](55, 21, ctx.totalPrice, "GBP"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showAdded);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage != "");
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CurrencyPipe"]], encapsulation: 2 });
    return LaptopConfigComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LaptopConfigComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'laptop-config',
                templateUrl: './laptop-config.component.html'
            }]
    }], function () { return [{ type: _shared_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map