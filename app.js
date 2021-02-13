// importando as configurações do servidor
const app = require('./config/server');

// parametrizando a porta de escuta
app.listen(3000, ()=> {
    console.log('Servidor online');
})

