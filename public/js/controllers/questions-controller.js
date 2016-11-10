angular.module('dzQuiz')
	.controller('QuestionsController', function($scope, $http) {
		$scope.qs = [];
		
		$scope.perguntas = {};
		$scope.respostas = {};
		$scope.series = {};

		$http.get('/questions')
			.success(function(q) {
			
			$scope.perguntas = q.perguntas;
			$scope.respostas = q.perguntas.respostas;
			$scope.series = q.series;
			console.log($scope.perguntas, $scope.series, $scope.respostas);
		})
		.error(function(erro) {
			console.log(erro);
		});
	});