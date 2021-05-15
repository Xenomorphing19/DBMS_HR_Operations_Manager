const express = require("express");
const router = express.Router();
const Department = require("../../models/department");
const Interview = require("../../models/interview");

router.get("/", function(req, res){

    if(req.user.role == "Manager"){

        Interview.find({opportunity: req.user.department}, function(err, inters){
            if(err){
                console.log(err);
                res.sendStatus(500);
            } else if (inters) {

                res.render("manager/managerHome");
            }
        });


    } else {
        res.redirect("/login");
    }

});

router.post("/", function(req, res){

    if(req.user.role == "Manager") {

        Department.findOne({username: req.body.selected}, function(err, found){
            if(err){
                console.log(err);
                res.sendStatus(500);
            } else if (found) {
                
                Interview.findOne({_id: req.body.interview}, function(err, inter){
                    if(err){
                        console.log(err);
                        res.sendStatus(500);
                    } else if (inter) {

                        inter.interviewer = found.username;
                        
                        inter.save(function(err){
                            if(err){
                                console.log(err);
                                res.sendStatus(500);
                            } else {
                                res.sendStatus(200);
                                console.log("Successfully set interviewer");
                            }
                        });
                    } 
                });

            }
        });

    } else {
        res.redirect("/login");
    }

});

module.exports = router;