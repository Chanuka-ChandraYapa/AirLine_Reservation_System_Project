/*=========================USER_ACCESS==========================================*/

GRANT EXECUTE ON PROCEDURE airline_reservation_system_2.add_user TO 'database_app'@'localhost';
GRANT EXECUTE ON PROCEDURE airline_reservation_system_2.register_staff_member TO 'database_app'@'localhost';
GRANT EXECUTE ON PROCEDURE airline_reservation_system_2.add_geust_user TO 'database_app'@'localhost';
GRANT EXECUTE ON PROCEDURE airline_reservation_system_2.booking_seat TO 'database_app'@'localhost';
GRANT EXECUTE ON PROCEDURE airline_reservation_system_2.update_user_type TO 'database_app'@'localhost';
GRANT EXECUTE ON FUNCTION airline_reservation_system_2.get_age TO 'database_app'@'localhost';
GRANT EXECUTE ON FUNCTION airline_reservation_system_2.Stopping_date TO 'database_app'@'localhost';
GRANT EXECUTE ON FUNCTION airline_reservation_system_2.Stopping_time TO 'database_app'@'localhost';
GRANT EXECUTE ON FUNCTION airline_reservation_system_2.generate_uuid4 TO 'database_app'@'localhost';
GRANT EXECUTE ON FUNCTION airline_reservation_system_2.seat_available_check TO 'database_app'@'localhost';
GRANT EXECUTE ON FUNCTION airline_reservation_system_2.seat_price_cal TO 'database_app'@'localhost';

GRANT SELECT, INSERT, UPDATE
ON airline_reservation_system_2.passenger
TO 'database_app'@'localhost';

GRANT SELECT, INSERT, UPDATE
ON airline_reservation_system_2.guest
TO 'database_app'@'localhost';

GRANT SELECT, INSERT, UPDATE
ON airline_reservation_system_2.register_user
TO 'database_app'@'localhost';

GRANT SELECT
ON airline_reservation_system_2.passenger_type
TO 'database_app'@'localhost';

GRANT SELECT, UPDATE
ON airline_reservation_system_2.booking
TO 'database_app'@'localhost';

GRANT SELECT
ON airline_reservation_system_2.seat
TO 'database_app'@'localhost';

GRANT SELECT, INSERT, UPDATE
ON airline_reservation_system_2.payment
TO 'database_app'@'localhost';

GRANT SELECT
ON airline_reservation_system_2.traveler_class
TO 'database_app'@'localhost';

GRANT SELECT
ON airline_reservation_system_2.flight_schedule
TO 'database_app'@'localhost';

GRANT SELECT
ON airline_reservation_system_2.flight
TO 'database_app'@'localhost';

GRANT SELECT
ON airline_reservation_system_2.airport
TO 'database_app'@'localhost';

GRANT SELECT
ON airline_reservation_system_2.location
TO 'database_app'@'localhost';

GRANT SELECT
ON airline_reservation_system_2.aircraft_model
TO 'database_app'@'localhost';

GRANT SELECT
ON airline_reservation_system_2.airplane
TO 'database_app'@'localhost';
