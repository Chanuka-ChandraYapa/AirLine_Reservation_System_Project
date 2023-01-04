import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ListItem, Paper } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import {useState} from 'react';
import Axios, * as others from 'axios';

const theme = createTheme();

const Test=[];
const CraftType = [];
const Location = [];

fetch('http://localhost:3001/flights').then(response => response.json()).then(data => {

  for (let i=0;i<data.length;i++){
    Test.push(data[i].flight_ID);
  }   
});

fetch('http://localhost:3001/aircraftModel').then(response => response.json()).then(data => {

  for (let i=0;i<data.length;i++){
    CraftType.push(data[i].model_ID);
  }   
});

fetch('http://localhost:3001/airport').then(response => response.json()).then(data => {

  for (let i=0;i<data.length;i++){
    Location.push(data[i].airport_code);
  }   
});


export default function Search() {  
  
    
  const [flight, setFlight] = React.useState('');
  const handleChange1 = (event) => {
    setFlight(event.target.value);
  };

  const findPassengers=()=>{  
    Axios.get('http://localhost:3001/findpassengers',{
      params: {
        flight: flight
      }
     }).then((response)=>{
          console.log(response);              
      })
  }

  const [type, setType] = React.useState('');
  const handleChange2 = (event) => {
    setType(event.target.value);
  };

  const numberOfPassengers=()=>{  
    Axios.get('http://localhost:3001/numberOfPassengers',{
      params: {
        flight: flight
      }
     }).then((response)=>{
          console.log(response);              
      })
  }

  const [origin, setOrigin] = React.useState('');
  const handleChange3 = (event) => {
    setOrigin(event.target.value);
  };

  const [dest, setDest] = React.useState('');
  const handleChange4 = (event) => {
    setDest(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  function List(props) {
    return <MenuItem value={10}>{props.item}</MenuItem>;
    
  }


  

  return (        
    <ThemeProvider theme={theme}>
      <Box
      sx={{
        display: 'contents',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
        },
        width: "1000px",
        height:"1000px"
      }}
      

    >
      <Paper elevation={3} sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h0" variant="h5">
            Passengers given a Flight No.
          </Typography>  
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>          
          
          <Box sx={{ minWidth: 300 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Flight No:</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="Flight_No"                   
                    name="Flight_No"
                    label="Flight No:" 
                    value= {flight}
                    onChange={handleChange1}      
                  >
                   {Test.map((test)=><MenuItem value={test}>{test}</MenuItem>)}               
                   
                  </Select>
                </FormControl>
          </Box>
            <Button
              type="submit"
              fullWidth
              variant="contained"             
              sx={{ mt: 3, mb: 2 }}
              onClick={findPassengers}
            >
              Search
            </Button>
          </Box>
        </Box>
        </Paper>

        <Paper elevation={3} sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h6">
            No. of Passengers given a Date Range
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="fromdate"
            name="fromdate"
            label="From"
            fullWidth
            autoComplete="family-name"
            type = "date"
            InputLabelProps={{
              shrink:true
            }}
            
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="todate"
            name="todate"
            label="To"
            fullWidth
            autoComplete="to-date"
            type= "date"
            InputLabelProps={{
              shrink:true
            }}
            
          />
        </Grid>
        </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Search
            </Button>
          </Box>
        </Box>
        </Paper>

        <Paper elevation={3} sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h6">
            No. of Bookings given a Date Range for each passenger type
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="fromdate"
            name="fromdate"
            label="From"
            fullWidth
            autoComplete="from-date"
            type = "date"
            InputLabelProps={{
              shrink:true
            }}
            
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="todate"
            name="todate"
            label="To"
            fullWidth
            autoComplete="to-date"
            type= "date"
            InputLabelProps={{
              shrink:true
            }}
            
          />
        </Grid>
        </Grid>
            
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Search
            </Button>
          </Box>
        </Box>
        </Paper>

        <Paper elevation={3} sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h6">
          Details about Past Flights,Given origin and destination
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
        <Box sx={{ minWidth: 300 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Origin</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="origin"                   
                    name="origin"
                    label="Origin" 
                    value= {origin}
                    onChange={handleChange3}      
                  >
                   {Location.map((test)=><MenuItem value={test}>{test}</MenuItem>)}               
                   
                  </Select>
                </FormControl>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
        <Box sx={{ minWidth: 300 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Destination</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="dest"                   
                    name="dest"
                    label="Destination" 
                    value= {dest}
                    onChange={handleChange4}      
                  >
                   {Location.map((test)=><MenuItem value={test}>{test}</MenuItem>)}               
                   
                  </Select>
                </FormControl>
          </Box>
        </Grid>
        </Grid>
            
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Search
            </Button>
          </Box>
        </Box>
        </Paper>

        <Paper elevation={3} sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h0" variant="h5">
            Total Revenue given Aircraft Type
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            
            <Box sx={{ minWidth: 300 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Aircraft Type</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="type"                   
                    name="type"
                    label="Aircraft Type" 
                    value= {type}
                    onChange={handleChange2}      
                  >
                   {CraftType.map((test)=><MenuItem value={test}>{test}</MenuItem>)}               
                   
                  </Select>
                </FormControl>
          </Box>
            
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Search
            </Button>
          </Box>
        </Box>
        </Paper>
      </Box>
    </ThemeProvider>
    
  );
}