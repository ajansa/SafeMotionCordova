/// <reference path='./_app.ts' />
var safemotion;
(function (safemotion) {
    var StorageService = (function () {
        function StorageService() {
        }
        StorageService.prototype.list = function ($scope, $http) {
            $http.get("http://localhost:53034/List")
                .success(function (data) {
                $scope.serviceUserList = data.value;
            })
                .error(function () {
                alert("Could not load data from server");
            });
        };
        StorageService.prototype.get = function ($scope, $http, ID) {
            $http.get("http://localhost:53034/Detail")
                .success(function (data) {
                var result = null;
                // find service user with given ID
                var resultList = $.grep(data.value, function (e) { return e.ID === ID; });
                if (resultList.length == 1) {
                    result = resultList[0];
                    $scope.serviceUser = result;
                }
                else {
                    alert("Did not find the service user with ID: " + ID);
                }
            })
                .error(function () {
                alert("Could not load data from server");
            });
        };
        return StorageService;
    })();
    safemotion.StorageService = StorageService;
})(safemotion || (safemotion = {}));
//# sourceMappingURL=StorageService.js.map