CREATE DATABASE students_database ;

CREATE TABLE students (
	id VARCHAR(40) PRIMARY KEY NOT NULL,
	email VARCHAR(50) NOT NULL,
	full_name VARCHAR(50) NOT NULL,
	date_of_birth DATE NOT NULL,
	gender VARCHAR(50) NOT NULL
);

