"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
function main() {
    var tempoOntem = leitor.questionFloat("Quantas horas voce passou no celular ontem? ");
    var tempoHoje = leitor.questionFloat("Quantas horas voce passou no celular hoje? ");
    console.log(timeSpent(tempoOntem, tempoHoje));
}
function timeSpent(ontem, hoje) {
    return hoje > ontem;
}
main();
