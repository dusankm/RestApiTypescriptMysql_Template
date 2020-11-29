CREATE DATABASE inventory2;

USE inventory2;

CREATE TABLE product(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    stock INT(11) NOT NULL
);

insert into product values
	(1,'Esponja verde',50),
    (2,'Esponja azul',50),
    (3,'Cloro Magistral',50);

DESCRIBE product;