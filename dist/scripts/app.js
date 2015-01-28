var app = angular.module("livevox", ["ngRoute", "ngFx"]);

app.config([
    "$routeProvider",
    function($routeProvider) {
        return $routeProvider.when("/", {
            templateUrl: "pages/welcome.html",
            controller: "WelcomeCtrl"
        }).otherwise({
            redirectTo: "/"
        });
    }
]);


app.controller("WelcomeCtrl", ["$scope", function($scope) {
    $scope.totalHours = 0;
    $scope.initHour = 8;
    $scope.endHour = 18;
    $scope.displayable = {};
    $scope.showOption = "all";
    init();

    function init() {
        $scope.totalHours = ($scope.endHour - $scope.initHour) + 1;
        for (var i = $scope.initHour; i <= $scope.endHour; i++) {
            $scope.displayable[i] = true;
        }
    }

    $scope.getTotalHours = function() {
        return new Array($scope.totalHours);
    };

    $scope.isShown = function(requiredHour) {
        return $scope.displayable[requiredHour];
    };

    $scope.executeChange = function() {
        if ($scope.showOption === "two") {
            showEveryTwo();
        } else if ($scope.showOption === "all") {
            showAll();
        }
    };


    function showEveryTwo() {
        for (hour in $scope.displayable) {
            if (hour % 2 !== 0) {
                $scope.displayable[hour] = false;
            }
        }
    }

    function showAll() {
        for (hour in $scope.displayable) {
            $scope.displayable[hour] = true;
        }
    }
}]);
