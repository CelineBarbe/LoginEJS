const express = require('express');
const router = express.Router();
let userConnected = undefined;
let userPassword = undefined;
const authController = require('./authController');

router.get('/', (req, res, next) => { 
    res.render('choice')
});

router.get('/signin', (req, res, next) => {
    res.render('signInForm');
});

router.get('/signup', (req, res, next) => {
    res.render('signUpForm');
});

router.post('/signup', authController.handleSignup);

router.post('/signin', (req, res, next) => {
    res.send('profile');
});

module.exports = router;