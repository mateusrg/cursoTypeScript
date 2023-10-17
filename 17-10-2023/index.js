"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
var Carro_1 = require("./Carro");
var menu = true;
var camaro = new Carro_1.Carro(8, "Chrevolet", "Camaro", 2019);
var corsa = new Carro_1.Carro(15, "Chrevolet", "Corsa", 1999);
var fusca = new Carro_1.Carro(10, "Volkswagen", "Corsa", 1980);
var monza = new Carro_1.Carro(7, "Chrevolet", "Monza", 1990);
var lancer = new Carro_1.Carro(11, "Mitsubishi", "Lancer Evolution", 2020);
var civic = new Carro_1.Carro(13, "Honda", "Civic", 2018);
var corolla = new Carro_1.Carro(12, "Toyota", "UP", 2017);
var up = new Carro_1.Carro(15, "Volkswagen", "UP", 2017);
var focus = new Carro_1.Carro(12, "Ford", "Focus", 2012);
var vectra = new Carro_1.Carro(10, "Chrevolet", "Vectra", 2005);
var carro = [camaro, corsa, fusca, monza, lancer, civic, corolla, up, focus, vectra];
var carroEscolhido;
while (menu) {
    var option = leitor.questionInt("Selecione uma opcao: \n1- Ver base de dados\n2- Escolher carro\n");
    switch (option) {
        case 1:
            console.log(carro);
            break;
        case 2:
            var nome = leitor.question("Digite o nome do carro: ").toLowerCase();
            for (var i = 0; i < carro.length; i++) {
                if (nome === carro[i].modelo.toLowerCase()) {
                    carroEscolhido = carro[i];
                }
            }
            carroEscolhido.getValues();
            var menu2 = true;
            while (menu2) {
                var opt = leitor.questionInt("1- Abastecer\n2- Viajar\n3- Voltar ao menu principal");
                switch (opt) {
                    case 1:
                        var gasolina = leitor.questionInt("Quanto de gasolina você quer abastecer?");
                        carroEscolhido.setCombustivel(gasolina);
                        break;
                    case 2:
                        var km = leitor.questionInt("Qual a distância que você vai percorrer, em km?");
                        carroEscolhido.viajar(km);
                        break;
                    case 3:
                        console.log("Retornando ao menu principal...");
                        menu2 = false;
                        break;
                }
            }
            break;
        case 3:
            console.log("Saindo do sistema");
            menu = false;
            break;
    }
}
