const mongoose = require("mongoose");

const activity_schema = new mongoose.Schema({
    name:  String,
    description: String,
})
let Activity = mongoose.model("Activity", activity_schema)

module.exports.Activity = Activity