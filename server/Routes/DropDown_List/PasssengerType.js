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
    db.query('select Type,discount from passenger_type pt left join register_user r on pt.type_ID=r.type_ID where r.passenger_ID="'+req.body.passengerID+'"', (error, results) => {
      if (error) throw error;
      res.send(JSON.stringify(results));
    });
});

module.exports=router;