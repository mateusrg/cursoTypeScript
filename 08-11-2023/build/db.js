"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mariadb = require("mariadb");
const banco = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'farmacia',
    waitForConnections: true,
    connectionLimit: 10
});
exports.default = banco;
banco.execute(`
    CREATE DATABASE IF NOT EXISTS farmacia;
`);
banco.execute(`
    CREATE TABLE IF NOT EXISTS medicamentos(
        id_medicamento INT AUTO_INCREMENT PRIMARY KEY,
        nome VARCHAR(50) NOT NULL,
        quantidade_em_estoque INT NOT NULL,
        preco_por_unidade DECIMAL(10, 2) NOT NULL
    );
`);
banco.execute(`
    CREATE TABLE IF NOT EXISTS farmacia(
        id_farmacia INT AUTO_INCREMENT PRIMARY KEY,
        id_medicamento INT NOT NULL,
        FOREIGN KEY (id_medicamento) REFERENCES medicamentos(id_medicamento)
    );
`);
banco.execute(`
        CREATE TABLE IF NOT EXISTS caixa(
            dinheiro DECIMAL (10, 2) NOT NULL
        );
`);
