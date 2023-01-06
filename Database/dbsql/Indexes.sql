/*
  _           _                    
 (_)         | |                   
  _ _ __   __| | _____  _____  ___ 
 | | '_ \ / _` |/ _ \ \/ / _ \/ __|
 | | | | | (_| |  __/>  <  __/\__ \
 |_|_| |_|\__,_|\___/_/\_\___||___/
*/


CREATE INDEX idx_seatbooking
ON booking (schedule_ID, seat_ID);
CREATE INDEX idx_flightschedule
ON flight_schedule (schedule_ID);
CREATE INDEX idx_flight
ON flight (flight_ID);
CREATE INDEX idx_passenger
ON passenger (passenger_ID);