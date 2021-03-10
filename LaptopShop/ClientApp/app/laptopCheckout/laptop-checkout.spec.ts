
import { Router } from '@angular/router';
import { ConfigSelection } from '../shared/configSelect';
import { DataService } from '../shared/dataService';
import { LaptopCheckoutComponent } from './laptop-checkout.component';

describe('LaptopChecoutComponent', () => {
    let component: LaptopCheckoutComponent;
    let router: Router;  
    let mockDataService: DataService;

    beforeEach(() => {

        mockDataService = jasmine.createSpyObj(['loadProducts', 'loadLaptopConfig']);
        mockDataService.basket =
            [
                {
                    ramCode: "16GB",
                    hardDiskCode: "250GB",
                    colourCode: "blue",
                    cpuCode: "i7",
                    colourDescription: "Blue",
                    cpuDescription: "Intel i7",
                    ramprice: 40,
                    hddprice: 60,
                    colourprice: 45,
                    cpuprice: 45,
                    totalPrice: 490,
                    description: "HP Laptop",
                    image: "hp.jpg",
                    basePrice: 300,
                },
                {
                    ramCode: "8GB",
                    hardDiskCode: "250GB",
                    colourCode: "blue",
                    cpuCode: "i3",
                    colourDescription: "Blue",
                    cpuDescription: "Intel i7",
                    ramprice: 20,
                    hddprice: 20,
                    colourprice: 20,
                    cpuprice: 20,
                    totalPrice: 380,
                    description: "Random Laptop",
                    image: "hp.jpg",
                    basePrice: 300,
                }
            ]
        component = new LaptopCheckoutComponent(mockDataService, router);       
    })

    it('should add up all items in the basket', () => {               

        component.ngOnInit();
        
        //assert basket is empty
        expect(component.grossTotal).toBe(870);

    })
})