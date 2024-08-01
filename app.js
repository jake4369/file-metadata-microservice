const express = require("express");
const cors = require("cors");
const uploadRouter = require("./routes/uploadRoutes");

const app = express();

app.use(cors());
app.use("/public", express.static(process.cwd() + "/public"));

app.get("/", function (req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

app.use("/api/fileanalyse", uploadRouter);

module.exports = app;
