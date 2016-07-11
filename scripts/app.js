var app = angular.module('MeditateMe', [
    'ngRoute',]);

console.log("Angular works");


app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templates: 'templates/meditation-index.html',
      controller: 'MeditationController'
    })
    .when ('meditations/:id', {
      templateUrl:'templates/meditation-show.html',
      controller: 'MeditationShowController'
    })
});

app.controller('MeditationController', function ($scope, MeditationService) {
  console.log("Meditation Index");
    var self = this;
  self.all = [
      {id: 1,
      meditation: "Meditation Day 1",
      length: "10 minutes",
      description: "meditation ipsum"},
      {id: 2, meditation: "Meditation Day 2",
      length: "10 minutes",
      description: "meditation ipsum"},
      {id: 3, meditation: "Meditation Day 3",
      length: "10 minutes",
      description: "meditation ipsum"},
      {id: 4, meditation: "Meditation Day 4",
      length: "10 minutes",
      description: "meditation ipsum"},
      {id: 5, meditation: "Meditation Day 5",
      length: "10 minutes",
      description: "meditation ipsum"},
      {id: 6, meditation: "Meditation Day 6",
      length: "10 minutes",
      description: "meditation ipsum"},
      {id: 7, meditation: "Meditation Day 7",
      length: "10 minutes",
      description: "meditation ipsum"},
      {id: 8, meditation: "Meditation Day 8",
      length: "10 minutes",
      description: "meditation ipsum"},
      {id: 9, meditation: "Meditation Day 9",
      length: "10 minutes",
      description: "meditation ipsum"}];
      return self;
});


app.controller('MeditationShowController', function($scope, MeditationService, $routeParams) {
  console.log($routeParams.id);
  $scope.meditation = MeditationService.get($routeParams.id);
});



//MODELS//

app.factory('MeditationService', function () {
  var MeditationService = {};

  MeditationService.query = function () {
    return ALL_MEDITATIONS;
  };

  MeditationService.get = function(id) {
    var id = parseInt(id);
    return ALL_MEDITATIONS.find(function(meditation) {
      return meditation.id == id;
    });
  };

  return MeditationService;
});


var ALL_MEDITATIONS =  [
      {"id": 1,
      meditation: "Meditation Day 1",
      length: "10 minutes",
      description: "meditation ipsum"},
      {"id": 2, meditation: "Meditation Day 2",
      length: "10 minutes",
      description: "meditation ipsum"},
      {"id": 3, meditation: "Meditation Day 3",
      length: "10 minutes",
      description: "meditation ipsum"},
      {"id": 4, meditation: "Meditation Day 4",
      length: "10 minutes",
      description: "meditation ipsum"},
      {"id": 5, meditation: "Meditation Day 5",
      length: "10 minutes",
      description: "meditation ipsum"},
      {"id": 6, meditation: "Meditation Day 6",
      length: "10 minutes",
      description: "meditation ipsum"},
      {"id": 7, meditation: "Meditation Day 7",
      length: "10 minutes",
      description: "meditation ipsum"},
      {"id": 8, meditation: "Meditation Day 8",
      length: "10 minutes",
      description: "meditation ipsum"},
      {"id": 9, meditation: "Meditation Day 9",
      length: "10 minutes",
      description: "meditation ipsum"}
    ];
