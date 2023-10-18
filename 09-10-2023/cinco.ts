import * as leitor from "readline-sync"
function main(): void {
    let primeiroNumero:number = leitor.questionInt("Digite o primeiro numero: ")
    let segundoNumero:number = leitor.questionInt("Digite o segundo numero: ")
    let terceiroNumero:number = leitor.questionInt("Digite o terceiro numero: ")
    console.log(`Soma dos numeros: ${soma(primeiroNumero, segundoNumero, terceiroNumero)}`)
    console.log(`Subtração dos numeros: ${subtracao(primeiroNumero, segundoNumero, terceiroNumero)}`)
    console.log(`Multiplicacao dos numeros: ${multiplicacao(primeiroNumero, segundoNumero, terceiroNumero)}`)
    console.log(`Divisao dos numeros: ${divisao(primeiroNumero, segundoNumero, terceiroNumero)}`)
}

function soma(num1: number, num2: number, num3: number): number {
    return num1 + num2 + num3
}

function subtracao(num1: number, num2: number, num3: number): number {
    return num1 - num2 - num3
}

function multiplicacao(num1: number, num2: number, num3: number): number {
    return num1 * num2 * num3
}

function divisao(num1: number, num2: number, num3: number): number {
    return num1 / num2 / num3
}

main()