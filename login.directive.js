app.directive("loginDirective", function() {
    return {
        template : '<h3>Zaloguj się lub <a href ng-click="showRegisterContent()">Zarejestruj</a></h3><p class = "error" ng-show = "loginErrorShow">Zły login lub hasło</p><br></br><i class="material-icons">account_circle</i> <input type="text" placeholder="login" ng-model = "login" ><br></br><i class="material-icons">lock_open</i><input type="password" placeholder="hasło" ng-model = "password"><br></br><button ng-click = "logIn(login, password)">Zaloguj</button>'
    };
});