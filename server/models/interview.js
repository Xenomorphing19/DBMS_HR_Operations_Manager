const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const findOrCreate = require("mongoose-findorcreate");
const passport = require("passport");

const intview  = new mongoose.Schema({
    interviewer: String,
    interviewee: String,
    opportunity: String,
    resume: {
        data: String,
        contentType: String
    },
    time: String,
    date: String,
    status: String,
    link: String
});

intview.plugin(passportLocalMongoose);
intview.plugin(findOrCreate);

const Interview = new mongoose.model("Interview", intview);
passport.use(User.createStrategy());

module.exports = Interview;