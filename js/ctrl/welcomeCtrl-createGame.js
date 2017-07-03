app.controller("welcomeCtrl-createGame", ["$scope", "$firebaseObject", "$state",  function($scope, $firebaseObject, $state){ 

  if(sessionRef != null){
    sessionRef.remove();
  }

  function generateGameCode(){
    var gameCode = "";
    var available = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";

      for(var i = 0; i < 6; i++){
        gameCode += available.charAt(Math.floor(Math.random() * available.length));
      }

      return gameCode;
  }

  $scope.createGame = function(){
    sessionRef = firebase.database().ref().child(generateGameCode()).push();
    $scope.sessionObj = $firebaseObject(sessionRef);

    $scope.sessionObj.characterObject = JSON.parse(localStorage["jsoncache"]);
    $scope.sessionObj.$save().then(function(ref) {
      ref.key === $scope.sessionObj.$id; // true
      $state.go('game.lobby');
    }, function(error) {
       console.log("Error:", error);
    });
  }

  $scope.joinGame = function(){
    var gameCode = prompt("What is your game code?");

    var ref = firebase.database().ref();
    ref.child(gameCode).once('value', function(snapshot) {
      var exists = (snapshot.val() !== null);
      if(exists){
        sessionRef = firebase.database().ref().child(gameCode).push();
        $scope.sessionObj = $firebaseObject(sessionRef);
        $scope.sessionObj.characterObject = JSON.parse(localStorage["jsoncache"]);
        $scope.sessionObj.$save().then(function(ref) {
          ref.key === $scope.sessionObj.$id; // true
          $state.go('game.lobby');
        }, function(error) {
          console.log("Error:", error);
        });
      }
      else{
          alert("Did not find game with code: " + gameCode);
      }
    });
  }

  // Delete character from cache and server
  $scope.deleteCharacter = function(){
    localStorage["jsoncache"] = undefined;

    $scope.sessionObj.$remove().then(function(ref) {
      // data has been deleted locally and in the database
    }, function(error) {
      console.log("Error:", error);
    });
  };
}]);