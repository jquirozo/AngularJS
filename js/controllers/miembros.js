'use strict';
/*
Lee un archivo (simulando lectura de datos) para mostrarlos en Grid
*/
angular.module('myApp')
.controller('MiembrosCtrl', function($scope,$http,$uibModal,$filter){

	 $http.get('http://localhost/angulart/datamiembros.json').then(function(response){
	 	$scope.miembrosget = response.data;
	 });

	 $scope.gridOptions = {
	 	data: 'miembrosget',
	 	showGroupPanel: true,
	 	enableCellSelection: true,
	 	enableRowSelection: false,
	 	enableCellEdit: true,
	 	columnDefs: [
	 	{field:'no', displayName:'No.'},
	 	{field:'nombre', displayName:'Nombre'},
	 	{field:'fidelidad', displayName:'Puntos Fidelidad'},
	 	{field:'fechaUnion', displayName:'Fecha de Unión'},
	 	{field:'tipoMiembro', displayName:'Tipo de Miembro'}
	 	]
	 };
	

	 $scope.showModal = function(){
	 	$scope.nuevoMiembro = {};	 	 

	 	var modalInstance = $uibModal.open({
	 		templateUrl: 'views/add-miembros.html',
	 		controller: 'AddNuevoMiembroCtrl',
	 		resolve:{
	 			nuevoMiembro: function(){
	 				return $scope.nuevoMiembro;
	 			}
	 		}
	 	});

		modalInstance.result.then(function(selectedItem){
			$scope.miembrosget.push({
				no: $scope.miembrosget.length + 1,
				nombre: $scope.nuevoMiembro.nombre,
				tipoMiembro: $scope.nuevoMiembro.tipoMiembro,
				fidelidad: $scope.nuevoMiembro.fidelidad,
				fechaUnion:  $filter('date')($scope.nuevoMiembro.fechaUnion, "dd/MM/yyyy")
			});
		});	 	
	 }
})
.controller('AddNuevoMiembroCtrl', function ($scope, $uibModalInstance, nuevoMiembro){
	$scope.nuevoMiembro = nuevoMiembro;
	$scope.salvarNuevoMiembro = function(){
		$uibModalInstance.close(nuevoMiembro);
	};

	$scope.cancel = function(){
		$uibModalInstance.dismiss('cancel');
	};
});