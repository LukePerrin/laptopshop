import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../shared/dataService';
import { Product } from '../shared/product';
import { ProductRow } from '../shared/productRow';


@Component({
    selector: 'the-shop',
    templateUrl: './shop.component.html'
})
export class ShopComponent implements OnInit {

    title = 'laptop-shop';
    products: Array<Product> = new Array<Product>();
    public productRows: Array<ProductRow> = new Array<ProductRow>();
    errorMessage = '';

    constructor(private data: DataService, private router:Router) {
        //using private automatically creates a property available to our class :)
    }

    goToDetails(product: Product) {        
        //update our service with the chosen product        
        this.data.selectedProduct = product;
        this.router.navigate(["details"]);
    }

    ngOnInit():void{       

        this.data.getProducts().subscribe({
            next: products => {
                this.products = products;
                this.mapProductsToRows();
            },
            error: err => {
                this.errorMessage = err
            }
        });
    }

    //structure our products into 2 column rows so it matches my design and our view is data driven    
    mapProductsToRows() {
        for (let i = 0; i < this.products.length; i++) {
            if (i % 2 === 0) {
                let prods: Array<Product> = []
                prods.push(this.products[i]);
                prods.push(this.products[i + 1]);
                let row: ProductRow = new ProductRow(prods);
                this.productRows.push(row);
            }
        }
    }
}
