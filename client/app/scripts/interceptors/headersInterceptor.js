angular.module('means').factory(
	'errorInterceptor', 
	[
		'$q',
		'$rootScope',
		function($q, $rootScope){
			return {
				request: function (config) {
					return config || $q.when(config);
				},
				requestError: function(request){
					return $q.reject(request);
				},
				response: function (response) {
					return response || $q.when(response);
				},
				responseError: function (response) {
					if (response && response.status === 404) {
					}
					if (response && response.status >= 500) {
						if($rootScope.DEV) { /*Show the error message*/ }
					}
					return $q.reject(response);
				}
			};
		}
]);