   

angular.module('starter.controllers', [])


.controller('EquipoSeniorCtrl', function($scope, EquipoService) {
  
  $scope.jugadores = EquipoService.allJugadores(1);
 //  $scope.empleados = EquipoSeniorServiceLS.allJugadores();
  console.log(" Jugadores " ,$scope.jugadores);
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
.controller('JugadorDetailCtrl', function($scope, $stateParams, EquipoService) {
  // "Pets" is a service returning mock data (services.js)
  console.log("estado " +  '   '  + $stateParams.jugadorId);
  for (var a in $stateParams)
     console.log("estado " +  ' --- ' + a);
  $scope.jugador = EquipoService.getJugador($stateParams.jugadorId);
})
