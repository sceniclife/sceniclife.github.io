var app = angular.module("sceniclife", ["ui.router"]);

app.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("/");
  $stateProvider
    .state("character", {
      url: "/character",
      controller: "characterCtrl",
      templateUrl: "view/characterView.html"
    })
    .state("about", {
      url: "/about",
      controller: "aboutCtrl",
      templateUrl: "view/aboutView.html"
    })
});
