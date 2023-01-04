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
    db.query('SELECT airport_code FROM airport', (error, results) => {
      if (error) throw error;
      res.send(JSON.stringify(results));
    });
});

module.exports=router;