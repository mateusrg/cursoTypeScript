interface UmaPessoa {
    nome: string;
    idade: number;
    documento: number;
    falar(): string;
    cantar(): string;
    cumprimentar(nomeOutro: string): string;
}

export class Funcionario implements UmaPessoa {
    public nome: string;
    public idade: number;
    public documento: number;
    
    constructor(nome: string, idade: number, documento: number) {
        this.nome = nome
        this.idade = idade
        this.documento = documento
    }
    public falar(): string {
        return `Eu sou o ${this.nome}`
    }

    public cantar(): string {
        return `Lala estou cantando`
    }

    public cumprimentar(nomeOutro: string): string {
        return `Olá ${nomeOutro}, eu sou ${this.nome}`
    }
}