import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { ConfigSelection } from '../shared/configSelect';
var LaptopConfigComponent = /** @class */ (function () {
    function LaptopConfigComponent(data, router) {
        this.data = data;
        this.router = router;
        this.errorMessage = '';
        this.submitted = false;
        this.selectedConfig = new ConfigSelection();
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
    LaptopConfigComponent = __decorate([
        Component({
            selector: 'laptop-config',
            templateUrl: './laptop-config.component.html'
        })
    ], LaptopConfigComponent);
    return LaptopConfigComponent;
}());
export { LaptopConfigComponent };
//# sourceMappingURL=laptop-config.component.js.map