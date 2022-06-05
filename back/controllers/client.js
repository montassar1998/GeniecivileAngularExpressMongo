const {Client} = require('../models/client')
exports.addClient=async (req, res) => {
  var crm = new Client(req.body);
  try {
    crm = await crm.save();
    res.send(crm);
  } catch (err) {
    console.log(err);
    res.status(500)
  }
}

exports.getClient=async (req, res) => {
  let cl = await Client.find();
  res.send(cl)
}