import * as leitor from "readline-sync"
let menu: Boolean = true
while(menu) {
    let mes = leitor.questionInt("Digite um numero de 1 a 12 (13 para sair): ")
    switch(mes) {
        case 1:
            console.log("Janeiro")
            break
        case 2:
            console.log("Fevereiro")
            break
        case 3:
            console.log("Março")
            break
        case 4:
            console.log("Abril")
            break
        case 5:
            console.log("Maio")
            break
        case 6:
            console.log("Junho")
            break
        case 7:
            console.log("Julho")
            break
        case 8:
            console.log("Agosto")
            break
        case 9:
            console.log("Setembro")
            break
        case 10:
            console.log("Outubro")
            break
        case 11:
            console.log("Novembro")
            break
        case 12:
            console.log("Dezembro")
            break
        case 13:
            console.log("Tchau!");
            menu = false
            break
        default:
            console.log("Opcao invalida. Digite outro numero.")
    }
}