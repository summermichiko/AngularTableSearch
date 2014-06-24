var countryApp = angular.module("countryApp", []);

countryApp.controller("CountryCtrl", function($scope, $http) {
	$http.get("countries.json").success(function(data) { //countries.json is a separate file holding all of the data
		$scope.countries = data;
	});
}]);