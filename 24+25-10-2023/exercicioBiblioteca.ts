import * as leitor from "readline-sync"
import { SistemaBiblioteca } from "./Biblioteca";

let biblioteca: SistemaBiblioteca = new SistemaBiblioteca

let menu: Boolean = true
while (menu) {
    console.log("O que voce quer fazer?");
    console.log("[1] Cadastrar um livro");
    console.log("[2] Cadastrar um usuario");
    console.log("[3] Emprestar um livro");
    console.log("[4] Devolver um livro");
    console.log("[5] Consultar livros disponiveis");
    console.log("[6] Sair");
    let selecao: number = leitor.questionInt()
    switch (selecao) {
        case 1:
            biblioteca.cadastrarLivro();
            break
        case 2:
            biblioteca.cadastrarUsuario();
            break
        case 3:
            biblioteca.emprestarLivro();
            break
        case 4:
            biblioteca.devolverLivro();
            break
        case 5:
            biblioteca.consultarLivrosDisponiveis();
            break
        case 6:
            console.log("Tchau!");
            menu = false
            break
        default:
            console.log("\nNao é uma opcao.\n");
            break
    }
}