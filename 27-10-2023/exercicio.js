"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
var exercicioClasses_1 = require("./exercicioClasses");
var sistema = new exercicioClasses_1.SistemaDeAnimais;
while (true) {
    var selecao = leitor.questionInt("O que voce quer fazer?\n[1] Cadastrar Animal\n[2] Ver Animais Interagindo\n[3] Remover Animal\n[4] Listar Animais\n[5] Sair\n");
    switch (selecao) {
        case 1:
            sistema.cadastrarAnimal();
            break;
        case 2:
            sistema.interagirAnimais();
            break;
        case 3:
            sistema.removerAnimal();
            break;
        case 4:
            sistema.listarAnimais();
            break;
        case 5:
            console.log("Tchau!");
            process.exit();
        default:
            console.log("Opcao invalida");
    }
}
