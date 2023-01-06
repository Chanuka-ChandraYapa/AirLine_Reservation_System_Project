const express=require('express');
const app=express();
const cors=require('cors');

app.use(cors());
app.use(express.json());

const signInRoute=require('./Routes/SignInDatabase');
const signUpRote=require('./Routes/SignUpDatabase');
const getFlightListRoute=require('./Routes/FlightListDatabase');
const getAircraftModelRoute=require('./Routes/AircraftModelDatabase')
const getAirportRoute=require('./Routes/AirportDatabase');
const getPassengersGivenFlightRoute=require('./Routes/PassengersGivenFlight');


app.use('/create',signInRoute);
app.use('/account',signUpRote);
app.use('/flights',getFlightListRoute);
app.use('/aircraftModel',getAircraftModelRoute);
app.use('/airport',getAirportRoute);
app.use('/findpassengers',getPassengersGivenFlightRoute);

app.listen(3001,()=>{
    console.log("Runnig the port 3001");
});

