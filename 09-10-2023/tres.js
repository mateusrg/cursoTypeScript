"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
function main() {
    var adultos = leitor.questionInt("Quantos adultos tem na festa? ");
    var criancas = leitor.questionInt("Quantas crianças tem na festa? ");
    console.log("The total party size is: ".concat(soma(adultos, criancas)));
}
function soma(adultos, criancas) {
    return adultos + criancas;
}
main();
