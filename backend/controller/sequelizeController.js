const Cliente = require('../repository/models/cliente.js');
const Servico = require('../repository/models/servico.js');
const database = require('../repository/models/db_sequelize.js');

(async () => {
    await database.sync();
    
})();

