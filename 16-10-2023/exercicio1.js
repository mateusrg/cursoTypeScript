"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
var numero = 0;
while (true) {
    numero = leitor.questionInt("Digite um numero de 1 a 3: ");
    switch (numero) {
        case 1:
            console.log("Primeira mensagem");
            break;
        case 2:
            console.log("Segunda mensagem");
            break;
        case 3:
            console.log("Terceira mensagem");
            break;
        default:
            console.log("Opcao invalida");
    }
}
