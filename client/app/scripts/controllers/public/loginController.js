angular.module('means').controller('loginController',
[
	'$scope',
	'authorizationService',
	function($scope, authService){
		$scope.login = function(){
				$scope.message = '';
			authService.login($scope.loginCredentials)
				.then(function(data){
					$scope.type = 'data';
					$scope.message = data
				},
				function(error){
					$scope.type = 'error';
					$scope.message = error;
				});
		}
	}
]);
