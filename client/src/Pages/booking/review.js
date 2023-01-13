import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { useParams } from 'react-router-dom';
import Axios, * as others from 'axios';
import { Button,Box } from '@mui/material';
import { useState } from 'react';


const details = [
  {
    name: 'passenger 1',
    type: 'Economy',
    price: 45,
  },
 
];


export default function Review({type,seatID}) {

  const [isShown1, setIsShown1] = React.useState(false);
  const [isShown2, setIsShown2] = React.useState(true);
  const handleNext = () => {
      setIsShown1(true);
      setIsShown2(false);
  };

  const { id, flight, from, to , booking_date, departure, schedule, airplane} = useParams();
  const flightdetails = [
    { name: 'Flight', detail: flight},
    { name: 'From', detail: from },
    { name: 'To', detail: to },
    { name: 'Departure Time', detail: departure },
  ];  

  const [firstName, setFirstName]=React.useState('');
  const [lastName, setLastName]=React.useState('');
  const [discount, setDiscount] = React.useState(0);
  const [passengertype, setPassengertype] = React.useState('');
  const [price, setPrice] = React.useState(0.00);
  const [passengerid,setPassengerid]=React.useState(0);
  const [bookStatus,setBookStatus]=React.useState('');

  Axios.post('http://localhost:3001/flightPrice', {
    flight_ID:flight
   }).then((response) => { 
    if (response.data[0].flight_price !== price) {
      console.log()
        setPrice(response.data[0].flight_price);
      } 
    });
 
    if (id!=="guest"){    
      Axios.post('http://localhost:3001/findPassengerDe', {
        passengerID:id
       }).then((response) => { 
        if (response.data[0].first_name !== firstName) {
          setPassengerid(id);
          setFirstName(response.data[0].first_name);
          setLastName(response.data[0].last_name);
          } 

              
      });
      Axios.post('http://localhost:3001/passengerType', {
        passengerID:id
       }).then((response) => { 
        setDiscount(response.data[0].discount);
        setPassengertype(response.data[0].Type);    
      });
    }else{
      fetch('http://localhost:3001/lastPassenger').then(response => response.json()).then(response1 => {        
          setFirstName(response1[0].first_name);
          setLastName(response1[0].last_name);
          setPassengerid(response1[0].passenger_ID);
          setDiscount(0);
          setPassengertype("Guest");
    });    
    }
  const SeatBooking=()=>{
    Axios.post('http://localhost:3001/bookingSeat', {
      passenger_ID:passengerid,
      seat_ID:seatID,
      date:booking_date,
      schedule_ID:schedule,
      price:price,
      discount:(discount * price)
     }).then((response) => { 
      try{
        if (response.data[1].affectedRows!==0){
          handleNext();
          setBookStatus("");
        }else{
          setBookStatus("That seat is already booked!");
        }
      }catch{
          handleNext();
          setBookStatus("");
      }
        
        
    });
  }
 
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment summary
      </Typography>
      <List disablePadding>
        {details.map((passenger) => (
          <ListItem key={passenger.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={"Passenger : " + firstName +" " + lastName} secondary={type} />
            <Typography variant="body2">{price} $</Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
        <ListItemText primary="Discount"  secondary={passengertype}/>
          <Typography variant="body2" sx={{ fontWeight: 700 }}>
            {discount*price} $
          </Typography>
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            <h3>{price-discount * price} $</h3>
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        
        <Grid item container direction="column" xs={12}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Flight details
          </Typography>
          <Grid container>
            {flightdetails.map((flight) => (
              <React.Fragment key={flight.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{flight.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{flight.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'center'}}>
      {isShown2 && <Button onClick={SeatBooking}
              sx={{
                width: 300, 
                padding: 1, 
                margin: 2,
                borderRadius: '50px',
                fontFamily: 'Arial',
                ':hover': {
                    backgroundColor: '#87CEEB',
                    color: 'black'
                }
              }}
              color="info"
              size="large"
              variant="outlined" href="#" style={{ color: 'inherit', textDecoration: 'inherit'}}>
              Book
            </Button>}
            <div style={{color: "red"}}><center>{bookStatus}</center></div>
            </Box>
            
              {isShown1 &&  <>

              <Box m={2} pt={3}></Box>
              <Typography variant="h5" gutterBottom>
                <center>Your booking is successfully completed ! We'll see you in the flight.</center>
              </Typography>
              <Typography variant="subtitle1">
                <center>Thank you for your faith on us! We are looking forward to serve you at our best.</center>
              </Typography>
            </>}
            
    </React.Fragment>
  );
}
