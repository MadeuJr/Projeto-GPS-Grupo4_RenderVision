const ServicoDB = require("./servicodb.js");

class Servico {
    constructor(body, session) {
        (this.body = body),
            (this.service = null),
            (this.errors = []),
            (this.user = session.user);
    }

    async createServico() {
        console.log(this.body);
        this.service = await ServicoDB.create({
            descricao: this.body.descricao,
            tipo: this.body.tipo,
            altura: this.body.altura,
            comprimento: this.body.comprimento,
            largura: this.body.largura,
            valor: this.body.valor,
            idCliente: this.user.id
        })
    }

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
