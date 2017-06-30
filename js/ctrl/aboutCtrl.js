app.controller("aboutCtrl", ["$scope", "$firebaseObject", function($scope, $firebaseObject){
  $scope.sessionObj  = $firebaseObject(sessionRef);
}]);