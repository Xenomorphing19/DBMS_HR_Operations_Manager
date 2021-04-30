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
        var sql = `INSERT INTO Invitations (letter_id, receiver, response) VALUES (${req.body.id}, ${req.body.receiverID}, ${req.body.response})`;
        connection.query(sql, function (err, result) {
          if (err) throw err;
          console.log("1 record inserted");

          res.send("Rest assured!");
        });
    });
});

module.exports = router;