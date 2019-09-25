var express = require('express');
var router = express.Router()
const apiAdapter = require('../routes/apiAdapter');

router.use((req, res, next) => {
    console.log("Called FeedService: ", req.path)
    next()
})

router.get('/getfeeds', (req, res) => {
    res.end('test');
})

module.exports = router