import { Pessoa } from "./Pessoa";
import * as leitor from "readline-sync";

function main(): void {
    let pessoa = metodos()
    if(leitor.question("Voce gostaria de alterar o cadastro? [S] Sim   [N] Nao ").toLowerCase() == "s"){
        editarCadastro(pessoa)
    }
}

function cadastro(): Pessoa {
    let nome = leitor.question("Qual o seu nome? ")
    let cpf = leitor.questionInt("Qual o seu CPF? ")
    let rg = leitor.questionInt("Qual o seu RG? ")
    let cor = leitor.question("Qual a sua cor? ")
    let idade = leitor.questionInt("Quantos anos voce tem? ")
    let pessoa = new Pessoa(nome, cpf, rg, cor, idade)
    return pessoa
}

function metodos(): Pessoa {
    let pessoa = cadastro()
    pessoa.getNome()
    pessoa.getCPF()
    pessoa.getRG()
    pessoa.getCor()
    pessoa.getIdade()
    return pessoa
}

function editarCadastro(pessoa): void {
    pessoa.setNome()
    pessoa.setCPF()
    pessoa.setRG()
    pessoa.setCor()
    pessoa.setIdade()
}

main()