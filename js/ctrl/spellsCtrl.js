app.controller("spellsCtrl", ["$scope", "$firebaseObject", function($scope, $firebaseObject){
  $scope.sessionObj  = $firebaseObject(sessionRef);
}]);