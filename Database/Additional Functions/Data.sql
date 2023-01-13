insert into traveler_class values ('01','Economy');
insert into traveler_class values ('02','Business');
insert into traveler_class values ('03','Platinum');

insert into aircraft_model values ('B737','Boeing',149,25816.00,530.00);
insert into aircraft_model values ('B757','Boeing',200,43490.00,530.00);
insert into aircraft_model values ('A380','Airbus',615,315292.00,634.00);

insert into passenger_type values ('01','Frequent',0.05);
insert into passenger_type values ('02','Gold',0.09);

insert into passenger(first_name,last_name,passport_number,birthday,age) values ('Emma','Watson',211513042,'1993-07-09',29);
insert into passenger(first_name,last_name,passport_number,birthday,age) values ('Liam','Benjamin',311195855,'1995-06-09',27);
insert into passenger(first_name,last_name,passport_number,birthday,age) values ('Oliver','Mason',387434732,'1994-12-12',28);
insert into passenger(first_name,last_name,passport_number,birthday,age) values ('Sophia','Addison',834654675,'1992-02-28',30);
insert into passenger(first_name,last_name,passport_number,birthday,age) values ('William','James',389517385,'1995-01-12',27);

/*insert into guest values ('10000');
insert into guest values ('10003');
insert into guest values ('10004');
*/

insert into register_user values ('10001',3,'Male',0774562345,'1234, Main Street, Apartment 101','NewYork','USA','Liam_Max','hsdjfh%87*',90442,'01');
insert into register_user values ('10002',6,'Male',0703826462,'Manvel, Texas, USA 77578','Texas','USA','Oliver_Rox','*&adfhkjah*',90273,'02');

insert into seat values ('B737','00001',true,'01');
insert into seat values ('B737','00002',true,'01');
insert into seat values ('B737','00003',true,'01');
insert into seat values ('B737','00004',true,'01');
insert into seat values ('B737','00005',false,'01');
insert into seat values ('B737','00006',false,'01');
insert into seat values ('B737','00007',false,'01');
insert into seat values ('B737','00008',false,'01');
insert into seat values ('B737','00009',false,'01');
insert into seat values ('B737','00010',false,'01');
insert into seat values ('B757','00011',true,'02');
insert into seat values ('B757','00012',true,'02');
insert into seat values ('B757','00013',true,'02');
insert into seat values ('B757','00014',true,'02');
insert into seat values ('B757','00015',false,'02');
insert into seat values ('B757','00016',false,'02');
insert into seat values ('B757','00017',false,'02');
insert into seat values ('B757','00018',false,'02');
insert into seat values ('B757','00019',false,'02');
insert into seat values ('B757','00020',false,'02');
insert into seat values ('A380','00021',true,'03');
insert into seat values ('A380','00022',true,'03');
insert into seat values ('A380','00023',true,'03');
insert into seat values ('A380','00024',true,'03');
insert into seat values ('A380','00025',false,'03');
insert into seat values ('A380','00026',false,'03');
insert into seat values ('A380','00027',false,'03');
insert into seat values ('A380','00028',false,'03');
insert into seat values ('A380','00029',false,'03');
insert into seat values ('A380','00030',false,'03');


insert into airplane values ('01','B737');
insert into airplane values ('02','B737');
insert into airplane values ('03','B737');
insert into airplane values ('04','B757');
insert into airplane values ('05','B757');
insert into airplane values ('06','B757');
insert into airplane values ('07','B757');
insert into airplane values ('08','A380');


insert into location values ('1','Sri Lanka',null);
INSERT INTO location VALUES (2,'Hambantota',1);
INSERT INTO location VALUES (3,'Colombo',1);
INSERT INTO location VALUES (4,'Indonesia',null);
INSERT INTO location VALUES (5,'Jakarta',4);
INSERT INTO location VALUES (6,'Bali',4);
INSERT INTO location VALUES (7,'India',null);
INSERT INTO location VALUES (8,'Delhi',7);
INSERT INTO location VALUES (9,'New Delhi',8);
INSERT INTO location VALUES (10,'Maharashtra',7);
INSERT INTO location VALUES (11,'Mumbai',10);
INSERT INTO location VALUES (12,'Tamil Nadu',7);
INSERT INTO location VALUES (13,'Chennai',12);
INSERT INTO location VALUES (14,'Thailand',null);
INSERT INTO location VALUES (15,'Bangkok',14);
INSERT INTO location VALUES (16,'Singapore',null);
INSERT INTO location VALUES (17,'Changi',16);


insert into airport values ('BIA',3,null,'Sri Lanka');
insert into airport values ('HRI',2,null,'Sri Lanka');
insert into airport values ('CGK',5,null,'Indonesia');
insert into airport values ('DPS',6,null,'Indonesia');
insert into airport values ('DEL',9,null,'India');
insert into airport values ('BOM',11,null,'India');
insert into airport values ('MAA',13,null,'India');
insert into airport values ('BKK',15,null,'Thailand');
insert into airport values ('DMK',15,null,'Thailand');
insert into airport values ('SIN',17,null,'Singapore');


insert into payment values ('001',750.00,25.00);
insert into payment values ('002',650.00,15.00);
insert into payment values ('003',550.00,23.00);
insert into payment values ('004',650.00,29.00);
insert into payment values ('005',250.00,31.00);


insert into flight values ('3745','BIA','BOM','02:45', 450.00);
insert into flight values ('3345','HRI','CGK','02:15', 550.00);
insert into flight values ('2345','DPS','DEL','02:05', 124.00);
insert into flight values ('1234','CGK','SIN','01:45', 255.70);
insert into flight values ('9876','MAA','BIA','01:25', 85.00);
insert into flight values ('8765','DMK','MAA','03:30', 1450.00);
insert into flight values ('7654','BKK','DPS','04:55', 411.00);
insert into flight values ('6543','BOM','DMK','03:05', 455.01);
insert into flight values ('5432','DEL','SIN','05:00', 747.10);
insert into flight values ('3832','SIN','MAA','01:25', 542.80);




insert into flight_schedule values ('001','3345','01','01:00','2023-01-01','2023-01-01','03:15');
insert into flight_schedule values ('002','3832','01','13:05','2023-01-01','2023-01-01','14:30');
insert into flight_schedule values ('003','3745','01','04:15','2023-01-01','2023-01-01','07:00');


insert into flight_schedule values ('004','5432','02','03:15','2023-01-01','2023-01-01','08:15');
insert into flight_schedule values ('005','6543','02','08:20','2023-01-01','2023-01-01','11:25');
insert into flight_schedule values ('006','7654','02','12:30','2023-01-01','2023-01-01','17:25');

insert into flight_schedule values ('007','8765','03','16:50','2023-01-01','2023-01-01','20:20');
insert into flight_schedule values ('008','9876','03','11:40','2023-01-01','2023-01-01','13:05');
insert into flight_schedule values ('009','3345','03','08:10','2023-01-01','2023-01-01','10:25');

insert into flight_schedule values ('010','3745','04','09:35','2023-01-01','2023-01-01','12:20');
insert into flight_schedule values ('011','3832','04','17:30','2023-01-01','2023-01-01','18:55');
insert into flight_schedule values ('012','5432','04','12:30','2023-01-01','2023-01-01','17:30');

insert into flight_schedule values ('013','8765','05','01:00','2023-01-01','2023-01-01','04:30');
insert into flight_schedule values ('014','9876','05','12:00','2023-01-01','2023-01-01','13:25');
insert into flight_schedule values ('015','5432','05','05:10','2023-01-01','2023-01-01','10:10');

insert into flight_schedule values ('016','3832','06','11:50','2023-01-01','2023-01-01','13:15');
insert into flight_schedule values ('017','6543','06','15:30','2023-01-01','2023-01-01','18:35');
insert into flight_schedule values ('018','8765','06','02:00','2023-01-01','2023-01-01','05:30');

insert into flight_schedule values ('019','3345','07','01:40','2023-01-01','2023-01-01','03:55');
insert into flight_schedule values ('020','5432','07','19:45','2023-01-01','2023-01-02','00:45');
insert into flight_schedule values ('021','7654','07','01:00','2023-01-01','2023-01-01','05:55');

insert into flight_schedule values ('022','8765','08','13:40','2023-01-01','2023-01-01','17:10');
insert into flight_schedule values ('023','9876','08','07:20','2023-01-01','2023-01-01','08:45');
insert into flight_schedule values ('024','3345','08','15:00','2023-01-01','2023-01-01','17:15');



insert into booking values ("001",'00001',10000,'2023-01-01','001');
insert into booking values ("005",'00028',10001,'2023-01-01','002');
insert into booking values ("011",'00011',10002,'2023-01-01','005');
insert into booking values ("017",'00021',10003,'2023-01-01','004');
insert into booking values ("021",'00017',10004,'2023-01-01','003');



INSERT INTO `airline_reservation_system_2`.`guest` (`passenger_ID`) VALUES ('10000');
INSERT INTO `airline_reservation_system_2`.`guest` (`passenger_ID`) VALUES ('10003');
INSERT INTO `airline_reservation_system_2`.`guest` (`passenger_ID`) VALUES ('10004');


insert into staff values('1','1234','Nimal','Amara',98731,'hdsfkjh@gmail.com','2000-12-05','Male','Sri Lanka','Nimal');