/// <reference path='./_app.ts' />
var safemotion;
(function (safemotion) {
    'use strict';
    var ListController = (function () {
        function ListController($scope, storage) {
            this.$scope = $scope;
            this.storage = storage;
            $scope.serviceUserList = storage.list();
        }
        ListController.$inject = [
            '$scope',
            'storage'
        ];
        return ListController;
    })();
    safemotion.ListController = ListController;
})(safemotion || (safemotion = {}));
//# sourceMappingURL=ListController.js.map