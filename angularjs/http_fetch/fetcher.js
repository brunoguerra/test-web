angular.module("fetchContent", [])
.controller('FetchContentController', function($scope, $http) {
	$scope.contents = [];

	$http.get("data.json", {params: {page:"Woman"}})
			.success(function(data) {
				$scope.contents = data.contents;
				console.log($scope.contents);
			});
});