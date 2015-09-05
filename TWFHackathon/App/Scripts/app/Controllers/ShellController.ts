module Controllers {
    export class ShellController {
        private message: string;

        constructor(
            private $scope: Scopes.IAppScope,
            private initializer: Services.Initializer) {

            $scope.shell = this;
            this.message = initializer.hello();
        }
    }
}