const express = require("express");
const Clientes = require("./backend/routers/cliente.js");
const Servico = require('./backend/routers/servico.js');
const Home = require('./backend/routers/home.js');
const database = require("./backend/repository/models/sequelizeInit.js");
const app = express();
const port = 3000;

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(Clientes, Servico, Home)

app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
    console.log("Access: http://localhost:3000");
});
