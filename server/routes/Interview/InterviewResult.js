const express = require("express");
const router = express.Router();

router.get("/", function(req, res){

});

router.post("/", function(req, res){

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
        var sql = `UPDATE Interviews SET int_status = ${req.body.outcome} WHERE int_id = ${req.body.id}`;
        connection.query(sql, function (err, result) {
          if (err) throw err;
          console.log("1 record inserted");

          res.send("Rest assured!");
        });
    });
});

module.exports = router;
});

module.exports = router;