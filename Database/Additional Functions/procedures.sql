/*-------------------------------------------------Update_register_user_type-----------------------*/

DROP procedure IF EXISTS update_user_type;

DELIMITER $$
CREATE PROCEDURE update_user_type (IN p_passenger_ID INT)
BEGIN
  UPDATE register_user
SET type_ID = (SELECT '01' FROM DUAL WHERE num_of_times_booked < 10
               UNION
               SELECT '02' FROM DUAL WHERE num_of_times_booked >= 10 AND num_of_times_booked < 20)
WHERE passenger_ID = p_passenger_ID;
END;




/*-------------------------------------------------Add guest user-----------------------*/


CREATE DEFINER=`root`@`localhost` PROCEDURE `add_geust_user`(p_first_name varchar(20),
	p_last_name varchar(20),
	p_passport_number varchar(20),
	p_birthday	date,p_age numeric(3,0))
begin	
	DECLARE p_id INT;
    DECLARE UserName varchar(50);
    start transaction;
	insert into passenger ( first_name, last_name, passport_number, birthday, age) 
    values ( p_first_name, p_last_name, p_passport_number, p_birthday, p_age); 
    
	SELECT passenger_ID INTO p_id FROM passenger WHERE passport_number = p_passport_Number;
    
    select username into UserName from guest where passenger_ID=p_id;
    if (UserName is null) then
		INSERT INTO guest (passenger_ID) 
		VALUES (p_id);
	else
		SIGNAL SQLSTATE '45000'
		SET MESSAGE_TEXT = 'Error: The username is exist';
	end if;
    commit;    
end


/*-------------------------------------------------Add registered user-----------------------*/


CREATE DEFINER=`root`@`localhost` PROCEDURE `add_user`(p_first_name varchar(20),
	p_last_name varchar(20),
	p_passport_number varchar(20),
	p_birthday	date,p_age numeric(3,0),
	p_num_of_times_booked	numeric(5,0),
	p_gender varchar(10),
	p_contact_number numeric(20,0),
	p_address	varchar(255),
    p_city varchar(100),
    p_country	varchar(100),
    p_username varchar(50) ,
    p_password varchar(300),
    p_postal_code	varchar(16))
begin	
	DECLARE p_id INT;
    DECLARE UserName varchar(50);
    declare Added varchar(50);
    declare PASS_ID int;
    declare cnt int DEFAULT 0;
     -- Start a new transaction
    START TRANSACTION;
    SELECT COUNT(*) INTO cnt FROM passenger WHERE passport_number = p_passport_number;
    -- Check if the passport number already exists in the "passenger" table
    IF (cnt = 0) THEN
        -- Insert the user information into the "passenger" table
        INSERT INTO passenger (first_name, last_name, passport_number, birthday, age)
        VALUES (p_first_name, p_last_name, p_passport_number, p_birthday, p_age);
        SELECT passenger_id INTO p_id from passenger WHERE passport_number = p_passport_number;
        -- Check if the username already exists in the "register_user" table
        SELECT COUNT(*) INTO cnt FROM register_user WHERE username=p_username;
        IF (cnt = 0) THEN
            -- Insert the user information into the "register_user" table
            INSERT INTO register_user (passenger_ID, num_of_times_booked, gender, contact_number, address, city, country, username, password, postal_code, type_ID)
            VALUES (p_id, p_num_of_times_booked, p_gender, p_contact_number, p_address, p_city, p_country, p_username, p_password, p_postal_code, '01');
            SELECT "User added successfully" INTO Added;
        ELSE
            SELECT "Username already exists" INTO Added;
        END IF;
    ELSE
        SELECT "Passport number already exists!" INTO Added;
    END IF;
    COMMIT; 
    select Added;
end


/*-------------------------------------------------Seat Booking-----------------------*/


CREATE DEFINER=`root`@`localhost` PROCEDURE `booking_seat`(
	p_passenger_ID	int,
    p_seat_ID			int,
    p_date			date,
    p_schedule_ID		varchar(15),
    p_price			numeric(5,2),
	p_discount		numeric(5,2))
begin
	declare last_payment_Id int;
    declare p_count int;
    start transaction;
    select payment_ID into last_payment_Id from payment ORDER BY CAST(payment_ID AS SIGNED) DESC LIMIT 1;
    SELECT CAST(last_payment_Id AS UNSIGNED) + 1 into last_payment_Id;
    select count(*) into p_count from booking where schedule_ID=p_schedule_ID and seat_ID=p_seat_ID and date=p_date;
    if (p_count>0) then
		select "This seat is already booked!";
	else
		insert into payment values(last_payment_Id,p_price,p_discount);
		insert into booking values(p_schedule_ID,p_seat_ID,p_passenger_ID,p_date,last_payment_Id);        
	end if;
    commit;
end



/*-------------------------------------------------Delete Flight Schedule-----------------------*/



CREATE DEFINER=`root`@`localhost` PROCEDURE `delete_flight_schedule`(p_schedule_ID varchar(15))
begin
	declare temp_schedule_id varchar(15);
    select schedule_ID into temp_schedule_id from flight_schedule where schedule_ID=p_schedule_ID;
    if (temp_schedule_id is not null) then
		delete from flight_schedule where schedule_ID=p_schedule_ID;
	else
		SIGNAL SQLSTATE '45000'
		SET MESSAGE_TEXT = 'Error: The flight schedule does not exit';
	end if;
end


/*-------------------------------------------------Insert Flight Schedule-----------------------*/


CREATE DEFINER=`root`@`localhost` PROCEDURE `insert_flight_schedule`(
    p_flight_ID varchar(15),
    p_airplane_ID	varchar(15),
    p_starting_time time,
    p_starting_date date)
begin
	declare last_schedule_id varchar(15);
    declare p_stopping_date date;
    declare p_stopping_time time;
    declare d_Duration time;
    declare d_count int;
    declare Added varchar(50);
    start transaction;
    select schedule_ID into last_schedule_id from flight_schedule ORDER BY CAST(schedule_ID AS SIGNED) DESC LIMIT 1;    
    SELECT CAST(CAST(last_schedule_id AS UNSIGNED) + 1 AS CHAR) into last_schedule_id;
    select duration into d_Duration from flight where flight_ID=p_flight_ID;
    select airline_reservation_system.Stopping_date(p_starting_date, p_starting_time, d_Duration) into p_stopping_date;
    select airline_reservation_system.Stopping_time(p_starting_date,  p_starting_time, d_Duration) into p_stopping_time;
    select count(*) into d_count from flight_schedule where airplane_ID=p_airplane_ID and ((starting_date=p_starting_date and starting_time between p_starting_time and p_stopping_time) or (starting_date=p_starting_date and stopping_time between p_starting_time and p_stopping_time));
    if d_count=0 then
		insert into flight_schedule values(last_schedule_id,p_flight_ID,p_airplane_ID,p_starting_time,p_starting_date,p_stopping_date,p_stopping_time);
        select "Flight schedule is assigned" into Added;
	else
		select "Flight schedule can not be assigned" into Added;
	end if;	
    select Added;
    commit;
end

/*-------------------------------------------------Insert Flight Schedule-----------------------*/


CREATE DEFINER=`root`@`localhost` PROCEDURE `register_staff_member`(
	p_emp_id char(6),
	p_password varchar(255),
	p_first_name varchar(127),
	p_last_name varchar(127),
	p_contact_no varchar(15),
	p_email varchar(70),
	p_dob date,
	p_gender varchar(200),
	p_country varchar(30),
    p_username varchar(30))
begin
	declare temp_staff_id varchar(6);
    select emp_id into temp_staff_id from staff where emp_id=p_emp_id;
    if (temp_staff_id is null) then
		insert into staff values(p_emp_id,p_password,p_first_name,p_last_name,p_contact_no,p_email,p_dob,p_gender,p_country,p_username);
	else
		SIGNAL SQLSTATE '45000'
		SET MESSAGE_TEXT = 'Error: The give staff ID is exist in the database.';
	end if;
end