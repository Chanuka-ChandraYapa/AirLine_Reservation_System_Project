const express=require("express");
const router=express.Router();
const mysql=require('mysql');

const db=mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: 'password',
  database: 'airline_reservation_system',
});

router.get('/', (req, res) => {    
    db.query('select count(*) as Guest_Count from guest g left join passenger p on g.passenger_ID=p.passenger_ID left join booking b on p.passenger_ID=b.passenger_ID where b.date between "'+req.query.startDate2+'" and "'+req.query.endDate2+'"', (error, results) => {
      if (error) throw error;
      res.send(JSON.stringify(results));
    });
});

module.exports=router;