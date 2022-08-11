DROP DATABASE IF EXISTS chat;
CREATE DATABASE chat;

USE chat;

/* Create other tables and define schemas for them here! */

CREATE TABLE Users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_name VARCHAR(20)
);

CREATE TABLE Rooms (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  room_name VARCHAR(20)

);

CREATE TABLE Messages (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  text VARCHAR(280),
  user_id INTEGER,
  room_id INTEGER,
  FOREIGN KEY (user_id) REFERENCES Users(id),
  FOREIGN KEY (room_id) REFERENCES Rooms(id)
);

CREATE TABLE Friends (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  user_id INTEGER,
  friend_id INTEGER,
  FOREIGN KEY (user_id) REFERENCES Users(id),
  FOREIGN KEY (friend_id) REFERENCES Users(id)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

