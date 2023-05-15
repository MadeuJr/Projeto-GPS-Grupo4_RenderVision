const express = require("express");
const router = express();
const Servico = require('../repository/models/servicodb');


router.get("/servico", async (req, res) => {
    res.render("servico")
    //   TODO colocar function de procurar servico
});

router.get("/servico/:id", async (req, res) => {
   //   TODO colocar function de procurar servico especifico
});

router.post("/servico", async (req, res) => {
  //   TODO colocar function de cadastrar servico
});

router.delete("/servico/:id", async (req, res) => {
   //   TODO colocar function de deletar servico
});


module.exports = router;