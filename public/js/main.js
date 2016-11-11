angular.module('Quiz', ['ngAnimate', 'ngRoute', 'ngResource'])
	.config(function($routeProvider, $locationProvider) {

		$locationProvider.html5Mode(true);

		$routeProvider.when('/', {
			templateUrl: 'partials/principal.html',
			controller: 'QuestionsController'
		});

		$routeProvider.otherwise({redirectTo: '/'});

	});