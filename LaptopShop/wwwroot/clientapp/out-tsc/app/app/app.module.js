import { __decorate } from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopComponent } from './laptopShop/shop.component';
import { DataService } from './shared/dataService';
import { FormsModule } from '@angular/forms';
import { LaptopCheckoutComponent } from './laptopCheckout/laptop-checkout.component';
import { LaptopConfigComponent } from './laptopConfig/laptop-config.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                ShopComponent,
                LaptopConfigComponent,
                LaptopCheckoutComponent
            ],
            imports: [
                BrowserModule,
                FormsModule,
                AppRoutingModule,
                HttpClientModule
            ],
            providers: [
                //inject this service into our compoenents
                DataService
            ],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map