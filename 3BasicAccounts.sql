USE `superevent`;

DROP TABLE IF EXISTS  `superevent`.`users_roles`;
DROP TABLE IF EXISTS  `superevent`.`users_events`;
DROP TABLE IF EXISTS  `superevent`.`user`;
DROP TABLE IF EXISTS  `superevent`.`role`;
DROP TABLE IF EXISTS  `superevent`.`event`;

CREATE TABLE `user` (
`user_name` varchar(50) NOT NULL,
`password` varchar(80) NOT NULL,
PRIMARY KEY (`user_name`)
);

CREATE TABLE `role` (

`role_name` varchar(50) NOT NULL,
PRIMARY KEY (`role_name`)
);

CREATE TABLE `users_roles` (

`user` varchar(45) NOT NULL,
`role` varchar(45) NOT NULL,

PRIMARY KEY (`user`,`role`),

CONSTRAINT `FK_USER` FOREIGN KEY (`user`) REFERENCES `user` (`user_name`),
CONSTRAINT `FK_ROLE` FOREIGN KEY (`role`) REFERENCES `role` (`role_name`)
);

CREATE TABLE `event` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `price` DECIMAL(8,2) NULL,
  `lessons` INT NULL,
  `timetable` VARCHAR(45) NULL,
  `short_description` VARCHAR(200) NOT NULL,
  `description` VARCHAR(1000) NULL,
  `img_path` VARCHAR(200) NULL,
  `seats` INT NULL,
  PRIMARY KEY (`id`)
);
  
CREATE TABLE `users_events` (
`user` varchar(45) NOT NULL,
`event` INT NOT NULL,

PRIMARY KEY (`user`,`event`),

CONSTRAINT `FK_USER_EVENT` FOREIGN KEY (`user`) REFERENCES `user` (`user_name`),
CONSTRAINT `FK_EVENT_USER` FOREIGN KEY (`event`) REFERENCES `event` (`id`)
  );

INSERT INTO role (role_name) VALUES
('ROLE_USER'),
('ROLE_EMPLOYEE'),
('ROLE_ADMIN');

INSERT INTO user (user_name, password) VALUES
('user','$2a$12$JnhOR4PzlauZYqDXuUVaduTDcI8KP5f0wwHwFcC7Vu8J61eg3PVmi'),
('user2','$2a$12$7TVYSEnRhdsqPLOych6vA.0wI1Rj3vH4Lf3AgTVoPCuvlGRwm5Sku'),
('emp','$2a$12$N.utNjNiERnrUKXON/OASOIIGl53tlOF4MnvQF/Q1hgYDHM8lARyC'),
('admin','$2a$12$4IKzG8nZ/rkOSFkF.d/AF.33qfc/q/0R/jZDz8zdzpzKsvzxiL7KC');

INSERT INTO users_roles (user, role) VALUES
('user','ROLE_USER'),
('user2','ROLE_USER'),
('emp','ROLE_EMPLOYEE'),
('emp','ROLE_USER'),
('admin','ROLE_EMPLOYEE'),
('admin','ROLE_USER'),
('admin','ROLE_ADMIN');

INSERT INTO event (name, price, lessons, timetable, short_description, description, img_path, `seats`) VALUES
('Kurs Java - zaawansowany', 3999, 24, 'PN-PT, 8-16', 'Krótki opis musi być', 'Długi opis nie musi być ale jest długi', 'assets/img/java-logo.jpg', 15),
('Kurs Java - podstawy', 2000, 12, 'PN-PT, 8-16', 'Krótki 2222 musi 2222', 'Długi opis nie 22222 być ale jest 22222', 'assets/img/java-logo.jpg', 25),
('Kurs nie wiadomo czego', 999.99, 5, 'WT 10-15, PT 10-15', 'Krotki opis nie wiadomo czego', 'Długi opis nie musi być ale niech będzie i to długi', 'assets/img/java-logo.jpg', 1);

INSERT INTO users_events (user, event) VALUES
('user', 1),
('user2', 1),
('user2', 3);