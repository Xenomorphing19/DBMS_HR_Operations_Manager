const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const mysql = require("mysql");
const bcrypt = require("bcrypt");

router.get("/", function(req, res){

});

router.post("/", function(req, res){

    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: process.env.DB_PASS,
        database: process.env.DB_NAME
    });
    
    connection.connect(function(err){
        if (err) throw err;
        console.log("Connected!")
    
        var sql = "SELECT * FROM Administrators WHERE ?";
        var value = {
            "admin_name": req.body.name
        }
        connection.query(sql, value, function(err, result) {

            // console.log(result);

            result.forEach(async function(user){

                try {

                    if(await bcrypt.compare(req.body.pass, user.admin_password)) {
                        res.send("Success!");
                        console.log("Welcome", user.admin_name);
                    } else {
                        console.log("Wrong user!");
                    }

                } catch (err) {
                    console.log(err);
                }

            });
        });
    });

});

module.exports = router;