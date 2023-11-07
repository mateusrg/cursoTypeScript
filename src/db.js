"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mariadb = require("mariadb");
var banco = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 5000,
    database: 'biblioteca',
    waitForConnections: true,
    connectionLimit: 10
});
exports.default = banco;
banco.execute("CREATE DATABASE IF NOT EXISTS biblioteca;");
banco.execute("\n    CREATE TABLE IF NOT EXISTS livros(\n        id_livro INT AUTO_INCREMENT PRIMARY KEY,\n        titulo VARCHAR(50) NOT NULL,\n        autor VARCHAR(50) NOT NULL,\n        anoPublicacao INT NOT NULL,\n        quantidadeDisponivel INT NOT NULL\n    );\n");
banco.execute("\n    CREATE TABLE IF NOT EXISTS usuarios(\n        id_usuario INT AUTO_INCREMENT PRIMARY KEY,\n        nome VARCHAR(50) NOT NULL,\n        email VARCHAR(50) NOT NULL\n    );   \n");
banco.execute("\n    CREATE TABLE IF NOT EXISTS sistemabiblioteca(\n        id_biblioteca INT AUTO_INCREMENT PRIMARY KEY,\n        id_usuario INT NOT NULL,\n        id_livro INT NOT NULL,\n        FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario),\n        FOREIGN KEY (id_livro) REFERENCES livros(id_livro)\n    );   \n");
