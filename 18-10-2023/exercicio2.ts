import * as leitor from "readline-sync"
import { EmpresaDesenvolvimento } from "./Empresa"


let nome: String = capitalize(leitor.question("Qual o nome da sua empresa? "))
let endereco: String = capitalize(leitor.question("Onde fica a sede dela? "))
let empresa: EmpresaDesenvolvimento = new EmpresaDesenvolvimento(nome, endereco)

let menu: Boolean = true

while(menu) {
    console.log("O que voce quer fazer?");
    console.log("[1] Adicionar funcionarios");
    console.log("[2] Remover funcionarios");
    console.log("[3] Mostrar funcionarios");
    console.log("[4] Mostrar demais informacoes");
    console.log("[5] Sair");
    let selecao: Number = leitor.questionInt("");
    switch(selecao) {
        case 1:
            empresa.adicionarFuncionarios()
            break
        case 2:
            empresa.removerFuncionarios()
            break
        case 3:
            empresa.getFuncionarios()
            break
        case 4:
            empresa.getValues()
            break
        case 5:
            console.log("Tchau!");
            menu = false
            break
        default:
            console.log("\nOpcao Invalida\n");
            break
    }
    
}

function capitalize(palavra): String {
    return palavra.charAt(0).toUpperCase() + palavra.slice(1)
}