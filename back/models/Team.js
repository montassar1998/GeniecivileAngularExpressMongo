const mongoose = require("mongoose");

const team_schema = new mongoose.Schema({
    Fname: String,
    Lname: String,
    quotes:String,
    smF:String,
    smTwi:String,
    smIn:String
})

let Team = mongoose.model("Team",team_schema)

module.exports.Team = Team