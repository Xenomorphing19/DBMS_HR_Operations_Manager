const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const mysql = require("mysql");
const bcrypt = require("bcrypt");

router.get("/", function(req, res){

    console.log("You made it this far!");
    res.render("applicant/applicant");

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
    
        var sql = "SELECT * FROM Applicants WHERE ?";
        var value = {
            "app_name": req.body.name
        }
        connection.query(sql, value, function(err, result) {

            console.log(result);

            result.forEach(async function(user){

                try {

                    if(await bcrypt.compare(req.body.pass, user.app_pass)) {
                        console.log("Welcome", user.app_name);

                        const accessToken = jwt.sign(JSON.stringify(user), process.env.ACCESS_TOKEN_SECRET);
                        res.json({accessToken: accessToken});

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