const express = require("express");
const router = express.Router();
const mysql = require("mysql");
const crypto = require("crypto");

const db = mysql.createConnection({
  user: "root",
  host: "127.0.0.1",
  password: "Group_project_24",
  database: "airline_reservation_system_2",
});

router.post("/", (req, res) => {
  const name = req.body.name;
  const password = req.body.password;

  db.query(
    "SELECT username,password,passenger_ID FROM register_user WHERE username='" +
      name +
      "'",
    (err, result) => {
      if (result.length == 0 || err) {
        res.send({ success: false });
      } else {
        if (result[0].password == password) {
          res.send({ success: true, result });
        } else {
          res.send({ success: false });
        }
      }
    }
  );
});

module.exports = router;
