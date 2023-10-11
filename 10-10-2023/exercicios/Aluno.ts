import * as leitor from "readline-sync"
export class Aluno {
    nome: String;
    notas: Array<number> = [];

    constructor(nome: String, notas: Array<number> = []) {
        this.nome = nome
        this.notas = notas
    }

    setNotas(): void {
        this.notas.push(leitor.questionInt("Digite uma nota para ser adicionada: "))
    }

    getMedia(): void {
        let soma: number = 0
        for (let i = 0; i < this.notas.length; i++) {
            soma += this.notas[i]
        }
        console.log(soma/this.notas.length)
    }

}