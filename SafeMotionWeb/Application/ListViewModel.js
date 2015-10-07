/// <reference path='./_app.ts' />
var safemotion;
(function (safemotion) {
    'use strict';
    var ListViewModel = (function () {
        function ListViewModel(ID, FirstName, LastName, BatteryLevel, LastSignalMin, ActiveAlarms) {
            this.ID = ID;
            this.FirstName = FirstName;
            this.LastName = LastName;
            this.BatteryLevel = BatteryLevel;
            this.LastSignalMin = LastSignalMin;
            this.ActiveAlarms = ActiveAlarms;
        }
        return ListViewModel;
    })();
    safemotion.ListViewModel = ListViewModel;
})(safemotion || (safemotion = {}));
//# sourceMappingURL=ListViewModel.js.map