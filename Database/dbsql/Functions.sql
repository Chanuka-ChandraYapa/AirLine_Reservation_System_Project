/* 
   __                  _   _                 
  / _|                | | (_)                
 | |_ _   _ _ __   ___| |_ _  ___  _ __  ___ 
 |  _| | | | '_ \ / __| __| |/ _ \| '_ \/ __|
 | | | |_| | | | | (__| |_| | (_) | | | \__ \
 |_|  \__,_|_| |_|\___|\__|_|\___/|_| |_|___/                              
 */

DROP FUNCTION IF EXISTS generate_uuid4;



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





