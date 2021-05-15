const express = require("express");
const router = express.Router();
const User = require("../../models/user");
const Interview = require("../../models/interview");
const Department = require("../../models/department");

router.get("/", function(req, res){

    if(req.user.role == "Admin") {

        Interview.find({status: "Accepted"}, function(err, found){
            if(err){
                console.log(err);
            } else if (found){
                
                res.render("admin/adminHome");
            }
        });


    } else {
        res.redirect("/login");
    }


});

router.post("/", function(req, res){
    
    const employee = {
        role: "Team Member",
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        dob: req.body.dob,
        department: req.body.department
    }

    User.register({username: req.body.username}, req.body.password, (err, user) => {
        console.log(req.body);
        if(err) {
            console.log(err);
        } else {
            passport.authenticate("local")(req, res, function(){
                User.findOneAndUpdate({username: req.body.username}, employee, function (err){
                    if(err) {
                        console.log(err);
                    } else {
                        console.log("Employee Info updated");

                        Department.findOne({deptName: req.body.department}, function(err, found){
                            if(err){
                                console.log(err);
                                res.sendStatus(500);
                            } else if (found) {

                                found.team.push(req.body.username);

                                found.save(function(err){
                                    if(err){
                                        console.log(err);
                                        res.sendStatus(500);
                                    } else {
                                        res.sendStatus(200);
                                    }
                                });
                            } else {
                                res.sendStatus(404);
                            }
                        });
                    }
                });
            });

        }
    });

});

module.exports = router;