"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
var Loja_1 = require("./Loja");
var nome = capitalize(leitor.question("Qual o nome da sua loja? "));
var endereco = capitalize(leitor.question("Qual o endereco dela? "));
var loja = new Loja_1.Loja(nome, endereco);
var menu = true;
while (menu) {
    console.log("\nO que voce quer fazer?");
    console.log("[1] Mostrar Produtos");
    console.log("[2] Adicionar Produto");
    console.log("[3] Remover Produto");
    console.log("[4] Mostrar Informacoes da Loja");
    console.log("[5] Sair");
    var selecao = leitor.questionInt("");
    switch (selecao) {
        case 1:
            loja.getProdutos();
            break;
        case 2:
            loja.adicionarProduto();
            break;
        case 3:
            loja.removerProduto();
            break;
        case 4:
            loja.getValues();
            break;
        case 5:
            console.log("Tchau!");
            menu = false;
            break;
        default:
            console.log("Opcao Invalida!");
            break;
    }
}
function capitalize(palavra) {
    return palavra.charAt(0).toUpperCase() + palavra.slice(1);
}
