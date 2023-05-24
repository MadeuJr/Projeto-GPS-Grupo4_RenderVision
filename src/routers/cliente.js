const express = require("express");
const router = express();
const clienteController = require ('../controllers/clienteController')
const { middleware } = require("../middlewares/middlewareGlobal.js");

router.get("/cliente", middleware, clienteController.render)
router.post("/cliente", middleware, clienteController.updateUser)



router.get("/cliente/deletar", middleware, clienteController.deleteUser, (req, res) => {
    
});


module.exports = router;