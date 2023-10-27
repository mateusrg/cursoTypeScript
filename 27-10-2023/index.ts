import { log } from "console";
import { Funcionario, Vendedor } from "./Classes";

let funcionario1: Funcionario = new Funcionario("Joao", 30, 3000)
let vendedor1: Vendedor = new Vendedor("Mario", 25, 3000, 50)
log("Detalhes do funcionario padrao:");
funcionario1.exibirDetalhes()
log("Detalhes do vendedor:")
vendedor1.calcularSalario()
vendedor1.exibirDetalhes()