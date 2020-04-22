app.controller('chatController', ['$scope', 'chatFactory', ($scope, chatFactory) => {

    /**
     * Angular variables.
     */
    $scope.onlineList = [];
    $scope.roomList = [];
    $scope.activeTab = 1; // 1 Chat tab, 2 Online user tab
    $scope.chatClicked = false;
    $scope.chatName = '';
    $scope.roomId = '';
    $scope.message = '';
    $scope.messages = [];

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
        $scope.roomId = room.id;
        $scope.chatClicked = true;

        chatFactory.getMessages(room.id).then(data => {
            $scope.messages[room.id] = data;
            console.log($scope.messages);
        })
    };

    $scope.newMessage = () => {
        socket.emit('newMessage', {
           message: $scope.message,
           roomId: $scope.roomId
        });
        $scope.message = '';
    };

    $scope.changeTab = tab => {
        $scope.activeTab = tab;
    };
}]);
