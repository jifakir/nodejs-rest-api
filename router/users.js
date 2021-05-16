const express = require('express');
const userControllers = require('../controllers/user-controller');

const router = express.Router();


router.get('/users', userControllers.getUsers);

router.get('/user/:uid', userControllers.getUserById);

router.post('/users', userControllers.createUser);


module.exports = router;