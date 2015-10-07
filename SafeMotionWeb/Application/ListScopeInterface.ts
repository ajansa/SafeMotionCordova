/// <reference path='./_app.ts' />

module safemotion {
    export interface ListScopeInterface extends ng.IScope {
        serviceUserList: Array<ListViewModel>
    }
}