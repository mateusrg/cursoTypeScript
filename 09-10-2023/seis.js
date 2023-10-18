"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
function main() {
    var nomeDoUsuario = leitor.question("Qual o seu nome? ");
    var sistemaOperacional = leitor.question("Qual o seu sistema operacional? ");
    displayAlertMessage(sistemaOperacional, nomeDoUsuario);
}
function displayAlertMessage(sistema, nome) {
    console.log("There's a new sign-in request on ".concat(sistema, " for your Google Account ").concat(nome, "."));
}
main();
