const express = require("express");
const passport = require("passport");
const User = require("../../models/user");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("admin/admin");
});

router.post("/", function(req, res){

    const user = new User({
        role: req.body.role,
        username: req.body.username,
        password: req.body.password
    });

    req.login(user, (err) => {
        if(err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            passport.authenticate("local")(req, res, () => {

                console.log("Successfully logged in as "+req.user.role);
                res.render("admin/adminHome");

            });
        }
    });

});

module.exports = router;
