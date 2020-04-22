app.controller('chatController', ['$scope', ($scope) => {

    /**
     * Angular variables.
     */
    $scope.onlineList = [];
    $scope.roomList = [];
    $scope.activeTab = 1; // 1 Chat tab, 2 Online user tab
    $scope.chatClicked = false;
    $scope.chatName = '';

    /**
     * Socket.io event handling.
     */
    const socket = io.connect('http://localhost:3000');
    socket.on('onlineList', users => {
        $scope.onlineList = users;
        $scope.$apply();
    });

    socket.on('roomList', rooms => {
        $scope.roomList = rooms;
        $scope.$apply();
    });

    $scope.newRoom = () => {
        //let randomName = Math.random().toString(36).substring(7);

        let roomName = window.prompt("Enter room name");
        if(roomName !== '' && roomName !== null) {
            socket.emit('newRoom', roomName);
        }
    };

    $scope.switchRoom = (room) => {
        $scope.chatName = room.name;
        $scope.chatClicked = true;
    };

    $scope.changeTab = tab => {
        $scope.activeTab = tab;
    };
}]);
