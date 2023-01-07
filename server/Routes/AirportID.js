const express=require("express");
const router=express.Router();
const mysql=require('mysql');

const db=mysql.createConnection({
    user: 'root',
    host: '127.0.0.1',
    password: 'Group_project_24',
    database: 'airline_reservation_system',
});

router.get('/', (req, res) => {
  db.query('select airplane_ID from airplane;', (error, results) => {
    if (error) throw error;
    res.send(JSON.stringify(results));
  });
});
module.exports=router;