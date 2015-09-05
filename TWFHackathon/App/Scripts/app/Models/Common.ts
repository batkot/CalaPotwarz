module Models {
    'use strict';

    export class Error {
        constructor(
            public statusText: string,
            public status: string
            ) { }
    }
}