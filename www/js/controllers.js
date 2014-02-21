   

angular.module('starter.controllers', [])


.controller('EquipoSeniorCtrl', function($scope, EquipoSeniorService) {
  // "" is a service returning mock data (services.js)
  //console.log("controlador", adapter);
  $scope.jugadores = EquipoSeniorService.allJugadores();
 //  $scope.empleados = EquipoSeniorServiceLS.allJugadores();
  console.log(" Jugadores " ,$scope.jugadores);
 // console.log(" Empleados " ,$scope.empleados);
})


.controller('EquipoJuvenilCtrl', function($scope, EquipoJuvenilService) {
  // "Pets" is a service returning mock data (services.js)
  $scope.jugadores = EquipoJuvenilService.allJugadores();
  console.log(" Jugadores " ,$scope.jugadores);
})


// A simple controller that shows a tapped item's data
.controller('JugadorDetailCtrl', function($scope, $stateParams, EquipoSeniorService) {
  // "Pets" is a service returning mock data (services.js)
  console.log($stateParams);
  $scope.jugador = EquipoSeniorService.getJugador($stateParams.jugadorId);
})
