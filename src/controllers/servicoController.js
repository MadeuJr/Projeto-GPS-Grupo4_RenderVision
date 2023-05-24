const Servicos = require("../repository/models/servico.js");

exports.render = async (req, res) => {
    if (req.session.user) {
        const servicos = new Servicos(req.body, req.session);
        arrayServicos = [];
        arrayServicos = await servicos.findAllServicoFromCliente();
        res.locals.servicos = arrayServicos;
        res.render("servico", { arrayServicos });
    } else {
        req.session.save(function () {
            return res.redirect("/login");
        });
    }
};

exports.renderCreateServico = (req, res) => {
    if (req.session.user) {
        return res.render("cadastrarServico");
    } else {
        req.session.save(function () {
            return res.redirect("/login");
        });
    }
};

exports.createServico = (req, res) => {
    const servico = new Servicos(req.body, req.session);
    if (servico.errors.length > 0) {
        req.flash("errors", servico.errors);
        req.session.save(function () {
            return res.redirect("back");
        });
        return;
    }
    servico.createServico();
    req.flash("success", "Sua ordem de serviço foi criada com sucesso.");
    req.session.save(function () {
        return res.redirect("back");
    });
};
