import { ShopComponent } from './shop.component';
import { of } from "rxjs";
describe('ShopComponent', function () {
    var component;
    var router;
    var products = new Array();
    var mockDataService;
    beforeEach(function () {
        //must return an observable - we are just subscribing so we dont worry too much
        //about what that observable contains 
        mockDataService = jasmine.createSpyObj(['getProducts', 'loadLaptopConfig']);
        component = new ShopComponent(mockDataService, router);
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
    });
    it('should map products to a 2 column view for display', function () {
        component.products = products;
        //no view rows to start with
        expect(component.productRows.length).toBe(0);
        component.mapProductsToRows();
        //should be 2 rows as we have 4 products
        expect(component.productRows.length).toBe(2);
    });
    //ngOnInit loads products from data service
    describe('ngOnInit', function () {
        it('should add the products from the data service', function () {
            //data service should return an observable      
            mockDataService.getProducts.and.returnValue(of(products));
            //mockDataService.products = products;
            component.ngOnInit();
            expect(component.products.length).toBe(4);
        });
    });
});
//# sourceMappingURL=shop.spec.js.map