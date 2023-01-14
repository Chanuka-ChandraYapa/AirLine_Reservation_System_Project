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
    db.query('select count(*) as Gold_Count from passenger_type pt left join register_user ru on pt.type_ID=ru.type_ID left join passenger p on ru.passenger_ID=p.passenger_ID left join booking b on p.passenger_ID=b.passenger_ID where pt.type="Gold" and date between "'+req.query.startDate2+'" and "'+req.query.endDate2+'"', (error, results) => {
      if (error) throw error;
      res.send(JSON.stringify(results));
    });
});

module.exports=router;