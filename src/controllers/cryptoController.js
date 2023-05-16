const bcrypt = require('bcrypt');
const saltRounds = 10;
const Cliente = require('../repository/models/clientedb.js');

exports.crypt =  (req, res) => {
    req.body.pass = bcrypt.hash(req.body.pass, saltRounds)

};

exports.decrypt = async (req, res) => {

    try {
        return await bcrypt.compare(req.body.password, Cliente.findOne(
            "senha",
            {where: {
                id: req.body.login
            }}
        ))    
    } catch (error) {
        
    }
};