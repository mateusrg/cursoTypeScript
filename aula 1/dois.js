"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
function main() {
    var nome = leitor.question("Insira o nome do item: ");
    var valor = leitor.questionFloat("Insira o valor do item: ");
    var desconto = leitor.questionInt("Insira o desconto (em %): ");
    console.log("Nome do item: ".concat(nome));
    console.log("Pre\u00E7o original: ".concat(valor));
    console.log("Desconto: ".concat(desconto, "%"));
    console.log("Pre\u00E7o com desconto: R$".concat(valor * (1 - desconto / 100)));
}
main();
