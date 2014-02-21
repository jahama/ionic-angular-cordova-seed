var LocalStorageAdapter = function () {

    this.initialize = function() {
        var deferred = $.Deferred();
        // Store sample data in Local Storage
        console.log("inicializo localStorage");
        window.localStorage.setItem("jugadores", JSON.stringify(
            [
                { id: 0, nombre: 'Valentin', apellido: 'Basterra', puesto:'Portero' },
                { id: 1, nombre: 'Gari', apellido: 'Amundarain', puesto:'Portero' },
                { id: 2, nombre: 'Ion', apellido: 'Romo', puesto:'Extremo' },
                { id: 3, nombre: 'Iñigo', apellido: 'Amezketa', puesto:'Extremo' },
                { id: 4, nombre: 'Mikel', apellido: 'Vazquez', puesto:'Lateral' },
                { id: 10, nombre: 'Valentin', apellido: 'Basterra', puesto:'Portero' },
                { id: 11, nombre: 'Gari', apellido: 'Amundarain', puesto:'Portero' },
                { id: 12, nombre: 'Ion', apellido: 'Romo', puesto:'Extremo' },
                { id: 13, nombre: 'Iñigo', apellido: 'Amezketa', puesto:'Extremo' },
                { id: 14, nombre: 'Mikel', apellido: 'Vazquez', puesto:'Lateral' }
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

    this.findAll = function () {
        var deferred = $.Deferred(),
            jugadores = JSON.parse(window.localStorage.getItem("jugadores"));
            
        deferred.resolve(jugadores);
        return deferred.promise();
    }

}