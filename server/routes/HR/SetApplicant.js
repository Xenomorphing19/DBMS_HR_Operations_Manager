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
        var sql = `UPDATE Applicants SET app_status = "Scheduled For Interview" WHERE app_id = ${req.body.applicant}`;
        connection.query(sql, function (err, result) {
          if (err) throw err;
          console.log("Applicant scheduled for interview");

          res.send("Rest assured!");
        });
    }); 
});

module.exports = router;