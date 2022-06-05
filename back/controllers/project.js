const { Project } = require("../models/project");
const { Client } = require("../models/client");
exports.addProject = async (req, res) => {
  let client = await Client.findById(req.params.id_client);
  console.log(client);
  if (!client) return res.status(404).send("client not found");
  try {
    let project = new Project(req.body);
    project.client = req.params.id_client
    project.activity = req.params.id_act
    await project.save();
    return res.send(project);
  } catch (error) {
    res.status(405).send(error.message);
  }
};

exports.getProjects = async (req, res) => {
  let proj = await Project.find();
  res.send(proj);
};
