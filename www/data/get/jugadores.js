var g = require('dyson-generators');

var jugador = {
    path: '/jugador',
    template: {
        id: g.id,
	equipo_id : 1,
        nombre: g.name,
        apellido: 'apellido',
	puesto  : 'portero'
    }
};

var jugadores = {
    path: '/jugadores',
    collection: true,
    template: jugador.template
};

module.exports = [jugador, jugadores];
