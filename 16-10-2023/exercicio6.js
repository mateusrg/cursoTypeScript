"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
var menu = true;
while (menu) {
    var transporte = leitor.question("Digite um meio de transporte (carro, onibus ou bicicleta) (S para sair): ").toLowerCase();
    switch (transporte) {
        case "carro":
            console.log("O carro anda, em media, a 90km/h");
            break;
        case "onibus":
            console.log("O onibus anda, em media, a 60km/h");
            break;
        case "bicicleta":
            console.log("A bicicleta anda, em media, a 15km/h");
            break;
        case "s":
            console.log("Tchau!");
            menu = false;
            break;
        default:
            console.log("Opcao invalida. Digite novamente.");
            break;
    }
}
