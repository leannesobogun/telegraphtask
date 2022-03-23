const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller')

router.post('/', (req, res) => controller.createNewStory(req, res));
router.get('/:id', (req, res) => controller.showById(req, res));

module.exports = router;