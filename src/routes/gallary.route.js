const express = require('express');
const galleryController = require('../app/controllers/GalleryController');
const router = express.Router();

router.get('/ho-chi-minh', galleryController.hcm);
router.get('/ha-noi', galleryController.hn);
router.get('/da-lat', galleryController.dalat);
router.get('/ha-long-bay', galleryController.halong);
router.get('/hoi-an', galleryController.hoian);
router.get('/all', galleryController.all);
router.get('/', galleryController.index);

module.exports = router;
