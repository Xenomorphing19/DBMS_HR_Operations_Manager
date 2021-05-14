const express = require('express');
const app = express();
const dotenv = require('dotenv');
const bodyParser = require("body-parser");
const expbs = require("express-handlebars");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
dotenv.config();

const port = process.env.PORT || 5000;

app.engine('handlebars', expbs({
    defaultLayout: null,
}));
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(express.static('public'));
app.use(bodyParser.json());

/* ------------------Set up Session-------------- */

app.use(session({
    secret: "AMS app for SOE project.",
    resave: false,
    saveUninitialized: true
}));
  
app.use(passport.initialize());
app.use(passport.session());

/* ------------------Setup Complete--------------- */

/* ------------------Set up MongoDB------------- */

mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected to your local MongoDB!");
});

/* -------------------Set up Complete ----------- */

/* ---------------Serializing User ------------- */

const User = require("./models/user");
passport.use(User.createStrategy());

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

/* ----------------- Serialization Complete -------- */

const loginRoute = require("./routes/Auth/login");


app.use("/login", loginRoute);

app.get("/", function(req, res){
    res.render("index");
});

app.listen(port, function(){

    console.log("Server started on port", port);
});

