"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
function main() {
    var primeiroNumero = leitor.questionInt("Digite o primeiro numero: ");
    var segundoNumero = leitor.questionInt("Digite o segundo numero: ");
    var terceiroNumero = leitor.questionInt("Digite o terceiro numero: ");
    console.log("Soma dos numeros: ".concat(soma(primeiroNumero, segundoNumero, terceiroNumero)));
    console.log("Subtra\u00E7\u00E3o dos numeros: ".concat(subtracao(primeiroNumero, segundoNumero, terceiroNumero)));
    console.log("Multiplicacao dos numeros: ".concat(multiplicacao(primeiroNumero, segundoNumero, terceiroNumero)));
    console.log("Divisao dos numeros: ".concat(divisao(primeiroNumero, segundoNumero, terceiroNumero)));
}
function soma(num1, num2, num3) {
    return num1 + num2 + num3;
}
function subtracao(num1, num2, num3) {
    return num1 - num2 - num3;
}
function multiplicacao(num1, num2, num3) {
    return num1 * num2 * num3;
}
function divisao(num1, num2, num3) {
    return num1 / num2 / num3;
}
main();
