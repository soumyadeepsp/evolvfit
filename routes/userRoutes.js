const express = require('express');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const createUserController = require('../controllers/user_controllers/createUser');

const router = express.Router();

router.post('/create', jsonParser, createUserController.create);

module.exports = router;