import * as leitor from "readline-sync"
import { Circulo, Triangulo, Retangulo } from "./Geometria"

function main() {
    let forma: any
    switch(leitor.questionInt("Voce precisa da area de que forma geometrica?\n[1] Circulo\n[2] Triangulo\n[3] Retangulo\n")) {
        case 1:
            forma = new Circulo
            break;
        case 2:
            forma = new Triangulo
            break;
        case 3:
            forma = new Retangulo
            break;
        default:
            console.log("Invalido\n")
            main()
    }
    forma.getArea()
    if(leitor.questionInt("Quer calcular a area de outa forma geometrica?\n[1] Sim\n[2] Nao\n") == 1) {
        main()
    }
}

main()
