"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Livro_1 = require("./Livro");
function main() {
    var livro = new Livro_1.Livro("Nome", "Autor", 2023);
    console.log(livro.obterDetalhes());
}
main();
