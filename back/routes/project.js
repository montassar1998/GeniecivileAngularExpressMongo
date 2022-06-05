const express = require('express')
const router = express.Router()

//const activity = require('../models/activity')
const projCtl = require('../controllers/project')

router.post('/add/:id_client/:id_act',projCtl.addProject)
router.get('/fetch',projCtl.getProjects)

module.exports = router