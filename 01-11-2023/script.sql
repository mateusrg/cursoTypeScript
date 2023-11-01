CREATE TABLE Livro (
	id_livro INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	titulo VARCHAR(255) NOT NULL,
	autor VARCHAR(255) NOT NULL,
	ano_publicacao INT NOT NULL,
	quantidade INT NOT NULL
);

CREATE TABLE Usuario (
	id_usuario INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	nome VARCHAR(255) NOT NULL,
	email VARCHAR(255) NOT NULL,
	livros_emprestados INT,
	FOREIGN KEY (livros_emprestados) REFERENCES livro(id_livro)
);

CREATE TABLE SistemaBiblioteca (
	id_biblioteca INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	id_livro INT NOT NULL,
	id_usuario INT NOT NULL,
	FOREIGN KEY (id_livro) REFERENCES livro(id_livro),
	FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario)
);

INSERT INTO usuario (nome, email)
VALUES ('Jorge', 'jorge@gmail.com'), ('João', 'joão@outlook.com'), ('Maria', 'maria@gmail.com'), ('Pedro', 'pedro@gmail.com'), ('Lara', 'lara@gmail.com');

INSERT INTO livro (titulo, autor, ano_publicacao, quantidade)
VALUES
('Ao Farol', 'Virginia Woolf', 1927, 12),
('A casa dos espíritos', 'Isabel Allende', 1982, 8),
('Memórias Póstumas de Brás Cubas', 'Machado de Assis', 1881, 15),
('Cem Anos de Solidão', 'Gabriel García Márquez', 1967, 2),
('O Rei Lear', 'William Shakespeare', 1606, 9);

INSERT INTO sistemabiblioteca (id_livro, id_usuario)
VALUES (1, 3), (4, 2), (5, 3), (2, 1), (4, 5);

SELECT * FROM livro;
SELECT * FROM usuario;
SELECT * FROM sistemabiblioteca;
