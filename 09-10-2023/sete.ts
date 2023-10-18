import * as leitor from "readline-sync"
function main(): void {
    let tempoOntem:Number = leitor.questionFloat("Quantas horas voce passou no celular ontem? ");
    let tempoHoje:Number = leitor.questionFloat("Quantas horas voce passou no celular hoje? ");
    console.log(timeSpent(tempoOntem, tempoHoje))
}

function timeSpent(ontem, hoje): Boolean {
    return hoje > ontem
}

main()