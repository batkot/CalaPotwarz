var Services;
(function (Services) {
    var Initializer = (function () {
        function Initializer() {
        }
        Initializer.prototype.hello = function () {
            console.log('initializing');
            return "Hello!";
        };
        ;
        return Initializer;
    })();
    Services.Initializer = Initializer;
})(Services || (Services = {}));
//# sourceMappingURL=Initializer.js.map