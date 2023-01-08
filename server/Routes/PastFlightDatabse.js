const express=require("express");
const router=express.Router();
const mysql=require('mysql');

const today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
const yyyy = today.getFullYear();

const formattedDate = `${yyyy}-${mm}-${dd}`;

const db=mysql.createConnection({
    user: 'root',
    host: '127.0.0.1',
    password: 'Group_project_24',
    database: 'airline_reservation_system_2',
});

router.get('/', (req, res) => {    
    db.query('select f.flight_ID,fs.starting_time,fs.starting_date from flight_schedule fs left join flight f on fs.flight_ID=f.flight_ID where fs.starting_date<"'+formattedDate+'" and f.origin="'+req.query.origin+'" and f.destination="'+req.query.dest+'"', (error, results) => {
      if (error) throw error;
      res.send(JSON.stringify(results));
    });
});

module.exports=router;