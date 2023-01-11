import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import {useState} from 'react';
import Axios, * as others from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';




const theme = createTheme();

const Location = [];

  fetch('http://localhost:3001/airport').then(response => response.json()).then(data => {

  for (let i=0;i<data.length;i++){
    Location.push(data[i].airport_code);
  }   
});

export default function Search() {

  const [isShown, setIsShown] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      From: data.get('from_airport'),
      To: data.get('to_airport'),
      Date: data.get('booking_date'),

    });
  };


  
  
  const [booking_date, setBooking_date] = useState("");
  const [fullInfromation,setFullInfromation]=useState("");
  const [flightList, setFligtList] = useState([]);
  



  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.info.dark,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  

  const searchflight = () => {
    if (!from_airport || !to_airport || !booking_date) {
      setFullInfromation("*All fields are required.")
    }
    else{
      setFullInfromation("")
      Axios.post('http://localhost:3001/searchflight', {
        from_airport: from_airport,
        to_airport: to_airport,
        booking_date: booking_date
       }).then((response) => {
        console.log(response.data);
        setFligtList(response.data)
      });
      setIsShown(true);
    }
    }

    const [from_airport, setFrom_airport] = useState("");
  const handleChange1 = (event) => {
    setFrom_airport(event.target.value);
  };
  
  
  
    const [to_airport, setTo_airport] = useState("");
  const handleChange2 = (event) => {
    setTo_airport(event.target.value);
  };
  const [state,setState]=React.useState('CGK');
  const params = {
    from: from_airport,
    to: to_airport,
  };
  
  const { user, id, search} = useParams();
  

  let navigate = useNavigate(); 
  function onNavigateBooking(flight,departure,schedule,airplane) {
    if(id !== 'guest'){
    navigate('/Booking/'+ id + '/' + flight+ '/' + params.from+'/'+params.to +'/'+booking_date + '/' + departure + '/'+ schedule + '/'+airplane);
    }
    else{
    navigate('/GuestBooking/'+ id + '/' + flight+ '/' + params.from+'/'+params.to +'/'+booking_date + '/'+departure + '/' + schedule+ '/'+airplane);
    }
  }
  // + JSON.stringify(params)
  


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
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
            <SearchIcon />
          </Avatar>
          <Typography component="h0" variant="h5">
            Search Your Flight
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">From Airport</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="from_airport"                   
              name="from_airport"
              label="from_airport" 
              value= {from_airport}
              onChange={handleChange1}
            >
            {Location.map((test)=><MenuItem value={test}>{test}</MenuItem>)}               
            </Select>
          </FormControl>
          <FormControl fullWidth style={{ marginTop: 16 }}>
            <InputLabel id="demo-simple-select-label">To Airport</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="to_airport"                   
              name="to_airport"
              label="to_airport" 
              value= {to_airport}
              onChange={handleChange2}
            >
            {Location.map((test)=><MenuItem value={test}>{test}</MenuItem>)}               
            </Select>
          </FormControl>

            <TextField onChange={(event)=>{setBooking_date(event.target.value)}}
              margin="normal"
              required
              fullWidth
              name="booking_date"
              label="Departure Date"
              id="booking_date"
              type="Date"
              autoComplete="family-name"
              InputLabelProps={{
                shrink:true
              }}
            />
            
            <Button onClick={searchflight}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Search
            </Button>
            <div style={{ textAlign: "center" }}>
                <div style={{ color: "red" }}>{fullInfromation}</div>
            </div>
          </Box>
        </Box>
      </Container>
      {isShown &&
      <Container  maxWidth="lg">
      <TableContainer component={Paper} >
      <Table sx={{ minWidth: 1000 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Flight No.</StyledTableCell>
            <StyledTableCell align="right">From</StyledTableCell>
            <StyledTableCell align="right">To</StyledTableCell>
            <StyledTableCell align="right">Take-Off time&nbsp;(UTC)</StyledTableCell>
            <StyledTableCell align="right">Landing time&nbsp;(UTC)</StyledTableCell>
            <StyledTableCell align="right">Book Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {flightList.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.flight_ID}
              </StyledTableCell>
              <StyledTableCell align="right">{from_airport}</StyledTableCell>
              <StyledTableCell align="right">{to_airport}</StyledTableCell>
              <StyledTableCell align="right">{row.starting_time}</StyledTableCell>
              <StyledTableCell align="right">{row.stopping_time}</StyledTableCell>
              <StyledTableCell align="right"><Button variant="outlined" onClick={() => onNavigateBooking(row.flight_ID,row.starting_time,row.schedule_ID,row.airplane_ID)}>Book</Button></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container> }
    </ThemeProvider>
  );
}