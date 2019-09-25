const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const userCtrl = require('../controllers/users.controller'); 

router.use(bodyParser.json());

router.get('/getall', (req, res, next) => {
    userCtrl.getAllUsers().exec(function(err, userList) {
        res.json(userList);
    })

})

router.post('/create', (req, res, next) => {
   let requestBody = req.query; 
   userCtrl.createNewUser({
    firstName: requestBody.firstName,
    lastName: requestBody.lastName,
    age: requestBody.age
   }).then(function(result) {
    res.json({
        status: 'success',
        data: result
    });
   })
})

router.put('/update', (req, res, next) => {
    let requestBody = req.query;
    userCtrl.updateUser({
        firstName: requestBody.firstName,
        lastName: requestBody.lastName,
        age: requestBody.age
    }).then((result) => {
        res.end('updated success');
    })
})

router.delete('/delete', (req, res, next) => {
    let requestBody = req.query;
    userCtrl.deleteUser({
        firstName: requestBody.firstName
    }).exec((err, result) => {
        res.end('delete success');
    })
})

module.exports = router;