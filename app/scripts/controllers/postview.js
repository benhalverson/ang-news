'use strict';

app.controller('PostViewCtrl', function  ($scope, $routeParams, Post) {
	
	//grabbing post object
	$scope.post = Post.find($routeParams.postId);
});