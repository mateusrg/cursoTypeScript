import * as leitor from "readline-sync"
export class Circulo {
    raio: number;

    constructor() {
        this.raio = leitor.questionInt("Qual o raio do circulo? ")
    }

    getArea() {
        console.log(`Area do circulo: ${2 * Math.PI * this.raio}`)
    }
}

export class Triangulo {
    base: number;
    altura: number;

    constructor() {
        this.base = leitor.questionInt("Quanto mede a base do triangulo? ")
        this.altura = leitor.questionInt("E quanto mede a altura? ")
    }

    getArea() {
        console.log(`Area do triangulo: ${this.base * this.altura / 2}`)
    }
}

export class Retangulo {
    base: number;
    altura: number;

    constructor() {
        this.base = leitor.questionInt("Quanto mede a base do retangulo? ")
        this.altura = leitor.questionInt("E quanto mede a altura? ")
    }

    getArea() {
        console.log(`Area do retangulo: ${this.base * this.altura}`)
    }
}
