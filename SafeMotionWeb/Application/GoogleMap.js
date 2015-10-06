/// <reference path='../_app.ts' />
var safemotion;
(function (safemotion) {
    var GoogleMap = (function () {
        function GoogleMap(mapDiv, lat, long, zoomLevel) {
            this._mapDiv = mapDiv;
            this._lat = lat;
            this._long = long;
            var latLng = new google.maps.LatLng(lat, long);
            this._options = { center: latLng, zoom: zoomLevel };
            this._map = new google.maps.Map(mapDiv, this._options);
        }
        GoogleMap.prototype.setMarker = function (title, lat, long) {
            var latLng = new google.maps.LatLng(lat, long);
            var marker = new google.maps.Marker({
                position: latLng,
                map: this._map,
                title: title
            });
        };
        GoogleMap.prototype.setCenter = function (lat, long) {
            this._map.setCenter(new google.maps.LatLng(lat, long));
        };
        GoogleMap.prototype.setZoom = function (zoom) {
            this._map.setZoom(zoom);
        };
        GoogleMap.prototype.setMapType = function (mapType) {
            this._map.setMapTypeId(mapType);
        };
        return GoogleMap;
    })();
    safemotion.GoogleMap = GoogleMap;
})(safemotion || (safemotion = {}));
//# sourceMappingURL=GoogleMap.js.map