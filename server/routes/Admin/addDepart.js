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

        const dept = new Department({
            deptName: req.body.deptName,
            deptStrength: 1,
            vacancy: 0,
            manager: req.body.manager,
            team: []
        });

        dept.save(function(err){
            if(err){
                console.log(err);
                res.sendStatus(500);
            } else {
                res.send(200);
                console.log("Department successfully created!");
            }
        });

    } else {
        res.redirect("/login");
    }

});

module.exports = router;