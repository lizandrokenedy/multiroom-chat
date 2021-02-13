const { application } = require("express");

module.exports.iniciarChat = (application, req, res) => {
    res.render('chat');
}