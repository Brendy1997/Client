CREATE DATABASE clientdb;

USE clientdb;

CREATE TABLE cliente(

    id INT(45) NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    age INT(10) NOT NULL,
    zipcode VARCHAR(6) NOT NULL,
    married INT(2) NOT NULL,
    income INT(10) NOT NULL
    PRIMARY KEY (id)
    
);

DESCRIBE cliente;