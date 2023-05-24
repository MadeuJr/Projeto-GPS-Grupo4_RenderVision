const session = require("express-session");
const Cliente = require("../repository/models/cliente");

exports.render = (req, res) => {
    if (req.session.user) {
        var user = req.session.user;
        return res.render("cliente", { user });
    } else {
        return res.status(404).render("404");
    }
};

exports.deleteUser = (req, res) => {
    deletation = new Cliente(req.body);
    deletation.deleteUser(req.session.user.id);
    req.session.regenerate(function(err) {
        req.flash("success", "Seu Perfil foi excluído");
        return res.redirect("/login");
      })
};

exports.updateUser = async (req, res) => {
    update = new Cliente(req.body);
    await update.updateUser();
    sessionUser = await update.findUser(req.session.user.id);
    req.session.user = sessionUser;
    req.flash("success", "Seus dados foram atualizados");
    req.session.save(function () {
        return res.redirect("back");
    });
};
