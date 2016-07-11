'use strict';

var app = angular.module('MeditateMe.meditations', ['ngRoute','firebase'])

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/meditations', {
    templateUrl: 'meditations/meditations.html',
    controller: 'MedCtrl'
  });
}]);

app.controller('MedCtrl', ['$scope','$firebaseSimpleLogin',function($scope,$firebaseSimpleLogin) {
  $scope.meditations = "meditation index is working!";
}]);