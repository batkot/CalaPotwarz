module Services {
    export interface IInitializer {
        createGame(callback: Function): void;
    }

    export class Initializer {
        constructor(private $http: ng.IHttpService) {
        };

        createGame(successCallback: Function, errorCallback: Function): void {
            var catCount = $("#categories").attr('count');
            console.log(catCount);
            this.$http.get('/api/Game/'+catCount).
                then(function (response) {
                //tu se przejdz na swoj obiekt
                console.log(response.data);
                successCallback(response.data);
                }, function (response) {
                    var error = new Models.Error(response.status, response.data.Message);
                    errorCallback(error);
                });
        };
    }
}