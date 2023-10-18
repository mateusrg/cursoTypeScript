import * as leitor from "readline-sync"
function main(){
    let nome = leitor.question("Insira o nome do item: ")
    let valor = leitor.questionFloat("Insira o valor do item: ")
    let desconto = leitor.questionInt("Insira o desconto (em %): ")
    console.log(`Nome do item: ${nome}`)
    console.log(`Preço original: ${valor}`)
    console.log(`Desconto: ${desconto}%`)
    console.log(`Preço com desconto: R$${valor*(1-desconto/100)}`)
}

main()