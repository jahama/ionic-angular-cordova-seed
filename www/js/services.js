angular.module('starter.services', [])

.factory('EquipoSeniorService', function() {
  // Might use a resource here that returns a JSON array
 
  // Some fake testing data
   var jugadores = [
    { id: 0, nombre: 'Valentin', apellido: 'Basterra', puesto:'Portero' },
    { id: 1, nombre: 'Gari', apellido: 'Amundarain', puesto:'Portero' },
    { id: 2, nombre: 'Ion', apellido: 'Romo', puesto:'Extremo' },
    { id: 3, nombre: 'Iñigo', apellido: 'Amezketa', puesto:'Extremo' },
    { id: 4, nombre: 'Mikel', apellido: 'Vazquez', puesto:'Lateral' }
 ];

  return {    
    
    allJugadores: function() {
      return jugadores;
    },
    getJugador: function(jugadorId) {
      // Simple index lookup
      return jugadores[jugadorId];
    }
  }
})

.factory('EquipoJuvenilService', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
   var jugadores = [
    { id: 0, nombre: 'juvenil 1', apellido: 'Apellido 1', puesto:'Portero' },
    { id: 1, nombre: 'juvenil 2', apellido: 'Apellido 2', puesto:'Portero' },
    { id: 2, nombre: 'juvenil 3', apellido: 'Apellido 3', puesto:'Extremo' },
    { id: 3, nombre: 'juvenil 4', apellido: 'Apellido 4', puesto:'Extremo' },
    { id: 4, nombre: 'juvenil 5', apellido: 'Apellido 5', puesto:'Lateral' }
 ];

  return {    
    
    allJugadores: function() {
      return jugadores;
    },
    getJugador: function(jugadorId) {
      // Simple index lookup
      return jugadores[jugadorId];
    }
  }
});

