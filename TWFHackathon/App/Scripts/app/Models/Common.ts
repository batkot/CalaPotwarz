module Models {

    export class Error {
        constructor(
            public Status: number,
            public Message: string
            ) { }
    }
}