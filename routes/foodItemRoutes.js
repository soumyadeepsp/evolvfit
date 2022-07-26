const express = require('express');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const foodItemController = require('../controllers/food_item_controllers/addFoodItem');

const router = express.Router();

router.post('/add', jsonParser, foodItemController.addFoodItem);

module.exports = router;