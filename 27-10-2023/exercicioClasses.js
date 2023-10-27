"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.SistemaDeAnimais = void 0;
var leitor = require("readline-sync");
var Animal = /** @class */ (function () {
    function Animal(nome, tipo) {
        if (tipo === void 0) { tipo = "Outro"; }
        this.nome = nome;
        this.tipo = tipo;
    }
    Animal.prototype.emitirSom = function () {
        return "Grrr!";
    };
    return Animal;
}());
var Cachorro = /** @class */ (function (_super) {
    __extends(Cachorro, _super);
    function Cachorro(nome) {
        return _super.call(this, nome, "Cachorro") || this;
    }
    Cachorro.prototype.emitirSom = function () {
        return "Woof!";
    };
    return Cachorro;
}(Animal));
var Gato = /** @class */ (function (_super) {
    __extends(Gato, _super);
    function Gato(nome) {
        return _super.call(this, nome, "Gato") || this;
    }
    Gato.prototype.emitirSom = function () {
        return "Meow!";
    };
    return Gato;
}(Animal));
var SistemaDeAnimais = /** @class */ (function () {
    function SistemaDeAnimais() {
        this.animais = [];
    }
    SistemaDeAnimais.prototype.cadastrarAnimal = function () {
        var indiceSelecao;
        while (true) {
            indiceSelecao = leitor.questionInt("Que animal voce quer cadastrar?\n[1] Gato\n[2] Cachorro\n[3] Outro\n");
            if (indiceSelecao <= 3 && indiceSelecao > 0) {
                break;
            }
            console.log("Nao é uma opcao");
        }
        var nome = leitor.question("Qual o nome dele? ");
        switch (indiceSelecao) {
            case 1:
                this.animais.push(new Gato(nome));
                break;
            case 2:
                this.animais.push(new Cachorro(nome));
                break;
            case 3:
                this.animais.push(new Animal(nome));
                break;
        }
    };
    SistemaDeAnimais.prototype.interagirAnimais = function () {
        if (this.animais.length === 0) {
            console.log("Nao ha nenhum animal para ver interagindo");
            return;
        }
        this.animais.forEach(function (a) { return console.log("".concat(a.nome, ": ").concat(a.emitirSom())); });
    };
    SistemaDeAnimais.prototype.removerAnimal = function () {
        if (this.animais.length === 0) {
            console.log("Nao ha nenhum animal para ser removido");
            return;
        }
        for (var i = 0; i < this.animais.length; i++) {
            console.log("[".concat(i + 1, "] ").concat(this.animais[i].nome, " (").concat(this.animais[i].tipo, ")"));
        }
        var indiceAnimal;
        while (true) {
            indiceAnimal = leitor.questionInt("Que animal voce quer remover? ") - 1;
            if (indiceAnimal < this.animais.length && indiceAnimal >= 0) {
                break;
            }
            console.log("Opcao invalida");
        }
        this.animais.splice(indiceAnimal, 1);
    };
    SistemaDeAnimais.prototype.listarAnimais = function () {
        if (this.animais.length === 0) {
            console.log("Nao ha nenhum animal cadastrado");
            return;
        }
        this.animais.forEach(function (a) { return console.log("".concat(a.nome, " (").concat(a.tipo, ")")); });
    };
    return SistemaDeAnimais;
}());
exports.SistemaDeAnimais = SistemaDeAnimais;
