const express = require("express");
const studentRoute = express.Router();
studentRoute.route('/').get((req,res)=>{
    res.send("welcome to router");
});
module.exports = studentRoute;