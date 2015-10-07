/// <reference path='./_app.ts' />
var safemotion;
(function (safemotion) {
    var StorageServiceMockup = (function () {
        function StorageServiceMockup() {
            this._listViewData = null;
            this._detailViewData = null;
            var i = 0;
            if (this._detailViewData == null) {
                this._detailViewData = new Array();
                this._detailViewData.push(new safemotion.DetailViewModel("0001", "FirstName" + ++i, "LastName" + i, "Images/serviceuser.png", 20 * i, 5 * i, i, 51.480401, -0.110252));
                this._detailViewData.push(new safemotion.DetailViewModel("0002", "FirstName" + ++i, "LastName" + i, "Images/serviceuser.png", 20 * i, 5 * i, i, 51.480401 + i / 20, -0.110252 - i / 20));
                this._detailViewData.push(new safemotion.DetailViewModel("0003", "FirstName" + ++i, "LastName" + i, "Images/serviceuser.png", 20 * i, 5 * i, i, 51.480401 - i / 20, -0.110252 + i / 20));
                this._detailViewData.push(new safemotion.DetailViewModel("0004", "FirstName" + ++i, "LastName" + i, "Images/serviceuser.png", 20 * i, 5 * i, i, 51.480401 + i / 20, -0.110252 + i / 20));
            }
            if (this._listViewData == null) {
                this._listViewData = new Array();
                this._listViewData.push(new safemotion.ListViewModel("id0001", "FirstName" + ++i, "LastName" + i, 20 * i, 5 * i, i));
                this._listViewData.push(new safemotion.ListViewModel("id0002", "FirstName" + ++i, "LastName" + i, 20 * i, 5 * i, i));
                this._listViewData.push(new safemotion.ListViewModel("id0003", "FirstName" + ++i, "LastName" + i, 20 * i, 5 * i, i));
                this._listViewData.push(new safemotion.ListViewModel("id0004", "FirstName" + ++i, "LastName" + i, 20 * i, 5 * i, i));
            }
        }
        StorageServiceMockup.prototype.list = function ($scope, $http) {
            $scope.serviceUserList = this._listViewData;
        };
        StorageServiceMockup.prototype.get = function ($scope, $http, ID) {
            var result = null;
            var resultList = $.grep(this._detailViewData, function (e) { return e.ID === ID; });
            if (resultList.length == 1) {
                result = resultList[0];
                $scope.serviceUser = result;
            }
            else {
                alert("Could not find service user with ID: " + ID);
            }
        };
        return StorageServiceMockup;
    })();
    safemotion.StorageServiceMockup = StorageServiceMockup;
})(safemotion || (safemotion = {}));
//# sourceMappingURL=StorageServiceMockup.js.map