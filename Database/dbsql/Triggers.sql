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
DROP TRIGGER IF EXISTS booking_after_insert;
DROP TRIGGER IF EXISTS flight_schedule_after_insert;

/*-------------------------------udate_number_of_times_books_by_register_user-------------------------*/

DELIMITER $$
CREATE TRIGGER booking_after_insert
	AFTER INSERT ON booking
    FOR EACH ROW
BEGIN
	UPDATE register_user
    SET num_of_times_booked = num_of_times_booked+1
    WHERE passenger_ID = NEW.passenger_ID;
END $$

DELIMITER ;

/*--------------------------------adding_seats_to_the_booking-------------------------------------------*/


DELIMITER $$
CREATE TRIGGER flight_schedule_after_insert
AFTER INSERT ON flight_schedule
FOR EACH ROW
BEGIN
DECLARE i INT DEFAULT 1;
SET @no_of_seats = (SELECT seating_capacity FROM aircraft_model WHERE model_ID = (SELECT model_ID FROM airplane WHERE airplane_ID = NEW.airplane_ID));
WHILE i <= @no_of_seats DO
    INSERT INTO booking (schedule_ID, seat_ID, date, passenger_ID,  payment_ID)
    VALUES (NEW.schedule_ID, i, NULL, NULL, NULL);
    SET i = i + 1;
  END WHILE;
END$$
DELIMITER ;


/*---------------------------------update_Register_user_Type--------------------------------------------

DELIMITER $$
DROP TRIGGER IF EXISTS booking_after_typechange;

CREATE TRIGGER booking_after_typechange
	AFTER INSERT ON booking
    FOR EACH ROW
BEGIN
	 IF (NEW.num_of_times_booked >= 20) THEN
        UPDATE register_user SET type_ID = 2 WHERE passenger_ID = NEW.passenger_ID;
        RETURN NULL;
    ELSIF (NEW.no_of_bookings >= 15) THEN
        UPDATE register_user SET type_ID = 1 WHERE passenger_ID = NEW.passenger_ID;
        RETURN NULL;
    END IF;
    RETURN NULL;
END $$

*/





