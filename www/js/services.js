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

    });

