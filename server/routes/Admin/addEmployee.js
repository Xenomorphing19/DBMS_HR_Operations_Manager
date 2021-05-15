const express = require("express");
const router = express.Router();
const Department = require("../../models/department");

router.get("/", function(req, res){

    if(req.user.role == "Admin") {

        Department.find({}, function(err, depts){
            if(err){
                console.log(err);
                res.sendStatus(500);
            } else if (depts) {
    
                res.render("admin/adminHome");
            }
        });
    } else {
        res.redirect("/login");
    }


});

router.post("/", function(req, res){
    
    if(req.user.role == "Admin") {

        Department.findOne({deptName: req.body.deptName}, function(err, found){
            if(err){
                console.log(err);
                res.sendStatus(500);
            } else if (found) {

                found.team.push(req.body.member);

                found.save(function(err){
                    if(err){
                        console.log(err);
                        res.sendStatus(500);
                    } else {
                        res.sendStatus(200);
                        console.log("Successfully added a Team Member to the Department "+req.body.deptName);
                    }
                });
            }
        });

    } else {
        res.redirect("/login");
    }

});

module.exports = router;