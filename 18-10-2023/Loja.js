"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loja = void 0;
var leitor = require("readline-sync");
var Loja = /** @class */ (function () {
    function Loja(nome, endereco, produtos) {
        if (produtos === void 0) { produtos = []; }
        this.nome = nome;
        this.endereco = endereco;
        this.produtos = produtos;
    }
    Loja.prototype.adicionarProduto = function () {
        var produto = leitor.question("Que produto voce quer adicionar? ").toLowerCase();
        this.produtos.push(produto);
    };
    Loja.prototype.removerProduto = function () {
        if (this.produtos.length == 0) {
            console.log("Nao ha nenhum produto para ser removido");
            return;
        }
        for (var i = 0; i < this.produtos.length; i++) {
            console.log("[".concat(i + 1, "] ").concat(this.produtos[i].charAt(0).toUpperCase() + this.produtos[i].slice(1)));
        }
        var indiceProduto = -1;
        var menuLoop = true;
        while (menuLoop) {
            indiceProduto = leitor.questionInt("Que produto voce quer remover? ") - 1;
            if (indiceProduto >= 0 && indiceProduto < this.produtos.length) {
                menuLoop = false;
            }
        }
        this.produtos.splice(indiceProduto, 1);
    };
    Loja.prototype.getProdutos = function () {
        if (this.produtos.length == 0) {
            console.log("Nao ha nenhum produto cadastrado");
            return;
        }
        console.log("Produtos:");
        for (var i = 0; i < this.produtos.length; i++) {
            console.log(this.produtos[i].charAt(0).toUpperCase() + this.produtos[i].slice(1));
        }
    };
    Loja.prototype.getValues = function () {
        console.log("Nome da Loja: ".concat(this.nome));
        console.log("Endereco da Loja: ".concat(this.endereco));
    };
    return Loja;
}());
exports.Loja = Loja;
