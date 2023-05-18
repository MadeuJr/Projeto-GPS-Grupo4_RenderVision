const Authenticator = require("../repository/models/authenticator");
const Servicos = require("../repository/models/servico.js");

exports.render = async (req, res) => {
    if (req.session.user) {
        console.log(req.session.user);
        const servicos = new Servicos(req.body, req.session);
        arrayServicos = [];
        arrayServicos = await servicos.findAllServicoFromCliente();
        res.locals.servicos = arrayServicos;
        return res.render("servico", { arrayServicos });
    } else {
        return res.render("login");
    }
};

exports.login = async (req, res) => {
    try {
        const login = new Authenticator(req.body);
        await login.login();
        if (login.errors.length > 0) {
            req.flash("errors", login.errors);
            req.session.save(function () {
                return res.redirect("back");
            });
        } else {
            req.flash("success", "Você entrou no sistema.");
            req.session.user = login.user;
            req.session.save(function () {
                return res.redirect("back");
            });
        }
    } catch (error) {
        console.log(error);
        return res.render("404");
    }
};

exports.register = async (req, res) => {
    try {
        const registration = new Authenticator(req.body);
        await registration.register();

        if (registration.errors.length > 0) {
            req.flash("errors", registration.errors);
            req.session.save(function () {
                return res.redirect("back");
            });
            return;
        }

        req.flash("success", "Seu usuário foi criado com sucesso.");
        req.session.save(function () {
            return res.redirect("back");
        });
    } catch (e) {
        console.log(e);
        return res.render("404");
    }
};

exports.logout = function (req, res) {
    req.session.save(function () {
        req.session.destroy();
        return res.redirect("/login");
    });
};
