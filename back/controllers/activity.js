const {Activity} = require('../models/activity')

exports.addActivity=async (req, res) => {
  var crm = new Activity(req.body);
  try {
    crm = await crm.save();
    res.send(crm);
  } catch (err) {
    console.log(err);
    res.status(500)
  }
}

exports.getActivities=async (req, res) => {
  let activities = await Activity.find();
  res.send(activities)
}