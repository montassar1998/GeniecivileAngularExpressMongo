const mongoose = require("mongoose");
const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);
const project_schema = new mongoose.Schema({
  name: String,
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
  },
  activity: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Activity",
  },
  startDate: Date,
  endDate: Date,
  state: Boolean,
  picture: String,
});

let Project = mongoose.model("Project", project_schema);

module.exports.Project = Project;
