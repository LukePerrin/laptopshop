import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaptopCheckoutComponent } from './laptopCheckout/laptop-checkout.component';
import { LaptopConfigComponent } from './laptopConfig/laptop-config.component';
import { ShopComponent } from './laptopShop/shop.component';


const routes = [
    { path: "", component: ShopComponent },
    { path: "details", component: LaptopConfigComponent },
    { path: "checkout", component: LaptopCheckoutComponent }
]


@NgModule({
    imports: [RouterModule.forRoot(routes, {
        useHash: false,
        enableTracing:false
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
