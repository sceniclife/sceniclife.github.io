app.controller("lobbyCtrl", ["$scope", "$firebaseObject", function($scope, $firebaseObject){
  
  $scope.sessionObj = $firebaseObject(sessionRef);

  // Create character from blankCharacter.json
  $scope.createCharacter = function(){
    $scope.sessionObj.characterObject = JSON.parse(blankCharacter);
    $scope.sessionObj.characterObject.character.name = "Viet";

    localStorage["jsoncache"] = JSON.stringify($scope.sessionObj.characterObject);
    $scope.sessionObj.$save().then(function(ref) {
      ref.key === $scope.sessionObj.$id; // true
    }, function(error) {
       console.log("Error:", error);
    });
  };

  // Load character from cache
  $scope.loadCharacter = function(){
    //todo: ask for character input file
    $scope.sessionObj.characterObject = JSON.parse(localStorage["jsoncache"]);
    
    $scope.sessionObj.$save().then(function(sessionRef) {
      sessionRef.key === $scope.sessionObj.$id; // true
    }, function(error) {
       console.log("Error:", error);
    });
  };

  // Delete character from cache and server
  $scope.deleteCharacter = function(){
    localStorage["jsoncache"] = undefined;

    $scope.sessionObj.$remove().then(function(sessionRef) {
      // data has been deleted locally and in the database
    }, function(error) {
      console.log("Error:", error);
    });
  };
}]);