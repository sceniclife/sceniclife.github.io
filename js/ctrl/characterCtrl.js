app.controller("characterCtrl", ["$scope", "$firebaseObject", function($scope, $firebaseObject){
  $scope.check = function(){
      alert(localStorage["jsoncache"]);
  }

  $scope.sessionObj  = $firebaseObject(sessionRef);
}]);