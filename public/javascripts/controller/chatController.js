app.controller('chatController', ['$scope', ($scope) => {

    $scope.onlineList = [];
    $scope.activeTab = 2; // 1 Chat tab, 2 Online user tab

    $scope.changeTab = tab => {
      $scope.activeTab = tab;
    };

    const socket = io.connect('http://localhost:3000');

    socket.on('onlineList', users => {
        $scope.onlineList = users;
        $scope.$apply();
    });
}]);
