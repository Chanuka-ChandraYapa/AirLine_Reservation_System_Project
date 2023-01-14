const express = require("express");
const router = express.Router();
const mysql = require("mysql");

const db = mysql.createConnection({
  user: "root",
  host: "127.0.0.1",
  password: "Group_project_24",
  database: "airline_reservation_system_2",
});

router.post("/", (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const passportNumber = req.body.passportNumber;
  const birthday = req.body.birthday;

  const calculateAge = (birthday) => {
    const currentDate = new Date();
    const birthDate = new Date(birthday);
    const ageInMilliseconds = currentDate - birthDate;
    const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25); // 1000 milliseconds in a second, 60 seconds in a minute, 60 minutes in an hour, 24 hours in a day, 365.25 days in a year (to account for leap years)
    return Math.floor(ageInYears);
  };

  const age = calculateAge(birthday);

  db.query(
    "call add_geust_user('" +
      firstName +
      "', '" +
      lastName +
      "', '" +
      passportNumber +
      "', '" +
      birthday +
      "', '" +
      age +
      "');",
    (error, results) => {
      res.send(results);
    }
  );
});

module.exports = router;
