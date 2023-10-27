import * as leitor from "readline-sync"
class Animal {
    public nome: string
    public tipo: string
    constructor(nome: string, tipo: string = "Outro") {
        this.nome = nome
        this.tipo = tipo
    }

    public emitirSom(): string {
        return "Grrr!"
    }
}

class Cachorro extends Animal {
    constructor(nome: string) {
        super(nome, "Cachorro")
    }

    public emitirSom(): string {
        return "Woof!"
    }

}

class Gato extends Animal {
    constructor(nome: string) {
        super(nome, "Gato")
    }

    public emitirSom(): string {
        return "Meow!"
    }
}

export class SistemaDeAnimais {
    private animais: Array<Animal>
    constructor() {
        this.animais = []
    }

    public cadastrarAnimal(): void {
        let indiceSelecao: number
        while (true) {
            indiceSelecao = leitor.questionInt("Que animal voce quer cadastrar?\n[1] Gato\n[2] Cachorro\n[3] Outro\n")
            if (indiceSelecao <= 3 && indiceSelecao > 0) {
                break
            }
            console.log("Nao é uma opcao")
        }
        let nome: string = leitor.question("Qual o nome dele? ")
        switch (indiceSelecao) {
            case 1:
                this.animais.push(new Gato(nome))
                break
            case 2:
                this.animais.push(new Cachorro(nome))
                break
            case 3:
                this.animais.push(new Animal(nome))
                break
        }
    }

    public interagirAnimais(): void {
        if (this.animais.length === 0) {
            console.log("Nao ha nenhum animal para ver interagindo")
            return
        }
        this.animais.forEach(a => console.log(`${a.nome}: ${a.emitirSom()}`));
    }

    public removerAnimal(): void {
        if (this.animais.length === 0) {
            console.log("Nao ha nenhum animal para ser removido")
            return
        }
        for (let i = 0; i < this.animais.length; i++) {
            console.log(`[${i+1}] ${this.animais[i].nome} (${this.animais[i].tipo})`);
        }
        let indiceAnimal: number
        while (true) {
            indiceAnimal = leitor.questionInt("Que animal voce quer remover? ") - 1;
            if (indiceAnimal < this.animais.length && indiceAnimal >= 0) {
                break
            }
            console.log("Opcao invalida");
        }        
        this.animais.splice(indiceAnimal, 1)
    }

    public listarAnimais(): void {
        if (this.animais.length === 0) {
            console.log("Nao ha nenhum animal cadastrado")
            return
        }
        this.animais.forEach(a => console.log(`${a.nome} (${a.tipo})`))
    }
}