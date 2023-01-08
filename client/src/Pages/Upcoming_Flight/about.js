import * as React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Image from './air.jpg';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


function MainFeaturedPost() {
  let navigate=useNavigate();

    return (
    <main>

    <Paper elevation={24}
      sx={{
        position: 'relative',
        backgroundColor: 'grey.900',
        color: '#fff',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${Image})`,
        width: 'auto',
        height: 500,
      }}
      
    >
      {/* Increase the priority of the hero background image */}
      
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.3)',
          '&:hover': {
            backgroundColor: 'black',
            opacity: [0.9, 0.8, 0.7],
          }
        }}
      />
      <Grid container>
        
          
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography  component="h0" variant="h3" color="inherit" gutterBottom>
              <center>About Us</center>
            </Typography>
            <Typography marginTop={25} variant="h5" color="inherit" paragraph>
            <center>Welcome to B Airways, the premier airline reservation system for all your travel needs. With B Airways, you can easily book flights to destinations around the world, as well as manage your bookings and view your flight itineraries. Our system is designed to be user-friendly and efficient, ensuring that you can find the best prices and availability for your travel plans. Whether you're a business traveler or a leisure traveler...
            </center>
            </Typography>
            <Typography align='center'>
            <Button color="info"
                    size="large"
                    onClick={()=>{navigate("/About");}}
                    variant="contained" href="#" style={{ color: 'inherit', textDecoration: 'inherit'}}>
              Continue Reading.....
            </Button>
            </Typography>
          </Box>
        
      </Grid>
    </Paper>
    </main>
  );
}


export default MainFeaturedPost;