CREATE DATABASE IF NOT EXISTS calculator_history;
USE calculator_history;

CREATE TABLE IF NOT EXISTS history (
    id INT AUTO_INCREMENT PRIMARY KEY,
    calculation VARCHAR(255) NOT NULL
);
