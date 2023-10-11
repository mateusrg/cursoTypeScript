import { Livro } from "./Livro";

function main(): void {
    const livro = new Livro("Nome", "Autor", 2023)
    console.log(livro.obterDetalhes())
}

main()