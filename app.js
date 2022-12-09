const express = require("express");
const morgan = require("morgan");
const app = express();
const PORT = process.env.port || 3000;

const stepsRouter = require("./routes/steps.js");


app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.json());

app.use("/Celia", stepsRouter);


app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});
