/// <reference path='./_app.ts' />

module safemotion {
    export class StorageService implements StorageServiceInterface {

        list($scope: ListScopeInterface, $http) {

            $http.get("http://localhost:53034/List")
                .success(function (data) {
                    $scope.serviceUserList = data.value;
                })
                .error(function () {
                    alert("Could not load data from server");
                });            

        }

        get($scope: DetailScopeInterface, $http, ID: string) {

            $http.get("http://localhost:53034/Detail")
                .success(function (data) {

                    var result: DetailViewModel = null;

                    // find service user with given ID
                    var resultList: DetailViewModel[] = $.grep(data.value, function (e: DetailViewModel) { return e.ID === ID; });

                    if (resultList.length == 1) {
                        result = resultList[0];
                        $scope.serviceUser = result;
                    } else {
                        alert("Did not find the service user with ID: " + ID);
                    }

                })
                .error(function () {
                    alert("Could not load data from server");
                });            

        }
    }
}
