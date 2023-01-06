import * as React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Image1 from './air1.jpeg';
import Image2 from './air2.jpeg';
import Image3 from './air3.jpeg';
import Button from '@mui/material/Button';
import { autocompleteClasses } from '@mui/material';
import { height } from '@mui/system';
import { useState,useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { useNavigate } from 'react-router-dom';

const images = [Image1, Image2, Image3];
function Main() {

  let navigate=useNavigate();
  const [counter,setCounter] = useState(0);

  setInterval(function(){
    counter === 2 ? setCounter(0) : setCounter(counter + 1);
  }, 3000);
    return (
    <main>

    <Paper elevation={24}
      sx={{
        position: "relative",
        backgroundColor: 'grey.900',
        color: '#fff',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat:'repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${images[counter]})`,
        width: 'auto',
        height: 900,
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
          
        }}
      />
      <Grid container>
        <Grid item md={6}>
          
          <Box
          m={2} 
          pt={10}
            sx={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
              
              
            }}
          >
            <Typography  fontSize={100} component="h0" variant="h2" color="inherit" gutterBottom>
              <center>B Airways</center>
            </Typography>
            <Typography  fontSize={50} marginTop={'10px'}  color="inherit" >
            <center>We fly you Everywhere
            </center>
            </Typography>
            
            
          </Box>
        </Grid>
      </Grid>
    </Paper>
    
    </main>
  );
}


export default Main;