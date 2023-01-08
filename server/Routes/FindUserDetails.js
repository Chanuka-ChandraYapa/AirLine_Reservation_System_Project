const express=require("express");
const router=express.Router();
const mysql=require('mysql');

const db=mysql.createConnection({
    user: 'root',
    host: '127.0.0.1',
    password: 'Group_project_24',
    database: 'airline_reservation_system_2',
});

router.post('/', (req, res) => {    
    db.query('select address,city,country,postal_code from register_user where passenger_ID="'+req.body.passengerID+'"', (error, results) => {
      if (error) throw error;
      res.send(JSON.stringify(results));
    });
});

module.exports=router;