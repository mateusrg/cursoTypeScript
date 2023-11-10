import * as leitor from "readline-sync"
import { Farmacia } from "./Classes"

let farmacia = new Farmacia;

async function main(): Promise<void> {
    while (true) {
        await farmacia.getDinheiro();
        console.log("O que voce quer fazer?");
        console.log("[1] Vender medicamento");
        console.log("[2] Comprar medicamento");
        console.log("[3] Substituir medicamento");
        console.log("[4] Remover medicamento");
        console.log("[5] Inserir medicamento");
        console.log("[6] Visualizar estoque");
        console.log("[7] Sair");
        let selecao: number = leitor.questionInt();
        switch (selecao) {
            case 1:
                await farmacia.venderMedicamento();
                break
            case 2:
                await farmacia.comprarMedicamento();
                break
            case 3:
                await farmacia.substituirMedicamento();
                break
            case 4:
                await farmacia.removerMedicamentos();
                break
            case 5:
                await farmacia.setMedicamentos();
                break
            case 6:
                await farmacia.getMedicamentos();
                break
            case 7:
                console.log("Tchau!");
                process.exit(0);
            default:
                console.log("\nOpcao invalida\n");
        }
    }
}
main();