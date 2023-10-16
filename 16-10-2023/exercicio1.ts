import * as leitor from "readline-sync"
let numero: number = 0
let menu: Boolean = true
while(menu) {
    numero = leitor.questionInt("Digite um numero de 1 a 3 (4 para sair): ")
    switch(numero) {
        case 1:
            console.log("Primeira mensagem")
            break
        case 2:
            console.log("Segunda mensagem")
            break
        case 3:
            console.log("Terceira mensagem")
            break
        case 4:
            console.log("Tchau!");
            menu = false
            break
        default:
            console.log("Opcao invalida")
    }
}