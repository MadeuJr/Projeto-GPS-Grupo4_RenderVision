const express = require("express");
const Clientes = require("./backend/routers/cliente.js");
const Servico = require("./backend/routers/servico.js");
const Home = require("./backend/routers/home.js");
const Login = require("./backend/routers/login.js");
const database = require("./backend/repository/models/sequelizeInit.js");
const app = express();
const port = 3001;
const path = require("path");

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(Clientes, Servico, Home, Login);

app.set("views", '/frontend');
app.set("view engine", "ejs");

app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
    console.log("Access: http://localhost:3000");
});
