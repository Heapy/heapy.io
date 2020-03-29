var historyController = function($scope, $http) {
    $http.get('pages/history/history.json').success(function(data) {
        $scope.history = data;
    });
};

var historySpeakerController = function($scope, $http, $location) {
    $http.get('pages/history/history.speaker.json').success(function(data) {
        var key = $location.path().substring(1);
        $scope.speaker = data[key];
    });
};