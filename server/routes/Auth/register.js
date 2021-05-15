const express = require("express");
const passport = require("passport");
const User = require("../../models/user");
const router = express.Router();

router.get("/", (req, res) => { 
    res.send("You are about to register.");
});

router.post("/", (req, res) => {

    const role = "Admin";

    User.register({username: req.body.username}, req.body.password, (err, user) => {
        console.log(req.body);
        if(err) {
            console.log(err);
        } else {
            passport.authenticate("local")(req, res, function(){
                User.findOneAndUpdate({username: req.body.username}, {role: role}, function (err){
                    if(err) {
                        console.log(err);
                    } else {
                        console.log("Role updated");
                    }
                });
            });

            res.send(user);
        }
    });
});

module.exports = router;