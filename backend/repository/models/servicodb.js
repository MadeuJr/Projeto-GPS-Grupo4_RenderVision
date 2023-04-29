const Cliente = require('./clientedb.js');
const Sequelize = require('sequelize');
const database = require('./sequelize.js');

const Servico = database.define("servico", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descricao: {
        type: Sequelize.STRING,
        primaryKey: false,
        allowNull: false
    },
    tipo: {
        type: Sequelize.STRING,
        primaryKey: false,
        allowNull: false
    },
    valor: {
        type: Sequelize.DECIMAL(12,2),
        primaryKey: false,
        allowNull: false
    },
    tempoentrega: {
        type: Sequelize.DECIMAL(15),
        primaryKey: false,
        allowNull: false
    },
    altura: {
        type: Sequelize.DECIMAL(12,3),
        primaryKey: false,
        allowNull: false
    },
    largura: {
        type: Sequelize.DECIMAL(12,3),
        primaryKey: false,
        allowNull: false
    },
    comprimento: {
        type: Sequelize.DECIMAL(12,3),
        primaryKey: false,
        allowNull: false
    }
})

Servico.belongsTo(Cliente, {
    foreignKey: "idCliente",
    constraint: true
})

Cliente.hasMany(Servico,{
    foreignKey: "idCliente"
});

module.exports = Servico;