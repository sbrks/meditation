var app = angular.module('MeditateMe', ['ngRoute']);


app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/meditation-index.html',
      controller: 'MeditationController'
    });
}]);


app.factory('MeditationService', function() {
    var MeditationService = {};

  MeditationService.query = function () {
    return ALL_MEDITATIONS;
  };

  MeditationService.get = function(id) {
    var id = parseInt(id)
    return ALL_MEDITATIONS.find(function(meditation){
      return meditation.id == id;
    });
  };

  return MeditationService;
});


// app.service('MeditationService', function () {
//   var MeditationService = {};

//   MeditationService.query = function () {
//     return ALL_MEDITATIONS;
//   };

//   MeditationService.get = function(id) {
//     var id = parseInt(id)
//     return ALL_MEDITATIONS.find(function(meditation){
//       return meditation.id == id;
//     });
//   };

//   return MeditationService;
// });



app.controller('MeditationController', function($scope) {
  console.log("Meditation index");
  $scope.meditations = "meditation index is working!";
})





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
