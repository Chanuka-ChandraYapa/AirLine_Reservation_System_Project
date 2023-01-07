import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';


const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: 48 * 4.5 + 8,
      },
    },
  };
export default function PaymentForm({num}) {
    const [type, setType] = React.useState('');
    const [column, setColumn] = React.useState('');
    const [row, setRow] = React.useState('');
  const handleChange1 = (event) => {
    setType(event.target.value);
  };
  const handleChange2 = (event) => {
    setColumn(event.target.value);
  };
  const handleChange3 = (event) => {
    setRow(event.target.value);
  };

  
  return (
    <React.Fragment>
      {new Array(num).fill(0).map((_, index) => (     
      <div key={index}>
      <Typography variant="h6" gutterBottom>
        Passenger {index+1}
      </Typography>
      <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="PassportNumber"
            label="Passport Number"
            fullWidth
            autoComplete="pp-number"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="birthDate"
            label="Date of Birth"
            fullWidth
            autoComplete="birthDate"
            type= "date"
            variant="standard"
            InputLabelProps={{
              shrink:true
            }}
          />
        </Grid>
        <Grid item xs={12}>
            <Typography marginLeft={2} marginTop={6} variant="h8" gutterBottom>
                Select the Seat
            </Typography>
        </Grid>
      
    <Grid item xs={12} md={4}>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">Class Type</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={type}
        label="Class Type"
        onChange={handleChange1}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={'Economy'}>Economy</MenuItem>
        <MenuItem value={'Business'}>Business</MenuItem>
        <MenuItem value={'Platinum'}>Platinum</MenuItem>
      </Select>
    </FormControl>
    </Grid>

    <Grid item xs={12} md={4}>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">Column</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={column}
        MenuProps = {MenuProps}
        label="Column"
        onChange={handleChange2}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
        <MenuItem value={5}>5</MenuItem>
        <MenuItem value={6}>6</MenuItem>
        <MenuItem value={7}>7</MenuItem>
        <MenuItem value={8}>8</MenuItem>
        <MenuItem value={9}>9</MenuItem>
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={11}>11</MenuItem>
        <MenuItem value={12}>12</MenuItem>
        <MenuItem value={13}>13</MenuItem>
        <MenuItem value={14}>14</MenuItem>
        <MenuItem value={15}>15</MenuItem>
        <MenuItem value={16}>16</MenuItem>
        <MenuItem value={17}>17</MenuItem>
        <MenuItem value={18}>18</MenuItem>
        <MenuItem value={19}>19</MenuItem>
        <MenuItem value={20}>20</MenuItem>
        <MenuItem value={21}>21</MenuItem>
        <MenuItem value={22}>22</MenuItem>
        <MenuItem value={23}>23</MenuItem>
        <MenuItem value={24}>24</MenuItem>
        <MenuItem value={25}>25</MenuItem>
        <MenuItem value={26}>26</MenuItem>
        <MenuItem value={27}>27</MenuItem>
        <MenuItem value={28}>28</MenuItem>
        <MenuItem value={29}>29</MenuItem>
        <MenuItem value={30}>30</MenuItem>
      </Select>
    </FormControl>
    </Grid>

    <Grid item xs={12} md={4}>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">Row</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={row}
        label="Row"
        onChange={handleChange3}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={'A'}>A</MenuItem>
        <MenuItem value={'B'}>B</MenuItem>
        <MenuItem value={'C'}>C</MenuItem>
        <MenuItem value={'D'}>D</MenuItem>
        <MenuItem value={'E'}>E</MenuItem>
        <MenuItem value={'F'}>F</MenuItem>
      </Select>
    </FormControl>
    </Grid>

      </Grid>
      <Typography marginTop={4} variant="h6" gutterBottom>
        ---------------------------------------------------------------------------------------------------------------------
      </Typography>
      </div>
       ))}
      <Typography marginTop={4} variant="h6" gutterBottom>
        Payment Details
      </Typography>
      <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            label="Name on card"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            label="Expiry date"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}