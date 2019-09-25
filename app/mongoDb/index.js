const mongoose = require('mongoose');
const config = require('../config/config');
const User = require('./models/User');
mongoose.connect(config.mongoString, {useNewUrlParser: true}); // mongodb://localhost:27017/sampleDB
  
let Models = {
    User: User.trigger(mongoose)
};

module.exports = Models;