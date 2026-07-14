CREATE DATABASE IF NOT EXISTS flower_shop;
USE flower_shop;

CREATE TABLE flowers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock INT NOT NULL
);

INSERT INTO flowers (name, price, stock) VALUES
('Rose',120.00,20),
('Tulip',150.00,15),
('Sunflower',90.00,30);