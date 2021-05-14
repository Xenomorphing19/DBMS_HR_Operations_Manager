const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const findOrCreate = require("mongoose-findorcreate");
const passport = require("passport");

const applicantSchema  = new mongoose.Schema({
    name: String,
    email: String,
    status: String,
    opportunity: String,
    resume: {
        data: String,
        contentType:String
    }
});

applicantSchema.plugin(passportLocalMongoose);
applicantSchema.plugin(findOrCreate);

const Applicant = new mongoose.model("Applicant", applicantSchema);
passport.use(User.createStrategy());

module.exports = Applicant;