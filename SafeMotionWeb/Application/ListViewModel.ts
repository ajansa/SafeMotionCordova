/// <reference path='./_app.ts' />
module safemotion {
    'use strict';

    export class ListViewModel {
        constructor(
            public ID: string,
            public FirstName: string,
            public LastName: string,
            public BatteryLevel: number,
            public LastSignalMin: number,
            public ActiveAlarms: number
        ) { }
    }
}