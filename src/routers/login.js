const express = require("express");
const router = express();
const loginController = require("../controllers/loginController.js");
const { middleware } = require("../middlewares/middlewareGlobal.js");

router.get("/login", middleware, loginController.render);

router.post("/login/login", middleware, loginController.login);
router.post("/login/register", middleware, loginController.register);

router.get("/logoff", middleware, loginController.logout);

module.exports = router;
