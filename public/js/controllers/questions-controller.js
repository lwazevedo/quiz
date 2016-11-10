angular.module('dzQuiz')
.controller('QuestionsController', function($scope, $http, $route) {
	
	$scope.indice = ["A","B","C","D","E"];
	
	$scope.perguntas = {};
	$scope.series = {};
	$scope.frases = {};

	$scope.resultados= {};

	$scope.valores = [];
	$scope.mensagem = '';

	$scope.serieVencedora = [];

	$scope.onRecover = function(){
		$route.reload();
	};


	$scope.onSubmit = function() {
		var achou;
		console.log($scope.valores.length,$scope.perguntas.length);
		if($scope.valores.length === $scope.perguntas.length){
			$scope.mensagem = '';
			for (var i = 0; i <= $scope.valores.length -1 ; i++) {
				achou = false;
				if($scope.serieVencedora.length < 1){

					$scope.serieVencedora.push({
						serieId: $scope.valores[i].serieId,
						pesoPergunta: $scope.valores[i].pesoPergunta
					});		
				}else{
					for (var j = 0; j <= $scope.serieVencedora.length -1 ; j++) {
						if($scope.serieVencedora[j].serieId === $scope.valores[i].serieId){
							achou = true;
							var peso = ($scope.serieVencedora[j].pesoPergunta + $scope.valores[i].pesoPergunta);
							$scope.serieVencedora[j].pesoPergunta = peso;		
						}
					}	
					if(!achou){
						$scope.serieVencedora.push({
							serieId: $scope.valores[i].serieId,
							pesoPergunta: $scope.valores[i].pesoPergunta
						});		
					}
				}
			}
			


			var max = 0;
			var vencedor;
			for(var i=0,len=$scope.serieVencedora.length;i<len;i++){
				if(max < $scope.serieVencedora[i].pesoPergunta){
					max = $scope.serieVencedora[i].pesoPergunta;
					vencedor = $scope.serieVencedora[i];
				}
			}
			
			$scope.fraseFinal = $scope.frases.filter(function(item){
				return item.id === vencedor.serieId; 
			});			

			console.log($scope.fraseFinal);

		} else {
			$scope.mensagem = 'Favor responder todas as respostas';
		}

	};


	$scope.adicionaResposta = function(respostaId, serieId, perguntaId, pesoPergunta){
		$scope.mensagem = '';

		$scope.resultados = {
			respostaId: respostaId,
			serieId: serieId, 
			perguntaId: perguntaId,
			pesoPergunta: pesoPergunta
		};

		if($scope.valores.length > 0){
			var achei = $scope.valores.filter(function(item){
				return item.perguntaId === perguntaId;	
			});

			console.log(achei);

			if(achei.length > 0){
				for (var i = 0; i <= achei.length - 1; i++) {
					achei[i].id === respostaId ?
					$scope.valores.slice(i,1) : $scope.valores.push($scope.resultados);
				}		
			} else {
				$scope.valores.push($scope.resultados);	
			}
		}
		else {
			$scope.valores.push($scope.resultados);

		}
		
	};


	$http.get('/questions')
	.success(function(q) {
		$scope.perguntas = q.perguntas;
		angular.forEach($scope.perguntas, function(item){
			item.respostas.sort(function(){
				return (Math.round(Math.random())-0.5);
			});	
		});

		$scope.series = q.series;
		$scope.frases = q.resultados;
	})
	.error(function(erro) {
		console.log(erro);
	});
});