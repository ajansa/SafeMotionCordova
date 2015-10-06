/// <reference path='_app.ts' />

/**
 * The main SafeMotionMVC app module.
 *

 * Prototype based on following examples and documentations:
 * TypeScript and AngularJS:
https://github.com/ajansa/todomvc/tree/master/examples/typescript-angular
and
 * http://blog.scottlogic.com/2014/08/26/StrongTypingWithAngularJS.html

http://www.dotnetcurry.com/angularjs/1016/angularjs-typescript-single-page-apps-spa

Interresting: 
https://blorkfish.wordpress.com/2014/02/03/setting-up-typescript-and-angularjs-in-visual-studio-2013/



 * @type {angular.Module}
 */
module safemotion {
    'use strict';

    // app config
    var safemotionApp = angular.module('app', ['ngRoute'])
        .service('storage', MockupStorage)
        .controller('loginController', LoginController)
        .controller('detailController', DetailController)
        .controller('listController', ListController)
        // white list images
        .config(function ($compileProvider) {
            var imgSrcSanitizationWhitelist = /^\s*(https?|ftp|file):|data:image\//;
            $compileProvider.imgSrcSanitizationWhitelist(imgSrcSanitizationWhitelist);
        })
        // routes
        .config(function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: './Application/LoginView.html',
                    controller: 'loginController'
                })
                .when('/login', {
                    templateUrl: './Application/LoginView.html',
                    controller: 'loginController'
                })
                .when('/list', {
                    templateUrl: './Application/ListView.html',
                    controller: 'listController'
                })
                .when('/detail:detailId', {
                    templateUrl: './Application/DetailView.html',
                    controller: 'detailController'
                })
                .otherwise({ redirectTo: '/' });
        });
}