var LocalStorageAdapter = function () {

    this.initialize = function() {
        
        var deferred = $.Deferred();
        // Store sample data in Local Storage
       
        window.localStorage.setItem("jugadores", JSON.stringify(
            [
                { id: 0, equipo_id:1, nombre: 'Valentin', apellido: 'Basterra', puesto:'Portero' },
                { id: 1, equipo_id:1, nombre: 'Gari', apellido: 'Amundarain', puesto:'Portero' },
                { id: 2, equipo_id:1, nombre: 'Ion', apellido: 'Romo', puesto:'Extremo' },
                { id: 3, equipo_id:1, nombre: 'Iñigo', apellido: 'Amezketa', puesto:'Extremo' },
                { id: 4, equipo_id:1, nombre: 'Mikel', apellido: 'Vazquez', puesto:'Lateral' },
                { id: 10,equipo_id:2, nombre: 'Valentin juvenil', apellido: 'Basterra', puesto:'Portero' },
                { id: 11,equipo_id:2, nombre: 'Gari juvenil', apellido: 'Amundarain', puesto:'Portero' },
                { id: 12,equipo_id:2, nombre: 'Ion juvenil', apellido: 'Romo', puesto:'Extremo' },
                { id: 13,equipo_id:2, nombre: 'Iñigo juvenil', apellido: 'Amezketa', puesto:'Extremo' },
                { id: 14,equipo_id:2, nombre: 'Mikel juvenil', apellido: 'Vazquez', puesto:'Lateral' },
                { id: 20,equipo_id:3, nombre: 'Valentin cadete', apellido: 'Basterra', puesto:'Portero' },
                { id: 21,equipo_id:3, nombre: 'Gari cadete', apellido: 'Amundarain', puesto:'Portero' },
                { id: 22,equipo_id:3, nombre: 'Ion cadete', apellido: 'Romo', puesto:'Extremo' },
                { id: 23,equipo_id:3, nombre: 'Iñigo cadete', apellido: 'Amezketa', puesto:'Extremo' },
                { id: 24,equipo_id:3, nombre: 'Mikel cadete', apellido: 'Vazquez', puesto:'Lateral' }
            ]
        ));
        deferred.resolve();
        return deferred.promise();
        
    }

    this.findById = function (id) {
        console.log("localStorage: findById",typeof id);
        var deferred = $.Deferred(),
            jugadores = JSON.parse(window.localStorage.getItem("jugadores")),
            jugador = null,
            l = jugadores.length;
            console.log(l);

        for (var i = 0; i < l; i++) {
            console.log(jugadores[i]);
            if (jugadores[i].id == id) {
                jugador = jugadores[i];
                break;
            }
        }
         console.log(jugador);
        deferred.resolve(jugador);
        return deferred.promise();
    }

    this.findByName = function (searchKey) {
        var deferred = $.Deferred(),
            jugadores = JSON.parse(window.localStorage.getItem("jugadores")),
            results = jugadores.filter(function (element) {
                var fullName = element.nombre + " " + element.lastName;
                return fullName.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
            });
        deferred.resolve(results);
        return deferred.promise();
    }

    /**
     * Devuelve todos los jugadores de un equipo, que se pasa como parametro 
     **/
    this.findAll = function (e_id) {
       
        var deferred = $.Deferred(),
            jugadores = JSON.parse(window.localStorage.getItem("jugadores"));
            // filtrar por equipo
            results = jugadores.filter(function (element) {
                return element.equipo_id===e_id;
            });
           
         
        deferred.resolve(results);
        return deferred.promise();
    }

}