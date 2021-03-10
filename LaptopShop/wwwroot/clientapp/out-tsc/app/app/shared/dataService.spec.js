import { DataService } from '../shared/dataService';
describe('DataService', function () {
    var service;
    beforeEach(function () {
        var mockHttpService = jasmine.createSpyObj(['get']);
        service = new DataService(mockHttpService);
    });
    it('should have no laptop configs to start with', function () {
        expect(service.laptopConfigs.length).toBe(0);
    });
});
//# sourceMappingURL=dataService.spec.js.map