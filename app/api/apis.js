const express = require('express');
const router = express.Router();
const userAPIRoute = require('./users.api');

router.use((req, res, next) => {
    console.log("Called API: ", req.path)
    next()
})

router.use('/users', userAPIRoute);

module.exports = router;