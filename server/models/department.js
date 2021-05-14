const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const findOrCreate = require("mongoose-findorcreate");
const passport = require("passport");

const deptSchema  = new mongoose.Schema({
    deptName: String,
    deptStrength: Number,
    vacancy: Number,
    manager: String,
    team: [String],
});

deptSchema.plugin(passportLocalMongoose);
deptSchema.plugin(findOrCreate);

const Department = new mongoose.model("Department", deptSchema);
passport.use(User.createStrategy());

module.exports = Department;