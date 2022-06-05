const express = require('express')
const router = express.Router()

//const activity = require('../models/activity')
const cliCtl = require('../controllers/client')

router.get('/fetch', cliCtl.getClient)

router.post('/add/:id_client', cliCtl.addClient)
module.exports = router