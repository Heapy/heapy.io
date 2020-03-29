var routeMenu = function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/main/main.html'
        })
/*        .when('/program', {
            templateUrl: 'pages/program/program.html'
        })
        .when('/speakers', {
            templateUrl: 'pages/speakers/speakers.html'
        })
        .when('/tickets', {
            templateUrl: 'pages/tickets/tickets.html'
        })*/
        .when('/history', {
            templateUrl: 'pages/history/history.html'
        })
        .otherwise({
            redirectTo: '/'
        });
};