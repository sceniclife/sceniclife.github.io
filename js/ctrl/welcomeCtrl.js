app.controller("welcomeCtrl", ["$scope", "$firebaseObject", "$state", function($scope, $firebaseObject, $state){ 

  if(sessionRef != null){
    sessionRef.remove();
  }

  // Create character from blankCharacter.json
  $scope.createCharacter = function(){
    var characterObject = JSON.parse(blankCharacter);

    // TODO: make character creation and fill out all data here
    characterObject.character.Name = "Viet";

    localStorage["jsoncache"] = JSON.stringify(characterObject);
    $state.go('.createGame');
  };

  // Load character from user file
  $scope.loadCharacter = function(){
    //todo: ask for character input file, logic if no file
    var characterObject = JSON.parse(blankCharacter);

    localStorage["jsoncache"] = JSON.stringify(characterObject);
    $state.go('.createGame');
  };

}]);