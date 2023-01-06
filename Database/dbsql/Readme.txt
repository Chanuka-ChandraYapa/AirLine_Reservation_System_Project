###first insert schedule########

insert into flight_schedule values ('025','3345','02','15:00','2023-01-05','2023-01-05','17:15');

####ADD New Bookind#######
UPDATE booking
SET passenger_ID = "10001", date = '2023-01-01', payment_ID = '002'
WHERE schedule_ID =  '025' and seat_ID = '28';