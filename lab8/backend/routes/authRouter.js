const express = require('express');
const AuthController = require('../controllers/authController');

const router = express.Router();

const authController = new AuthController();
router.route(`/signup`).post(authController.signUp);
router.route(`/signin`).post(authController.signIn);
router.route(`/signout`).post(authController.signOut);

module.exports = router;
