var Services;
(function (Services) {
    var Initializer = (function () {
        function Initializer($http) {
            this.$http = $http;
        }
        ;
        Initializer.prototype.requestBoard = function (successCallback, errorCallback) {
            this.$http.get('/pinus').
                then(function (response) {
                console.log('all ok');
                successCallback(response);
            }, function (response) {
                console.log('error occured');
                errorCallback(response);
            });
        };
        ;
        return Initializer;
    })();
    Services.Initializer = Initializer;
})(Services || (Services = {}));
