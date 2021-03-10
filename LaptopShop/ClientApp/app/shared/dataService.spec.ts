
import { of } from "rxjs";
import { Product } from '../shared/product';
import { DataService } from '../shared/dataService';
import { Router } from '@angular/router';
import { ShopComponent } from '../laptopShop/shop.component';


describe('DataService', () => {
    let service: DataService;

    beforeEach(() => {
        let mockHttpService = jasmine.createSpyObj(['get']);
        service = new DataService(mockHttpService);
    })

    it('should have no laptop configs to start with', () => {

        expect(service.laptopConfigs.length).toBe(0);

    })   
    
})