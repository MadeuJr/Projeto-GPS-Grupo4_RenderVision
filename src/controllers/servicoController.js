const Servicos = require("../repository/models/servico.js");

exports.render = async (req, res) => {
    if (req.session.user) {
        const servicos = new Servicos(req.body, req.session);
        arrayServicos = [];
        arrayServicos = await servicos.findAllServicoFromCliente();
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

exports.renderDetalheServico = async (req, res) => {
    if (req.session.user) {
        const servico = new Servicos(req.body, req.session);
        serviceToUpdate = null;
        try {
            serviceToUpdate = await servico.findServico(req.params.idServico);
        } catch (error) {
            serviceToUpdate = null;
        }
        return res.render("servicoDetails", {serviceToUpdate});
    } else {
        req.session.save(function () {
            return res.redirect("/login");
        });
    }
};

exports.renderDeleteServico = async (req, res) => {
    if (req.session.user) {
        const servico = new Servicos(req.body, req.session);
        serviceToDelete = null;
        try {
            serviceToDelete = await servico.findServico(req.params.idServico);
        } catch (error) {
            serviceToDelete = null;
        }
        return res.render("deleteServico", {serviceToDelete});
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
        return res.redirect("/servicos");
    });
};

exports.DeleteServico = async (req, res) => {
    if (req.session.user) {
        const servico = new Servicos(req.body, req.session);
        serviceToDelete = null;
        try {
            serviceToDelete = await servico.findServico(req.params.idServico);
        } catch (error) {
            serviceToDelete = null;
        }
        if (serviceToDelete !== null) {
            await servico.deleteServico(req.params.idServico)
        }
        req.flash("success", "Sua ordem de serviço foi excluída com sucesso.");
        req.session.save(function () {
        return res.redirect("/servicos");
    })
    } else {
        req.session.save(function () {
            return res.redirect("/login");
        });
    }
};

exports.updateServico = (req, res) => {
    const servico = new Servicos(req.body, req.session);
    servico.updateServico(req.params.idServico);
    req.flash("success", "Sua ordem de serviço foi atualizada com sucesso.");
    req.session.save(function () {
        return res.redirect("/servicos");
    });
};
