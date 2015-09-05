var Models;
(function (Models) {
    var Error = (function () {
        function Error(Status, Message) {
            this.Status = Status;
            this.Message = Message;
        }
        return Error;
    })();
    Models.Error = Error;
})(Models || (Models = {}));
