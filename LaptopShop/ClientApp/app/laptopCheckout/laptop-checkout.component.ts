import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigSelection } from '../shared/configSelect';
import { DataService } from '../shared/dataService';


@Component({
    selector: 'laptop-checkout',
    templateUrl: './laptop-checkout.component.html'
})
export class LaptopCheckoutComponent implements OnInit {
    title = 'laptop-shop';
    grossTotal: number;

    public basket: ConfigSelection[] = [];
    

    constructor(private data: DataService, private router: Router) {
        
    }    


    ngOnInit() {        
        this.basket = this.data.basket;
        this.grossTotal = 0;

        //calculate gross total for all basket items
        for (let i = 0; i < this.basket.length; i++) {
            this.grossTotal += this.basket[i].totalPrice;
        }

    }
}
