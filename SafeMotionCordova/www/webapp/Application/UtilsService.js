/// <reference path='./_app.ts' />
var safemotion;
(function (safemotion) {
    var UtilsService = (function () {
        function UtilsService() {
        }
        // resize the map canvas to the size of the profile picture
        UtilsService.prototype.resizeMap = function () {
            var img = $('#imgStatusBackground');
            $('#divMap').css({ 'width': img.width() + 'px' }).css({ 'height': img.height() + 'px' });
        };
        return UtilsService;
    })();
    safemotion.UtilsService = UtilsService;
})(safemotion || (safemotion = {}));
//# sourceMappingURL=UtilsService.js.map