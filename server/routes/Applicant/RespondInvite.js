const express = require("express");
const router = express.Router();
const authenticate = require("../../middleware/authenticateToken");

router.get("/", authenticate, function(req, res){
    res.send("Welcome to the respond page");
    console.log("Finally, some good news!");
});

router.post("/", authenticate, function(req, res){
    res.send("This is the respond page.");
    console.log("Wow, you made it this far!");
}); 

module.exports = router;