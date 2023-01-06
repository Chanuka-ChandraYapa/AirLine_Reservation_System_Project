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
const getNumberOfPassengersDateRoute=require('./Routes/NumberOfPassengersDate');
const getNumberOfBookingPassengersRoute=require('./Routes/NumberofBookingPassengers');
const getNumberOfBookingGoldRoute=require('./Routes/NumberOfBookingGold');
const getNumberOfFrequentRoute=require('./Routes/NumberOfBookingFrequent');
const getPastFlightRoute=require('./Routes/PastFlightDatabse');
const getPassengerCount=require('./Routes/PassengerCountDatabase');
const getTotalRevenue=require('./Routes/TotalRevenue');
const getSearchFlight=require('./Routes/SearchFlightDatabase');
const getSignInAdmin=require('./Routes/SignInAdminDatabase');


app.use('/create',signInRoute);
app.use('/account',signUpRote);
app.use('/flights',getFlightListRoute);
app.use('/aircraftModel',getAircraftModelRoute);
app.use('/airport',getAirportRoute);
app.use('/findpassengers',getPassengersGivenFlightRoute);
app.use('/numberOfPassengers',getNumberOfPassengersDateRoute);
app.use('/numberOfBookingGuestPassengers',getNumberOfBookingPassengersRoute);
app.use('/numberOfBookingGoldPassengers',getNumberOfBookingGoldRoute);
app.use('/numberOfBookingFrequentPassengers',getNumberOfFrequentRoute);
app.use('/pastFlights',getPastFlightRoute);
app.use('/passengerCount',getPassengerCount);
app.use('/totalRevenue',getTotalRevenue);
app.use('/searchflight',getSearchFlight);
app.use('/adminSignIn',getSignInAdmin);

app.listen(3001,()=>{
    console.log("Runnig the port 3001");
});

