'use strict';
 
var app = angular.module('MeditateMe', [
    'ngRoute',]);

app.controller('MeditationController', MeditationController);

function MeditationController() {
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
}
