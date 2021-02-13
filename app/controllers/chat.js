// const { application } = require("express");
// const { emit } = require("../../config/server");

module.exports.iniciarChat = (application, req, res) => {
    const dadosForm = req.body;
    req.assert('apelido', 'O campo apelido é obrigatório').notEmpty()
    req.assert('apelido', 'O campo apelido deve conter entre 3 e 15 caracteres').len(3, 15)

    const erros = req.validationErrors();

    if(erros){
        res.render('index', {validacao: erros});
        return
    }

    application.get('io').emit('msgParaCliente', {apelido: dadosForm.apelido, mesagem: ' acabou de entrar no chat'});

    res.render('chat');
}