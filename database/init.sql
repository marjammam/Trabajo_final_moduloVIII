SET NAMES utf8mb4;
CREATE DATABASE IF NOT EXISTS cvdb CHARACTER SET utf8mb4;
USE cvdb;

CREATE TABLE persona (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(100),
  apellido VARCHAR(100),
  ciudad VARCHAR(100),
  foto VARCHAR(255)
);

CREATE TABLE formacion (
  id INT PRIMARY KEY AUTO_INCREMENT,
  titulo VARCHAR(150),
  institucion VARCHAR(150),
  anio VARCHAR(20),
  persona_id INT,
  FOREIGN KEY (persona_id) REFERENCES persona(id)
);

INSERT INTO persona (nombre, apellido, ciudad, foto)
VALUES ('Maribel', 'Jamira Mamani', 'Cochabamba', '/foto.jpeg');

INSERT INTO formacion (titulo, institucion, anio, persona_id) VALUES
('Bachiller en Humanidades', 'U.E. Paraiso', '2016', 1),
('Tecnico Superior en Informatica', 'Instituto Federico Alvarez Plata', '2021', 1),
('Diplomado en Diseño UX/UI', 'Universidad Univalle', '2026', 1),
('Lic. Ingeniería de Sistemas', 'Universidad Mayor de San Simon', '2026', 1);