import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigSelection } from '../shared/configSelect';
import { DataService } from '../shared/dataService';
import { Product } from '../shared/product';
import { ProductConfig } from '../shared/productConfig';


@Component({
    selector: 'laptop-config',
    templateUrl: './laptop-config.component.html'
})
export class LaptopConfigComponent implements OnInit {    
    errorMessage = '';
    selectedProduct: Product;
    allConfigs: ProductConfig[];
    selectedConfig: ConfigSelection;
    totalPrice: number;
    submitted: boolean; //have we tried to submit
    valid: boolean; //have we selected all configurations
    showAdded: boolean;//display alert when added to basket

    constructor(private data: DataService, private router: Router) {
        
        this.submitted = false;
        this.selectedConfig = new ConfigSelection();
        this.valid = false;
        this.showAdded = false;
    }

    addToBasket() {        
        this.submitted = true;
        if (this.valid) {
            this.showAdded = true;
            this.data.basket.push(this.selectedConfig);
        }
    }
   
    calculatePrice() {        
        this.totalPrice = this.selectedProduct.price;

        let ramprice = 0; let diskprice = 0; let colourprice = 0; let cpuprice = 0;

         //match the laptop config code taken from the radio buttons with the allConfigs api list to get price 
        if (this.selectedConfig.ramCode != "")
            ramprice = this.allConfigs.filter(x => x.code == this.selectedConfig.ramCode)[0].price;        

        if (this.selectedConfig.hardDiskCode != "")
            diskprice = this.allConfigs.filter(x => x.code == this.selectedConfig.hardDiskCode)[0].price;

        if (this.selectedConfig.colourCode != "") {
            colourprice = this.allConfigs.filter(x => x.code == this.selectedConfig.colourCode)[0].price;
            this.selectedConfig.colourDescription = this.allConfigs.filter(x => x.code == this.selectedConfig.colourCode)[0].description;
        }

        if (this.selectedConfig.cpuCode != "") {
            cpuprice = this.allConfigs.filter(x => x.code == this.selectedConfig.cpuCode)[0].price;
            this.selectedConfig.cpuDescription = this.allConfigs.filter(x => x.code == this.selectedConfig.cpuCode)[0].description;
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
        
    }

    ngOnInit(): void {

        //product was set on the main shop page
        this.selectedProduct = this.data.selectedProduct;
        //init base price
        this.totalPrice = this.selectedProduct.price;

        this.data.getLaptopConfigs().subscribe({
            next: configs => {
                this.allConfigs = configs;                
            },
            error: err => this.errorMessage = err
        });
    }   
}
