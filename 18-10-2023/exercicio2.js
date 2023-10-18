"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
var Empresa_1 = require("./Empresa");
var nome = capitalize(leitor.question("Qual o nome da sua empresa? "));
var endereco = capitalize(leitor.question("Onde fica a sede dela? "));
var empresa = new Empresa_1.EmpresaDesenvolvimento(nome, endereco);
var menu = true;
while (menu) {
    console.log("O que voce quer fazer?");
    console.log("[1] Adicionar funcionarios");
    console.log("[2] Remover funcionarios");
    console.log("[3] Mostrar funcionarios");
    console.log("[4] Mostrar demais informacoes");
    console.log("[5] Sair");
    var selecao = leitor.questionInt("");
    switch (selecao) {
        case 1:
            empresa.adicionarFuncionarios();
            break;
        case 2:
            empresa.removerFuncionarios();
            break;
        case 3:
            empresa.getFuncionarios();
            break;
        case 4:
            empresa.getValues();
            break;
        case 5:
            console.log("Tchau!");
            menu = false;
            break;
        default:
            console.log("\nOpcao Invalida\n");
            break;
    }
}
function capitalize(palavra) {
    return palavra.charAt(0).toUpperCase() + palavra.slice(1);
}
