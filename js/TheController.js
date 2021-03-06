var app = angular.module('quoteBook');

app.controller('TheController', function($scope, dataService) {

	$scope.getQuote = dataService.getData();

	$scope.add = function(){
		dataService.addData($scope.addQuote);
		$scope.addQuote = '';
	};

	$scope.remove = function() {
		dataService.removeData($scope.addQuote.text);
		$scope.addQuote = '';
	};

});
