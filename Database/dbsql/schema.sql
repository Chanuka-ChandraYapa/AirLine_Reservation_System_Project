DROP FUNCTION IF EXISTS Stopping_date;
DROP FUNCTION IF EXISTS Stopping_time;
DROP FUNCTION IF EXISTS get_age;



DROP TABLE IF EXISTS booking CASCADE;
DROP TABLE IF EXISTS payment CASCADE;
DROP TABLE IF EXISTS seat CASCADE;
DROP TABLE IF EXISTS traveler_class CASCADE;
DROP TABLE IF EXISTS passenger CASCADE;
DROP TABLE IF EXISTS guest CASCADE;
DROP TABLE IF EXISTS register_user CASCADE;
DROP TABLE IF EXISTS passenger_type CASCADE;
DROP TABLE IF EXISTS flight_schedule CASCADE;
DROP TABLE IF EXISTS airplane CASCADE;
DROP TABLE IF EXISTS aircraft_model CASCADE;
DROP TABLE IF EXISTS flight CASCADE;
DROP TABLE IF EXISTS airport CASCADE;
DROP TABLE IF EXISTS location CASCADE;

/* 
  _        _     _           
 | |      | |   | |          
 | |_ __ _| |__ | | ___  ___ 
 | __/ _` | '_ \| |/ _ \/ __|
 | || (_| | |_) | |  __/\__ \
  \__\__,_|_.__/|_|\___||___/
 */



create table location
	(location_ID		varchar(15),
    name				varchar(30),
    parent_port			varchar(15),
    primary key(location_ID),
    foreign key (parent_port) references location(location_ID)ON DELETE CASCADE ON UPDATE CASCADE
    );

create table airport
	(airport_code		varchar(15),
    location_ID			varchar(15),
    description			varchar(100),
    country				varchar(30),
    primary key(airport_code),
    foreign key(location_ID) references location(location_ID)ON DELETE CASCADE ON UPDATE CASCADE
    );

create table flight
	(flight_ID		varchar(15),
    origin			varchar(15),
    destination		varchar(15),
    duration		time,
    primary key(flight_ID),
    foreign key(origin) references airport(airport_code)ON DELETE CASCADE ON UPDATE CASCADE,
    foreign key(destination) references airport(airport_code)ON DELETE CASCADE ON UPDATE CASCADE
    );

create table aircraft_model
	(model_ID		varchar(15),
    manufacturer_company		varchar(30),
    seating_capacity			numeric(4,0),
    fuel_capacity				numeric(10,2),
    average_speed				numeric(10,2),
    primary key(model_ID));

create table airplane
	(airplane_ID		varchar(15),
    model_ID		varchar(15),
    primary key(airplane_ID),
    foreign key(model_ID) references aircraft_model(model_ID)ON DELETE CASCADE ON UPDATE CASCADE
    );

create table flight_schedule
	(schedule_ID		varchar(15),
    flight_ID			varchar(15),
    airplane_ID			varchar(15),
    starting_time		time,
    starting_date		date,
    stopping_date		date,
    stopping_time		time, 
    primary key(schedule_ID),
    foreign key (flight_ID) references flight(flight_ID)ON DELETE CASCADE ON UPDATE CASCADE,
    foreign key (airplane_ID) references airplane(airplane_ID)ON DELETE CASCADE ON UPDATE CASCADE
    );
    

create table passenger_type
	(type_ID		varchar(20),
    type			varchar(20),
    discount		numeric(5,2),
    primary key (type_ID));

create table register_user
	(passenger_ID 		int ,
    num_of_times_booked		numeric(5,0),
    gender			varchar(10),
    contact_number		numeric(20,0),
    address		varchar(255) not null,
    city 		varchar(100) not null,
    country		varchar(100) not null,
    username	varchar(50) not null,
    password	varchar(30) not null,
    postal_code		varchar(16) not null,
    type_ID			varchar(20),
    primary key (passenger_ID),
    foreign key (type_ID) references passenger_type(type_ID)ON DELETE CASCADE ON UPDATE CASCADE
    );

    
    
create table guest
	(passenger_ID		int,
    primary key (passenger_ID));
    

create table passenger
	(passenger_ID		int auto_increment,
	 first_name		varchar(20),
     last_name		varchar(20),
	 passport_number	varchar(20),
     birthday		date,
     age			numeric(3,0),
	 primary key (passenger_ID)
	);

create table traveler_class
	(class_ID		varchar(15),
    name			varchar(30),
    primary key(class_ID));

create table seat
	(
    model_ID varchar(15),
    seat_ID		varchar(15),
    winodow_status		boolean,
    class_ID		varchar(15),
    primary key(seat_ID,model_ID),
    foreign key (model_ID) references aircraft_model(model_ID)ON DELETE CASCADE ON UPDATE CASCADE,
    foreign key (class_ID) references traveler_class(class_ID)ON DELETE CASCADE ON UPDATE CASCADE
    );

create table payment
		(payment_ID		varchar(15),
        price			numeric(5,2),
        discount		numeric(5,2),
        primary key(payment_ID));

create table booking
	(seat_ID			varchar(15),
    schedule_ID		varchar(15),
    passenger_ID	int,
    payment_ID		varchar(15),
    primary key(seat_ID,schedule_ID),
    foreign key (passenger_ID) references passenger(passenger_ID)ON DELETE CASCADE ON UPDATE CASCADE,
    foreign key (schedule_ID) references flight_schedule(schedule_ID)ON DELETE CASCADE ON UPDATE CASCADE,
    foreign key (payment_ID) references payment(payment_ID)ON DELETE CASCADE ON UPDATE CASCADE
    );
    
    
/* 
   __                  _   _                 
  / _|                | | (_)                
 | |_ _   _ _ __   ___| |_ _  ___  _ __  ___ 
 |  _| | | | '_ \ / __| __| |/ _ \| '_ \/ __|
 | | | |_| | | | | (__| |_| | (_) | | | \__ \
 |_|  \__,_|_| |_|\___|\__|_|\___/|_| |_|___/                              
 */




*DELIMITER //
create function Stopping_date(starting_date date,starting_time time)
returns date deterministic
begin
declare 
	Stopping_Time,Duration time;	

SELECT duration INTO Duration FROM flight WHERE flight_schedule.flight_ID=flight.flight_ID;
set Stopping_Time=starting_time+duration;
return if (Stopping_Time>'24:00',starting_date+1,starting_date);
end; //
DELIMITER ;



DELIMITER //
create function Stopping_time(starting_date date,starting_time time,duration time)
returns time deterministic
begin
declare Stopping_Time time;
set Stopping_Time=starting_time+duration;
return if (Stopping_Time>'24:00',timediff(Stopping_Time,"24:00:00"),Stopping_Time);
end; //
DELIMITER ;


create function get_age(dob date)
returns int deterministic
return (datediff(now(),dob))/365;



ALTER TABLE passenger AUTO_INCREMENT=10000; 

/*
  _        _                           
 | |      (_)                          
 | |_ _ __ _  __ _  __ _  ___ _ __ ___ 
 | __| '__| |/ _` |/ _` |/ _ \ '__/ __|
 | |_| |  | | (_| | (_| |  __/ |  \__ \
  \__|_|  |_|\__, |\__, |\___|_|  |___/
              __/ | __/ |              
             |___/ |___/               
*/

-------------------------------udate_number_of_times_books_by_register_user-------------------------

DELIMITER $$
DROP TRIGGER IF EXISTS booking_after_insert;

CREATE TRIGGER booking_after_insert
	AFTER INSERT ON booking
    FOR EACH ROW
BEGIN
	UPDATE register_user
    SET num_of_times_booked = num_of_times_booked+1
    WHERE passenger_ID = NEW.passenger_ID;
END $$

DELIMITER ;



