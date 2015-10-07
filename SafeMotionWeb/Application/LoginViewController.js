/// <reference path='./_app.ts' />
var safemotion;
(function (safemotion) {
    'use strict';
    var LoginViewController = (function () {
        function LoginViewController($scope) {
            $(window).load(function () { $('#divLoginModal').show('modal'); });
        }
        LoginViewController.prototype.loginWithFacebook = function () {
            alert("with facebook");
        };
        LoginViewController.prototype.loginWithGoogle = function () {
            alert("with google");
        };
        LoginViewController.prototype.loginWithEmail = function (user, password) {
            alert("with email");
        };
        return LoginViewController;
    })();
    safemotion.LoginViewController = LoginViewController;
})(safemotion || (safemotion = {}));
//# sourceMappingURL=LoginViewController.js.map