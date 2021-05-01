const express = require("express");
const router = express.Router();

router.get("/", function(req, res){

    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : process.env.DB_PASS,
        database: process.env.DB_NAME
    });
      
    connection.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var query1 = `SELECT * FROM ${req.body.dept}`;
        connection.query(query1, function (err, result) {
          if (err) throw err;
          console.log("This is the", req.body.dept, "Table");

          res.send(results);
        });

    });

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
        var sql = `INSERT INTO Interviews (int_id, int_dept, int_member, int_app, int_resume, int_status) VALUES (${req.body.id}, ${req.body.dept}, ${req.body.memberID}, ${req.body.appID}, ${req.body.resume}, "Pending")`;
        connection.query(sql, function (err, result) {
          if (err) throw err;
          console.log("1 record inserted");

          res.send("Rest assured!");
        });
    });
});

module.exports = router;