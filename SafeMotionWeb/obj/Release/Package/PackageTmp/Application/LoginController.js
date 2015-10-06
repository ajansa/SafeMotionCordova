/// <reference path='./_app.ts' />
var safemotion;
(function (safemotion) {
    'use strict';
    var LoginController = (function () {
        function LoginController($scope) {
            $(window).load(function () { $('#divLoginModal').show('modal'); });
        }
        LoginController.prototype.loginWithFacebook = function () {
            alert("with facebook");
        };
        LoginController.prototype.loginWithGoogle = function () {
            alert("with google");
        };
        LoginController.prototype.loginWithEmail = function (user, password) {
            alert("with email");
        };
        return LoginController;
    })();
    safemotion.LoginController = LoginController;
})(safemotion || (safemotion = {}));
//# sourceMappingURL=LoginController.js.map