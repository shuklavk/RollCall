DROP DATABASE IF EXISTS users;

CREATE DATABASE users;

USE users;

CREATE TABLE userInfo (
  id int NOT NULL AUTO_INCREMENT,
  firstName varchar(255) CHARACTER SET utf8 NOT NULL,
  lastName varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  password varchar(255) NOT NULL,
  type ENUM('Teacher', 'Student') NOT NULL,
  PRIMARY KEY (id)
);

-- To put schema into database:
-- mysql -u root -p < database/UsersSchema.sql