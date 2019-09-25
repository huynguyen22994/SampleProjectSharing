var express = require('express');
var router = express.Router()
const apiAdapter = require('../routes/apiAdapter')
const BASE_URL = 'http://foodtechserver.herokuapp.com'
const api = apiAdapter(BASE_URL)

router.use((req, res, next) => {
    console.log("Called FoodTechService: ", req.path)
    next()
})

router.get('/getfoods', (req, res) => {
  api.get('/api/product/offset?limit=12&offset=0').then(resp => {
    res.send(resp.data)
  })
})

module.exports = router