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
            tempoentrega: this.body.tempo,
            idCliente: this.user.id,
        });
    }

    async findServico(idServico) {
        const servico = await ServicoDB.findOne({
            where: { id: idServico },
        });
        return servico;
    }

    async findAllServicoFromCliente() {
        const servicos = await ServicoDB.findAll({
            where: { idCliente: this.user.id },
        });
        return servicos;
    }

    async deleteServico(idDelete) {
        ServicoDB.destroy({
            where: {
                id: idDelete,
            },
        });
    }

    async updateServico(idUpdate) {
        this.service = await ServicoDB.update(
            {
                descricao: this.body.descricao,
                tipo: this.body.tipo,
                altura: this.body.altura,
                comprimento: this.body.comprimento,
                largura: this.body.largura,
                valor: this.body.valor,
                tempoentrega: this.body.tempo,
                idCliente: this.user.id,
            },
            {
                where: {
                    id: idUpdate,
                },
            }
        );
    }
}

module.exports = Servico;
