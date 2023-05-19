const express = require("express");
const router = express();
const servicosController = require("../controllers/servicoController.js");
const { middleware } = require("../middlewares/middlewareGlobal.js");


router.get("/servicos", middleware, servicosController.render)

router.get("/servicos/cadastrar", middleware, servicosController.renderCreateServico)
router.post("/servicos/cadastrar", middleware, servicosController.createServico)


module.exports = router;