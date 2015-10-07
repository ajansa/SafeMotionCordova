/// <reference path='./_app.ts' />

module safemotion {
    'use strict';

    export class ListController {

        public static $inject = [
            '$scope',
            '$http',
            'storage'
        ];

        constructor(private $scope: ListScopeInterface, private $http: XMLHttpRequest, private storage: StorageService) {

            storage.list($scope, $http);

        }
    }
}