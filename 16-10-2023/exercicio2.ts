import * as leitor from "readline-sync"
let menu: Boolean = true
while(menu) {
    let cor = leitor.question("Digite uma cor (S para sair): ").toLowerCase()
    switch(cor) {
        case "azul":
            console.log("Azul me lembra o mar!")
            break
        case "amarelo":
            console.log("Amarelo me lembra batata!")
            break
        case "vermelho":
            console.log("Vermelho me lembra maçã!")
            break
        case "verde":
            console.log("Verde me lembra natureza!")
            break
        case "laranja":
            console.log("Laranja me lembra frutas!")
            break
        case "roxo":
            console.log("Roxo me lembra uva!")
            break
        case "rosa":
            console.log("Rosa me lembra flores!")
            break
        case "branco":
            console.log("Branco me lembra luz!")
            break
        case "preto":
            console.log("Preto me lembra morte...")
            break
        case "s":
            console.log("Tchau!");
            menu = false
            break            
        default:
            console.log("Não é uma cor (ou se é eu não programei) :)")
    }

}