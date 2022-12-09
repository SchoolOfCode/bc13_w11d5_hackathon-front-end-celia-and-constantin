const { query } = require("../data/index.js");

async function getSteps() {
    const result = await query("SELECT * FROM evilPlan;")
    const stepsArray = result.rows;
    return stepsArray;
  }











  module.exports = {
    getSteps
   
};