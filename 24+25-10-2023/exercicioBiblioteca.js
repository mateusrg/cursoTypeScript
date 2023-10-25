"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
var Biblioteca_1 = require("./Biblioteca");
var biblioteca = new Biblioteca_1.SistemaBiblioteca;
var menu = true;
while (menu) {
    console.log("O que voce quer fazer?");
    console.log("[1] Cadastrar um livro");
    console.log("[2] Cadastrar um usuario");
    console.log("[3] Emprestar um livro");
    console.log("[4] Devolver um livro");
    console.log("[5] Consultar livros disponiveis");
    console.log("[6] Sair");
    var selecao = leitor.questionInt();
    switch (selecao) {
        case 1:
            biblioteca.cadastrarLivro();
            break;
        case 2:
            biblioteca.cadastrarUsuario();
            break;
        case 3:
            biblioteca.emprestarLivro();
            break;
        case 4:
            biblioteca.devolverLivro();
            break;
        case 5:
            biblioteca.consultarLivrosDisponiveis();
            break;
        case 6:
            console.log("Tchau!");
            menu = false;
            break;
        default:
            console.log("\nNao é uma opcao.\n");
            break;
    }
}
