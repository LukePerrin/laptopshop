import { LaptopConfigComponent } from './laptop-config.component';
//addToBasket   calculatePrice
describe('LaptopConfigComponent', function () {
    var component;
    var router;
    var products = new Array();
    var allConfigs = [];
    var mockDataService;
    ;
    beforeEach(function () {
        mockDataService = jasmine.createSpyObj(['loadProducts', 'loadLaptopConfig']);
        component = new LaptopConfigComponent(mockDataService, router);
        products = [
            {
                id: 1,
                title: "Dell",
                price: 349.87,
                image: "dell.jpg"
            },
            {
                id: 2,
                title: "HP",
                price: 456.76,
                image: "hp.jpg"
            },
            {
                id: 3,
                title: "Surface Pro",
                price: 700,
                image: "surface.png"
            },
            {
                id: 4,
                title: "Toshiba",
                price: 345.67,
                image: "toshiba.jpg"
            }
        ];
        allConfigs = [
            {
                "id": 1,
                "type": "RAM",
                "price": 45.67,
                "description": "8GB",
                "code": "8GB"
            },
            {
                "id": 2,
                "type": "RAM",
                "price": 87.88,
                "description": "16GB",
                "code": "16GB"
            },
            {
                "id": 3,
                "type": "HDD",
                "price": 123.34,
                "description": "500GB",
                "code": "500GB"
            },
            {
                "id": 4,
                "type": "HDD",
                "price": 200.00,
                "description": "1TB",
                "code": "1TB"
            },
            {
                "id": 5,
                "type": "Colour",
                "price": 50.76,
                "description": "Red",
                "code": "red"
            },
            {
                "id": 6,
                "type": "Colour",
                "price": 34.56,
                "description": "Blue",
                "code": "blue"
            },
            {
                "id": 7,
                "type": "CPU",
                "price": 40.00,
                "description": "Intel Core i3",
                "code": "i3"
            },
            {
                "id": 8,
                "type": "CPU",
                "price": 60.00,
                "description": "Intel Core i7",
                "code": "i7"
            }
        ];
    });
    it('should add an item to the basket', function () {
        var basket = [];
        mockDataService.basket = basket;
        //assert basket is empty
        expect(mockDataService.basket.length).toBe(0);
        var item = {
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
        };
        component.selectedConfig = item;
        component.valid = true;
        component.addToBasket();
        //assert basket is empty
        expect(mockDataService.basket.length).toBe(1);
    });
    it('should correctly calculate price', function () {
        var basket = [];
        mockDataService.basket = basket;
        var selectedProduct = {
            id: 3,
            title: "Surface Pro",
            price: 700,
            image: "surface.png"
        };
        //this represents user selections on the page - most fields will be null at this point
        var item = {
            ramCode: "16GB",
            hardDiskCode: "500GB",
            colourCode: "blue",
            cpuCode: "i7",
            colourDescription: "",
            cpuDescription: "",
            ramprice: 0,
            hddprice: 0,
            colourprice: 0,
            cpuprice: 0,
            totalPrice: 0,
            description: "",
            image: "",
            basePrice: 0
        };
        component.selectedConfig = item;
        component.allConfigs = allConfigs;
        component.selectedProduct = selectedProduct;
        component.valid = true;
        component.calculatePrice();
        expect(component.selectedConfig.totalPrice).toBe(1005.78);
    });
});
//# sourceMappingURL=laptop-config.spec.js.map