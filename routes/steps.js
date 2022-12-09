const express = require("express");
const router = express.Router();

const{
    getSteps
} = require("../models/steps.js");

router.get("/", async function(req, res){
    const result = await getSteps();
    res.json({success: true, payload: result});
});





module.exports = router;
