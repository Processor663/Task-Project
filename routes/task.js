const router = require('express').Router();
const { getAllTask, createTask } = require('../controllers/task');






router.route('/').get(getAllTask).post(createTask)

// Catch-all 404 for any route not handled above
router.all("*", (req, res) => {
  res.status(404).json({ message: "Route not found" });
});




module.exports = router       
