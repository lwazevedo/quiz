angular.module('Quiz')
.controller('QuestionsController', function($scope, $http, $route) {
	
	$scope.alphabet = ["A","B","C","D","E"];
	
	$scope.questions = {};
	$scope.selected = [];
	$scope.message = '';
	$scope.winner;


	$http.get('/questions')
	.success(function(questions) {
		$scope.questions = questions;		
	})
	.error(function(erro) {
		console.log(erro);
	});


	$scope.addQuestion = function(selected){
		$scope.message = '';

		if($scope.selected.length < 1){
			$scope.selected.push(selected);
		} else {

			let equals = _.isEqual($scope.selected, [].concat(selected));	
			
			if(!equals){		   	 

				let deleted =  $scope.selected.filter(function(element){		   	 	
					return  element.questionId === selected.questionId && element.serieId != selected.serieId;
				})[0];

				deleted ? ($scope.selected.splice($scope.selected.indexOf(deleted),1), $scope.selected.push(selected)) :
				$scope.selected.push(selected);	

			}				
		}
		
	};


	$scope.onRecover = function(){
		$route.reload();
	};


	$scope.onSubmit = function() {
		if($scope.selected.length != $scope.questions.questions.length){
			$scope.message = 'Favor responder todas as perguntas';
		} else{
			let equal;
			let max = 0;
			let serieIdWinner;
			for(let pos in $scope.selected){						
				equal = $scope.selected.filter(function(element){
					return  element.questionId != $scope.selected[pos].questionId && element.serieId == $scope.selected[pos].serieId;
				})[0];
				
				if(equal){
					$scope.selected[pos].weight += equal.weight;
					$scope.selected.splice($scope.selected.indexOf(equal),1); 	
				}		
				if ($scope.selected[pos].weight > max){
					max = $scope.selected[pos].weight;
					serieIWinner = $scope.selected[pos].serieId;
				}							
			}

			$scope.winner = $scope.questions.result.filter(function(element){
				return element.id == serieIWinner;
			})[0];



		}
	};

});