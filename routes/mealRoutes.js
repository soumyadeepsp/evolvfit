const express = require('express');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const createMealController = require('../controllers/meal_controllers/createMeal');
const updateMealController = require('../controllers/meal_controllers/updateMeal');

const router = express.Router();

router.post('/create', jsonParser, createMealController.create);
router.patch('/update', jsonParser, updateMealController.update);

module.exports = router;