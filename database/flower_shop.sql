CREATE DATABASE IF NOT EXISTS flower_shop;
USE flower_shop;

CREATE TABLE flowers(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    price DECIMAL(10,2),
    stock INT
);

INSERT INTO flowers(name,price,stock)
VALUES
('Rose',120,20),
('Tulip',150,15),
('Sunflower',90,40);