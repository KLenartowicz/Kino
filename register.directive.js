app.directive("registerDirective", function() {
    return {
        template : '<h3>Rejestracja</h3><p class = "error" ng-show = "registerErrorShow">Brak danych lub ich brak</p><i class="material-icons">account_circle</i> <input type="text" ng-model = "login" placeholder="login"><br></br><i class="material-icons">lock_open</i><input type="password" ng-model = "password" placeholder="hasło"><br></br><button ng-click = "createNewUser(login,password)">Zarejestruj</button><button class = "cancel" ng-click = "showLoginContent()">Anuluj</button>'
    };
});