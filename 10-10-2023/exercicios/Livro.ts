export class Livro {
    titulo: String;
    autor: String;
    anoPublicacao: Number;

    constructor(titulo: String, autor: String, anoPublicacao: Number) {
        this.titulo = titulo
        this.autor = autor
        this.anoPublicacao = anoPublicacao
    }

    obterDetalhes(): String {
        return `Título: ${this.titulo}\nAutor: ${this.autor}\nAno de Publicacao: ${this.anoPublicacao}`
    }

}