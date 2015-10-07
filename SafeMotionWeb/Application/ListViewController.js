/// <reference path='./_app.ts' />
var safemotion;
(function (safemotion) {
    'use strict';
    var ListViewController = (function () {
        function ListViewController($scope, storage) {
            this.$scope = $scope;
            this.storage = storage;
            $scope.serviceUserList = storage.list();
        }
        ListViewController.$inject = [
            '$scope',
            'storage'
        ];
        return ListViewController;
    })();
    safemotion.ListViewController = ListViewController;
})(safemotion || (safemotion = {}));
//# sourceMappingURL=ListViewController.js.map