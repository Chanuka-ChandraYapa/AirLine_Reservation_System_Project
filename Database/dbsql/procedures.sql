/*
                               _                     
                              | |                    
  _ __  _ __ ___   ___ ___  __| |_   _ _ __ ___  ___ 
 | '_ \| '__/ _ \ / __/ _ \/ _` | | | | '__/ _ \/ __|
 | |_) | | | (_) | (_|  __/ (_| | |_| | | |  __/\__ \
 | .__/|_|  \___/ \___\___|\__,_|\__,_|_|  \___||___/
 | |                                                 
 |_|                                                 
*/


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