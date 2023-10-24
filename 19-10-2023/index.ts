import * as leitor from "readline-sync"
import { Garagem } from "./Garagem"

let menu = true
let garagem = new Garagem()
while(menu) {
    let opt = leitor.questionInt("1- Visualizar carros\n2- Adicionar carros à garagem\n3- Remover carros\n4- Sair.")
    switch(opt) {
        case 1: 
            garagem.getGaragem()
            break
        case 2: 
        }
}