const express = require("express");
const router = express();
const loginController = require("../controllers/loginController.js");

router.get("/login",  loginController.render);

router.post("/login/login", loginController.login);
router.post("/login/register", loginController.register)


module.exports = router;
