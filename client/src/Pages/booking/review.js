import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { useParams } from 'react-router';

const details = [
  {
    name: 'passenger 1',
    type: 'Economy',
    price: 45,
  },
  {
    name: 'passenger 2',
    type: 'Platinum',
    price: 55,
  },
 
];


export default function Review() {

  const { id,flight, from, to , departure} = useParams();
  const flightdetails = [
    { name: 'Flight', detail: flight},
    { name: 'From', detail: from },
    { name: 'To', detail: to },
    { name: 'Departure Time', detail: departure },
  ];  


  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment summary
      </Typography>
      <List disablePadding>
        {details.map((passenger) => (
          <ListItem key={passenger.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={passenger.name} secondary={passenger.type} />
            <Typography variant="body2">{passenger.price} $</Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {(details.reduce((a,v) =>  a = a + v.price , 0 ))} $
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