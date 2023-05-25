const express = require("express");
const router = express();
const servicosController = require("../controllers/servicoController.js");
const { middleware } = require("../middlewares/middlewareGlobal.js");


router.get("/servicos", middleware, servicosController.render)

router.get("/servicos/cadastrar", middleware, servicosController.renderCreateServico)
router.post("/servicos/cadastrar", middleware, servicosController.createServico)

router.get("/servicos/detalhes/:idServico", middleware, servicosController.renderDetalheServico)
router.post("/servicos/detalhes/:idServico", middleware, servicosController.updateServico)

router.get("/servicos/deletar/:idServico", middleware, servicosController.renderDeleteServico)
router.post("/servicos/deletar/:idServico", middleware, servicosController.DeleteServico)


module.exports = router;