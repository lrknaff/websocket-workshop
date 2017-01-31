const socket = io();

const connectionCount = document.getElementById('connection-count');

socket.on('usersConnected', function(count) {
  connectionCount.innerText = 'Connected Users: ' + count;
})
