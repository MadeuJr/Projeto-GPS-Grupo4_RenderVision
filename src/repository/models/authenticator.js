const bcrypt = require("bcrypt");
const validator = require("validator");
const Cliente = require("./clientedb.js");
const validatorlogin = require("cpf-cnpj-validator");

class Authenticator {
    constructor(body) {
        (this.body = body), (this.errors = []), (this.user = null);
    }

    async login() {
        this.validateData();

        console.log(this.errors);

        if (this.errors.length > 0) return;

        this.user = await Cliente.findOne({ where: { id: this.body.login } });

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

        this.user = await Cliente.create({
            id: this.body.login,
            nome: this.body.name,
            senha: this.body.pass,
            telefone: this.body.tel,
            email: this.body.email
        });
    }

    async userExists() {
        this.user = await Cliente.findOne({ where: { id: this.body.login } });
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
}

module.exports = Authenticator;
