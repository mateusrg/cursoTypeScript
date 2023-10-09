import * as leitor from "readline-sync"
function main(): void {
    let salarioBruto: number;
    let salarioINSS: number;
    let salarioLiquido: number;

    salarioBruto = leitor.questionFloat("Insira o valor do seu salário bruto: ");
    salarioINSS = INSS(salarioBruto);
    salarioLiquido = IRRF(salarioBruto);

    console.log(`Seu salário é: ${salarioBruto}`)
    console.log(`O valor com o desconto do INSS é: ${salarioINSS}`)
    console.log(`Seu salário líquido é: ${salarioLiquido}`)
}

function INSS(salario:number): number {
    if(salario <= 1320){
        return salario * 0.925
    }

    if(salario > 1319 && salario < 2572){
        return salario * 0.91
    }

    if(salario > 2572 && salario < 3856){
        return salario * 0.88
    }

    if(salario > 3856){
        return salario * 0.86
    }

    console.log("Valor inválido")
    return 0
}

function IRRF(salario: number): number {
    if(salario <= 2112){
        return salario
    }

    if(salario > 2826 && salario <= 3751){
        return salario * 0.925
    }
    
    if(salario > 3751 && salario <= 4664){
        return salario * 0.85
    }

    if(salario > 2112 && salario <= 2826){
        return salario * 0.785
    }

    if(salario > 4664){
        return salario * 0.725
    }

    console.log("Valor inválido")
    return 0

}

main()