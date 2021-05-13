const express = require('express');


const router = express.Router();


router.get('/products', (req, res, next) => {
    res.json('The routing is under development')
    next();
});

router.post('/products', (req, res, next) => {
    res.json('The routing is under development');
    next();
});

router.put('/products', (req, res, next) => {
    res.json('The routing is under development');
    next();
});

router.delete('/products', (req, res, next) => {   
    res.json('The routing is under development');
    next();
});

module.exports = router;