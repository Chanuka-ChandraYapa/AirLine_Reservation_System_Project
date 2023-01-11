import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Select, MenuItem, FormHelperText, FormControl, InputLabel } from '@mui/material';
import { useState } from 'react';
import Axios, * as others from 'axios';
import { useParams } from 'react-router-dom';


export default function AddressForm() {
    const [num, setNum] = React.useState('');
    const [firstName, setFirstName]=React.useState('');
    const [lastName, setLastName]=React.useState('');
    const [address, setAddress]=React.useState('');
    const [city, setCity]=React.useState('');
    const [PostalCode,setPostalCode]=React.useState(0);
    const [country,setCountry]=React.useState('');
    const [passengerID, setPassengerID]=React.useState('10001');


    const { id, flight, from, to ,booking_date, departure,schedule, airplane} = useParams();

    if (id!="guest"){
      Axios.post('http://localhost:3001/findDetails', {
        passengerID:id
       }).then((response) => { 
        setAddress(response.data[0].address);
        setCity(response.data[0].city);
        setCountry(response.data[0].country);
        setPostalCode(response.data[0].postal_code);         
      });
      console.log(id);
      Axios.post('http://localhost:3001/findPassengerDe', {
        passengerID:id
       }).then((response) => { 
        setFirstName(response.data[0].first_name);
        setLastName(response.data[0].last_name);         
      });

    }
    


  const handleChange = (event) => {
    setNum(event.target.value);
    
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        General Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard" 
            key={firstName}
            defaultValue={firstName}
            // value={firstName}
            InputLabelProps={{
              shrink:true
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            key={lastName}
            defaultValue={lastName}       
            InputLabelProps={{
              shrink:true
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address"
            name="address"
            label="Address"
            fullWidth
            autoComplete="address"
            variant="standard"
            key={address} 
            defaultValue={address}         
            InputLabelProps={{
              shrink:true
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            key={city} 
            defaultValue={city}       
            InputLabelProps={{
              shrink:true
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            key={PostalCode} 
            defaultValue={PostalCode}        
            InputLabelProps={{
              shrink:true
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
            key={country} 
            defaultValue={country}           
            InputLabelProps={{
              shrink:true
            }}
          />
        </Grid >        
       
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}