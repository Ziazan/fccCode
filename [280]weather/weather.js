var app = angular.module("weather", []);
app.controller('weather', function($scope, $http){
	var API = "http://v.juhe.cn/weather/ip?format=1";
	var key = "&key=1e25acb825b4aeeb7ad0e203a1e0a25f";//聚合key
	$http.jsonp("http://ipinfo.io/json?callback=JSON_CALLBACK").success(function(data){
		var IP = "&ip="+data.ip;//本机的ip地址
		console.log(IP);
	   var url = API + IP + key + "&callback=JSON_CALLBACK";
	   $http.jsonp(url).success(function(response){
	   	    //var r = JSON.parse(response);
			$scope.weather = response.result;
		});
	});
	
});
