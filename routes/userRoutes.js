const express = require('express');
const { registerUser, loginUser, logoutUser } = require('../controllers/userController');

const router = express.Router();

router.post('/register', registerUser); // POST /users/register
router.post('/login', loginUser); // POST /users/login
router.post('/logout', logoutUser); // POST /users/logout

module.exports = router;
