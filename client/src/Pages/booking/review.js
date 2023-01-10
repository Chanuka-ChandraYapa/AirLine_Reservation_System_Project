import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { useParams,useEffect } from 'react-router';
import Axios, * as others from 'axios';
const details = [
  {
    name: 'passenger 1',
    type: 'Economy',
    price: 45,
  },
 
];


export default function Review({type}) {

  const { id,flight, from, to , departure} = useParams();
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
  const [price, setPrice] = React.useState(100);

  
    if (id!=="guest"){
      Axios.post('http://localhost:3001/findPassengerDe', {
        passengerID:id
       }).then((response) => { 
        if (response.data[0].first_name !== firstName) {
          setFirstName(response.data[0].first_name);
          setLastName(response.data[0].last_name);   } 
  
              
      });
      Axios.post('http://localhost:3001/passengerType', {
        passengerID:id
       }).then((response) => { 
        setDiscount(response.data[0].discount);
        setPassengertype(response.data[0].Type);    
      });
    }else{
      setPassengertype("Guest");
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
    </React.Fragment>
  );
}