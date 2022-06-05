const mongoose = require("mongoose");

const client_schema = new mongoose.Schema({
  name: String
});

let Client = mongoose.model("Client", client_schema);

module.exports.Client = Client;
