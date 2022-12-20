const express = require('express');
const UserController = require('../controllers/userController');

const router = express.Router();

const userController = new UserController();
router.route(`/`).get(userController.getUserById);

module.exports = router;
