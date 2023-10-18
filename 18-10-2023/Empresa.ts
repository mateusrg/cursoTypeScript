import * as leitor from "readline-sync"
export class EmpresaDesenvolvimento {
    nome: String
    endereco: String
    funcionarios: Array<Funcionarios>

    constructor(nome: String, endereco: String, funcionarios: Array<Funcionarios> = []) {
        this.nome = nome
        this.endereco = endereco
        this.funcionarios = funcionarios
    }

    adicionarFuncionarios() {
        let nome: String = this.capitalize(leitor.question("Qual o nome do funcionario? "));
        let idade: Number = leitor.questionInt("Quantos anos ele tem? ");
        let cargo: String = leitor.question("Que cargo ele ocupa na empresa? ");
        let salario: Number = leitor.questionInt("Quanto o funcionario ganha (em R$)? ");
        let funcionario: Funcionarios = new Funcionarios(nome, idade, cargo, salario);
        this.funcionarios.push(funcionario)
    }

    removerFuncionarios() {
        if(this.funcionarios.length == 0) {
            console.log("Nao ha nenhum funcionario para ser removido.");
            return            
        }
        for(let i = 0; i < this.funcionarios.length; i++) {
            console.log(`[${i+1}] ${this.funcionarios[i].nome}`);
        }
        let indiceFuncionario: number = -1
        let menuRemover: Boolean = true
        while(menuRemover) {
            indiceFuncionario = leitor.questionInt("Que funcionario voce quer remover? ") - 1;
            if(indiceFuncionario >= 0 && indiceFuncionario < this.funcionarios.length) {
                menuRemover = false
            }
        }
        this.funcionarios.splice(indiceFuncionario, 1)
    }

    getFuncionarios() {
        if(this.funcionarios.length == 0) {
            console.log("A empresa nao tem nenhum funcionario.");
            return
        }
        for(let i = 0; i < this.funcionarios.length; i++) {
            let funcionario: Funcionarios = this.funcionarios[i]
            console.log(`${funcionario.nome} é um(a) ${funcionario.cargo} de ${funcionario.idade} anos que ganha ${funcionario.salario} reais.`)
        }
    }

    getValues() {
        console.log(`A empresa se chama ${this.nome} e fica em ${this.endereco}.`);        
    }

    capitalize(palavra: String): String {
        return palavra.charAt(0).toUpperCase() + palavra.slice(1)
    }
}

export class Funcionarios {
    nome: String
    idade: Number
    cargo: String
    salario: Number

    constructor(nome: String, idade: Number, cargo: String, salario: Number) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
        this.salario = salario;
    }
}