/*=========================Creating_Users====================*/

/*only for development process*/
DROP USER database_app@localhost;
DROP USER database_admin@localhost;


CREATE USER database_app@localhost IDENTIFIED BY 'dbmsproject';
CREATE USER database_admin@localhost IDENTIFIED BY 'dbmsadmin';