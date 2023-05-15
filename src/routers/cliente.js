const express = require("express");
const router = express();
const Cliente = require('../repository/models/clientedb.js');


router.get("/cliente", async (req, res) => {
    res.render("cliente")
//   TODO colocar function de procurar user
});

router.get("/cliente/:id?", async (req, res) => {
//   TODO colocar function de procurar user especifico
});

router.post("/cliente", async (req, res) => {
//   TODO colocar function de cadastrar user
});

router.delete("/cliente/:id?", async (req, res) => {
//   TODO colocar function de deletar user
});


module.exports = router;