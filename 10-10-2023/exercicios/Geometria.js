"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Retangulo = exports.Triangulo = exports.Circulo = void 0;
var leitor = require("readline-sync");
var Circulo = /** @class */ (function () {
    function Circulo() {
        this.raio = leitor.questionInt("Qual o raio do circulo? ");
    }
    Circulo.prototype.getArea = function () {
        console.log("Area do circulo: ".concat(2 * Math.PI * this.raio));
    };
    return Circulo;
}());
exports.Circulo = Circulo;
var Triangulo = /** @class */ (function () {
    function Triangulo() {
        this.base = leitor.questionInt("Quanto mede a base do triangulo? ");
        this.altura = leitor.questionInt("E quanto mede a altura? ");
    }
    Triangulo.prototype.getArea = function () {
        console.log("Area do triangulo: ".concat(this.base * this.altura / 2));
    };
    return Triangulo;
}());
exports.Triangulo = Triangulo;
var Retangulo = /** @class */ (function () {
    function Retangulo() {
        this.base = leitor.questionInt("Quanto mede a base do retangulo? ");
        this.altura = leitor.questionInt("E quanto mede a altura? ");
    }
    Retangulo.prototype.getArea = function () {
        console.log("Area do retangulo: ".concat(this.base * this.altura));
    };
    return Retangulo;
}());
exports.Retangulo = Retangulo;
