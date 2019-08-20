const mongoose = require('mongoose');
const config = require('../config/config');
const User = require('./models/User');
mongoose.connect(config.mongoString, {useNewUrlParser: true});
  
let Models = {
    User: mongoose.model('Users', User)
};

let newUser = new Models.User({
    firstName: 'Huy',
    lastName: 'Nguyen',
    age: 24
});

newUser.save().then(() => {
    console.log('save success');
})

module.exports.Models = Models;