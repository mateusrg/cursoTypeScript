import * as leitor from "readline-sync"
let menu: Boolean = true
while(menu) {
    let numero: number = leitor.questionInt("\nDigite um numero de 1 a 5 (6 para sair): ")
    switch(numero) {
        case 1:
            console.log("Qualquer numero multiplicado por 1 eh igual a ele mesmo.");
            break
        case 2:
            console.log("Todo numero par eh multiplo de 2.");
            break
        case 3:
            console.log("A cada 3 pessoas, uma nao tem acesso a agua potavel.");
            break
        case 4:
            console.log("4 eh um quadrado perfeito, pois 2² = 4");
            break
        case 5:
            console.log("Todo numero terminado em 0 eh multiplo de 5.");
            break
        case 6:
            console.log("Tchau!");
            menu = false
            break
        default:
            console.log("Opcao invalida.");
            break
    }
}