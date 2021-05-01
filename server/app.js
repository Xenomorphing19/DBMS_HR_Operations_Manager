const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
var mysql = require('mysql');
dotenv.config();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : false}));

// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : process.env.DB_PASS,
// });

// connection.connect(function(err){
//     if (err) {
//         throw err;
//     } else {
//         console.log("MySQL Connected!");
//     }
// });

// var id = "id1001";
// var name = "ani"

// connection.query(`INSERT INTO applicant (id, name) VALUES ('${id}', '${name}')`, function (error, results, fields) {
//   if (error) throw error;
//   console.log(results);
// });

// connection.end();

const addEmployee = require("./routes/Admin/AddEmployee");
const applyForOpp = require("./routes/Applicant/ApplyForOpp");
const respondInvite = require("./routes/Applicant/RespondInvite");
const loginRoute = require("./routes/Auth/Login");
const sendInvite = require("./routes/HR/SendInvitation");
const setApplicant = require("./routes/HR/SetApplicant");
const resultRoute = require("./routes/Interview/InterviewResult");
const setInterview = require("./routes/Manager/SetInterview");

/* General Routes */

app.use("/login", loginRoute);

/* Routes for Administrator */

app.use("/admin/add", addEmployee);

/* Routes for Applicant */

app.use("/applicant/apply", applyForOpp);
app.use("/applicant/respond", respondInvite);

/* Routes for HR */

app.use("/hr/invite", sendInvite);
app.use("/hr/applicants", setApplicant);

/* Routes for Interview */

app.use("/interview", resultRoute);

/* Routes for Manager */

app.use("/manager/set", setInterview);

app.listen(port, function(){

    console.log("Server started on port ", port);
});

