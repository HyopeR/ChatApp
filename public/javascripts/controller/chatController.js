app.controller('chatController', ['$scope', ($scope) => {
    $scope.activeTab = 2; // 1 Chat tab, 2 Online user tab

    $scope.changeTab = tab => {
      $scope.activeTab = tab;
    };

    const socket = io.connect('http://localhost:3000');
}]);
