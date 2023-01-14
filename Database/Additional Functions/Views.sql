DROP VIEW IF EXISTS view_airport;
DROP VIEW IF EXISTS flight_schedule_view;
DROP VIEW IF EXISTS passenger_flight_info_view;
DROP VIEW IF EXISTS flight_destination_view;
DROP VIEW IF EXISTS upcoming_flights;
DROP VIEW IF EXISTS user_flight_history;
DROP VIEW IF EXISTS popular_flights;

/*----------------------------------------Airports_Details---------------------------*/

CREATE VIEW view_airport AS
SELECT airport.airport_code, location.name AS 'location', airport.country
FROM airport
LEFT  JOIN location
ON location.location_id = airport.location_id;



/*----------------------------------------Flight_Schedule_Details---------------------*/

CREATE VIEW flight_schedule_view AS
SELECT f.flight_ID, f.origin, f.destination, fs.starting_time, fs.stopping_time, fs.starting_date
FROM flight f
JOIN flight_schedule fs ON f.flight_ID = fs.flight_ID
WHERE fs.starting_date BETWEEN '2023-01-01' AND '2023-01-31';


/*----------------------------------------Passengers_Info------------------------------*/

CREATE VIEW passenger_flight_info_view AS
SELECT p.first_name, p.last_name, f.flight_ID, f.origin, f.destination, fs.starting_date
FROM passenger p
JOIN booking b ON p.passenger_ID= b.passenger_ID
JOIN flight_schedule fs ON b.schedule_ID = fs.schedule_ID
JOIN flight f ON fs.flight_ID = f.flight_ID;


/*---------------------------------------Flight_Destination_Details---------------------*/


CREATE VIEW flight_destination_view AS
SELECT f.flight_ID, f.origin, f.destination, fs.starting_time, fs.stopping_time
FROM flight f
JOIN flight_schedule fs ON f.flight_id = fs.flight_id;



/*--------------------------------------Upcomming_Flight_Details-------------------------*/

CREATE VIEW upcoming_flights AS
    SELECT f.flight_ID, f.origin, f.destination, fs.starting_time, fs.stopping_time
    FROM flight f
    JOIN flight_schedule fs ON f.flight_ID = fs.flight_ID
    WHERE fs.starting_time > NOW();
    

/*---------------------------------------Flight_History-----------------------------------*/

CREATE VIEW user_flight_history AS
    SELECT p.first_name, p.last_name, fs.flight_ID, b.date
    FROM passenger p
    JOIN booking b ON p.passenger_ID = b.passenger_ID
    JOIN flight_schedule fs ON b.schedule_ID = fs.schedule_ID
    WHERE b.date < NOW();
    

/*------------------------------------------Most_Popular_Flights-------------------------*/

CREATE VIEW popular_flights AS
    SELECT flight_ID, COUNT(payment_ID) as bookings
    FROM booking
    JOIN flight_schedule ON flight_schedule.schedule_ID = booking.schedule_ID
    GROUP BY flight_ID
    ORDER BY bookings DESC
    LIMIT 10;
    
    
    
