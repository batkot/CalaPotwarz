module Scopes {
    export interface IAppScope extends ng.IScope {
        game: Models.Game,
        error: Models.Error
    }
}