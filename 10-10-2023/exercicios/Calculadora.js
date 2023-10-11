"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculadora = void 0;
var leitor = require("readline-sync");
var Calculadora = /** @class */ (function () {
    function Calculadora() {
    }
    Calculadora.prototype.setValores = function () {
        this.valor1 = leitor.questionInt("Digite um valor: ");
        this.valor2 = leitor.questionInt("Digite um valor: ");
    };
    Calculadora.prototype.getMais = function () {
        console.log("".concat(this.valor1, "+").concat(this.valor2, " = ").concat(this.valor1 + this.valor2));
    };
    Calculadora.prototype.getMenos = function () {
        console.log("".concat(this.valor1, "-").concat(this.valor2, " = ").concat(this.valor1 - this.valor2));
    };
    Calculadora.prototype.getVezes = function () {
        console.log("".concat(this.valor1, "\u00D7").concat(this.valor2, " = ").concat(this.valor1 * this.valor2));
    };
    Calculadora.prototype.getDividir = function () {
        console.log("".concat(this.valor1, "\u00F7").concat(this.valor2, " = ").concat(this.valor1 / this.valor2));
    };
    return Calculadora;
}());
exports.Calculadora = Calculadora;
