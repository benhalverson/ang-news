'use strict';

app.factory('Auth', function($firebaseSimpleLogin, FIREBASE_URL, $rootScope) {
	var ref = new Firebase(FIREBASE_URL);

	var auth = $firebaseSimpleLogin(ref);

	var Auth = {
		register: function(user) {
			console.log('Am I signed in?');
			return auth.$createUser(user.email, user.password);
		},
		signedIn: function() {
			console.log('check to see if a user is signed in');
			return auth.user !== null;

		},
		login: function(user) {
			console.log('Sign in please');
			return auth.login('password', user);
		},


		logout: function() {
			auth.$logout();
		}
	};

	$rootScope.signedIn = function() {
		return Auth.signedIn();
	};

	return Auth;
});