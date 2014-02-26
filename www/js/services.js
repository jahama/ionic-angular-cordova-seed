angular.module('starter.services', [])
 
 /******************************************************************/

.factory('EquipoServiceJSON', function($q,$http) {

       
        // We use promises to make this api asynchronous. This is clearly not necessary when using in-memory data
        // but it makes this service more flexible and plug-and-play. For example, you can now easily replace this
        // service with a JSON service that gets its data from a remote server without having to changes anything
        // in the modules invoking the data service since the api is already async.

        return {
            findAll: function() {
                var deferred = $q.defer();
                var jugadores = $http.get('http://localhost:3000/jugadores')
                console.log(jugadores);
                deferred.resolve(jugadores);
                return deferred.promise;
            },

            findById: function(employeeId) {
                var deferred = $q.defer();
                var jugador = $http.get('http://localhost:3000/jugador')
                console.log(jugador);
                deferred.resolve(jugador);
                return deferred.promise;
            }
/*
            findByName: function(searchKey) {
                var deferred = $q.defer();
                var results = employees.filter(function(element) {
                    var fullName = element.firstName + " " + element.lastName;
                    return fullName.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
                });
                deferred.resolve(results);
                return deferred.promise;
            },

            findByManager: function (managerId) {
                var deferred = $q.defer(),
                    results = employees.filter(function (element) {
                        return parseInt(managerId) === element.managerId;
                    });
                deferred.resolve(results);
                return deferred.promise;
            }
*/
        }

    })


.factory('EquipoServiceMemory', function($q) {

        var employees = [
            {"id": 1, "nombre": "James", "apellido": "King", "equipo_id": 0, "puesto": ""},
            {"id": 2, "nombre": "Julie", "apellido": "Taylor", "equipo_id": 1, "puesto": "James King"},
            {"id": 3, "nombre": "Eugene", "apellido": "Lee", "equipo_id": 1, "puesto": "James King"},
            {"id": 4, "nombre": "John", "apellido": "Williams", "equipo_id": 1, "puesto": "James King"},
            {"id": 5, "nombre": "Ray", "apellido": "Moore", "equipo_id": 1, "puesto": "James King"},
            {"id": 6, "nombre": "Paul", "apellido": "Jones", "equipo_id": 4, "puesto": "John Williams"},
            {"id": 7, "nombre": "Paula", "apellido": "Gates", "equipo_id": 4, "puesto": "John Williams"},
            {"id": 8, "nombre": "Lisa", "apellido": "Wong", "equipo_id": 2, "puesto": "Julie Taylor"},
            {"id": 9, "nombre": "Gary", "apellido": "Donovan", "equipo_id": 2, "puesto": "Julie Taylor"},
            {"id": 10, "nombre": "Kathleen", "apellido": "Byrne", "equipo_id": 5, "puesto": "Ray Moore"},
            {"id": 11, "nombre": "Amy", "apellido": "Jones", "equipo_id": 5, "puesto": "Ray Moore"},
            {"id": 12, "nombre": "Steven", "apellido": "Wells", "equipo_id": 4, "puesto": "John Williams"}
        ];

        // We use promises to make this api asynchronous. This is clearly not necessary when using in-memory data
        // but it makes this service more flexible and plug-and-play. For example, you can now easily replace this
        // service with a JSON service that gets its data from a remote server without having to changes anything
        // in the modules invoking the data service since the api is already async.

        return {
            findAll: function() {
                console.log(" -- EquipoServiceMemory : findAll --");
                var deferred = $q.defer();
                deferred.resolve(employees);
                return deferred.promise;
            },

            findById: function(employeeId) {
                var deferred = $q.defer();
                var employee = employees[employeeId - 1];
                deferred.resolve(employee);
                return deferred.promise;
            },

            findByName: function(searchKey) {
                var deferred = $q.defer();
                var results = employees.filter(function(element) {
                    var fullName = element.firstName + " " + element.lastName;
                    return fullName.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
                });
                deferred.resolve(results);
                return deferred.promise;
            },

            findByManager: function (managerId) {
                var deferred = $q.defer(),
                    results = employees.filter(function (element) {
                        return parseInt(managerId) === element.managerId;
                    });
                deferred.resolve(results);
                return deferred.promise;
            }

        }

    })

.factory('EquipoServiceLS', function($q) {

        console.log (" -- inicializando el LS --")
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

        // We use promises to make this api asynchronous. This is clearly not necessary when using in-memory data
        // but it makes this service more flexible and plug-and-play. For example, you can now easily replace this
        // service with a JSON service that gets its data from a remote server without having to changes anything
        // in the modules invoking the data service since the api is already async.

        return {
            findAll: function() {
                console.log(" -- EquipoServiceLS : findAll --");
                var deferred = $q.defer();
                jugadores = JSON.parse(window.localStorage.getItem("jugadores"));
                deferred.resolve(jugadores);
                return deferred.promise;
            },

            findById: function(employeeId) {
                var deferred = $q.defer();
                var employee = employees[employeeId - 1];
                deferred.resolve(employee);
                return deferred.promise;
            },

            findByName: function(searchKey) {
                var deferred = $q.defer();
                var results = employees.filter(function(element) {
                    var fullName = element.firstName + " " + element.lastName;
                    return fullName.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
                });
                deferred.resolve(results);
                return deferred.promise;
            },

            findByManager: function (managerId) {
                var deferred = $q.defer(),
                    results = employees.filter(function (element) {
                        return parseInt(managerId) === element.managerId;
                    });
                deferred.resolve(results);
                return deferred.promise;
            }

        }

    });



