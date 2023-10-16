import * as leitor from "readline-sync"
let menu: Boolean = true
while(menu) {
    let codigo = leitor.question("Digite o codigo do produto (A, B ou C) (S para sair): ").toUpperCase()
    switch(codigo) {
        case "A":
            console.log("O produto A custa R$ 50,00.")
            break
        case "B":
            console.log("O produto A custa R$ 100,00.")
            break
        case "C":
            console.log("O produto A custa R$ 150,00.")
            break
        case "S":
            console.log("Tchau!");
            menu = false
            break
        default:
            console.log("Opcao invalida.")
    }
}