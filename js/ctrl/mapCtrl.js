app.controller("mapCtrl", ["$scope", "$firebaseObject", function($scope, $firebaseObject){
  $scope.sessionObj  = $firebaseObject(sessionRef);
}]);