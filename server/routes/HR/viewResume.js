const express = require("express");
const router = express.Router();
const Applicant = require("../../models/applicant");
const Interview = require("../../models/interview");

router.get("/", function(req, res){

    if(req.user.department === "HR"){

        Applicant.find({status: "Queued"}, function(err, found){
            if(err){
                console.log(err);
                res.sendStatus(500);
            } else if (found) {

                res.render("HR");

            }
        });


    } else {
        res.redirect("/login");
        console.log("This page is only reserved for HR");
    }
});

router.post("/", function(req, res){

    if(req.user.department == "HR") {

        const inter = new Interview({
            interviewer: "",
            interviewee: req.body.applicant,
            opportunity: req.body.opp,
            resume: {
                data: req.body.resume,
                contentType: "file"
            },
            time: "",
            date: "",
            status: "Pending",
            link: "" 
        });

        inter.save(function(err){
            if(err) {
                console.log(err);
                res.sendStatus(500);

            } else {

                Applicant.findOneAndUpdate({_id: req.body.applicant}, {status: "Scheduled For Interview"}, function(err){
                    if(err) {
                        console.log(err);
                        res.sendStatus(500);
                    } else {

                        console.log("Applicant status updated!");
                        res.sendStatus(200);
                    }
                });

            }
        });


    } else {
        res.redirect("/login");
    }

});

module.exports = router;