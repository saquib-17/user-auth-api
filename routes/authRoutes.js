const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getProfile } = require('../controllers/authControllers');
const authenticateToken = require('../middlewares/authMiddlewares');

// Route for user registration
router.post('/register', registerUser);
// Route for user login
router.post('/login', loginUser);
// Route for fetching user profile (protected)
router.get('/profile', authenticateToken, getProfile);

module.exports = router; {
    registerUser,
    loginUser,
    getProfile
}
