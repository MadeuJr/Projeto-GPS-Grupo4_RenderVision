const Servicos = require('../repository/models/servico.js');

exports.render = (req, res) => {
    res.render("cadastrarServico");
};


exports.createServico = () => {
    const servico = new Servicos(req.body)
    if (servico.errors.length > 0) {
        req.flash("errors", servico.errors);
        req.session.save(function () {
            return res.redirect("back");
        });
        return;
    }
    req.flash("success", "Sua ordem de serviço foi criada com sucesso.");
    req.session.save(function () {
        return res.redirect("back");
    });
};