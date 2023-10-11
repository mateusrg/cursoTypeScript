import * as leitor from "readline-sync"
export class Calculadora {
    valor1: number;
    valor2: number;

    setValores() {
        this.valor1 = leitor.questionInt("Digite um valor: ")
        this.valor2 = leitor.questionInt("Digite um valor: ")
    }

    getMais() {
        console.log(`${this.valor1}+${this.valor2} = ${this.valor1 + this.valor2}`)
    }

    getMenos() {
        console.log(`${this.valor1}-${this.valor2} = ${this.valor1 - this.valor2}`)
    }

    getVezes() {
        console.log(`${this.valor1}×${this.valor2} = ${this.valor1 * this.valor2}`)
    }

    getDividir() {
        console.log(`${this.valor1}÷${this.valor2} = ${this.valor1 / this.valor2}`)
    }
}