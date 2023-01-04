const express=require("express");
const router=express.Router();
const mysql=require('mysql');

const db=mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'password',
    database: 'airline_reservation_system',
});


router.post('/',(req,res)=>{
    const firstName=req.body.firstName
    const lastName=req.body.lastName
    const passportNumber=req.body.passportNumber
    const birthday=req.body.birthday
    const country=req.body.country
    const city=req.body.city
    var gender=req.body.gender
    const phoneNumber=req.body.phoneNumber
    const address=req.body.address
    const username=req.body.username
    const password=req.body.password    
    const postal_code=req.body.postal_code     
    
    if (gender===10){
        gender="Male"
    }
    else if (gender===20){
        gender="Female"
    }
    else{
        gender="Other"
    }

    const sql1='insert into passenger ( first_name, last_name, passport_number, birthday, age) values ( ?, ?, ?, ?, ?)';
    const params = [firstName,lastName,passportNumber,birthday,34];

    db.query(sql1, params, function(error, results, fields) {
        if (error) {
          console.log(error);
        } else {
          console.log(results);
        }
      });

      db.query("SELECT passenger_ID FROM passenger WHERE passport_number='"+passportNumber+"'",(err,result)=>{
        console.log("Error is not found")
        console.log(result[0]);
        const sql = 'INSERT INTO register_user (passenger_ID, num_of_times_booked, gender, contact_number, address, city, country, username, password, postal_code, type_ID) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
        const params = [result[0].passenger_ID,0, gender, phoneNumber, address, city, country, username, password, postal_code, '01'];
        db.query(sql, params, function(error, results, fields) {
            res.send("Successfully added");
        });
       
    })    
});

module.exports=router;