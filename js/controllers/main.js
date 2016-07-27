'use strict';

// angular.module('myApp').controller('MainCtrl', function($scope, localStorageService){
app.controller('MainCtrl', function($scope){
	var baseURL = 'http://lorempixel.com/960/450/';

	$scope.setInterval=5000;
	$scope.noWrapSlides = false;
  	$scope.active = 0;

	$scope.slides = [
	{
		title:'Lorem ipsum dolor sit amet',
		image:baseURL + 'sports/',
		text:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo!'
	},
	{
		title:'unde omnis iste natus',
		image:baseURL + 'food/',
		text:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem!'
	},
	{
		title:'es membres del sam familie',
		image:baseURL + 'nature/',
		text:'Li Europan lingues es membres del sam familie. Lor separat!'
	}
	];	

	// var tareasEnAlmacen = localStorageService.get('tareas');

	// $scope.tareas = tareasEnAlmacen && tareasEnAlmacen.split('\n') || [];

	// $scope.$watch('tareas', function(){
	// 	localStorageService.add('tareas', $scope.tareas.join('\n'));
	// }, true);

	// $scope.addTarea = function(){
	// 	$scope.tareas.push($scope.tarea);
	// 	$scope.tarea = '';
	// };

	// $scope.eliminarTarea = function(index){
	// 	$scope.tareas.splice(index,1);
	// };

});