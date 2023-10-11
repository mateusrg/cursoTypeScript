import * as leitor from "readline-sync"
import { Calculadora } from "./Calculadora";

function main() {
    let calculadora = new Calculadora
    calculadora.setValores()
    switch(leitor.questionInt("Que operacao voce quer fazer?\n[1] Mais\n[2] Menos\n[3] Vezes\n[4] Dividir\n")) {
        case 1:
            calculadora.getMais();
            break;
        case 2:
            calculadora.getMenos();
            break;
        case 3:
            calculadora.getVezes();
            break;
        case 4:
            calculadora.getDividir();
            break;
    }
    if(leitor.questionInt("Quer fazer outra conta?\n[1] Sim\n[2] Nao\n") == 1) {
        main()
    }
}

main()
