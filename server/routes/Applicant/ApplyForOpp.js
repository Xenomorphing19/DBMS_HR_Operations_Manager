const express = require("express");
const router = express.Router();
const mysql = require("mysql");

router.get("/", function(req, res){

    res.send("So, you've applied for a job here.");

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
        console.log("Connected!");
        var sql = `INSERT INTO Applicants (app_id, app_name, opportunity_id, app_resume, app_status) VALUES (${req.body.id}, ${req.body.name}, ${req.body.opp}, ${req.body.resume}, 'Queued')`;
        connection.query(sql, function(err, result) {
            if (err) throw err;
            console.log("1 Log Inserted");

            res.send("Rest assured!");
        });
    });

});

module.exports = router;