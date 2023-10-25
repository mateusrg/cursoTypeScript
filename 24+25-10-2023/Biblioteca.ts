import * as leitor from "readline-sync"
class Livro {
    public id: number;
    public titulo: string;
    public autor: string;
    public anoPublicacao: number;
    public quantidadeDisponivel: number;

    constructor(id: number, titulo: string, autor: string, anoPublicacao: number, quantidadeDisponivel: number) {
        this.id = id
        this.titulo = titulo
        this.autor = autor
        this.anoPublicacao = anoPublicacao
        this.quantidadeDisponivel = quantidadeDisponivel
    }    
}

class Usuario {
    public id: number;
    public nome: string;
    public email: string;
    public livrosEmprestados: Array<Livro>;

    constructor(id: number, nome: string, email: string, livrosEmprestados: Array<Livro>) {
        this.id = id
        this.nome = nome
        this.email = email
        this.livrosEmprestados = livrosEmprestados
    }
}

interface Biblioteca {
    cadastrarLivro(): void;
    cadastrarUsuario(): void;
    emprestarLivro(livroId: number, usuarioId: number): void;
    devolverLivro(livroId: number, usuarioId: number): void;
    consultarLivrosDisponiveis(): void
}

export class SistemaBiblioteca implements Biblioteca {
    private livrosDisponiveis: Array<Livro>
    private usuariosCadastrados: Array<Usuario>
    constructor() {
        this.livrosDisponiveis = [];
        this.usuariosCadastrados = [];
    }
    
    public cadastrarLivro(): void {
        let id: number = this.livrosDisponiveis.length + 1;
        let titulo: string = leitor.question("Qual o nome do livro que voce quer cadastrar? ");
        let autor: string = leitor.question("Qual o autor dele? ");
        let anoPublicacao: number = leitor.question("Em que ano ele foi publicado? ");
        let quantidadeDisponivel: number
        while (true) {
            quantidadeDisponivel = leitor.questionInt("Há quantas unidades dele disponíveis na biblioteca? ");
            if (quantidadeDisponivel < 0) {
                console.log("Nao use numeros negativos");
            } else {
                break                
            }
        }
        let livro: Livro = new Livro(id, titulo, autor, anoPublicacao, quantidadeDisponivel);
        this.livrosDisponiveis.push(livro)
        console.log(`${titulo} cadastrado`);
    }

    public cadastrarUsuario(): void {
        let id: number = this.usuariosCadastrados.length + 1;
        let nome: string = leitor.question("Qual o nome do usuario? ")
        let email: string = leitor.question("Qual o email dele? ")
        let livrosEmprestados: Array<Livro> = []
        let usuario = new Usuario(id, nome, email, livrosEmprestados)
        this.usuariosCadastrados.push(usuario)
        console.log(`${nome} cadastrado(a)`);
    }

    public emprestarLivro(): void {
        if (this.livrosDisponiveis.length === 0) {
            console.log("Nao ha nenhum livro cadastrado para ser emprestado");
            return
        }
        if (this.usuariosCadastrados.length === 0) {
            console.log("Nao ha nenhum usuario cadastrado para pegar livros emprestado");
            return            
        }
        this.livrosDisponiveis.forEach(l => {console.log(`[${l.id}] ${l.titulo}`);});
        let livroId: number
        while (true) {
            livroId = leitor.questionInt("Qual o ID do livro? ");
            if (livroId > this.livrosDisponiveis.length || livroId <= 0) {
                console.log("ID invalido");                
            } else {
                break
            }
        }
        this.usuariosCadastrados.forEach(u => {console.log(`[${u.id}] ${u.nome}`);});
        let usuarioId: number
        while (true) {
            usuarioId = leitor.questionInt("Qual o ID do usuario? ");
            if (usuarioId > this.usuariosCadastrados.length || usuarioId <= 0) {
                console.log("ID invalido");
            } else {
                break
            }
        }
        let livro: Livro = this.livrosDisponiveis.find(l => l.id == livroId);
        if (livro.quantidadeDisponivel <= 0) {
            console.log("Nao tem nenhuma copia desse livro na biblioteca para ele ser emprestado.");
            return
        }
        let usuario: Usuario = this.usuariosCadastrados.find(u => u.id == usuarioId);
        if (usuario.livrosEmprestados.length >= 3) {
            console.log("O usuario atingiu o limite de livros emprestados. Devolva um livro para poder pegar outro.");
            return
        }
        let indiceLivro: number = this.livrosDisponiveis.indexOf(livro);
        let indiceUsuario: number = this.usuariosCadastrados.indexOf(usuario);
        this.usuariosCadastrados[indiceUsuario].livrosEmprestados.push(livro);
        this.livrosDisponiveis[indiceLivro].quantidadeDisponivel -= 1
        console.log(`${livro.titulo} emprestado para ${usuario.nome}`);
    }

    public devolverLivro(): void {
        if (this.usuariosCadastrados.length === 0) {
            console.log("Nao tem nenhum usuario cadastrado para devolver um livro");
            return
        }
        this.usuariosCadastrados.forEach(u => {console.log(`[${u.id}] ${u.nome}`);});
        let usuarioId: number
        while (true) {
            usuarioId = leitor.questionInt("Qual o ID do usuario? ");
            if (usuarioId > this.usuariosCadastrados.length || usuarioId <= 0) {
                console.log("ID invalido");
            } else {
                break
            }
        }
        if (this.usuariosCadastrados[usuarioId-1].livrosEmprestados.length === 0) {
            console.log("Esse usuario nao tem nenhum livro para devolver.");
            return
        }
        this.usuariosCadastrados[usuarioId-1].livrosEmprestados.forEach(l => {console.log(`[${l.id}] ${l.titulo}`);});
        let livroId: number
        while (true) {
            livroId = leitor.questionInt("Qual o ID do livro? ");
            if (livroId > this.livrosDisponiveis.length || livroId <= 0) {
                console.log("ID invalido");                
            } else {
                break
            }
        }
        let livro: Livro = this.usuariosCadastrados[usuarioId-1].livrosEmprestados.find(l => l.id === livroId);
        let indiceLivro: number = this.usuariosCadastrados[usuarioId-1].livrosEmprestados.findIndex(l => l === livro)
        let usuario: Usuario = this.usuariosCadastrados.find(u => u.id === usuarioId);
        let indiceUsuario: number = this.usuariosCadastrados.findIndex(u => u === usuario);
        this.usuariosCadastrados[indiceUsuario].livrosEmprestados.splice(indiceLivro, 1)
        this.livrosDisponiveis[indiceLivro].quantidadeDisponivel += 1
        console.log(`${usuario.nome} devolveu ${livro.titulo}`);
    }

    public consultarLivrosDisponiveis(): void {
        if (this.livrosDisponiveis.length === 0) {
            console.log("Nao tem nenhum livro cadastrado.");
            return
        }
        this.livrosDisponiveis.forEach(l => {
            console.log(`O livro de ID ${l.id} se chama ${l.titulo}, foi escrito em ${l.anoPublicacao} por ${l.autor} e tem ${l.quantidadeDisponivel} disponiveis na biblioteca.`);
        });
    }
}