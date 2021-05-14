const express = require("express");
const router = express.Router();
const Applicant = require("../../models/applicant");
const multer = require("multer");
const {v4: uuidv5} = require("uuid");

var useName= "";

router.get("/", function(req, res){
    res.render("applicant/Applicant-form");
});

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb (null, '../public/resume');
    },

    filename: (req, file, cb) => {
        useName = uuidv4() + '.pdf';
        cb (null, useName);
    }
});

const upload = multer({storage: storage});

router.post("/", upload.single('myFile'), function(req, res){

    const applic = new Applicant({
        name: req.body.name,
        email: req.body.email,
        status: "Queued",
        opportunity: req.body.opportunity,
        resume: {
            data: useName,
            contentType: 'file'
        }
    });

    applic.save(function(err){
        if(err){
            console.log(err);
            res.sendStatus(500);
        } else {
            console.log("Successfully applied for position!");
            res.sendStatus(200);
        }
    })


});

module.exports = router;
