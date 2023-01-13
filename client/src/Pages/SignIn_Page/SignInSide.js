import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Axios from 'axios';
import {useState} from 'react';
import { useAuth } from '../utils/auth';
import { useNavigate } from 'react-router-dom';


const theme = createTheme();

export default function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      user: data.get('user'),
      password: data.get('password'),
    });
  };

  const [name,setName]=useState("");
  const [password,setPassword]=useState("");
  const [wrong,setWrong]=useState("");

  const {user, setUser} = useAuth();
  let navigate = useNavigate();
 const checkUser=()=>{
    Axios.post('http://localhost:3001/create',{
        name:name,
        password:password}).then((response)=>{
            
            if (response.data.success){  
                setName(response.data.result[0].passenger_ID);
                setUser("User") ; 
                navigate("/User/" + String(response.data.result[0].passenger_ID)) 
                // window.location.href="/User/" + String(response.data.result[0].passenger_ID);  
            }
            else{
                setWrong("*Password is wrong");
            }
        })
  }
  

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://images4.alphacoders.com/286/286536.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField onChange={(event)=>{setName(event.target.value)}}
                margin="normal"
                required
                fullWidth
                id="user"
                label="Username:"
                name="user"
                autoComplete="user"
                autoFocus
              />
              <TextField onChange={(event)=>{setPassword(event.target.value)}}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />              
              <Button onClick={checkUser}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>    

              <div style={{color: "red"}}>{wrong}</div>         
                          
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}