import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Paper } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Axios, * as others from 'axios';
import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

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
  
  const [isShown1, setIsShown1] = useState(false);
  const [isShown2, setIsShown2] = useState(false);  

  const [flight, setFlight] = React.useState('');
  const handleChange1 = (event) => {
    setFlight(event.target.value);
  };

  const [passenger_List, setPassenger_List]=useState([]);

  const findPassengers=()=>{  
    Axios.get('http://localhost:3001/findpassengers',{
      params: {
        flight: flight
      }
     }).then((response)=>{      
      setPassenger_List(response.data) 
    })
    setIsShown1(true);
  }
 

  const [startDate1,setStartDate1]=React.useState('');
  const [endDate1,setEndDate1]=React.useState('');
  const [passengerCount,setPassengerCount]=React.useState(0);

  const numberOfPassengers=()=>{  
    Axios.get('http://localhost:3001/numberOfPassengers',{
      params: {
        startDate1:startDate1,
        endDate1:endDate1
      }
     }).then((response)=>{
          setPassengerCount(response.data.Count);                      
      })
      setIsShown2(true);
  }

  const [startDate2,setStartDate2]=React.useState('');
  const [endDate2,setEndDate2]=React.useState('');
  const [guestPassengerCount,setGuestPassengerCount]=React.useState(0);
  const [goldPassengerCount,setGoldPassengerCount]=React.useState(0);
  const [frequentPassengerCount,setFrequentPassengerCount]=React.useState(0);


  const numberOfBookingPassengers=()=>{  
    Axios.get('http://localhost:3001/numberOfBookingGuestPassengers',{
      params: {
        startDate2:startDate2,
        endDate2:endDate2
      }
     }).then((response)=>{
          setGuestPassengerCount(response.data[0].Guest_Count);    
          console.log(guestPassengerCount);            
      })
    Axios.get('http://localhost:3001/numberOfBookingGoldPassengers',{
        params: {
          startDate2:startDate2,
          endDate2:endDate2
        }
       }).then((response)=>{
          setGoldPassengerCount(response.data[0].Gold_Count);
          console.log(goldPassengerCount);          
        })
    Axios.get('http://localhost:3001/numberOfBookingFrequentPassengers',{
          params: {
            startDate2:startDate2,
            endDate2:endDate2
          }
         }).then((response)=>{
            setFrequentPassengerCount(response.data[0].Frequent_Count);
            console.log(frequentPassengerCount);              
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

  const PastFlight_List=[];
  const [PassengerCount,setCountPassengers]=React.useState(0);

  const pastFlights=()=>{  
    Axios.get('http://localhost:3001/pastFlights',{
      params: {
        origin:origin,
        dest:dest
      }
     }).then((response)=>{
      for (const passenger of response.data) {
        PastFlight_List.push(passenger);
      }         
      })

      Axios.get('http://localhost:3001/passengerCount',{
        params: {
          origin:origin,
          dest:dest
        }
       }).then((response)=>{
          setCountPassengers(response.data[0].Passenger_Count)
                      
        })
  }

  const [type, setType] = React.useState('');
  const handleChange2 = (event) => {
    setType(event.target.value);
  };

  const [totalRevenueValue,setTotalRevenueValue]=React.useState(0);

  const totalRevenue=()=>{  
    Axios.get('http://localhost:3001/totalRevenue',{
      params: {
        type:type
      }
     }).then((response)=>{
          setTotalRevenueValue(response.data[0].Total_Revenue);
          console.log(totalRevenueValue);             
      })
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };


  

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
            <Box
          sx={{
            marginTop: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
            {isShown1 && (
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Passenger ID</TableCell>
                  <TableCell align="right">First Name</TableCell>
                  <TableCell align="right">Last Name</TableCell>
                  <TableCell align="right">Passport Number</TableCell>

                </TableRow>
              </TableHead>
              <TableBody>
                {passenger_List.map((val, key) => (
                  <TableRow
                    key={key}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row"> {val.passenger_ID} </TableCell>
                    <TableCell align="right"> {val.first_name} </TableCell>
                    <TableCell align="right">{val.last_name}</TableCell>
                    <TableCell align="right">{val.passport_number}</TableCell>
                    
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            )}
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
            onChange={(event)=>{setStartDate1(event.target.value)}}
            
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
            onChange={(event)=>{setEndDate1(event.target.value)}}
            
          />
        </Grid>
        
        </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={numberOfPassengers}
            >
              Search
            </Button>
            {isShown2 && (<div><center>No of Passenger : {passengerCount}</center></div>)}
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
            onChange={(event)=>{setStartDate2(event.target.value)}}
            
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
            onChange={(event)=>{setEndDate2(event.target.value)}}
            
          />
        </Grid>
        </Grid>
            
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={numberOfBookingPassengers}
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
            
            
            <Button onClick={pastFlights}
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
            
            
            <Button onClick={totalRevenue}
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