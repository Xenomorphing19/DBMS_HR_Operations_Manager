const express = require("express");
const router = express.Router();
const mysql = require("mysql");
const bcrypt = require("bcrypt");

router.get("/", function(req, res){
    res.send("Welcome to the Admin server");
});

router.post("/", async function(req, res){

    try {

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.pass, salt);

        var connection = mysql.createConnection({
            host     : 'localhost',
            user     : 'root',
            password : process.env.DB_PASS,
            database: process.env.DB_NAME
        });
          
        connection.connect(function(err) {
            if (err) throw err;
            console.log("Connected!");
            var sql = `INSERT INTO Marketing (emp_id, emp_name, emp_password, dept_role, dob) VALUES (${req.body.id}, ${req.body.name}, ${hashedPassword}, ${req.body.role}, ${req.body.dob})`;
            connection.query(sql, function (err, result) {
              if (err) throw err;
              console.log("1 record inserted");
    
              res.send("Rest assured!");
            });
        });

    } catch (err) {
        console.log(err);
    }

});

module.exports = router;