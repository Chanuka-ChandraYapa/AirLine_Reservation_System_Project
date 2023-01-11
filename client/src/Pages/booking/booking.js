import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddressForm from './address';
import PaymentForm from './payment';
import Review from './review';
import Image1 from './Platinum.png';
import Image2 from './Business.png';
import Image3 from './Economy.png';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import { useParams } from 'react-router-dom';
import { useEffect,useState } from 'react';


const steps = ['General Information', 'Passenger Information', 'Payment Details'];

function GetStepContent(step) {
  const [type,setType] = React.useState('');
  const [seatID,setSeatID]= React.useState(0);
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm callback={setType} seat = {setSeatID}/>;
    case 2:
      return <Review type={type} seatID = {seatID}/>;
    default:
      throw new Error('Unknown step');
  }
}

const theme = createTheme();



export default function Booking() {
  const [activeStep, setActiveStep] = React.useState(0);
  const { id,flight, from, to , departure} = useParams();
  const flightdetails = [
    { name: 'Flight', detail: flight},
    { name: 'From', detail: from },
    { name: 'To', detail: to },
    { name: 'Departure Time', detail: departure },
  ];  
 

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };


  return (
    
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="md" sx={{ mb: 4, alignItems: 'flex-start' }}>
      <Box m={2} pt={3}>
        <Paper variant="outlined" sx={{my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 }}}>
            <Typography component="h5" variant="h5" align="center" on>
                Flight Details
            </Typography>
            
            <Grid container justifyContent={"center"} marginTop={5}>
            {flightdetails.map((flight) => (
              <React.Fragment key={flight.name}>
                <Grid item xs={4}>
                  <Typography align="right" gutterBottom>{flight.name}</Typography>
                </Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}>
                  <Typography align="left" gutterBottom>{flight.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
      </Paper>
      </Box>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Booking
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
             {GetStepContent(3)} 
            </React.Fragment>
          ) : (
            <React.Fragment>
              {GetStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}
              {activeStep === steps.length - 1 ? '' : <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}             
                >
                 Next
                </Button>}
                
              </Box>
            </React.Fragment>
          )}
   
        </Paper>
      </Container>
      <Container maxWidth="sm">
        <Typography marginBottom={5} component="h2" variant="h4" align="center">
            Seat View
        </Typography>
      <img src={Image1} alt="Italian Trulli" style={{width: 500, height:800}}></img>
      <img src={Image2} alt="Italian Trulli" style={{width: 500, height:800}}></img>
      <img src={Image3} alt="Italian Trulli" style={{width: 500, height:800}}></img>
      </Container>
    </ThemeProvider>
  );
}