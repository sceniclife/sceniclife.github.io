app.controller("lobbyCtrl", ["$scope", "$firebaseObject", "$firebaseArray", function($scope, $firebaseObject, $firebaseArray){ 
  $scope.sessionObj  = $firebaseObject(sessionRef);
  $scope.gameRoom = $firebaseObject(sessionRef.getParent());
  $scope.gameCode = sessionRef.getParent().getKey();

  $scope.arrayOf = "";

  for(item in $scope.gameRoom){

  }

// to take an action after the data loads, use the $loaded() promise
 //    $scope.gameRoom.$loaded().then(function() {

       // To iterate the key/value pairs of the object, use angular.forEach()
  //     angular.forEach($scope.gameRoom, function(value, key) {
   //       console.log(key, value);
   //    });
  //   });
}]);