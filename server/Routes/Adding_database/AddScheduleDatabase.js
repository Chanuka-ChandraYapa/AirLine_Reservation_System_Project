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
    db.query("call airline_reservation_system_2.insert_flight_schedule('"+req.body.flight+"', '"+req.body.airplane+"', '"+req.body.time+"', '"+req.body.date+"');", (error, results) => {
      if (error) throw error;
      res.send(JSON.stringify(results));
    });
});

module.exports=router;