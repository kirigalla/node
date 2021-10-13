--creamos la base de datos
CREATE DATABASE basecrud;

--utilizar la base de datos
use basecrud;

--creamos la tabla
CREATE TABLE usuario (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  address VARCHAR(100) NOT NULL,
  phone VARCHAR(15)
);

--mostrar todas las tablas
show tables;

-- to describe table
describe usuario;
