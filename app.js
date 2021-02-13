// importando as configurações do servidor
const app = require('./config/server');

// parametrizando a porta de escuta
const server = app.listen(3000, ()=> {
    console.log('Servidor online');
})

const socketio = require('socket.io');
socketio().listen(server);