import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="#">
        B Airways
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function StickyFooter() {
  return (
    <Box
    
      sx={{
        display: 'flex',
        flexDirection: 'column',
        
        padding: "auto",
        
      }}
    >
      <CssBaseline />
      
      <Box
        component="footer"
        
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container alignItems="center" maxWidth="md">
          <Typography variant='h5'>
           <center>Get connected with us on social networks</center>
          </Typography>
          <Box
      sx={{
        '& > :not(style)': {
          m: 2,
        },
      }}
    ><center>
      <IconButton><FacebookIcon color="primary" fontSize="large"/></IconButton>
      <IconButton><InstagramIcon color="secondary" fontSize="large"/></IconButton>
      <IconButton><LinkedInIcon color="primary" fontSize="large"/></IconButton>
      <IconButton><GitHubIcon fontSize="large"/></IconButton>
      <IconButton><WhatsAppIcon color="success" fontSize="large"/></IconButton></center>
    </Box>
          <center><Copyright /></center>
        </Container>
        
      </Box>
    </Box>
  );
}