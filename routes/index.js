const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

router.get('/', homeController.home);
router.use('/foodItem', require('./foodItemRoutes'));
router.use('/meal', require('./mealRoutes'));
router.use('/user', require('./userRoutes'));

module.exports = router;