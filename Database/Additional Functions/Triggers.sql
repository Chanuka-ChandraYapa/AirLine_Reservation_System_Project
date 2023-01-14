<<<<<<< HEAD
=======
/*
 ____  ____    ___     ___  ____ ____   __ __ ____   ____  __ 
 || \\ || \\  // \\   //   ||    || \\  || || || \\ ||    (( \
 ||_// ||_// ((   )) ((    ||==  ||  )) || || ||_// ||==   \\ 
 ||    || \\  \\_//   \\__ ||___ ||_//  \\_// || \\ ||___ \_))
                                                                                               
*/


/*-------------------------------------------------Update_register_user_type-----------------------*/

DROP procedure IF EXISTS update_user_type;

DELIMITER $$
CREATE PROCEDURE update_user_type (IN p_passenger_ID INT)
BEGIN
  UPDATE register_user
SET type_ID = (SELECT '01' FROM DUAL WHERE num_of_times_booked < 10
               UNION
               SELECT '02' FROM DUAL WHERE num_of_times_booked >= 10  )
WHERE passenger_ID = p_passenger_ID;
END;

/*
  ______ ____  __   ___    ___   ____ ____   __ 
 | || | || \\ ||  // \\  // \\ ||    || \\ (( \
   ||   ||_// || (( ___ (( ___ ||==  ||_//  \\ 
   ||   || \\ ||  \\_||  \\_|| ||___ || \\ \_))
                                               
*/
>>>>>>> 99e3dde0273c957fb6ea6eb6ac59ac73125c4660
DROP TRIGGER IF EXISTS booking_after_insert;
DROP TRIGGER IF EXISTS update_user_type;
DROP TRIGGER IF EXISTS flight_schedule_after_insert;
DROP TRIGGER IF EXISTS flight_schedule_after_delete;

/*-------------------------------udate_number_of_times_books_by_register_user-------------------------*/

DELIMITER $$
CREATE TRIGGER booking_after_insert
	AFTER insert ON booking
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



/*-------------------------------delete_seat_from_booking-------------------------------------------------*/

DELIMITER $$
CREATE TRIGGER flight_schedule_after_delete
AFTER DELETE ON flight_schedule
FOR EACH ROW
BEGIN
DELETE FROM booking
WHERE schedule_ID = old.schedule_ID;
END$$
DELIMITER ;


/*---------------------------------update_Register_user_Type--------------------------------------------*/

DELIMITER $$
CREATE TRIGGER update_user_type
BEFORE UPDATE ON booking
FOR EACH ROW
BEGIN
	CALL update_user_type(NEW.passenger_ID);
END$$
DELIMITER ;







