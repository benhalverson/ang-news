'use strict';
/* global app:true */
//global var was created so jshint does not show an error 

var app = angular.module('angNewsApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'firebase'
]);

app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/posts.html',
        controller: 'PostsCtrl'
      })
        .when('/posts/:postId', {
        templateUrl: 'views/showpost.html',
        controller: 'PostViewCtrl'
      })
        .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'AuthCtrl'
      })

      .otherwise({
        redirectTo: '/'
      });
  })
.constant('FIREBASE_URL', 'https://blinding-fire-4738.firebaseio.com/');