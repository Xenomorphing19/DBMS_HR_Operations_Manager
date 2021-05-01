const express = require("express");
const router = express.Router();
const mysql = require("mysql");
const bcrypt = require("bcrypt");

router.get("/", function(req, res){

    res.send("So, you've applied for a job here.");

});

router.post("/", async function(req, res){

    try {
        const salt = await bcrypt.genSalt(10);
        var hashedPassword = await bcrypt.hash(req.body.pass, salt);
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: process.env.DB_PASS,
            database: process.env.DB_NAME
        });
    
        connection.connect(function(err){
            if (err) throw err;
            console.log("Connected!")
    
            // var sql = `INSERT INTO Applicants (app_id, app_name, app_pass, opportunity_id, app_resume, app_status) VALUES (${req.body.id}, ${req.body.name}, ${req.body.pass}, ${req.body.opportunity}, ${req.body.resume}, "Queued")`;
            
            var sql = "INSERT INTO Applicants SET ?";
            var value = {
                "app_id": req.body.id,
                "app_name": req.body.name,
                "app_pass": hashedPassword,
                "opportunity_id": req.body.opportunity,
                "app_resume": req.body.resume,
                "app_status": "Queued"
            };
            
            connection.query(sql, value, function(err, result) {
                if (err) throw err;
                console.log("1 Log Inserted");
    
                res.send("Rest assured!");
            });
        });
    } catch (err) {
        console.log(err);
    }

});

module.exports = router;