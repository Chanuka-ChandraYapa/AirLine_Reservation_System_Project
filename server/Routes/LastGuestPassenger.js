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
  db.query('select first_name,last_name,passenger_ID from passenger where passenger_ID=(SELECT passenger_ID FROM guest ORDER BY passenger_ID DESC LIMIT 1)', (error, results) => {
    if (error) throw error;
    res.send(JSON.stringify(results));
  });
});
module.exports=router;