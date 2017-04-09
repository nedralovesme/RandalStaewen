'use strict';
const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/test', (req, res) => {
    res.render('index');
});

router.get('/portfolio', (req, res) => {
    res.render('portfolio');
});

module.exports = router;
