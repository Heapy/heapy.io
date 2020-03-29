var speakersController = function($scope, $http) {
    $http.get('pages/speakers/speakers.json').success(function(data) {
        $scope.speakers = data;
    });
};

var speakerSpecialController = function($scope, $http, $location) {
    $http.get('pages/speakers/speakers.special.json').success(function(data) {
        var key = $location.path().substring(1);
        $scope.specialSpeaker = data[key];
    });
};