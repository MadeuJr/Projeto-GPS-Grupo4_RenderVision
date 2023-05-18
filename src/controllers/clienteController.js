
exports.render = (req, res) => {
    if (req.session.user) {
        return res.render("cliente");
    } else {
        return res.status(401).render("401");
    }
};


exports.loadInfo = (req, res) => {

};

