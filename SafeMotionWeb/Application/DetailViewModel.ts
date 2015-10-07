/// <reference path='./_app.ts' />
module safemotion {
    'use strict';

    export class DetailViewModel {
        constructor(
            public ID: string,
            public FirstName: string,
            public LastName: string,
            public ProfilePicture: string,
            public BatteryLevel: number,
            public LastSignalMin: number,
            public ActiveAlarms: number,
            public Latitude: number,
            public Longitude: number
        ) { }
    }
}