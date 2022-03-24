CREATE DATABASE stories;

DROP TABLE IF EXISTS stories;

CREATE TABLE stories(
	id SERIAL PRIMARY KEY,
	title varchar(255),
	name varchar(100),
	story varchar(10000)
);