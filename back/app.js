const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { Client } = require("./models/client");
const activity_router = require("./routes/activity");
const project_router = require("./routes/project");
const client_router = require("./routes/client");
const team_router = require("./routes/team");
app.listen(3000, () => {
  console.log("app listening on port 3000 !");
});
mongoose
  .connect(
    "mongodb+srv://montassar:Devops@cluster0.ctbtu.mongodb.net/cabinets?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connection to mongodb cloud established !"))
  .catch((err) =>
    console.log("Connection to mongodb cloud failed !" + err.message)
  );
var connection = mongoose.connection;
connection.once("open", function () {
  console.log("MongoDB database connection established successfully");
});
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:8888");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});
app.use(express.json());
app.use("/act", activity_router);
app.use("/cl", client_router);
app.use("/proj", project_router);
app.use("/team", team_router);
