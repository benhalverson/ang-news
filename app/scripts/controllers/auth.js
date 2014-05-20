'use strict';

app.controller('AuthCtrl', function($scope, $location, Auth) {
	if(Auth.signedIn())
	{	
		$location.path('/');
	}
	
});