import * as leitor from "readline-sync"
export class Loja {
    nome: String;
    endereco: String;
    produtos: Array<String>
    
    constructor(nome: String, endereco: String, produtos: Array<String> = []) {
    this.nome = nome
    this.endereco = endereco
    this.produtos = produtos

}
    adicionarProduto() {
        let produto = leitor.question("Que produto voce quer adicionar? ").toLowerCase();
        this.produtos.push(produto)
    }

    removerProduto() {
        if(this.produtos.length == 0) {
            console.log("Nao ha nenhum produto para ser removido");
            return
        }
        for(let i: number = 0; i < this.produtos.length; i++) {
            console.log(`[${i+1}] ${this.produtos[i].charAt(0).toUpperCase() + this.produtos[i].slice(1)}`);
        }
        let indiceProduto: number = -1
        let menuLoop: Boolean = true
        while(menuLoop) {
            indiceProduto = leitor.questionInt("Que produto voce quer remover? ") - 1;
            if(indiceProduto >= 0 && indiceProduto < this.produtos.length) {
                menuLoop = false
            }
        }
        this.produtos.splice(indiceProduto, 1)
    }

    getProdutos() {
        if(this.produtos.length == 0) {
            console.log("Nao ha nenhum produto cadastrado");
            return
        }
        console.log("Produtos:");
        for(let i: number = 0; i < this.produtos.length; i++) {
            console.log(this.produtos[i].charAt(0).toUpperCase() + this.produtos[i].slice(1));
        }
    }

    getValues() {
        console.log(`Nome da Loja: ${this.nome}`);
        console.log(`Endereco da Loja: ${this.endereco}`);
    }
}