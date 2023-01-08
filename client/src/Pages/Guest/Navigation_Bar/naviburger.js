import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// import Button from '@mui/material-next/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import { ariaHidden } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { blue, blueGrey, deepOrange, green, grey, lightBlue, red } from '@mui/material/colors';
import Image from './Avatar.jpeg';
import { useNavigate } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function NavBar() {  
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  const [open5, setOpen5] = React.useState(false);

  const handleOpen1 = () => setOpen1(true);
  const handleClose1= () => setOpen1(false);

  const handleOpen2 = () => setOpen2(true);
  const handleClose2= () => setOpen2(false);

  const handleOpen3 = () => setOpen3(true);
  const handleClose3= () => setOpen3(false);

  const handleOpen4 = () => setOpen4(true);
  const handleClose4= () => setOpen4(false);

  const handleOpen5 = () => setOpen5(true);
  const handleClose5= () => setOpen5(false);
  
  let navigate=useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <AppBar
        style={{ background: lightBlue}}
        position = "fixed"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography marginLeft="50px" >
          <Avatar
            alt="B Airways"
            src={Image}
            sx={{ width: 250, height: 60 }}
            variant="rounded"
            />
          </Typography>
          <Typography marginLeft="15px" variant="h8" color="inherit" noWrap sx={{ flexGrow: 1, color: "#5465FF" }}style={{ }}>
            Logged in as a Guest
          </Typography>
          <nav>
            <Button
              variant="button"
              color="text.primary"             
              sx={{ my: 1, mx: 1.5}}
              style={{ color: 'inherit', textDecoration: 'inherit', ':hover': {color: 'purple'}}}
              onClick={()=>{navigate("/");}}
            >
                  Home
              
            </Button>

            
            
            <Button
              variant="button"
              color="text.primary"           
              sx={{ my: 1, mx: 1.5 }}
              style={{ color: 'inherit', textDecoration: 'inherit'}}
              onClick={()=>{navigate("/Guest/guest/GuestSearch");}}
            >
              Search Flight
            </Button>

            
            <Button
              variant="button"
              color="text.primary"           
              sx={{ my: 1, mx: 1.5 }}
              style={{ color: 'inherit', textDecoration: 'inherit'}}
              onClick={()=>{navigate("/Guest/guest/GuestAbout");}}
            >
              About
            </Button>
            <Button
              variant="button"
              color="text.primary"          
              sx={{ my: 1, mx: 1.5 }}
              style={{ color: 'inherit', textDecoration: 'inherit'}}
              onClick={()=>{navigate("/Guest/guest/GuestTeam");}}
            >
              Team
            </Button>

              
          </nav>
          
          <Button href="#" variant="contained" sx={{ my: 1, mx: 1.5 }} onClick={()=>{navigate("/SignUp");}}>
            Register
          </Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default NavBar;