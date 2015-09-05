module Services {
    export interface IInitializer {
        requestBoard(callback: Function): void;
    }

    export class Initializer {
        constructor(private $http: ng.IHttpService) {
        };

        requestBoard(successCallback: Function, errorCallback: Function): void {
            this.$http.get('/pinus').
                then(function (response) {
                    console.log('all ok');
                    successCallback(response);
                }, function (response) {
                    console.log('error occured');
                    errorCallback(response);
                });
        };
    }
}