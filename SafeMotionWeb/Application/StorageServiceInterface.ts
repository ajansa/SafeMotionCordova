/// <reference path='./_app.ts' />

module safemotion {
    export interface StorageServiceInterface {
        list($scope: ListScopeInterface, $http)
        get($scope: DetailScopeInterface, $http, ID: string)
    }
}