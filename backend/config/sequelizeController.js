const Cliente = require('../repository/DBModels/clientedb.js');
const Servico = require('../repository/DBModels/servicodb.js');
const database = require('./sequelizeModel.js');

const express = require("express");



(async () => {
    await database.sync();
    
})();

//inicializa o banco
