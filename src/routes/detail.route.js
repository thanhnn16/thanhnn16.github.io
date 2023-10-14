const express = require('express');
const detailController = require('../app/controllers/DetailController');
const router = express.Router();

router.get('/:slug', detailController.slug);
router.get('/', detailController.index);

module.exports = router;
