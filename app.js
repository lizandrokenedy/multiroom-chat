// importando as configurações do servidor
const app = require('./config/server');

// parametrizando a porta de escuta
const server = app.listen(3000, () => {
    console.log('Servidor online');
})

const io = require('socket.io')();
io.listen(server);

app.set('io', io);
// cria conexão websocket

// o método on(), ouve os pedidos de execução
// o método emit(), envia um pedido de execução
io.on('connection', (socket) => {
    console.log('usuário connectou!')
    socket.on('disconnect', () => {
        console.log('usuário desconectou')
    })
});
