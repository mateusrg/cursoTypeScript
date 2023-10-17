"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
var Carro = /** @class */ (function () {
    function Carro(consumo, marca, modelo, ano) {
        this.quantidade = 0;
        this.consumo = consumo;
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.combustivel = 0;
    }
    Carro.prototype.viajar = function (km) {
        var viagem = this.combustivel - km / this.consumo;
        if (viagem <= 0) {
            console.log("Nao eh possivel fazer essa viagem, abasteca seu carro.");
        }
        else {
            this.combustivel -= viagem;
            console.log("Sobrou ".concat(this.combustivel, " litros de gasolina."));
        }
    };
    Carro.prototype.setCombustivel = function (gasolina) {
        this.combustivel += gasolina;
        this.getCombustivel();
    };
    Carro.prototype.getCombustivel = function () {
        console.log("Seu tanque est\u00E1 com ".concat(this.combustivel, " litros de gasolina"));
    };
    Carro.prototype.getValues = function () {
        console.log("Consumo de gasolina (km/L): ".concat(this.consumo));
        console.log("Marca do carro: ".concat(this.marca));
        console.log("Modelo do carro: ".concat(this.modelo));
        console.log("Ano do carro: ".concat(this.ano));
    };
    return Carro;
}());
exports.Carro = Carro;
