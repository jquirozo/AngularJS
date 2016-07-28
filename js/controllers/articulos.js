'use strict';

angular.module('myApp').controller('ArticulosCtrl', function($scope){
//app.controller('ArticulosCtrl', function($scope){
	$scope.posts = [
		{
			title:"Quiere la boca exhausta vid",
			content:"Quiere la boca exhausta vid, kiwi, piña y fugaz jamón. Fabio me exige, sin tapujos, que añada cerveza al whisky."
		},
		{
			title:"Gregorio Samsa se despertó convertido",
			content:"Una mañana, tras un sueño intranquilo, Gregorio Samsa se despertó convertido en un monstruoso insecto. Estaba echado de espaldas sobre"
		}
		,
		{
			title:"muy parecida a las dulces",
			content:"Reina en mi espíritu una alegría admirable, muy parecida a las dulces alboradas de la primavera, de que gozo aquí"
		}
	];
});