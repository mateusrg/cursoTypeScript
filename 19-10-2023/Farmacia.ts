import * as leitor from "readline-sync"
class Medicamento {
    nome: String
    quantidadeEmEstoque: number
    precoPorUnidade: number

    constructor(nome: String, quantidadeEmEstoque: number, precoPorUnidade: number) {
        this.nome = nome
        this.quantidadeEmEstoque = quantidadeEmEstoque
        this.precoPorUnidade = precoPorUnidade
    }
}

export class Farmacia {
    medicamentos: Array<Medicamento>

    constructor() {
        this.medicamentos = []
    }

    venderMedicamentos(): void {
        if(this.estoqueVazio("vendido")) {
            return
        }
        let indiceMedicamento: number = this.comercioMedicamento("Que medicamento está sendo vendido? ")
        let quantidadeVendida: number = leitor.questionInt("Quantos medicamentos estao sendo vendidos? ")
        if (this.medicamentos[indiceMedicamento].quantidadeEmEstoque < quantidadeVendida) {
            console.log(`Voce esta tentando vender ${quantidadeVendida} unidades desse medicamento, mas só tem ${this.medicamentos[indiceMedicamento].quantidadeEmEstoque} em estoque.`);
            return
        }
        console.log(`Venda de ${this.medicamentos[indiceMedicamento].nome} realizada.`)
        this.medicamentos[indiceMedicamento].quantidadeEmEstoque -= quantidadeVendida
        console.log(`${this.medicamentos[indiceMedicamento].quantidadeEmEstoque} em estoque.`);
    }

    comprarMedicamentos(): void {
        if(this.estoqueVazio('comprado. Se quiser acrescentar um medicamento novo no estoque, vá para "[5] Inserir medicamento"')) {
            return
        }
        let indiceMedicamento: number = this.comercioMedicamento("Que medicamento está sendo comprado? ")
        let quantidadeComprada: number = leitor.questionInt("Quantos medicamentos estao sendo comprados? ")
        console.log(`Compra de ${quantidadeComprada} unidades de ${this.medicamentos[indiceMedicamento].nome} realizada.`)
        this.medicamentos[indiceMedicamento].quantidadeEmEstoque += quantidadeComprada
        console.log(`${this.medicamentos[indiceMedicamento].quantidadeEmEstoque} em estoque.`);
    }

    substituirMedicamentos(): void {
        if(this.estoqueVazio("substituído")) {
            return
        }
        let indiceMedicamento1: number = this.comercioMedicamento("Que medicamento voce quer substituir? ")
        console.log("Sobre o medicamento a ser colocado no lugar:")
        let Medicamento2: Medicamento = this.setMedicamento()
        console.log(`${this.medicamentos[indiceMedicamento1].nome} substituido(a) por ${Medicamento2.nome}.`)
        this.medicamentos[indiceMedicamento1] = Medicamento2
    }

    removerMedicamentos(): void {
        if(this.estoqueVazio("removido")) {
            return
        }
        let indiceMedicamento: number = this.comercioMedicamento("Que medicamento voce quer remover? ")
        console.log(`Remocao de ${this.medicamentos[indiceMedicamento].nome} realizada.`)
        this.medicamentos.splice(indiceMedicamento, 1)
    }

    inserirMedicamentos(): void {
        console.log("Sobre o medicamento que voce quer inserir:")
        let medicamento: Medicamento = this.setMedicamento()
        console.log(`${medicamento.nome} inserido(a) no estoque.`)
        this.medicamentos.push(medicamento)
    }

    getEstoque(): void {
        if(this.estoqueVazio("consultado")) {
            return
        }
        this.medicamentos.forEach(function(medicamento: Medicamento) {
            console.log(`Nome: ${medicamento.nome}`)
            console.log(`Quantidade em Estoque: ${medicamento.quantidadeEmEstoque}`)
            console.log(`Preco por Unidade: ${medicamento.precoPorUnidade}\n`)
        })
    }

    setMedicamento(): Medicamento {
        let nome: String = leitor.question("Qual o nome o do medicamento? ")
        let quantidadeEmEstoque: number = -1
        let menu: Boolean = true
        while (menu) {
            quantidadeEmEstoque = leitor.questionInt("Quantos medicamentos tem em estoque? ")
            if (quantidadeEmEstoque >= 0) {
                menu = false
            } else {
                console.log("Nao use números negativos.");
            }
        }
        let precoPorUnidade: number = leitor.questionInt("Quanto o medicamento custa? ")
        let medicamento: Medicamento = new Medicamento(nome, quantidadeEmEstoque, precoPorUnidade)
        return medicamento
    }

    comercioMedicamento(mensagem: String): number {
        for (let i = 0; i < this.medicamentos.length; i++) {
            console.log(`[${i + 1}] ${this.medicamentos[i].nome}`);
        }
        let indiceMedicamento: number = -1
        let menu: Boolean = true
        while (menu) {
            indiceMedicamento = leitor.questionInt(mensagem, " ") - 1
            if (indiceMedicamento >= 0 &&indiceMedicamento <= this.medicamentos.length) {
                menu = false
            }
        }
        return indiceMedicamento
    }

    estoqueVazio(termo: String): Boolean {
        if (this.medicamentos.length == 0) {
            console.log(`Nao tem nenhum medicamento em estoque para ser ${termo}.`);
            return true
        }
        return false
    }

}