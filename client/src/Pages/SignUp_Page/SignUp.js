import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import Axios, * as others from "axios";

const theme = createTheme();

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      user: data.get("firstName"),
    });
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [passportNumber, setPassportNumber] = useState(0);
  const [birthday, setBirthday] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const [fullInfromation, setFullInfromation] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [postal_code, setPostalCode] = useState("");

  const [name, setName] = useState("");

  const addUser = () => {
    if (
      !firstName ||
      !lastName ||
      !passportNumber ||
      !birthday ||
      !country ||
      !city ||
      !gender ||
      !phoneNumber ||
      !address ||
      !username ||
      !password ||
      !confirm_password
    ) {
      setFullInfromation("*All fields are required.");
      setCheckPassword("");
    } else if (password != confirm_password) {
      setCheckPassword("*Password and confirm password does not match.");
      setFullInfromation("");
    } else {
      Axios.post("http://localhost:3001/account", {
        firstName: firstName,
        lastName: lastName,
        passportNumber: passportNumber,
        birthday: birthday,
        country: country,
        city: city,
        gender: gender,
        phoneNumber: phoneNumber,
        address: address,
        username: username,
        postal_code: postal_code,
        password: password,
        confirm_password: confirm_password,
      }).then((response) => {
        console.log(response);
        try {
          Axios.post("http://localhost:3001/getID", {
            username: username,
          }).then((response) => {
            console.log(response)
            try {
              setName(response.data[0].passenger_ID);
              window.location.href = "/SignIn";
            } catch {
              setCheckPassword("The username exists or passport number exist.");
            }
          });
        } catch {}
      });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={(event) => {
                    setFirstName(event.target.value);
                  }}
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={(event) => {
                    setLastName(event.target.value);
                  }}
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={(event) => {
                    setPassportNumber(event.target.value);
                  }}
                  autoComplete="given-passportNumber"
                  name="passportNumber"
                  required
                  fullWidth
                  id="passportNumber"
                  label="Passport Number"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={(event) => {
                    setBirthday(event.target.value);
                  }}
                  required
                  fullWidth
                  id="date"
                  label="Date of birth"
                  type="date"
                  name="birthday"
                  autoComplete="family-name"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={(event) => {
                    setCountry(event.target.value);
                  }}
                  autoComplete="given-name"
                  name="country"
                  required
                  fullWidth
                  id="country"
                  label="Country"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={(event) => {
                    setCity(event.target.value);
                  }}
                  required
                  fullWidth
                  id="city"
                  label="City"
                  name="city"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Gender
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="gender"
                      value={gender}
                      name="gender"
                      label="Gender"
                      onChange={(event) => {
                        setGender(event.target.value);
                      }}
                    >
                      <MenuItem value={10}>Male</MenuItem>
                      <MenuItem value={20}>Female</MenuItem>
                      <MenuItem value={30}>Custom</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={(event) => {
                    setPhoneNumber(event.target.value);
                  }}
                  required
                  fullWidth
                  type="tel"
                  id="Telephone_Number"
                  label="Phone no."
                  name="phoneNumber"
                  autoComplete="family-name"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  onChange={(event) => {
                    setAddress(event.target.value);
                  }}
                  required
                  fullWidth
                  id="address"
                  label="Address"
                  name="address"
                  autoComplete="address"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={(event) => {
                    setUsername(event.target.value);
                  }}
                  required
                  fullWidth
                  name="username"
                  label="Username"
                  type="username"
                  id="username"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={(event) => {
                    setPostalCode(event.target.value);
                  }}
                  required
                  fullWidth
                  name="postal_code"
                  label="Postal Code"
                  type="postal_code"
                  id="postal_code"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={(event) => {
                    setConfirmPassword(event.target.value);
                  }}
                  required
                  fullWidth
                  name="confirm_password"
                  label="Confirm Password"
                  type="password"
                  id="confirm_password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label={
                    <Typography variant="body2" fontSize="14">
                      I hereby declare that the information given above is true
                      and accurate to the best of my knowledge
                    </Typography>
                  }
                />
              </Grid>
            </Grid>
            <Button
              onClick={addUser}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>

            <div style={{ color: "red" }}>{fullInfromation}</div>
            <div style={{ color: "red" }}>{checkPassword}</div>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
