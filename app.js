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

    socket.on('msgParaServidor', (data) => {
        //dispara o evento para o próprio usuário de envio de mensagem
        socket.emit(
            'msgParaCliente',
            {
                apelido: data.apelido,
                mensagem: data.mensagem
            }
        )
        //dispara o evento para todos conectados no socket de envio de mensagem
        socket.broadcast.emit(
            'msgParaCliente',
            {
                apelido: data.apelido,
                mensagem: data.mensagem
            }
        )

        if (parseInt(data.apelidoAtualizadoNosClientes) === 0) {
            //dispara o evento para o próprio usuário de lista de participantes
            socket.emit(
                'participantesParaCliente',
                {
                    apelido: data.apelido,
                }
            )
            //dispara o evento para todos conectados no socket de lista de participantes
            socket.broadcast.emit(
                'participantesParaCliente',
                {
                    apelido: data.apelido,
                }
            )
        }

    })
});
