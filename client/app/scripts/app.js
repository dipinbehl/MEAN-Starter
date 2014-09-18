var app = angular.module('means', 
[	'ui.router',
	'means.admin',
	'means.user'
]);

angular.module('means.admin', []);
angular.module('means.user', []);
/*app.config(function($httpProvider) {
	$httpProvider.interceptors.push('headersInterceptor');
});*/

app.run(function($http) {
	$http.defaults.headers.common['content-type'] = 'application/json; charset=UTF8';
});

app.run(['$state', function($state) {
	$state.transitionTo('home');
}]);