const express=require("express");
const router=express.Router();
const mysql=require('mysql');

const db=mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: 'password',
  database: 'airline_reservation_system',
});

router.post('/', (req, res) => {    
    db.query('select first_name,last_name,passport_number,birthday from passenger where passenger_ID="'+req.body.passengerID+'"', (error, results) => {
      if (error) throw error;
      res.send(JSON.stringify(results));
    });
});

module.exports=router;