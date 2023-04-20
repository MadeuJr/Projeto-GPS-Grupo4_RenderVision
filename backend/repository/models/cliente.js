const database = require('./db_sequelize.js');
const Sequelize = require('sequelize');

const Cliente = database.define("cliente",{
    id:{
        type: Sequelize.STRING(14),
        autoIncrement: false,
        primaryKey: true
    },
    nome:{
        type: Sequelize.STRING,
        autoIncrement:false,
        primaryKey: false,
        allowNull: false
    },
    email:{
        type: Sequelize.STRING,
        autoIncrement: false,
        allowNull: false,
        primaryKey: false
    },
    telefone:{
        type: Sequelize.STRING(11),
        autoIncrement: false,
        allowNull: false,
        primaryKey: false
    }
})


module.exports = Cliente;