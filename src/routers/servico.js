const express = require("express");
const router = express();
const Servico = require('../repository/models/servicodb');


router.get("/servico", async (req, res) => {
    res.render("servico")

});

router.get("/servico/:id", async (req, res) => {
    const servico = await Servico.findByPk(req.params.id);
    res.status(200).json(servico);
});

router.post("/servico", async (req, res) => {
    const {id,descricao,tipo,valor,tempoentrega,altura,largura,comprimento} = req.body;
    const servico = await Servico.create(id,descricao,tipo,valor,tempoentrega,altura,largura,comprimento,sequelize.fn('NOW'),sequelize.fn('NOW'));
    res.status(200).json(servico);
});

router.delete("/servico/:id", async (req, res) => {
    await Servico.destroy({
        where:{
            id: req.params.id
        }
    });
    res.status(200).json({message:'Excluido'});
});


module.exports = router;