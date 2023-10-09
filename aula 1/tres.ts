import * as leitor from "readline-sync"
function main(): void {
    let adultos = leitor.questionInt("Quantos adultos tem na festa? ")
    let criancas = leitor.questionInt("Quantas criancas tem na festa? ")
    console.log(`The total party size is: ${soma(adultos, criancas)}`)
}

function soma(adultos, criancas): Number {
    return adultos + criancas
}

main()