const express = require('express')
const router = express.Router()

//const activity = require('../models/activity')
const actCtrl = require('../controllers/activity')

router.get('/fetch', actCtrl.getActivities)

router.post('/add', actCtrl.addActivity)
module.exports = router