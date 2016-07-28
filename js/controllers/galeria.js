'use strict';

 angular.module('myApp').controller('GaleriaCtrl', function($scope){
//app.controller('GaleriaCtrl', function($scope){
	
	var pictures =  $scope.pictures = [];

	var baseURL = "http://lorempixel.com/300/180/";

	var titles = [
	"Comida Sana",
	"Salud y Trabajo",
	"Vida en la Ciudad",
	"Mantente Activo",
	"Cuida tu aspecto",
	"!Vida Nocturna!"
	];
	
	var keywords = [
	"food",
	"business",
	"city",
	"sports",
	"fashion",
	"nightlife"
	];

	var dummyText = "Reina en mi espíritu una alegría admirable, muy parecida a las dulces alboradas de la primavera, de que gozo aquí con delicia. Estoy solo, y me felicito de vivir en";

	$scope.addPics = function(i){
		pictures.push({
			url:baseURL+keywords[i],
			title:titles[i],
			summary:dummyText
		});
	}

	for(var i=0; i <3;i++){
		$scope.addPics(i);
	}

	$scope.rate = 0;
	$scope.max = 10;
	$scope.isReadonly = false;
});