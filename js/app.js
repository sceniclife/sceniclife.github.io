// Initialize Firebase
var config = {
    apiKey: "AIzaSyCjU-klXAiz1AvMgC9X0Y4MDLUs9AOlbRU",
    authDomain: "sceniclife-91880.firebaseapp.com",
    databaseURL: "https://sceniclife-91880.firebaseio.com",
    projectId: "sceniclife-91880",
    storageBucket: "sceniclife-91880.appspot.com",
    messagingSenderId: "541520718794"
};
firebase.initializeApp(config);

// Initialize App
var app = angular.module("sceniclife", ["ui.router", "firebase"]);

app.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("/welcome");
  $stateProvider
    .state("welcome", {
      url: "/welcome",
      controller: "welcomeCtrl",
      templateUrl: "views/welcomeView.html"
    })
    .state("welcome.createGame", {
      url: "/createGame",
      controller: "welcomeCtrl-createGame",
      templateUrl: "views/welcomeView-createGame.html"
    })
    .state("game", {
      url: "/game",
      templateUrl: "views/gameView.html"
    })
    .state("game.lobby", {
      url: "/lobby",
      controller: "lobbyCtrl",
      templateUrl: "views/lobbyView.html"
    })
    .state("game.character", {
      url: "/character",
      controller: "characterCtrl",
      templateUrl: "views/characterView.html"
    })
    .state("game.inventory", {
      url: "/inventory",
      controller: "inventoryCtrl",
      templateUrl: "views/inventoryView.html"
    })
    .state("game.spells", {
      url: "/spells",
      controller: "spellsCtrl",
      templateUrl: "views/spellsView.html"
    })
    .state("game.skills", {
      url: "/skills",
      controller: "skillsCtrl",
      templateUrl: "views/skillsView.html"
    })
    .state("game.map", {
      url: "/map",
      controller: "mapCtrl",
      templateUrl: "views/mapView.html"
    })
    .state("game.about", {
      url: "/about",
      controller: "aboutCtrl",
      templateUrl: "views/aboutView.html"
    })
});

// Create Session
// Session Code will generate after player has selected to create game
var sessionRef = null;

// On close, delete session from server
window.onbeforeunload = function (event) {
  if(sessionRef != null){
    sessionRef.remove();
  }
};