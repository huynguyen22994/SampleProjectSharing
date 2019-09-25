const express = require('express');
const router = express.Router();
const foodtechSer = require('../services/foodtechService');
const feedSer = require('../services/feedService');

router.use((req, res, next) => {
    console.log("Route:")
    next()
})

router.use('/foodtech', foodtechSer);
router.use('/feed', feedSer);

module.exports = router