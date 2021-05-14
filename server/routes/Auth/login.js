const express = require("express");
const passport = require("passport");
const User = require("../../models/user");
const router = express.Router();

router.get("/", (res, res) => {
    res.render("");
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
                res.send(req.user);

            });
        }
    });

});

module.exports = router;
