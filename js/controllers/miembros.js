'use strict';
/*
Lee un archivo (simulando lectura de datos) para mostrarlos en Grid
*/
angular.module('myApp').controller('MiembrosCtrl', function($scope,$http){

	 $http.get('http://localhost/angulart/datamiembros.json').then(function(response){
	 	$scope.miembrosget = response.data;
	 });

	 $scope.gridOptions = {
	 	data: 'miembrosget'
	 };
});