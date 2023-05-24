const bcrypt = require("bcrypt");
const validator = require("validator");
const ClienteDB = require("./clientedb.js");
const validatorlogin = require("cpf-cnpj-validator");
const { where } = require("sequelize");
const { set } = require("../../routers/cliente.js");

class Cliente {
    constructor(body) {
        this.user = null;
        this.body = body;
        this.errors = [];
    }

    async login() {
        this.validateData();

        console.log(this.errors);

        if (this.errors.length > 0) return;

        this.user = await ClienteDB.findOne({ where: { id: this.body.login } });

        if (this.user === null) {
            this.errors.push("Usúario não encontrado ou senha inválida");
            return;
        }

        if (bcrypt.compareSync(this.body.pass, this.user.senha) === false) {
            this.errors.push("Usúario não encontrado ou senha inválida");
            this.user = null;
            return;
        }
    }

    async register() {
        this.validateData();

        if (this.errors.length > 0) return;

        await this.userExists();

        if (this.errors.length > 0) return;

        const salt = bcrypt.genSaltSync();
        this.body.pass = bcrypt.hashSync(this.body.pass, salt);

        this.user = await ClienteDB.create({
            id: this.body.login,
            nome: this.body.name,
            senha: this.body.pass,
            telefone: this.body.tel,
            email: this.body.email,
        });
    }

    async userExists() {
        this.user = await ClienteDB.findOne({ where: { id: this.body.login } });
        if (this.user) this.errors.push("Usuário já existe");
    }

    validateData() {
        console.log(validatorlogin.cnpj.isValid(this.body.login), "CNPJ");
        console.log(validatorlogin.cpf.isValid(this.body.login), "CPF");
        if (!validatorlogin.cpf.isValid(this.body.login)) {
            if (!validatorlogin.cnpj.isValid(this.body.login)) {
                this.errors.push("CPF ou CNPJ inválido");
            }
        }

        if (this.body.email !== undefined) {
            if (!validator.isEmail(this.body.email))
                this.errors.push("E-mail inválido");
        }

        // A senha precisa ter entre 3 e 50
        if (this.body.pass.length < 3 || this.body.pass.length > 50) {
            this.errors.push("A senha precisa ter entre 3 e 50 caracteres.");
        }
    }
    async deleteUser(idDelete) {
        ClienteDB.destroy({
            where: {
                id: idDelete,
            },
        });
    }

    async updateUser() {
        
        await ClienteDB.update(
            { nome: this.body.nome, telefone: this.body.telefone, email: this.body.email },
            {
                where: {
                    id: this.body.CPFCNPJ,
                },
            }
        );
    }

    async findUser(idUser){
        const userFound = await ClienteDB.findOne({ where: { id: idUser} })
        return userFound;
    }
}

module.exports = Cliente;
