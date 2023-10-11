"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aluno = void 0;
var leitor = require("readline-sync");
var Aluno = /** @class */ (function () {
    function Aluno(nome, notas) {
        if (notas === void 0) { notas = []; }
        this.notas = [];
        this.nome = nome;
        this.notas = notas;
    }
    Aluno.prototype.setNotas = function () {
        this.notas.push(leitor.questionInt("Digite uma nota para ser adicionada: "));
    };
    Aluno.prototype.getMedia = function () {
        var soma = 0;
        for (var i = 0; i < this.notas.length; i++) {
            soma += this.notas[i];
        }
        console.log(soma / this.notas.length);
    };
    return Aluno;
}());
exports.Aluno = Aluno;
