app.controller("inventoryCtrl", ["$scope", "$firebaseObject", function($scope, $firebaseObject){

  $scope.sessionObj  = $firebaseObject(sessionRef);
}]);