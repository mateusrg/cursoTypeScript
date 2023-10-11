"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa_1 = require("./Pessoa");
var leitor = require("readline-sync");
function main() {
    var pessoa = metodos();
    if (leitor.question("Voce gostaria de alterar o cadastro? [S] Sim   [N] Nao ").toLowerCase() == "s") {
        editarCadastro(pessoa);
    }
}
function cadastro() {
    var nome = leitor.question("Qual o seu nome? ");
    var cpf = leitor.questionInt("Qual o seu CPF? ");
    var rg = leitor.questionInt("Qual o seu RG? ");
    var cor = leitor.question("Qual a sua cor? ");
    var idade = leitor.questionInt("Quantos anos voce tem? ");
    var pessoa = new Pessoa_1.Pessoa(nome, cpf, rg, cor, idade);
    return pessoa;
}
function metodos() {
    var pessoa = cadastro();
    pessoa.getNome();
    pessoa.getCPF();
    pessoa.getRG();
    pessoa.getCor();
    pessoa.getIdade();
    return pessoa;
}
function editarCadastro(pessoa) {
    pessoa.setNome();
    pessoa.setCPF();
    pessoa.setRG();
    pessoa.setCor();
    pessoa.setIdade();
}
main();
