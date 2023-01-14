const express=require("express");
const router=express.Router();
const mysql=require('mysql');

const db=mysql.createConnection({
    user: 'root',
    host: '127.0.0.1',
    password: 'Group_project_24',
    database: 'airline_reservation_system_2',
});

router.get('/', (req, res) => {    
    db.query('select count(*) as Passenger_Count from passenger p left join booking b on p.passenger_ID=b.passenger_ID left join flight_schedule fs on b.schedule_ID=fs.schedule_ID left join flight f on fs.flight_ID=f.flight_ID where f.origin="'+req.query.origin+'" and f.destination="'+req.query.dest+'"', (error, results) => {
      if (error) throw error;
      res.send(JSON.stringify(results));
    });
});

module.exports=router;