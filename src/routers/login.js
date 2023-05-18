const express = require("express");
const router = express();
const loginController = require("../controllers/loginController.js");
const { middleware } = require("../middlewares/middlewareGlobal.js");
const servicoController = require('../controllers/servicoController.js');

router.get("/login", middleware, loginController.render);

router.post("/login/login", middleware, loginController.login);
router.post("/login/register", middleware, loginController.register);

router.get("/logoff", middleware, loginController.logout);

router.get("/cadastrar", middleware, servicoController.render);

module.exports = router;
