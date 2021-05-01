const express = require("express");
const router = express.Router();
const mysql = require("mysql");

router.get("/", function(req, res){
    
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: process.env.DB_PASS,
        database: process.env.DB_NAME
    });
    
    connection.connect(function(err){
        if (err) throw err;
        console.log("Connected!")
    
        var sql = "SELECT * FROM Departments";

        connection.query(sql, function(err, result) {

            // console.log(result);
            res.send(result);

        });
    });


});

module.exports = Router;
