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
import FlightIcon from '@mui/icons-material/FlightOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useState} from 'react';
import Axios, * as others from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


const theme = createTheme();

const timeSlots = Array.from(new Array(24 * 2)).map(
    (_, index) =>
      `${index < 20 ? '0' : ''}${Math.floor(index / 2)}:${
        index % 2 === 0 ? '00' : '30'
      }`,
  );

const Flight=[];
const Airplane = [];
const Time = timeSlots;



fetch('http://localhost:3001/findFlightID').then(response => response.json()).then(data => {
     
  for (let i=0;i<data.length;i++){
    Flight.push(data[i].flight_ID);
  }   
});

fetch('http://localhost:3001/airportID').then(response => response.json()).then(data => {

for (let i=0;i<data.length;i++){
  Airplane.push(data[i].airplane_ID);
}   
});


const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: 48 * 4.5 + 8,
      },
    },
  };

export default function AddFlight() {
 
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        
      };
   
    const [flight_List, setFlight_List]=useState([]);
    const [gender,setGender]=useState("");
    const [flight, setFlight] = useState("");
    const [airplane, setAirplane] = useState("");
    const [time, setTime] = useState("");
    const [date,setDate]=useState("");
    const [origin,setOrigin]=useState("");
    const [destination,setDestination]=useState("");
    const [duration,setDuration]=useState("");
    let [adder,setAdder]=useState("");

    const giveflight = (event) =>{
      Axios.post('http://localhost:3001/flightDetails', {   
      flight:event.target.value    
       }).then((response) => {  
        setFlight(event.target.value);
        setOrigin(response.data[0].origin);
        setDestination(response.data[0].destination);
        setDuration(response.data[0].duration);
        console.log(response);     
    });
    }
    const searchflight = () =>{
      Axios.post('http://localhost:3001/flightDetails', {   
      flight:flight     
       }).then((response) => {  
        
        setOrigin(response.data[0].origin);
        setDestination(response.data[0].destination);
        setDuration(response.data[0].duration);   
    });

      Axios.post('http://localhost:3001/addSchedule', {   
      flight:flight,  
      airplane:airplane,
      time:time,
      date:date   
       }).then((response) => {    
          if (response.data[0][0].Added==="Flight schedule can not be assigned"){
            setAdder("This airplane can not be assigned to this schedule!");
            
          }else{
            setAdder("Flight Schedule is successfully added!");         
          }
       
          
    });
    }
    

  return (
    <ThemeProvider theme={theme}>
      <Container  component="main" maxWidth="md">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <FlightIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Add Flight
          </Typography>
          
          <Table sx={{ mt: 7,minWidth: 650 }}  aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Flight ID</TableCell>
                  <TableCell align="right">Origin</TableCell>
                  <TableCell align="right">Destination</TableCell>
                  <TableCell align="right">Duration</TableCell>

                </TableRow>
              </TableHead>
              <TableHead>
                <TableRow>
                  <TableCell>{flight}</TableCell>
                  <TableCell align="right">{origin}</TableCell>
                  <TableCell align="right">{destination}</TableCell>
                  <TableCell align="right">{duration}</TableCell>

                </TableRow>
              </TableHead>
              <TableBody>
                {flight_List.map((val, key) => (
                  <TableRow
                    key={key}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row"> {val.flight} </TableCell>
                    <TableCell align="right"> {val.origin} </TableCell>
                    <TableCell align="right">{val.destination}</TableCell>
                    <TableCell align="right">{val.duration}</TableCell>
                    
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 7, maxWidth:"500"}}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Flight ID</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="flight"
                    value={flight}
                    name="flight"
                    label="flight"
                    onChange={(event)=>{giveflight(event)}}
                  >
                    {Flight.map((test)=><MenuItem value={test}>{test}</MenuItem>)}
                  </Select>
                </FormControl>
          </Box>
              </Grid>
              <Grid item xs={12}>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Airplane ID</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="airplane"
                    value={airplane}
                    name="airplane"
                    label="airplane"
                    onChange={(event)=>{setAirplane(event.target.value)}}
                  >
                    {Airplane.map((test)=><MenuItem value={test}>{test}</MenuItem>)}
                  </Select>
                </FormControl>
          </Box>
              </Grid>
              <Grid item xs={12}>
                <TextField onChange={(event)=>{setDate(event.target.value)}}
                  required
                  fullWidth
                  id="date"
                  label="Schedule Date"
                  type="date"
                  name="birthday"
                  autoComplete="family-name"
                  InputLabelProps={{
                    shrink:true
                  }}
                />
              </Grid>

              <Grid item xs={12}>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Starting Time</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="time"
                    value={time}
                    name="time"
                    label="time"
                    MenuProps = {MenuProps}
                    onChange={(event)=>{setTime(event.target.value)}}
                  >
                    {Time.map((test)=><MenuItem value={test}>{test}</MenuItem>)}
                  </Select>
                </FormControl>
          </Box>
              </Grid>
             
            </Grid>
            <Button onClick={searchflight}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add Flight
            </Button>

            
          </Box>
        </Box>
        {adder === "Flight Schedule is successfully added!" ? <div style={{color: "green"}}><center>{adder}</center></div>: <div style={{color: "red"}}><center>{adder}</center></div>}
        
      </Container>
    </ThemeProvider>
  );
}