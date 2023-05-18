const ServicoDB = require("./servicodb.js");

class Servico {
    constructor(body, session) {
        (this.body = body),
            (this.service = null),
            (this.errors = []),
            (this.user = session.user);
    }

    async createServico() {}

    async findAllServicoFromCliente() {
        const servicos = await ServicoDB.findAll({
            where: {idCliente: this.user.id}
        });
        return servicos;
    }

    findAllServicos() {}

    deleteServico() {}

    updateServico() {}

    validateServico(){
        
    }
}

module.exports = Servico;
