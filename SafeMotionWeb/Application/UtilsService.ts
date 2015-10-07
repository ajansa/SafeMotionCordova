/// <reference path='./_app.ts' />

module safemotion {
    export class UtilsService {

        // resize the map canvas to the size of the profile picture
        resizeMap() {
            var img = $('#imgStatusBackground');
            $('#divMap').css({ 'width': img.width() + 'px' }).css({ 'height': img.height() + 'px' });
        } 
    }
}
