
const router = require('express').Router();
const chefController = require('../controllers/chefController');

router.get('/profile', chefController.getProfile);



module.exports = router;