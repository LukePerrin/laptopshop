import { LaptopCheckoutComponent } from './laptop-checkout.component';
describe('LaptopChecoutComponent', function () {
    var component;
    var router;
    var mockDataService;
    beforeEach(function () {
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
            ];
        component = new LaptopCheckoutComponent(mockDataService, router);
    });
    it('should add up all items in the basket', function () {
        component.ngOnInit();
        //assert basket is empty
        expect(component.grossTotal).toBe(870);
    });
});
//# sourceMappingURL=laptop-checkout.spec.js.map