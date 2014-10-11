function loadPublicStaticViews(viewDetails){
var contentPlaceHolderName = 'content';
return {
	'header': { templateUrl: 'app/views/public/header.html' },
	'nav': { templateUrl: 'app/views/public/nav.html' },
	'footer': { templateUrl: 'app/views/public/footer.html' },
	contentPlaceHolderName : viewDetails
};
}

angular.module('means').config(function($stateProvider, $urlRouterProvider){
	//$urlRouterProvider.when('', function
	$stateProvider
		.state('home', {
			views : loadPublicStaticViews({ templateUrl: 'app/views/public/login.html', controller: 'loginController' })
			// views: {
				// 'header': { templateUrl: 'app/views/public/header.html' },
				// 'nav': { templateUrl: 'app/views/public/nav.html' },
				// 'footer': { templateUrl: 'app/views/public/footer.html' },
				// 'content': { templateUrl: 'app/views/public/login.html', controller: 'loginController' }
			// }
		});
});