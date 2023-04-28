const Sequelize = require("sequelize");
const sequelize = new Sequelize("GPS", "root", "4519", {
    host: "localhost",
    dialect: "mysql",
    logging: console.log,
});

module.exports = sequelize;

//exporta as credenciais do banco