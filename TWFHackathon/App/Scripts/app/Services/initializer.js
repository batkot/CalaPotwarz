var Services;
(function (Services) {
    var Initializer = (function () {
        function Initializer($http) {
            this.$http = $http;
        }
        ;
        Initializer.prototype.createGame = function (successCallback, errorCallback) {
            this.$http.get('/api/Game').
                then(function (response) {
                //tu se przejdz na swoj obiekt
                console.log(response.data);
                successCallback(response.data);
            }, function (response) {
                var error = new Models.Error(response.status, response.data.Message);
                errorCallback(error);
            });
        };
        ;
        return Initializer;
    })();
    Services.Initializer = Initializer;
})(Services || (Services = {}));
//# sourceMappingURL=Initializer.js.map