CREATE INDEX idx_seatbooking
ON booking (schedule_ID, seat_ID);
CREATE INDEX idx_flightschedule
ON flight_schedule (schedule_ID);
CREATE INDEX idx_flight
ON flight (flight_ID);
CREATE INDEX idx_passenger
ON passenger (passenger_ID);