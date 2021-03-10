import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { ProductRow } from '../shared/productRow';
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
                var row = new ProductRow(prods);
                this.productRows.push(row);
            }
        }
    };
    ShopComponent = __decorate([
        Component({
            selector: 'the-shop',
            templateUrl: './shop.component.html'
        })
    ], ShopComponent);
    return ShopComponent;
}());
export { ShopComponent };
//# sourceMappingURL=shop.component.js.map