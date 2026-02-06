const router = require('express').Router();
const { getTask } = require('../controllers/task');






router.route('/').get(getTask)






module.exports = router       
