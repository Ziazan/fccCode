var app = angular.module('wikiApp',[]);
app.controller("myCtr", function($scope, $http, $timeout){
	var input = $("#input");
	var API = "http://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=";
	var cb = "&callback=JSON_CALLBACK";
	$scope.page = 'http://en.wikipedia.org/?curid=';

	$(".list").hide();
	$scope.search = function(){
		var val = input.val();
		$http.jsonp(API+val+cb).success(function(response){
			$scope.results = response.query.pages;
			$(".list").show();
		});
	}
});