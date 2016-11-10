angular.module('dzQuiz', ['minhasDiretivas','ngAnimate', 'ngRoute', 'ngResource'])
	.config(function($routeProvider, $locationProvider) {

		$locationProvider.html5Mode(true);

		$routeProvider.when('/', {
			templateUrl: 'partials/principal.html',
			controller: 'QuestionsController'
		});

		// $routeProvider.when('/fotos/new', {
		// 	templateUrl: 'partials/foto.html',
		// 	controller: 'FotoController'
		// });

		// $routeProvider.when('/fotos/edit/:fotoId', {
		// 	templateUrl: 'partials/foto.html',
		// 	controller: 'FotoController'
		// });

		$routeProvider.otherwise({redirectTo: '/'});

	});