/// <reference path='./_app.ts' />
var safemotion;
(function (safemotion) {
    'use strict';
    // global variable to be able to reset map centre after resize of browser window
    var serviceUserMap;
    /**
     * Controller for Service User Detail View
     */
    var DetailController = (function () {
        // dependencies are injected via AngularJS $injector
        // controller's name is registered in Application.ts and specified from ng-controller attribute in index.html
        function DetailController($scope, $routeParams, $http, storage) {
            this.$scope = $scope;
            this.storage = storage;
            var id = $routeParams.detailId.replace(":", "");
            storage.get($scope, $http, id);
            // initialise map after profile picture is loaded
            $('#imgProfilePicture').load(function () {
                // resize according to profile picture size. "this" is this profile picture with id "imgProfilePicure"
                $('#divMap').css({ 'width': this.width + 'px' }).css({ 'height': this.height + 'px' });
                var lat = $scope.serviceUser.Latitude;
                var long = $scope.serviceUser.Longitude;
                // register map div and map in global variable for later usage
                serviceUserMap = new safemotion.GoogleMap($('#divMap').get(0), lat, long, 14);
                serviceUserMap.setMarker("Location of Service User", lat, long);
                // resize Map in case window gets resized
                if (window.addEventListener) {
                    window.addEventListener('resize', function () {
                        if (serviceUserMap) {
                            serviceUserMap.setCenter(lat, long);
                            new safemotion.UtilsService().resizeMap();
                        }
                    }, true);
                }
                else {
                    // if the browser does not support Javascript event binding, set fixed size 
                    $('#divMap').css({ 'width': '300px' }).css({ 'height': '300px' });
                }
            });
        }
        // $inject annotation.
        // It provides $injector with information about dependencies to be injected into constructor
        // it is better to have it close to the constructor, because the parameters must match in count and type.
        // See http://docs.angularjs.org/guide/di
        DetailController.$inject = [
            '$scope',
            '$routeParams',
            '$http',
            'storage'
        ];
        return DetailController;
    })();
    safemotion.DetailController = DetailController;
})(safemotion || (safemotion = {}));
//# sourceMappingURL=DetailController.js.map