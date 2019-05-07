USE `superevent`;

DROP TABLE IF EXISTS  `superevent`.`users_roles`;
DROP TABLE IF EXISTS  `superevent`.`user`;
DROP TABLE IF EXISTS  `superevent`.`role`;

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


INSERT INTO role (role_name) VALUES
('ROLE_USER'),
('ROLE_EMPLOYEE'),
('ROLE_ADMIN');

INSERT INTO user (user_name, password) VALUES
('user','$2a$12$JnhOR4PzlauZYqDXuUVaduTDcI8KP5f0wwHwFcC7Vu8J61eg3PVmi'),
('emp','$2a$12$N.utNjNiERnrUKXON/OASOIIGl53tlOF4MnvQF/Q1hgYDHM8lARyC'),
('admin','$2a$12$4IKzG8nZ/rkOSFkF.d/AF.33qfc/q/0R/jZDz8zdzpzKsvzxiL7KC');

INSERT INTO users_roles (user, role) VALUES
('user','ROLE_USER'),
('emp','ROLE_EMPLOYEE'),
('emp','ROLE_USER'),
('admin','ROLE_EMPLOYEE'),
('admin','ROLE_USER'),
('admin','ROLE_ADMIN');