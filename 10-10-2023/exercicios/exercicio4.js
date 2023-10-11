"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
var Geometria_1 = require("./Geometria");
function main() {
    var forma;
    switch (leitor.questionInt("Voce precisa da area de que forma geometrica?\n[1] Circulo\n[2] Triangulo\n[3] Retangulo\n")) {
        case 1:
            forma = new Geometria_1.Circulo;
            break;
        case 2:
            forma = new Geometria_1.Triangulo;
            break;
        case 3:
            forma = new Geometria_1.Retangulo;
            break;
        default:
            console.log("Invalido\n");
            main();
    }
    forma.getArea();
    if (leitor.questionInt("Quer calcular a area de outa forma geometrica?\n[1] Sim\n[2] Nao\n") == 1) {
        main();
    }
}
main();
