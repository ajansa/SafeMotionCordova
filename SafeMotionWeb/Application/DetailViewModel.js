/// <reference path='./_app.ts' />
var safemotion;
(function (safemotion) {
    'use strict';
    var DetailViewModel = (function () {
        function DetailViewModel(ID, FirstName, LastName, ProfilePicture, BatteryLevel, LastSignalMin, ActiveAlarms, Latitude, Longitude) {
            this.ID = ID;
            this.FirstName = FirstName;
            this.LastName = LastName;
            this.ProfilePicture = ProfilePicture;
            this.BatteryLevel = BatteryLevel;
            this.LastSignalMin = LastSignalMin;
            this.ActiveAlarms = ActiveAlarms;
            this.Latitude = Latitude;
            this.Longitude = Longitude;
        }
        return DetailViewModel;
    })();
    safemotion.DetailViewModel = DetailViewModel;
})(safemotion || (safemotion = {}));
//# sourceMappingURL=DetailViewModel.js.map