var Services;
(function (Services) {
    var Initializer = (function () {
        function Initializer($http) {
            this.$http = $http;
        }
        ;
        Initializer.prototype.createGame = function (successCallback, errorCallback) {
            this.$http.get('/api/Gme').
                then(function (response) {
                successCallback(response.data);
            }, function (response) {
                errorCallback(response);
            });
        };
        ;
        return Initializer;
    })();
    Services.Initializer = Initializer;
})(Services || (Services = {}));
