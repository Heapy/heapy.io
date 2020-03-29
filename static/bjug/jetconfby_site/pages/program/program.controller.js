var programController = function($scope, $http, $route) {
    $http.get('pages/program/program.json').success(function(data) {
        $scope.program = data;
    });

    $scope.initProgram = function() {
        var dayValue = $route.current.params.day;

        if(dayValue === undefined || (dayValue != day_1.value && dayValue != day_2.value)) {
            dayValue = day_1.value;
            $route.updateParams({ day: dayValue });
        }

        $scope.day = days[dayValue - 1];
    };
};

var day_1 = { value: 1, meaning: '18th November', goText: "GO TO 1st DAY" };
var day_2 = { value: 2, meaning: '19th November', goText: "GO TO 2nd DAY" };

day_1.next = day_2;
day_2.next = day_1;

var days = [day_1, day_2];
