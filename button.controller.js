app.controller('buttonController', ['$scope', function($scope) {
    var posterImages = ['Images/avengers.jpg',"Images/player_one.jpg","Images/tomb_raider.jpg"];
    var posterTitle = ["Avengers: Infinity War","Player One","Tomb Raider"];
    var posterGenere = ["Science-fiction", "Science-fiction" ,"Przygodowy"];
    var posterControllIndex = 0;

    $scope.registerShow = false;
    $scope.loginShow = false;
    $scope.loginErrorShow = false;
    $scope.registerErrorShow = false;
    $scope.loggedIn = false;
    $scope.image = posterImages[0];
    $scope.title = posterTitle[0];
    $scope.genere = posterGenere[0];
    $scope.login = "";
    $scope.password = "";
    

    $scope.showLoginContent = function() {
        $scope.loginShow = !$scope.loginShow;
        $scope.registerShow = false;
    }

    $scope.showRegisterContent = function() {
        $scope.loginShow = false;
        $scope.registerShow = true;  
    }

    $scope.posterControll = function() {
        posterControllIndex++;
        if(posterControllIndex < 3) {
            $scope.image = posterImages[posterControllIndex];
            $scope.title = posterTitle[posterControllIndex];
            $scope.genere = posterGenere[posterControllIndex];
        } else {
            posterControllIndex = 0;
            $scope.image = posterImages[posterControllIndex];
            $scope.title = posterTitle[posterControllIndex];
            $scope.genere = posterGenere[posterControllIndex];  
        }        
    }

    $scope.createNewUser = function(_email, _password) {
        firebase.auth().createUserWithEmailAndPassword(_email, _password).catch(function(error) {
            $scope.registerErrorShow = true;
            $scope.login = "";
            $scope.password = "";
        });
    }

    $scope.logIn = function(_email, _password) {
        firebase.auth().signInWithEmailAndPassword(_email, _password).catch(function(error) {
        });
        $scope.loggedIn = true;
    }

    $scope.logOut = function() {
        firebase.auth().signOut().then(function() {
          $scope.loggedIn = false;
          }).catch(function(error) {
          });
    }
}]);