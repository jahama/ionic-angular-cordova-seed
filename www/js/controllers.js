   

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


.controller('EquipoJuvenilCtrl', function($scope, EquipoServiceMemory) {
    EquipoServiceMemory.findAll().then (function(result){
      $scope.jugadores = result;
      console.log(" EquipoJuvenilCtrl ",result);
    });
 //  $scope.empleados = EquipoSeniorServiceLS.allJugadores();
  console.log(" Jugadores : EquipoJuvenilCtrl con EquipoServiceMemory  " ,$scope.jugadores);
 // console.log(" Empleados " ,$scope.empleados);
})


.controller('EquipoCadeteCtrl', function($scope, EquipoServiceLS) {
   EquipoServiceLS.findAll().then (function(result){
       $scope.jugadores = result;
        console.log(" EquipoCadeteCtrl ",result);
      });
   //  $scope.empleados = EquipoSeniorServiceLS.allJugadores();
   // console.log(" Jugadores : EquipoJuvenilCtrl con EquipoServiceMemory  " ,$scope.jugadores);
  //  $scope.jugadores = EquipoService.allJugadores(3);
  //  console.log(" Jugadores " ,$scope.jugadores);
})


// A simple controller that shows a tapped item's data
.controller('JugadorDetailCtrl', function($scope, $stateParams,EquipoServiceJSON) {
    EquipoServiceJSON.findById($stateParams.jugadorId).then(function(result){
       $scope.jugador = result.data;
       console.log(result.data);
    })
})
