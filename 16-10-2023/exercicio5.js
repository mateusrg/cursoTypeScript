"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
var menu = true;
while (menu) {
    var input = leitor.questionInt("Digite uma nota (200 para sair): ");
    var nota = "";
    if (input < 60) {
        nota = "F";
    }
    else if (input < 70) {
        nota = "D";
    }
    else if (input < 80) {
        nota = "C";
    }
    else if (input < 90) {
        nota = "B";
    }
    else if (input <= 100) {
        nota = "A";
    }
    else if (input == 200) {
        nota = "S";
    }
    switch (nota) {
        case "A":
            console.log("Parabéns! Você tirou A! 🥳🥳🥳");
            break;
        case "B":
            console.log("Muito bem! Você tirou B! Quase lá! 😁😁😁");
            break;
        case "C":
            console.log("Ok. Você tirou C, na média.");
            break;
        case "D":
            console.log("Puts! Você tirou D. Há muito o que melhorar.");
            break;
        case "F":
            console.log("Meu Deus! Você tirou F. Boa sorte. Vai precisar.");
            break;
        case "S":
            console.log("Tchau!");
            menu = false;
            break;
        default:
            console.log("Esta fora do intervalo. Digite novamente.");
    }
}
