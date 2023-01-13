
DROP FUNCTION IF EXISTS generate_uuid4;
DROP FUNCTION IF EXISTS seat_available_check;
DROP FUNCTION IF EXISTS seat_price_cal;

/*----------------------------------Generate_UUID_For_Passenger_ID--------------------*/

DELIMITER $$
CREATE FUNCTION generate_uuid4 ()
    RETURNS char( 36 )
    DETERMINISTIC

BEGIN
    DECLARE var_uuid CHAR(36);
    SELECT
        LOWER(
            CONCAT(
                SUBSTR(REPLACE(UUID(),'-',''), 1, 8), '-',
                SUBSTR(REPLACE(UUID(),'-',''), 9, 4), '-',
                SUBSTR(REPLACE(UUID(),'-',''), 13, 4), '-',
                SUBSTR(REPLACE(UUID(),'-',''), 17, 4), '-',
                SUBSTR(REPLACE(UUID(),'-',''), 21)
            )
        ) INTO var_uuid;
    RETURN var_uuid;
END;
$$


/*-----------------------------------Check_Availability_Of_Seat---------------------------*/

DELIMITER $$
CREATE FUNCTION seat_available_check (p_schedule_ID varchar(15), p_seat_ID varchar(15))
    RETURNS bool DETERMINISTIC
BEGIN
    DECLARE seat_availability varchar(15);
    SELECT passenger_ID INTO seat_availability from booking where schedule_ID = p_schedule_ID and seat_ID = p_seat_ID;
    if seat_availability is NULL then
		return true;
    else
		return false;
	end if;
END;
$$

/*--------------------------------Caclculate_Seat_Price----------------------------------*/

DELIMITER $$
CREATE FUNCTION seat_price_cal (p_schedule_ID varchar(15), p_seat_ID varchar(15), p_passenger_ID varchar(15), p_class_type varchar(5))
    RETURNS numeric(5,2) DETERMINISTIC
BEGIN
    DECLARE v_seat_price numeric(10,2);
    DECLARE v_flight_ID varchar(15);
    DECLARE v_flight_price numeric(10,2);
    DECLARE v_user_type int;
    DECLARE v_discount numeric(10,2);

    SELECT flight_ID INTO v_flight_ID 
    FROM flight_schedule 
    WHERE schedule_ID = p_schedule_ID;

    SELECT flight_price INTO v_flight_price 
    FROM flight 
    WHERE flight_ID = v_flight_ID;

    SELECT type_ID INTO v_user_type 
    FROM register_user 
    WHERE passenger_ID = p_passenger_ID;

    SELECT discount INTO v_discount 
    FROM passenger_type 
    WHERE type_ID = v_user_type;
    
    SET v_seat_price = v_flight_price;
    IF p_class_type = 'Economy' THEN
        SET v_seat_price = v_seat_price;
    END IF;
    IF p_class_type = 'Business' THEN
        SET v_seat_price = v_seat_price + (v_flight_price * 0.3);
    END IF;
    IF p_class_type = 'Platinum' THEN
        SET v_seat_price = v_seat_price + (v_flight_price * 0.6);
    END IF;
    
    SET v_seat_price = v_seat_price - (v_seat_price * v_discount);
    RETURN v_seat_price;
END $$ 
DELIMITER ;

/*============Function to find the age when given the birthday========*/

DELIMITER $$
CREATE  FUNCTION `get_age`(dob date) RETURNS int
    DETERMINISTIC
return (datediff(now(),dob))/365



/*============Function to find stopping date when give starting date and starting time and duration==========*/

DELIMITER $$
CREATE FUNCTION `Stopping_date`(
p_starting_date date,p_starting_time time
) RETURNS time
    READS SQL DATA
BEGIN
	declare 
    Stopping_Time,Duration time;
	SELECT duration INTO Duration FROM flight WHERE flight_schedule.flight_ID=flight.flight_ID;
    set Stopping_Time=starting_time+duration;
    return if (Stopping_Time>'24:00',starting_date+1,starting_date);
END

/*=============Function to find when stopping time when given starting date and starting time and duration=========*/

DELIMITER $$
CREATE  FUNCTION `Stopping_time`(starting_date date,starting_time time,duration time) RETURNS time
    READS SQL DATA
begin
declare Stopping_Time time;
set Stopping_Time=starting_time+duration;
return if (Stopping_Time>'24:00',timediff(Stopping_Time,"24:00:00"),Stopping_Time);
end






