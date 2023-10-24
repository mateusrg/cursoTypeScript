"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Farmacia = void 0;
var leitor = require("readline-sync");
var Medicamento = /** @class */ (function () {
    function Medicamento(nome, quantidadeEmEstoque, precoPorUnidade) {
        this.nome = nome;
        this.quantidadeEmEstoque = quantidadeEmEstoque;
        this.precoPorUnidade = precoPorUnidade;
    }
    return Medicamento;
}());
var Farmacia = /** @class */ (function () {
    function Farmacia() {
        this.medicamentos = [];
    }
    Farmacia.prototype.venderMedicamentos = function () {
        if (this.estoqueVazio("vendido")) {
            return;
        }
        var indiceMedicamento = this.comercioMedicamento("Que medicamento está sendo vendido? ");
        var quantidadeVendida = leitor.questionInt("Quantos medicamentos estao sendo vendidos? ");
        if (this.medicamentos[indiceMedicamento].quantidadeEmEstoque < quantidadeVendida) {
            console.log("Voce esta tentando vender ".concat(quantidadeVendida, " unidades desse medicamento, mas s\u00F3 tem ").concat(this.medicamentos[indiceMedicamento].quantidadeEmEstoque, " em estoque."));
            return;
        }
        console.log("Venda de ".concat(this.medicamentos[indiceMedicamento].nome, " realizada."));
        this.medicamentos[indiceMedicamento].quantidadeEmEstoque -= quantidadeVendida;
        console.log("".concat(this.medicamentos[indiceMedicamento].quantidadeEmEstoque, " em estoque."));
    };
    Farmacia.prototype.comprarMedicamentos = function () {
        if (this.estoqueVazio('comprado. Se quiser acrescentar um medicamento novo no estoque, vá para "[5] Inserir medicamento"')) {
            return;
        }
        var indiceMedicamento = this.comercioMedicamento("Que medicamento está sendo comprado? ");
        var quantidadeComprada = leitor.questionInt("Quantos medicamentos estao sendo comprados? ");
        console.log("Compra de ".concat(quantidadeComprada, " unidades de ").concat(this.medicamentos[indiceMedicamento].nome, " realizada."));
        this.medicamentos[indiceMedicamento].quantidadeEmEstoque += quantidadeComprada;
        console.log("".concat(this.medicamentos[indiceMedicamento].quantidadeEmEstoque, " em estoque."));
    };
    Farmacia.prototype.substituirMedicamentos = function () {
        if (this.estoqueVazio("substituído")) {
            return;
        }
        var indiceMedicamento1 = this.comercioMedicamento("Que medicamento voce quer substituir? ");
        console.log("Sobre o medicamento a ser colocado no lugar:");
        var Medicamento2 = this.setMedicamento();
        console.log("".concat(this.medicamentos[indiceMedicamento1].nome, " substituido(a) por ").concat(Medicamento2.nome, "."));
        this.medicamentos[indiceMedicamento1] = Medicamento2;
    };
    Farmacia.prototype.removerMedicamentos = function () {
        if (this.estoqueVazio("removido")) {
            return;
        }
        var indiceMedicamento = this.comercioMedicamento("Que medicamento voce quer remover? ");
        console.log("Remocao de ".concat(this.medicamentos[indiceMedicamento].nome, " realizada."));
        this.medicamentos.splice(indiceMedicamento, 1);
    };
    Farmacia.prototype.inserirMedicamentos = function () {
        console.log("Sobre o medicamento que voce quer inserir:");
        var medicamento = this.setMedicamento();
        console.log("".concat(medicamento.nome, " inserido(a) no estoque."));
        this.medicamentos.push(medicamento);
    };
    Farmacia.prototype.getEstoque = function () {
        if (this.estoqueVazio("consultado")) {
            return;
        }
        this.medicamentos.forEach(function (medicamento) {
            console.log("Nome: ".concat(medicamento.nome));
            console.log("Quantidade em Estoque: ".concat(medicamento.quantidadeEmEstoque));
            console.log("Preco por Unidade: ".concat(medicamento.precoPorUnidade, "\n"));
        });
    };
    Farmacia.prototype.setMedicamento = function () {
        var nome = leitor.question("Qual o nome o do medicamento? ");
        var quantidadeEmEstoque = -1;
        var menu = true;
        while (menu) {
            quantidadeEmEstoque = leitor.questionInt("Quantos medicamentos tem em estoque? ");
            if (quantidadeEmEstoque >= 0) {
                menu = false;
            }
            else {
                console.log("Nao use números negativos.");
            }
        }
        var precoPorUnidade = leitor.questionInt("Quanto o medicamento custa? ");
        var medicamento = new Medicamento(nome, quantidadeEmEstoque, precoPorUnidade);
        return medicamento;
    };
    Farmacia.prototype.comercioMedicamento = function (mensagem) {
        for (var i = 0; i < this.medicamentos.length; i++) {
            console.log("[".concat(i + 1, "] ").concat(this.medicamentos[i].nome));
        }
        var indiceMedicamento = -1;
        var menu = true;
        while (menu) {
            indiceMedicamento = leitor.questionInt(mensagem, " ") - 1;
            if (indiceMedicamento >= 0 && indiceMedicamento <= this.medicamentos.length) {
                menu = false;
            }
        }
        return indiceMedicamento;
    };
    Farmacia.prototype.estoqueVazio = function (termo) {
        if (this.medicamentos.length == 0) {
            console.log("Nao tem nenhum medicamento em estoque para ser ".concat(termo, "."));
            return true;
        }
        return false;
    };
    return Farmacia;
}());
exports.Farmacia = Farmacia;
