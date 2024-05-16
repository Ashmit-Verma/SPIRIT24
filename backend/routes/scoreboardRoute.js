const express = require('express');
const router = express.Router();
const scoreboardController = require('../controllers/scoreboardController');

// Route to get the sorted scoreboard
router.get('/scoreboard', scoreboardController.getScoreboard);

module.exports = router;