module Services {
    export interface IInitializer {
        createGame(callback: Function): void;
    }

    export class Initializer {
        constructor(private $http: ng.IHttpService) {
        };

        createGame(successCallback: Function, errorCallback: Function): void {
            this.$http.get('/api/Gme').
                then(function (response) {
                    successCallback(response.data);
                }, function (response) {
                    errorCallback(response);
                });
        };
    }
}