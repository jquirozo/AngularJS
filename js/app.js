'use strict';

var app = angular.module('myApp',[
		'ngAnimate',
		'ngCookies',
		'ngResource',
		'ngRoute',
		'ngSanitize',
		'ngTouch',
		'ui.sortable',
		'LocalStorageModule',
		'ui.bootstrap'
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
				.otherwise({
					redirectTo:'/'
				});
		});//creating app

