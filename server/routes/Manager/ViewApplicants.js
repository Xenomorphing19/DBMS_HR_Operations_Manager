const express = require("express");
const router = express.Router();

router.get("/", function(req, res){

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
        var sql = `SELECT * FROM Applicants WHERE app_status = "Scheduled for Interview"`;
        connection.query(sql, function (err, result) {
          if (err) throw err;
          console.log("1 record inserted");

          res.json(result);
        });
    });
});

module.exports = router;