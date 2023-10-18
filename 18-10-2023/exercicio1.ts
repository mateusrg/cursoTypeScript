import * as leitor from "readline-sync"
import { Loja } from "./Loja"


let nome: String = capitalize(leitor.question("Qual o nome da sua loja? "));
let endereco: String = capitalize(leitor.question("Qual o endereco dela? "));
let loja: Loja = new Loja(nome, endereco)

let menu: Boolean = true
while(menu) {
    console.log("\nO que voce quer fazer?");
    console.log("[1] Mostrar Produtos");
    console.log("[2] Adicionar Produto");
    console.log("[3] Remover Produto");
    console.log("[4] Mostrar Informacoes da Loja");
    console.log("[5] Sair");
    let selecao = leitor.questionInt("");
    switch(selecao) {
        case 1:
            loja.getProdutos();
            break
        case 2:
            loja.adicionarProduto();
            break
        case 3:
            loja.removerProduto();
            break
        case 4:
            loja.getValues();
            break
        case 5:
            console.log("Tchau!");
            menu = false
            break
        default:
            console.log("Opcao Invalida!");
            break
    }
}


function capitalize(palavra): String {
    return palavra.charAt(0).toUpperCase() + palavra.slice(1)
}