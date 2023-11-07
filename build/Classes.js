"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
class Funcionario {
    constructor(nome, idade, documento) {
        this.nome = nome;
        this.idade = idade;
        this.documento = documento;
    }
    falar() {
        return `Eu sou o ${this.nome}`;
    }
    cantar() {
        return `Lala estou cantando`;
    }
    cumprimentar(nomeOutro) {
        return `Olá ${nomeOutro}, eu sou ${this.nome}`;
    }
}
exports.Funcionario = Funcionario;
