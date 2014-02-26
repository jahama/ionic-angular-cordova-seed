   

angular.module('starter.controllers', [])


.controller('EquipoSeniorCtrl', function($scope, EquipoServiceJSON) {
  
 EquipoServiceJSON.findAll().then (function(result){
    $scope.jugadores = result.data;
    console.log(result.data);
  });
 //  $scope.empleados = EquipoSeniorServiceLS.allJugadores();
  console.log(" Jugadores : EquipoSeniorCtrl con EquipoServiceJSON  " ,$scope.jugadores);
 // console.log(" Empleados " ,$scope.empleados);
})


.controller('EquipoJuvenilCtrl', function($scope, EquipoService) {
  // "Pets" is a service returning mock data (services.js)
  $scope.jugadores = EquipoService.allJugadores(2);
  console.log(" Jugadores " ,$scope.jugadores);
})


.controller('EquipoCadeteCtrl', function($scope, EquipoService) {
  // "Pets" is a service returning mock data (services.js)
  $scope.jugadores = EquipoService.allJugadores(3);
  console.log(" Jugadores " ,$scope.jugadores);
})


// A simple controller that shows a tapped item's data
.controller('JugadorDetailCtrl', function($scope, $stateParams,EquipoServiceJSON) {
    EquipoServiceJSON.findById($stateParams.jugadorId).then(function(result){
       $scope.jugador = result.data;
       console.log(result.data);
    })
})
