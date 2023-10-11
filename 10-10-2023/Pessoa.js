"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
var leitor = require("readline-sync");
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, cpf, rg, cor, idade) {
        this.nome = nome;
        this.cpf = cpf;
        this.rg = rg;
        this.cor = cor;
        this.idade = idade;
    }
    Pessoa.prototype.getNome = function () {
        console.log("Meu nome \u00E9 ".concat(this.nome));
    };
    Pessoa.prototype.getCPF = function () {
        console.log("Meu CPF \u00E9 ".concat(this.cpf));
    };
    Pessoa.prototype.getRG = function () {
        console.log("Meu RG \u00E9 ".concat(this.rg));
    };
    Pessoa.prototype.getCor = function () {
        console.log("Eu sou ".concat(this.cor));
    };
    Pessoa.prototype.getIdade = function () {
        console.log("Eu tenho ".concat(this.idade, " anos"));
    };
    Pessoa.prototype.setNome = function () {
        var nomeDois = leitor.question("Insira o novo nome:");
        this.nome = nomeDois;
    };
    Pessoa.prototype.setCPF = function () {
        var CPFDois = leitor.questionInt("Insira o novo CPF:");
        this.cpf = CPFDois;
    };
    Pessoa.prototype.setRG = function () {
        var RGDois = leitor.questionInt("Insira o novo RG:");
        this.rg = RGDois;
    };
    Pessoa.prototype.setCor = function () {
        var corDois = leitor.question("Insira a nova cor:");
        this.cor = corDois;
    };
    Pessoa.prototype.setIdade = function () {
        var idadeDois = leitor.questionInt("Insira a nova idade:");
        this.idade = idadeDois;
    };
    return Pessoa;
}());
exports.Pessoa = Pessoa;
