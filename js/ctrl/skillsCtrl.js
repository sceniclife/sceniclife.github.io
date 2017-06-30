app.controller("skillsCtrl", ["$scope", "$firebaseObject", function($scope, $firebaseObject){
  $scope.sessionObj  = $firebaseObject(sessionRef);
}]);