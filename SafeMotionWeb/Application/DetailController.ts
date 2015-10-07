/// <reference path='./_app.ts' />

module safemotion {
    'use strict';

    // global variable to be able to reset map centre after resize of browser window
    var serviceUserMap: GoogleMap;

	/**
	 * Controller for Service User Detail View
	 */
    export class DetailController {


        // $inject annotation.
        // It provides $injector with information about dependencies to be injected into constructor
        // it is better to have it close to the constructor, because the parameters must match in count and type.
        // See http://docs.angularjs.org/guide/di
        public static $inject = [
            '$scope',
            '$routeParams', 
            '$http',
            'storage'
        ];

        // dependencies are injected via AngularJS $injector
        // controller's name is registered in Application.ts and specified from ng-controller attribute in index.html
        constructor(private $scope: DetailScopeInterface, $routeParams, $http, private storage: StorageService)
        {
            var id: string = $routeParams.detailId.replace(":", "");
            storage.get($scope, $http, id);

            // initialise map after profile picture is loaded
            $('#imgProfilePicture').load(function () {

                // resize according to profile picture size. "this" is this profile picture with id "imgProfilePicure"
                $('#divMap').css({ 'width': this.width + 'px' }).css({ 'height': this.height + 'px' });

                var lat: number = $scope.serviceUser.Latitude;
                var long: number = $scope.serviceUser.Longitude;

                // register map div and map in global variable for later usage
                serviceUserMap = new GoogleMap($('#divMap').get(0), lat, long, 14);
                serviceUserMap.setMarker("Location of Service User", lat, long); 

                // resize Map in case window gets resized
                if (window.addEventListener) {
                    window.addEventListener('resize', function () {
                        if (serviceUserMap) {
                            serviceUserMap.setCenter(lat, long);
                            new UtilsService().resizeMap();
                        }
                    }, true);
                } else {
                    // if the browser does not support Javascript event binding, set fixed size 
                    $('#divMap').css({ 'width': '300px' }).css({ 'height': '300px' });
                }

            });

        }
    }
}

