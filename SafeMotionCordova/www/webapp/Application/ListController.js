/// <reference path='./_app.ts' />
var safemotion;
(function (safemotion) {
    'use strict';
    var ListController = (function () {
        function ListController($scope, $http, storage) {
            this.$scope = $scope;
            this.$http = $http;
            this.storage = storage;
            storage.list($scope, $http);
        }
        ListController.$inject = [
            '$scope',
            '$http',
            'storage'
        ];
        return ListController;
    })();
    safemotion.ListController = ListController;
})(safemotion || (safemotion = {}));
//# sourceMappingURL=ListController.js.map