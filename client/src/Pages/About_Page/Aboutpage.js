import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const cards = [1, 2, 3];

const theme = createTheme();

export default function Album() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              About Us
            </Typography>
            <Grid item key={cards} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h5" align="center" color="text.secondary" paragraph>
                    B Airlines has been a leader in the aviation industry for over 50 years,
                    with a strong commitment to safety, customer service, and innovation. Our fleet 
                    of modern aircraft serves over 100 destinations across six continents, and we are
                    proud to have received numerous awards for our high levels of satisfaction among
                    travelers. In addition to our focus on operational excellence, we are also committed 
                    to sustainability and giving back to the communities we serve. Thank you for
                    choosing B Airlines for your travel needs.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">More about us...</Button>
              <Button variant="outlined">Aircraft details</Button>
            </Stack>
          </Container>
        </Box>
        <CardMedia
                    component="img" 
                    sx={{
                      // 16:9
                    }}
                    image="AboutUs03.jpg"
                    alt="random" 
                  />
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom 
            >
             Aircraft Details
            </Typography>
        <Container sx={{ py: 1 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
             
              <Grid item key={cards} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                    }}
                    image="Boeing737.jpg"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h1" style={{fontWeight: 'bold'}}>
                     Boeing 737
                    </Typography>
                    <Typography>
                        <ul style={{fontSize: '15px'}}>
                            <li>Manufacture Company: Boeing</li>
                            <li>Seating Capacity: 149</li>
                            <li>Fuel Capacity: 25816L</li>
                            <li>Average Speed: 530km/h</li>
                        </ul>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    {/* <Button size="small">View</Button>
                    <Button size="small">Edit</Button> */}
                  </CardActions>
                </Card>
              </Grid>
              <Grid item key={cards} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9 
                    }}
                    image="Boeing757.jpg"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2" style={{fontWeight: 'bold'}}>
                     Boeing 757
                    </Typography>
                    <Typography>
                        <ul style={{fontSize: '15px'}}>
                            <li>Manufacture Company: Boeing</li>
                            <li>Seating Capacity: 200</li>
                            <li>Fuel Capacity: 43490L</li>
                            <li>Average Speed: 530km/h</li>
                        </ul>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item key={cards} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9 
                    }}
                    image="AirbusA380.jpg"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2" style={{fontWeight: 'bold'}}>
                     Airbus A380
                    </Typography>
                    <Typography>
                        <ul style={{fontSize: '15px'}}>
                            <li>Manufacture Company: Airbus</li>
                            <li>Seating Capacity: 615</li>
                            <li>Fuel Capacity: 31529L</li>
                            <li>Average Speed: 634km/h</li>
                        </ul>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
             
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}