/// <reference path='./_app.ts' />

module safemotion {
    'use strict';

    export class LoginController {

        constructor($scope) {
            $(window).load(function () { $('#divLoginModal').show('modal'); });
        }

        loginWithFacebook() {
            alert("with facebook");
        }

        loginWithGoogle() {
            alert("with google");
        }

        loginWithEmail(user: string, password: string) {
            alert("with email");

        }
    }
}