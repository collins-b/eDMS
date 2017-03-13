DROP DATABASE IF EXISTS edms;
CREATE DATABASE edms;

CREATE TABLE users (
    ID SERIAL PRIMARY KEY,
    firstName VARCHAR,
    otherNames VARCHAR,
    email VARCHAR,
    phone VARCHAR,
    userName VARCHAR,
    userPassword VARCHAR,
    userRole VARCHAR
);

CREATE TABLE documents (
    ID SERIAL PRIMARY KEY,
    title VARCHAR,
    content VARCHAR,
    owner VARCHAR,
    role VARCHAR,
    docId VARCHAR
);

CREATE TABLE roles (
    ID SERIAL PRIMARY KEY,
    title VARCHAR,
    accessLevel VARCHAR
);