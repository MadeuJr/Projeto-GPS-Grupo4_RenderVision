const express = require("express");
const Clientes = require("./src/routers/cliente.js");
const Servico = require("./src/routers/servico.js");
const Home = require("./src/routers/home.js");
const Login = require("./src/routers/login.js");
const database = require("./src/repository/models/sequelizeInit.js");
const app = express();
const port = 3001;
const path = require("path");

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(Clientes, Servico, Home, Login);

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get('*', function(req, res){
    res.status(404).send('Not found');
// TODO preparar pagina 404
  });


app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
    console.log(`Access: http://localhost:${port}`);
});
