import * as leitor from "readline-sync"
import { Carro } from "./Carro"
let menu: Boolean = true

let camaro = new Carro(8, "Chrevolet", "Camaro", 2019);
let corsa = new Carro(15, "Chrevolet", "Corsa", 1999);
let fusca = new Carro(10, "Volkswagen", "Corsa", 1980);
let monza = new Carro(7, "Chrevolet", "Monza", 1990);
let lancer = new Carro(11, "Mitsubishi", "Lancer Evolution", 2020);
let civic = new Carro(13, "Honda", "Civic", 2018);
let corolla = new Carro(12, "Toyota", "UP", 2017);
let up = new Carro(15, "Volkswagen", "UP", 2017);
let focus = new Carro(12, "Ford", "Focus", 2012)
let vectra = new Carro(10, "Chrevolet", "Vectra", 2005)

let carro: Array<Carro> = [camaro, corsa, fusca, monza, lancer, civic, corolla, up, focus, vectra];
let carroEscolhido
while(menu) {
    let option = leitor.questionInt("Selecione uma opcao: \n1- Ver base de dados\n2- Escolher carro\n");
    switch(option) {
        case 1:
            console.log(carro);
            break
        case 2:
            let nome = leitor.question("Digite o nome do carro: ").toLowerCase();
            for(let i=0; i < carro.length; i++) {
                if(nome === carro[i].modelo.toLowerCase()) {
                    carroEscolhido = carro[i]
                }
            }
            carroEscolhido.getValues();
            let menu2: Boolean = true
            while(menu2) {
                let opt = leitor.questionInt("1- Abastecer\n2- Viajar\n3- Voltar ao menu principal")
                switch(opt) {
                    case 1:
                        let gasolina = leitor.questionInt("Quanto de gasolina você quer abastecer?")
                        carroEscolhido.setCombustivel(gasolina)
                        break;
                    case 2:
                        let km = leitor.questionInt("Qual a distância que você vai percorrer, em km?")
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