const express = require("express");
const Clientes = require("./src/routers/cliente.js");
const Servico = require("./src/routers/servico.js");
const Home = require("./src/routers/home.js");
const Login = require("./src/routers/login.js");
const database = require("./src/repository/models/sequelizeInit.js");
const app = express();
const port = 3001;
const flash = require("connect-flash");
const session = require("express-session");

const { middleware } = require("./src/middlewares/middlewareGlobal.js");

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.use(express.static("public"));

const sessionOptions = session({
    secret: "akasdfj0út23453456+54qt23qv  qwf qwer qwer qewr asdasdasda a6()",
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 1 * 7,
        httpOnly: true,
    },
});
app.use(sessionOptions);
app.use(flash());

app.use(Clientes, Servico, Home, Login);
app.use(middleware);

app.get("*", function (req, res) {
     return res.status(404).send("Not found");
    // TODO preparar pagina 404
});

app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
    console.log(`Access: http://localhost:${port}`);
});
