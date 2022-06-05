const { Team } = require("../models/Team");

exports.addTeam=async (req, res) => {
    var crm = new Team(req.body);
    try {
      crm = await crm.save();
      res.send(crm);
    } catch (err) {
      console.log(err);
      res.status(500)
    }
  }
  
  exports.getTeams=async (req, res) => {
    let cl = await Team.find();
    res.send(cl)
  }