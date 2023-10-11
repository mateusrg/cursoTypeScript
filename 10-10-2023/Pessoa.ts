import * as leitor from "readline-sync"
export class Pessoa {
    nome: String;
    cpf: Number;
    rg: Number;
    cor: String;
    idade: Number;

    constructor(nome: String, cpf: Number, rg: Number, cor: String, idade: Number) {
        this.nome = nome;
        this.cpf = cpf;
        this.rg = rg;
        this.cor = cor;
        this.idade = idade;
    }

    getNome() {
        console.log(`Meu nome é ${this.nome}`)
    }
    
    getCPF() {
        console.log(`Meu CPF é ${this.cpf}`)
    }

    getRG() {
        console.log(`Meu RG é ${this.rg}`)
    }

    getCor() {
        console.log(`Eu sou ${this.cor}`)
    }

    getIdade() {
        console.log(`Eu tenho ${this.idade} anos`)
    }

    setNome() {
        let nomeDois = leitor.question("Insira o novo nome:")
        this.nome = nomeDois
    }
    
    setCPF() {
        let CPFDois = leitor.questionInt("Insira o novo CPF:")
        this.cpf = CPFDois
    }

    setRG() {
        let RGDois = leitor.questionInt("Insira o novo RG:")
        this.rg = RGDois
    }

    setCor() {
        let corDois = leitor.question("Insira a nova cor:")
        this.cor = corDois
    }

    setIdade() {
        let idadeDois = leitor.questionInt("Insira a nova idade:")
        this.idade = idadeDois
    }
}