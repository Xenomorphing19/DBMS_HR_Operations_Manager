const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require("body-parser");
dotenv.config();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(bodyParser.json());

const adminLogin = require("./routes/Admin/AdminLogin");
const addEmployee = require("./routes/Admin/AddEmployee");
const applyForOpp = require("./routes/Applicant/ApplyForOpp");
const applicantLogin = require("./routes/Applicant/ApplicantLogin");
const respondInvite = require("./routes/Applicant/RespondInvite");
const showDepts = require("./routes/Auth/SendDepartments");
const accFinLogin = require("./routes/Auth/AccFinLogin");
const HRLogin = require("./routes/Auth/HRLogin");
const marketingLogin = require("./routes/Auth/MarketingLogin");
const productionLogin = require("./routes/Auth/ProductionLogin");
const QALogin = require("./routes/Auth/QALogin");
const RDLogin = require("./routes/Auth/RDLogin");
const salesLogin = require("./routes/Auth/SalesLogin");
const sendInvite = require("./routes/HR/SendInvitation");
const setApplicant = require("./routes/HR/SetApplicant");
const resultRoute = require("./routes/Interview/InterviewResult");
const setInterview = require("./routes/Manager/SetInterview");
const viewApplicants = require("./routes/Manager/ViewApplicants");

/* Login Routes */

app.use("/login", showDepts);
app.use("/login/accfin", accFinLogin);
app.use("/login/HRLogin", HRLogin);
app.use("/login/marketing", marketingLogin);
app.use("/login/production", productionLogin);
app.use("/login/qa", QALogin);
app.use("/login/rd", RDLogin);
app.use("/login/sales", salesLogin);

/* Routes for Administrator */

app.use("/admin/login", adminLogin);
app.use("/admin/add", addEmployee);

/* Routes for Applicant */

app.use("/applicant/apply", applyForOpp);
app.use("/applicant/login", applicantLogin);
app.use("/applicant/respond", respondInvite);

/* Routes for HR */

app.use("/hr/invite", sendInvite);
app.use("/hr/applicants", setApplicant);

/* Routes for Interview */

app.use("/interview", resultRoute);

/* Routes for Manager */

app.use("/manager/set", setInterview);
app.use("/manager/view", viewApplicants);

app.listen(port, function(){

    console.log("Server started on port ", port);
});

