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
    db.query('select (sum(p.price)-sum(p.discount)) as Total_Revenue from payment p left join booking b on p.payment_ID=b.payment_ID left join flight_schedule fs on b.schedule_ID=fs.schedule_ID left join airplane a on fs.airplane_ID=a.airplane_ID left join aircraft_model am on a.model_ID=am.model_ID where am.model_ID="'+req.query.type+'"', (error, results) => {
      if (error) throw error;
      res.send(JSON.stringify(results));
    });
});

module.exports=router;