import { __decorate } from "tslib";
import { Component } from '@angular/core';
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
    LaptopCheckoutComponent = __decorate([
        Component({
            selector: 'laptop-checkout',
            templateUrl: './laptop-checkout.component.html'
        })
    ], LaptopCheckoutComponent);
    return LaptopCheckoutComponent;
}());
export { LaptopCheckoutComponent };
//# sourceMappingURL=laptop-checkout.component.js.map