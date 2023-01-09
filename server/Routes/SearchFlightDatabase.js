const express=require("express");
const router=express.Router();
const mysql=require('mysql');

const db=mysql.createConnection({
    user: 'root',
    host: '127.0.0.1',
    password: 'Group_project_24',
    database: 'airline_reservation_system_2',
});

router.post('/',(req,res)=>{
    const to_airport= req.body.to_airport
    const from_airport= req.body.from_airport
    const booking_date = req.body.booking_date
    db.query("select fs.flight_ID, fs.starting_time, fs.stopping_time ,fs.schedule_ID ,fs.airplane_ID " + 
    "from flight_schedule as fs " +
    "where exists " + 
    "(select flight_ID from flight as f " +
    "where fs.flight_ID = f.flight_ID and origin = '"+ from_airport +"' and destination = '"+ to_airport+ 
    "' and fs.starting_date = '" + booking_date + "' order by starting_time);",(err,result)=>{
            if(err){
                console.log(err);
            }else{
                res.send(result);
            }
        }); 

});

module.exports=router;