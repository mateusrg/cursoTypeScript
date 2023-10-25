"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SistemaBiblioteca = void 0;
var leitor = require("readline-sync");
var Livro = /** @class */ (function () {
    function Livro(id, titulo, autor, anoPublicacao, quantidadeDisponivel) {
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.quantidadeDisponivel = quantidadeDisponivel;
    }
    return Livro;
}());
var Usuario = /** @class */ (function () {
    function Usuario(id, nome, email, livrosEmprestados) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.livrosEmprestados = livrosEmprestados;
    }
    return Usuario;
}());
var SistemaBiblioteca = /** @class */ (function () {
    function SistemaBiblioteca() {
        this.livrosDisponiveis = [];
        this.usuariosCadastrados = [];
    }
    SistemaBiblioteca.prototype.cadastrarLivro = function () {
        var id = this.livrosDisponiveis.length + 1;
        var titulo = leitor.question("Qual o nome do livro que voce quer cadastrar? ");
        var autor = leitor.question("Qual o autor dele? ");
        var anoPublicacao = leitor.question("Em que ano ele foi publicado? ");
        var quantidadeDisponivel;
        while (true) {
            quantidadeDisponivel = leitor.questionInt("Há quantas unidades dele disponíveis na biblioteca? ");
            if (quantidadeDisponivel < 0) {
                console.log("Nao use numeros negativos");
            }
            else {
                break;
            }
        }
        var livro = new Livro(id, titulo, autor, anoPublicacao, quantidadeDisponivel);
        this.livrosDisponiveis.push(livro);
        console.log("".concat(titulo, " cadastrado"));
    };
    SistemaBiblioteca.prototype.cadastrarUsuario = function () {
        var id = this.usuariosCadastrados.length + 1;
        var nome = leitor.question("Qual o nome do usuario? ");
        var email = leitor.question("Qual o email dele? ");
        var livrosEmprestados = [];
        var usuario = new Usuario(id, nome, email, livrosEmprestados);
        this.usuariosCadastrados.push(usuario);
        console.log("".concat(nome, " cadastrado(a)"));
    };
    SistemaBiblioteca.prototype.emprestarLivro = function () {
        if (this.livrosDisponiveis.length === 0) {
            console.log("Nao ha nenhum livro cadastrado para ser emprestado");
            return;
        }
        if (this.usuariosCadastrados.length === 0) {
            console.log("Nao ha nenhum usuario cadastrado para pegar livros emprestado");
            return;
        }
        this.livrosDisponiveis.forEach(function (l) { console.log("[".concat(l.id, "] ").concat(l.titulo)); });
        var livroId;
        while (true) {
            livroId = leitor.questionInt("Qual o ID do livro? ");
            if (livroId > this.livrosDisponiveis.length || livroId <= 0) {
                console.log("ID invalido");
            }
            else {
                break;
            }
        }
        this.usuariosCadastrados.forEach(function (u) { console.log("[".concat(u.id, "] ").concat(u.nome)); });
        var usuarioId;
        while (true) {
            usuarioId = leitor.questionInt("Qual o ID do usuario? ");
            if (usuarioId > this.usuariosCadastrados.length || usuarioId <= 0) {
                console.log("ID invalido");
            }
            else {
                break;
            }
        }
        var livro = this.livrosDisponiveis.find(function (l) { return l.id == livroId; });
        if (livro.quantidadeDisponivel <= 0) {
            console.log("Nao tem nenhuma copia desse livro na biblioteca para ele ser emprestado.");
            return;
        }
        var usuario = this.usuariosCadastrados.find(function (u) { return u.id == usuarioId; });
        if (usuario.livrosEmprestados.length >= 3) {
            console.log("O usuario atingiu o limite de livros emprestados. Devolva um livro para poder pegar outro.");
            return;
        }
        var indiceLivro = this.livrosDisponiveis.indexOf(livro);
        var indiceUsuario = this.usuariosCadastrados.indexOf(usuario);
        this.usuariosCadastrados[indiceUsuario].livrosEmprestados.push(livro);
        this.livrosDisponiveis[indiceLivro].quantidadeDisponivel -= 1;
        console.log("".concat(livro.titulo, " emprestado para ").concat(usuario.nome));
    };
    SistemaBiblioteca.prototype.devolverLivro = function () {
        if (this.usuariosCadastrados.length === 0) {
            console.log("Nao tem nenhum usuario cadastrado para devolver um livro");
            return;
        }
        this.usuariosCadastrados.forEach(function (u) { console.log("[".concat(u.id, "] ").concat(u.nome)); });
        var usuarioId;
        while (true) {
            usuarioId = leitor.questionInt("Qual o ID do usuario? ");
            if (usuarioId > this.usuariosCadastrados.length || usuarioId <= 0) {
                console.log("ID invalido");
            }
            else {
                break;
            }
        }
        if (this.usuariosCadastrados[usuarioId - 1].livrosEmprestados.length === 0) {
            console.log("Esse usuario nao tem nenhum livro para devolver.");
            return;
        }
        this.usuariosCadastrados[usuarioId - 1].livrosEmprestados.forEach(function (l) { console.log("[".concat(l.id, "] ").concat(l.titulo)); });
        var livroId;
        while (true) {
            livroId = leitor.questionInt("Qual o ID do livro? ");
            if (livroId > this.livrosDisponiveis.length || livroId <= 0) {
                console.log("ID invalido");
            }
            else {
                break;
            }
        }
        var livro = this.usuariosCadastrados[usuarioId - 1].livrosEmprestados.find(function (l) { return l.id === livroId; });
        var indiceLivro = this.usuariosCadastrados[usuarioId - 1].livrosEmprestados.findIndex(function (l) { return l === livro; });
        var usuario = this.usuariosCadastrados.find(function (u) { return u.id === usuarioId; });
        var indiceUsuario = this.usuariosCadastrados.findIndex(function (u) { return u === usuario; });
        this.usuariosCadastrados[indiceUsuario].livrosEmprestados.splice(indiceLivro, 1);
        this.livrosDisponiveis[indiceLivro].quantidadeDisponivel += 1;
        console.log("".concat(usuario.nome, " devolveu ").concat(livro.titulo));
    };
    SistemaBiblioteca.prototype.consultarLivrosDisponiveis = function () {
        if (this.livrosDisponiveis.length === 0) {
            console.log("Nao tem nenhum livro cadastrado.");
            return;
        }
        this.livrosDisponiveis.forEach(function (l) {
            console.log("O livro de ID ".concat(l.id, " se chama ").concat(l.titulo, ", foi escrito em ").concat(l.anoPublicacao, " por ").concat(l.autor, " e tem ").concat(l.quantidadeDisponivel, " disponiveis na biblioteca."));
        });
    };
    return SistemaBiblioteca;
}());
exports.SistemaBiblioteca = SistemaBiblioteca;
