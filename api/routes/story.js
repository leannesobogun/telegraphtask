const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller')

router.post('/', controller.createNewStory);
router.get('/:id', controller.showById);

module.exports = router;