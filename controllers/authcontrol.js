const express = require('express');
const router = express.Router();

const {SignUp , Login , getUser} = require('./authfunctions');

const {Secure} = require('../middleware/authmiddleware')


router.post('/', SignUp);
router.post('/login', Login);
router.get('/user',Secure,getUser);






module.exports = router;