import * as leitor from "readline-sync"
import { Farmacia } from "./Farmacia";

let farmacia: Farmacia = new Farmacia
let menu: Boolean = true
while(menu) {
    console.log("O que você quer fazer?");
    console.log("[1] Vender medicamentos");
    console.log("[2] Comprar medicamentos");
    console.log("[3] Substituir medicamento");
    console.log("[4] Remover medicamento");
    console.log("[5] Inserir medicamento");
    console.log("[6] Ver estoque");
    console.log("[7] Sair");
    let selecao: number = leitor.questionInt("")
    switch(selecao) {
        case 1:
            farmacia.venderMedicamentos();
            break
        case 2:
            farmacia.comprarMedicamentos();
            break
        case 3:
            farmacia.substituirMedicamentos();
            break
        case 4:
            farmacia.removerMedicamentos();
            break
        case 5:
            farmacia.inserirMedicamentos();
            break
        case 6:
            farmacia.getEstoque();
            break
        case 7:
            console.log("Tchau!");
            menu = false
            break
        default:
            console.log("\nNao é uma opcao.\n");
            break
    }
    
}