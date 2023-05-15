const Cliente = require('./clientedb.js');
const Servico = require('./servicodb.js');
const database = require('./sequelize.js');



(async () => {
    await database.sync();
    
})();

//inicializa o banco