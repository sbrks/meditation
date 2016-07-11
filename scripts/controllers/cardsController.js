var app = angular.module('MeditateMe', []);


app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'index.html',
      controller: 'MeditationController'
    });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
});


  app.controller('MeditationController', ['MeditationService', function($scope, MeditationService) {

      console.log("Meditation Index");

      $scope.meditations = MeditationService.query();
    }]);

  //     var vm = this;
    
  //    vm.meditationsList = [
  //   {meditation: "Meditation Day 1",
  //     length: "10 minutes",
  //     description: "meditation ipsum"},
  //     {meditation: "Meditation Day 2",
  //     length: "10 minutes",
  //     description: "meditation ipsum"},
  //     {meditation: "Meditation Day 3",
  //     length: "10 minutes",
  //     description: "meditation ipsum"},
  //     {meditation: "Meditation Day 4",
  //     length: "10 minutes",
  //     description: "meditation ipsum"},
  //     {meditation: "Meditation Day 5",
  //     length: "10 minutes",
  //     description: "meditation ipsum"},
  //     {meditation: "Meditation Day 6",
  //     length: "10 minutes",
  //     description: "meditation ipsum"},
  //     {meditation: "Meditation Day 7",
  //     length: "10 minutes",
  //     description: "meditation ipsum"},
  //     {meditation: "Meditation Day 8",
  //     length: "10 minutes",
  //     description: "meditation ipsum"},
  //     {meditation: "Meditation Day 9",
  //     length: "10 minutes",
  //     description: "meditation ipsum"}
  // ];


  // });


app.factory('MeditationService', function () {
  var MeditationService = {};

  MeditationService.query = function () {
    return ALL_MEDITATIONS;
  };

  MeditationService.get = function(id) {
    var id = parseInt(id);
    return ALL_MEDITATIONS.find(function(meditation){
      return meditation.id == id;
    });
  }

  return MeditationService;
});


ALL_MEDITATIONS =  [
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
      description: "meditation ipsum"}
  ];
