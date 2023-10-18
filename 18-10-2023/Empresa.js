"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionarios = exports.EmpresaDesenvolvimento = void 0;
var leitor = require("readline-sync");
var EmpresaDesenvolvimento = /** @class */ (function () {
    function EmpresaDesenvolvimento(nome, endereco, funcionarios) {
        if (funcionarios === void 0) { funcionarios = []; }
        this.nome = nome;
        this.endereco = endereco;
        this.funcionarios = funcionarios;
    }
    EmpresaDesenvolvimento.prototype.adicionarFuncionarios = function () {
        var nome = this.capitalize(leitor.question("Qual o nome do funcionario? "));
        var idade = leitor.questionInt("Quantos anos ele tem? ");
        var cargo = leitor.question("Que cargo ele ocupa na empresa? ");
        var salario = leitor.questionInt("Quanto o funcionario ganha (em R$)? ");
        var funcionario = new Funcionarios(nome, idade, cargo, salario);
        this.funcionarios.push(funcionario);
    };
    EmpresaDesenvolvimento.prototype.removerFuncionarios = function () {
        if (this.funcionarios.length == 0) {
            console.log("Nao ha nenhum funcionario para ser removido.");
            return;
        }
        for (var i = 0; i < this.funcionarios.length; i++) {
            console.log("[".concat(i + 1, "] ").concat(this.funcionarios[i].nome));
        }
        var indiceFuncionario = -1;
        var menuRemover = true;
        while (menuRemover) {
            indiceFuncionario = leitor.questionInt("Que funcionario voce quer remover? ") - 1;
            if (indiceFuncionario >= 0 && indiceFuncionario < this.funcionarios.length) {
                menuRemover = false;
            }
        }
        this.funcionarios.splice(indiceFuncionario, 1);
    };
    EmpresaDesenvolvimento.prototype.getFuncionarios = function () {
        if (this.funcionarios.length == 0) {
            console.log("A empresa nao tem nenhum funcionario.");
            return;
        }
        for (var i = 0; i < this.funcionarios.length; i++) {
            var funcionario = this.funcionarios[i];
            console.log("".concat(funcionario.nome, " \u00E9 um(a) ").concat(funcionario.cargo, " de ").concat(funcionario.idade, " anos que ganha ").concat(funcionario.salario, " reais."));
        }
    };
    EmpresaDesenvolvimento.prototype.getValues = function () {
        console.log("A empresa se chama ".concat(this.nome, " e fica em ").concat(this.endereco, "."));
    };
    EmpresaDesenvolvimento.prototype.capitalize = function (palavra) {
        return palavra.charAt(0).toUpperCase() + palavra.slice(1);
    };
    return EmpresaDesenvolvimento;
}());
exports.EmpresaDesenvolvimento = EmpresaDesenvolvimento;
var Funcionarios = /** @class */ (function () {
    function Funcionarios(nome, idade, cargo, salario) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
        this.salario = salario;
    }
    return Funcionarios;
}());
exports.Funcionarios = Funcionarios;
