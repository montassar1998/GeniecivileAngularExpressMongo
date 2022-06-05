const express = require('express')
const router = express.Router()

//const activity = require('../models/activity')
const teamCtl = require('../controllers/team')
router.post('/add',teamCtl.addTeam)
router.get('/fetch',teamCtl.getTeams)

module.exports = router