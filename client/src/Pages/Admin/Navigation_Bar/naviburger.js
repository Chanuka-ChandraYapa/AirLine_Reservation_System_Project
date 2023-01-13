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
import { Passenger,CountPassenger, Booking, Revenue, PastFlight } from '../../Summary_Page/summary';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { useAuth } from '../../utils/auth';
import { AuthProvider } from '../../utils/auth';

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

  const {user, setUser} = useAuth();
  const handleLogout = () =>{
      setUser(null);
      navigate('/')
  }
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
            Logged in as an Admin 
          </Typography>
          <nav>
            

          <Button
              variant="button"
              color="text.primary"             
              sx={{ my: 1, mx: 1.5}}
              style={{ color: 'inherit', textDecoration: 'inherit', ':hover': {color: 'purple'}}}
              onClick={()=>{navigate("/Admin");}}
            >
                  Home
              
            </Button>
            
            <Button
              variant="button"
              color="text.primary"           
              sx={{ my: 1, mx: 1.5 }}
              style={{ color: 'inherit', textDecoration: 'inherit'}}
              onClick={()=>{navigate("/AdminAddFlight");}}
            >
              Add Flight
            </Button>

            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                Summary
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem onClick={handleOpen1}>Passengers on a given Flight</MenuItem>
                <Modal
                  aria-labelledby="transition-modal-title"
                  aria-describedby="transition-modal-description"
                  open={open1}
                  onClose={handleClose1}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  <Fade in={open1}>
                  <Box sx={style}>
                    <Passenger/>
                    
                  </Box>
                    </Fade>
                  </Modal>
                  
                <MenuItem onClick={handleOpen2}>No. of Passengers given a Date Range</MenuItem>
                <Modal
                  aria-labelledby="transition-modal-title"
                  aria-describedby="transition-modal-description"
                  open={open2}
                  onClose={handleClose2}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  <Fade in={open2}>
                  <Box sx={style}>
                    <CountPassenger/>
                    
                  </Box>
                    </Fade>
                  </Modal>
                <MenuItem onClick={handleOpen3}>No. of Bookings given a Date Range for each passenger type</MenuItem>
                <Modal
                  aria-labelledby="transition-modal-title"
                  aria-describedby="transition-modal-description"
                  open={open3}
                  onClose={handleClose3}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  <Fade in={open3}>
                  <Box sx={style}>
                    <Booking/>
                    
                  </Box>
                    </Fade>
                  </Modal>
                <MenuItem onClick={handleOpen4}>Details about Past Flights,Given origin and destination</MenuItem>
                <Modal
                  aria-labelledby="transition-modal-title"
                  aria-describedby="transition-modal-description"
                  open={open4}
                  onClose={handleClose4}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  <Fade in={open4}>
                  <Box sx={style}>
                    <PastFlight/>
                    
                  </Box>
                    </Fade>
                  </Modal>
                <MenuItem onClick={handleOpen5}>Total Revenue given Aircraft Type</MenuItem>
                <Modal
                  aria-labelledby="transition-modal-title"
                  aria-describedby="transition-modal-description"
                  open={open5}
                  onClose={handleClose5}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  <Fade in={open5}>
                  <Box sx={style}>
                    <Revenue/>
                    
                  </Box>
                    </Fade>
                  </Modal>
              </Menu>
            

            <Button
              variant="button"
              color="text.primary"           
              sx={{ my: 1, mx: 1.5 }}
              style={{ color: 'inherit', textDecoration: 'inherit'}}
              onClick={()=>{navigate("/AdminAbout");}}
            >
              About
            </Button>
            <Button
              variant="button"
              color="text.primary"          
              sx={{ my: 1, mx: 1.5 }}
              style={{ color: 'inherit', textDecoration: 'inherit'}}
              onClick={()=>{navigate("/AdminTeam");}}
            >
              Team
            </Button>

              
          </nav>
          <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }} onClick={handleLogout}>
            Logout
          </Button>
          
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default NavBar;