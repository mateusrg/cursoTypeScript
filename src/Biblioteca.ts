import * as leitor from "readline-sync"
import banco from "./db"
class Livro {
    public titulo: string;
    public autor: string;
    public anoPublicacao: number;
    public quantidadeDisponivel: number;

    constructor(titulo: string, autor: string, anoPublicacao: number, quantidadeDisponivel: number) {
        this.titulo = titulo
        this.autor = autor
        this.anoPublicacao = anoPublicacao
        this.quantidadeDisponivel = quantidadeDisponivel
    }    
}

class Usuario {
    public nome: string;
    public email: string;

    constructor(nome: string, email: string) {
        this.nome = nome
        this.email = email
    }
}

export class SistemaBiblioteca {    
    public cadastrarLivro(): void {
        let titulo: string = leitor.question("Qual o nome do livro que voce quer cadastrar? ");
        let autor: string = leitor.question("Qual o autor dele? ");
        let anoPublicacao: number = leitor.questionInt("Em que ano ele foi publicado? ");
        let quantidadeDisponivel: number
        while (true) {
            quantidadeDisponivel = leitor.questionInt("Há quantas unidades dele disponíveis na biblioteca? ");
            if (quantidadeDisponivel < 0) {
                console.log("Nao use numeros negativos");
            } else {
                break
            }
        }
        let livro: Livro = new Livro(titulo, autor, anoPublicacao, quantidadeDisponivel);
        console.log(`${livro.titulo} cadastrado`);
        this.criarLivroBanco(livro);
    }

    public async criarLivroBanco(livro: Livro) : Promise<void> {
        try {
            await executeDatabaseQuery(`INSERT INTO livros(titulo, autor, anoPublicacao, quantidadeDisponivel) VALUES (?, ?, ?, ?)`, [livro.titulo, livro.autor, livro.anoPublicacao, livro.quantidadeDisponivel]);
            console.log('');
        } catch (err) {
            console.log('Erro: ', err);
        }
    }

    public cadastrarUsuario(): void {
        let nome: string = leitor.question("Qual o nome do usuario? ");
        let email: string = leitor.question("Qual o email dele? ");
        let usuario = new Usuario(nome, email);
        this.cadastrarUsuarioBanco(usuario);
    }

    public async cadastrarUsuarioBanco(usuario: Usuario): Promise<void> {
        try {
            await executeDatabaseQuery(`INSERT INTO usuarios (nome, email) VALUES (?, ?)`, [usuario.nome, usuario.email]);
            console.log(`\nUsuario ${usuario.nome} inserido no BD com sucesso!`);
        } catch (err) {
            console.log("Erro: ", err);
        }
    }

    async emprestarLivro(): Promise<void> {
        await this.usuariosBanco();
        let id_usuario = leitor.questionInt("Insira o ID do usuario: ");
        await this.livrosBanco();
        let id_livro = leitor.questionInt("Insira o ID do livro: ");
        try {
            // Inserir o empréstimo
            await executeDatabaseQuery(`INSERT INTO sistemabiblioteca (id_usuario, id_livro) VALUES (?, ?)`, [id_usuario, id_livro]);
            console.log("Livro emprestado com sucesso!");

            // Atualizar a quantidade disponível dos livros
            await executeDatabaseQuery(`UPDATE livros SET quantidadeDisponivel = quantidadeDisponivel - 1 WHERE id_livro = ?`, [id_livro]);
        } catch (err) {
            console.log("Erro: ", err);
        }
    }

    async devolverLivro(): Promise<void> {
        await this.emprestimosBanco()
        let idEmprestimo = leitor.questionInt("Insira o ID do emprestimo: ");
        let idLivro = leitor.questionInt("Informe o ID do livro que foi mostrado acima para confirmar: ")
        try {
            await executeDatabaseQuery("SELECT id_livro FROM sistemabiblioteca WHERE id_biblioteca = ?", [idEmprestimo]);
        } catch (err) {
            console.log("Erro: ", err);
        }

        try {
            // Deletar dos dados de empréstimo
            await executeDatabaseQuery("DELETE FROM sistemabiblioteca WHERE id_biblioteca = ?", [idEmprestimo])

            // Atualizar a quantidade em estoque do livro
            await executeDatabaseQuery("UPDATE livros SET quantidadeDisponivel = quantidadeDisponivel + 1 WHERE id_livro = ?", [idLivro])
        } catch (err) {
            console.log("Erro: ", err);
        }
    }

    async visualizarLivro(): Promise<void> {
        await this.livrosBanco();
    }

    // getters

    public async usuariosBanco(): Promise<void> {
        try {
            const usuarios = await executeDatabaseQuery(`SELECT * FROM usuarios`, []);
            console.log("Base de dados de Usuarios:");
            return usuarios.forEach(({id_usuario, nome, email}: any) => {
                console.log(`ID: ${id_usuario}, Nome: ${nome}, Email: ${email}`);
            })
        } catch (err) {
            console.log("Erro: ", err);
        }
    }

    public async livrosBanco(): Promise<void> {
        try {
            const livros = await executeDatabaseQuery(`SELECT * FROM livros`, []);
            console.log("Base de dados de Livros:");
            return livros.forEach(({id_livro, titulo, autor, quantidadeDisponivel}: any) => {
                console.log(`ID: ${id_livro}, Titulo: ${titulo}, Autor: ${autor}, Quantidade Disponível: ${quantidadeDisponivel}`);
            });
        } catch (err) {
            console.log("Erro: ", err);
        }
    }

    public async emprestimosBanco(): Promise<void> {
        try {
            const emprestimos = await executeDatabaseQuery(`
            SELECT sistemabiblioteca.id_biblioteca, usuarios.nome, livros.titulo FROM sistemabiblioteca INNER JOIN usuarios ON usuarios.id_usuario = sistemabiblioteca.id_usuario INNER JOIN livros ON livros.id_livro = sistemabiblioteca.id_livro`, []);
            console.log("Livros emprestados: ");
            emprestimos.forEach(({id_biblioteca, nome, titulo}: any) => {
                console.log(`ID do Emprestimo: ${id_biblioteca}, Usuario: ${nome}, Livro: ${titulo}`);
            });
        } catch (err) {
            console.log("Erro: ", err);
        }
    }

    // public emprestarLivro(): void {
    //     if (this.livrosDisponiveis.length === 0) {
    //         console.log("Nao ha nenhum livro cadastrado para ser emprestado");
    //         return
    //     }
    //     if (this.usuariosCadastrados.length === 0) {
    //         console.log("Nao ha nenhum usuario cadastrado para pegar livros emprestado");
    //         return            
    //     }
    //     this.livrosDisponiveis.forEach(l => {console.log(`[${l.id}] ${l.titulo}`);});
    //     let livroId: number
    //     while (true) {
    //         livroId = leitor.questionInt("Qual o ID do livro? ");
    //         if (livroId > this.livrosDisponiveis.length || livroId <= 0) {
    //             console.log("ID invalido");                
    //         } else {
    //             break
    //         }
    //     }
    //     this.usuariosCadastrados.forEach(u => {console.log(`[${u.id}] ${u.nome}`);});
    //     let usuarioId: number
    //     while (true) {
    //         usuarioId = leitor.questionInt("Qual o ID do usuario? ");
    //         if (usuarioId > this.usuariosCadastrados.length || usuarioId <= 0) {
    //             console.log("ID invalido");
    //         } else {
    //             break
    //         }
    //     }
    //     let livro: Livro = this.livrosDisponiveis.find(l => l.id == livroId);
    //     if (livro.quantidadeDisponivel <= 0) {
    //         console.log("Nao tem nenhuma copia desse livro na biblioteca para ele ser emprestado.");
    //         return
    //     }
    //     let usuario: Usuario = this.usuariosCadastrados.find(u => u.id == usuarioId);
    //     if (usuario.livrosEmprestados.length >= 3) {
    //         console.log("O usuario atingiu o limite de livros emprestados. Devolva um livro para poder pegar outro.");
    //         return
    //     }
    //     let indiceLivro: number = this.livrosDisponiveis.indexOf(livro);
    //     let indiceUsuario: number = this.usuariosCadastrados.indexOf(usuario);
    //     this.usuariosCadastrados[indiceUsuario].livrosEmprestados.push(livro);
    //     this.livrosDisponiveis[indiceLivro].quantidadeDisponivel -= 1
    //     console.log(`${livro.titulo} emprestado para ${usuario.nome}`);
    // }

    // public devolverLivro(): void {
    //     if (this.usuariosCadastrados.length === 0) {
    //         console.log("Nao tem nenhum usuario cadastrado para devolver um livro");
    //         return
    //     }
    //     this.usuariosCadastrados.forEach(u => {console.log(`[${u.id}] ${u.nome}`);});
    //     let usuarioId: number
    //     while (true) {
    //         usuarioId = leitor.questionInt("Qual o ID do usuario? ");
    //         if (usuarioId > this.usuariosCadastrados.length || usuarioId <= 0) {
    //             console.log("ID invalido");
    //         } else {
    //             break
    //         }
    //     }
    //     if (this.usuariosCadastrados[usuarioId-1].livrosEmprestados.length === 0) {
    //         console.log("Esse usuario nao tem nenhum livro para devolver.");
    //         return
    //     }
    //     this.usuariosCadastrados[usuarioId-1].livrosEmprestados.forEach(l => {console.log(`[${l.id}] ${l.titulo}`);});
    //     let livroId: number
    //     while (true) {
    //         livroId = leitor.questionInt("Qual o ID do livro? ");
    //         if (livroId > this.livrosDisponiveis.length || livroId <= 0) {
    //             console.log("ID invalido");                
    //         } else {
    //             break
    //         }
    //     }
    //     let livro: Livro = this.usuariosCadastrados[usuarioId-1].livrosEmprestados.find(l => l.id === livroId);
    //     let indiceLivro: number = this.usuariosCadastrados[usuarioId-1].livrosEmprestados.findIndex(l => l === livro)
    //     let usuario: Usuario = this.usuariosCadastrados.find(u => u.id === usuarioId);
    //     let indiceUsuario: number = this.usuariosCadastrados.findIndex(u => u === usuario);
    //     this.usuariosCadastrados[indiceUsuario].livrosEmprestados.splice(indiceLivro, 1)
    //     this.livrosDisponiveis[indiceLivro].quantidadeDisponivel += 1
    //     console.log(`${usuario.nome} devolveu ${livro.titulo}`);
    // }

    // public consultarLivrosDisponiveis(): void {
    //     if (this.livrosDisponiveis.length === 0) {
    //         console.log("Nao tem nenhum livro cadastrado.");
    //         return
    //     }
    //     this.livrosDisponiveis.forEach(l => {
    //         console.log(`O livro de ID ${l.id} se chama ${l.titulo}, foi escrito em ${l.anoPublicacao} por ${l.autor} e tem ${l.quantidadeDisponivel} disponiveis na biblioteca.`);
    //     });
    // }

    
}
async function executeDatabaseQuery(query: string, params: any[]): Promise<Array<void>> {
    try {
        const result: Array<void> = await banco.execute(query, params);
        return result
    } catch (err) {
        console.error('Erro na execução da consulta', err);
        throw err
    }
}
