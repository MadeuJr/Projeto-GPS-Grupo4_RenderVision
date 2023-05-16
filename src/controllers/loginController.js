const Cliente = require('../repository/models/clientedb');
const bcrypt = require('bcrypt');
const saltRounds = 10;


exports.render = (req, res) => {
    res.render("login")
};

exports.login =  (req, res) => {

};

exports.register = async (req, res) => {
    const passCrypted = bcrypt.hashSync(req.body.pass, saltRounds)
    try {
        await Cliente.create({ id: req.body.cpfcnpj, nome: req.body.name,  senha: passCrypted, telefone: req.body.tel, email: req.body.email, cargo: "Cliente"})
        res.send("Cadastro feito com Sucesso")
    } catch (error) {
        res.send("Usuário com o mesmo CPF/CNPJ já cadastrado")
    }
    
    
};