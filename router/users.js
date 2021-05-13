const express = require('express');


const router = express.Router();


router.get('/users', (req, res, next) => {
    res.json('The routing is under development')
    next();
});

router.post('/users', (req, res, next) => {
    res.json('The routing is under development')
});

router.put('/users', (req, res, next) => {
    res.json('The routing is under development')
});

router.delete('/users', (req, res, next) => {   
    res.json('The routing is under development')
});

module.exports = router;