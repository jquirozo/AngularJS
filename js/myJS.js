var myApp = angular.module('myApp',[]);//creating app
myApp.controller('AlumnosController', ['$scope', function($scope) { // creating controller
    $scope.alumnos =[
				{nombre: "Jacobo Quiroz", curso: "3ro ESO", telefono:"1234567890"},
				{nombre: "Rosa Perez", curso: "1ro ESO", telefono:"1234567891"},
				{nombre: "Alberto Herrera", curso: "2do ESO", telefono:"1234567892"},
				{nombre: "Ana Mariño", curso: "3ro ESO", telefono:"1234567893"}	
	];

	$scope.Save = function(){
		$scope.alumnos.push({
			nombre:$scope.nuevoAlumno.nombre,
			telefono:$scope.nuevoAlumno.telefono,
			curso:$scope.nuevoAlumno.curso
		});
	}

}]);