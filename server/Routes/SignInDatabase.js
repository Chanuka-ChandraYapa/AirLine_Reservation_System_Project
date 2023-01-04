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
    const name=req.body.name
    const password=req.body.password
    db.query("SELECT username,password FROM register_user WHERE username='"+name+"'",(err,result)=>{
        if (result.length==0 || err){
            console.log("Na")
            res.send({success:false});
        }else{            
            if (result[0].password==password){
                console.log("Password hari")
                res.send({success:true});
            }else{
                console.log("Thiyenawa password waradi")
                res.send({success:false});
            }            
        }
    })
});

module.exports=router;