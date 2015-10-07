/// <reference path='./_app.ts' />
var safemotion;
(function (safemotion) {
    var MockupStorage = (function () {
        function MockupStorage() {
        }
        MockupStorage.prototype.list = function () {
            var i = 0;
            var list = new Array();
            list.push(new safemotion.DetailViewModel(0, "FirstName" + ++i, "LastName" + i, "Images/serviceuser.png", 20 * i, 5 * i, i, 51.480401, -0.110252));
            list.push(new safemotion.DetailViewModel(1, "FirstName" + ++i, "LastName" + i, "Images/serviceuser.png", 20 * i, 5 * i, i, 51.480401 + i / 20, -0.110252 - i / 20));
            list.push(new safemotion.DetailViewModel(2, "FirstName" + ++i, "LastName" + i, "Images/serviceuser.png", 20 * i, 5 * i, i, 51.480401 - i / 20, -0.110252 + i / 20));
            list.push(new safemotion.DetailViewModel(3, "FirstName" + ++i, "LastName" + i, "Images/serviceuser.png", 20 * i, 5 * i, i, 51.480401 + i / 20, -0.110252 + i / 20));
            return list;
        };
        return MockupStorage;
    })();
    safemotion.MockupStorage = MockupStorage;
})(safemotion || (safemotion = {}));
//# sourceMappingURL=MockupStorageService.js.map