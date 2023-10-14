const {Router} = require('express');
const router = Router();
const authController = require('../app/controllers/AuthController');

router.get('/signup', authController.singup_get);
router.get('/login', authController.login_get);
router.post('/signup', authController.singup_post);
router.post('/login', authController.login_post);
router.get('/logout', authController.logout_get);

module.exports = router;
