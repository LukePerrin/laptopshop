import { Product } from './product';

export class ProductRow {
    row: Product[];

    constructor(row: Array<Product>) {
        this.row = row;
    }

}