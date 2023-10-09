import * as leitor from "readline-sync"
function main(): void {
    let nomeDoUsuario:string = leitor.question("Qual o seu nome? ")
    let sistemaOperacional:string = leitor.question("Qual o seu sistema operacional? ")
    displayAlertMessage(sistemaOperacional, nomeDoUsuario)
}

function displayAlertMessage(sistema:string, nome:string): void {
    console.log(`There's a new sign-in request on ${sistema} for your Google Account ${nome}.`)
}

main()