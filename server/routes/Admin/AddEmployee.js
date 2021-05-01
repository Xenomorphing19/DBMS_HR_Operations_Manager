const express = require("express");
const router = express.Router();
const mysql = require("mysql");

router.get("/", function(req, res){
    res.send("Welcome to the Admin server");
});

router.post("/", function(req, res){

    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : process.env.DB_PASS,
        database: process.env.DB_NAME
    });
      
    connection.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = `INSERT INTO Marketing (emp_id, emp_name, emp_password, dept_role, dob) VALUES (${req.body.id}, ${req.body.name}, ${req.body.pass}, ${req.body.role}, ${req.body.dob})`;
        connection.query(sql, function (err, result) {
          if (err) throw err;
          console.log("1 record inserted");

          res.send("Rest assured!");
        });
    });
});

module.exports = router;