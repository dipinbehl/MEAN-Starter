angular.module('means')
	.factory('authorizationService', function($http, $q){
		return {login : function(loginCredentials){
				return $http.post('/api/login', loginCredentials)
						.success(function(response){
							if(response.token){
								$http.defaults.headers.common['token'] = response.token;
								return {login:true, response:$q.defer().resolve(response)};
								}
							else{
								$q.reject(response);
								return {login:false, response:$q.defer().promise};
							}
						})
						.error(function(response){
							$q.reject(response);
							return {login:false, response:$q.defer().promise};
						});
			}
		}
	})