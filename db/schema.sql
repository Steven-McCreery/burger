
-- creating the database and then setting up the table within the newly created db
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
	id INT AUTO_INCREMENT,
	burger_name VARCHAR(50) NOT NULL,
	devoured BOOLEAN NOT NULL DEFAULT false,
	date TIMESTAMP NOT NULL,
	PRIMARY KEY (id)
);

