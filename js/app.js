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
  $urlRouterProvider.otherwise("/");
  $stateProvider
    .state("#", {
      url: "/",
      controller: "lobbyCtrl",
      templateUrl: "views/lobbyView.html"
    })
    .state("character", {
      url: "/character",
      controller: "characterCtrl",
      templateUrl: "views/characterView.html"
    })
    .state("inventory", {
      url: "/inventory",
      controller: "inventoryCtrl",
      templateUrl: "views/inventoryView.html"
    })
    .state("spells", {
      url: "/spells",
      controller: "spellsCtrl",
      templateUrl: "views/spellsView.html"
    })
    .state("skills", {
      url: "/skills",
      controller: "skillsCtrl",
      templateUrl: "views/skillsView.html"
    })
    .state("map", {
      url: "/map",
      controller: "mapCtrl",
      templateUrl: "views/mapView.html"
    })
    .state("about", {
      url: "/about",
      controller: "aboutCtrl",
      templateUrl: "views/aboutView.html"
    })
});

// Create Session
// TODO: Generate session key, replacing ROOMCODE
const sessionRef = firebase.database().ref().child("ROOMCODE").push();

// On close, delete session from server
window.onbeforeunload = function (event) {

  sessionRef.remove();
};