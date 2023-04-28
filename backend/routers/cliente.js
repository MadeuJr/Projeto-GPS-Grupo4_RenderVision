const express = require("express");
const router = express.Router();
const Cliente = require('../repository/DBModels/clientedb.js');


router.get("/cliente", async (req, res) => {
    const clientes = await Cliente.findAll();
    res.status(200).json(clientes);

});

router.get("/cliente/:id", async (req, res) => {
    const clientes = await Cliente.findByPk(req.params.id);
    res.status(200).json(clientes);
});

router.post("/cliente", async (req, res) => {
    const {id,nome, email, telefone} = req.body;
    const clientes = await Cliente.create(id,nome,email,telefone,sequelize.fn('NOW'),sequelize.fn('NOW'));
    res.status(200).json(clientes);
});

router.delete("/cliente/:id", async (req, res) => {
    await Cliente.destroy({
        where:{
            id: req.params.id
        }
    });
    res.status(200).json({message:'Excluido'});
});


module.exports = router;