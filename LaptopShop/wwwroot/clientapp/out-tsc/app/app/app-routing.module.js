import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LaptopCheckoutComponent } from './laptopCheckout/laptop-checkout.component';
import { LaptopConfigComponent } from './laptopConfig/laptop-config.component';
import { ShopComponent } from './laptopShop/shop.component';
var routes = [
    { path: "", component: ShopComponent },
    { path: "details", component: LaptopConfigComponent },
    { path: "checkout", component: LaptopCheckoutComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes, {
                    useHash: false,
                    enableTracing: false
                })],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map