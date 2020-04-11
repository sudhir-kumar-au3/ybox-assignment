const express = require('express');
const router = express.Router();
const {getCompetitions, getSubmission } = require('../controllers/competitonController');

router.get('/competition', getCompetitions);
router.get('/competition/:id/submission', getSubmission);


module.exports = router;