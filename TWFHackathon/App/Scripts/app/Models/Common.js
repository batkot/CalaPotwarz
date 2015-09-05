var Models;
(function (Models) {
    'use strict';
    var Error = (function () {
        function Error(statusText, status) {
            this.statusText = statusText;
            this.status = status;
        }
        return Error;
    })();
    Models.Error = Error;
})(Models || (Models = {}));
