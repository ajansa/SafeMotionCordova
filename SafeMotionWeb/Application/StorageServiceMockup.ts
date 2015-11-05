/// <reference path='./_app.ts' />

module safemotion {
    export class StorageServiceMockup implements StorageServiceInterface {

        private _listViewData = null;
        private _detailViewData = null;

        constructor() {

            if (this._detailViewData == null) {
                var i: number = 0;
                this._detailViewData = new Array<DetailViewModel>();
                this._detailViewData.push(new DetailViewModel("0001", "FirstName" + ++i, "LastName" + i, "Images/serviceuser.png", 20 * i, 5 * i, i, 51.480401, -0.110252));
                this._detailViewData.push(new DetailViewModel("0002", "FirstName" + ++i, "LastName" + i, "Images/serviceuser.png", 20 * i, 5 * i, i, 51.480401 + i / 20, -0.110252 - i / 20));
                this._detailViewData.push(new DetailViewModel("0003", "FirstName" + ++i, "LastName" + i, "Images/serviceuser.png", 20 * i, 5 * i, i, 51.480401 - i / 20, -0.110252 + i / 20));
                this._detailViewData.push(new DetailViewModel("0004", "FirstName" + ++i, "LastName" + i, "Images/serviceuser.png", 20 * i, 5 * i, i, 51.480401 + i / 20, -0.110252 + i / 20));
            }

            if (this._listViewData == null) {
                var i: number = 0;
                this._listViewData = new Array<ListViewModel>();
                this._listViewData.push(new ListViewModel("0001", "FirstName" + ++i, "LastName" + i, 20 * i, 5 * i, i));
                this._listViewData.push(new ListViewModel("0002", "FirstName" + ++i, "LastName" + i, 20 * i, 5 * i, i));
                this._listViewData.push(new ListViewModel("0003", "FirstName" + ++i, "LastName" + i, 20 * i, 5 * i, i));
                this._listViewData.push(new ListViewModel("0004", "FirstName" + ++i, "LastName" + i, 20 * i, 5 * i, i));
            }

        }

        list($scope: ListScopeInterface, $http) {
            $scope.serviceUserList = this._listViewData; 
        }

        get($scope: DetailScopeInterface, $http, ID: string) {
            var result : DetailViewModel = null;
            var resultList: DetailViewModel[] = $.grep(this._detailViewData, function (e: DetailViewModel) { return e.ID === ID; });

            if (resultList.length == 1) {
                result = resultList[0];
                $scope.serviceUser = result;
            } else {
                alert("Could not find service user with ID: " + ID);
            }
        }
    }
}
