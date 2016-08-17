'use strict';

angular.module('myApp',[
		'ngAnimate',
		'ngCookies',
		'ngResource',
		'ngRoute',
		'ngSanitize',
		'ngTouch',
		'ui.sortable',
		'LocalStorageModule',
		'ui.bootstrap',
		'ngGrid'
		])
		.config(['localStorageServiceProvider',function(localStorageServiceProvider){
				localStorageServiceProvider.setPrefix('ls');
			}
			])
		.config(function($routeProvider){
			$routeProvider
				.when('/',{
					templateUrl:'views/main.html',
					controller:'MainCtrl'	
				})
				.when('/about',{
					templateUrl:'views/about.html',
					controller:'AboutCtrl'	
				})
				.when('/articulos',{
					templateUrl:'views/articulos.html',
					controller:'ArticulosCtrl'	
				})	
				.when('/galeria',{
					templateUrl:'views/galeria.html',
					controller:'GaleriaCtrl'	
				})	
				.when('/miembros',{
					templateUrl:'views/miembros.html',
					controller:'MiembrosCtrl'	
				})				
				.otherwise({
					redirectTo:'/'
				});
		});//creating app

