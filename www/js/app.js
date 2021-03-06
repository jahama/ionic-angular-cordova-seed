// Ionic Starter App
var adapter = new LocalStorageAdapter();
adapter.initialize()

//console.log("inicializar el Adaptador");
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.services', 'starter.controllers'])


.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // 
    .state('home', {
      url: "/home",
      templateUrl: "templates/home.html"
    })

    .state('contacto', {
      url: "/contacto",
      templateUrl: "templates/contacto.html"
    })

    // info
     .state('info', {
      url: "/info",
      templateUrl: "templates/info.html"
    })

     // news
     .state('news', {
      url: "/news",
      templateUrl: "templates/news.html"
    })

    // setup an abstract state for the tabs directive
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })

    // Tab: Equipo Senior
    .state('tab.senior', {
      url: '/senior',
      views: {
        'senior-tab': {
          templateUrl: 'templates/equipo-senior.html',
          controller: 'EquipoSeniorCtrl'
        }
      }
    })
     // Tab: Detalle del jugador
    .state('tab.jugador-detail', {
      url: '/senior/:jugadorId',
      views: {
        'senior-tab': {
          templateUrl: 'templates/jugador-detail.html',
          controller: 'JugadorDetailCtrl'
        }
      }
    })

 // Tab: Equipo Juvenil
    .state('tab.juvenil', {
      url: '/juvenil',
      views: {
        'juvenil-tab': {
          templateUrl: 'templates/equipo-juvenil.html',
          controller: 'EquipoJuvenilCtrl'
        }
      }
    })

    // Tab: Detalle del jugador
    .state('tab.juvenil-detail', {
      url: '/juvenil/:jugadorId',
      views: {
        'juvenil-tab': {
          templateUrl: 'templates/jugador-detail.html',
          controller: 'JugadorDetailCtrl'
        }
      }
    })

    // Tab: Equipo Cadete
    .state('tab.cadete', {
      url: '/cadete',
      views: {
        'cadete-tab': {
          templateUrl: 'templates/equipo-cadete.html',
          controller: 'EquipoCadeteCtrl'
        }
      }
    })

    // Tab: Detalle del jugador
    .state('tab.cadete-detail', {
      url: '/cadete/:jugadorId',
      views: {
        'cadete-tab': {
          templateUrl: 'templates/jugador-detail.html',
          controller: 'JugadorDetailCtrl'
        }
      }
    })
    
    
  // if none of the above states are matched, use this as the fallback
  //$urlRouterProvider.otherwise('/tab/pets');
  $urlRouterProvider.otherwise('home');

});

