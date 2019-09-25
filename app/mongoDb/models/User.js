const Schema = require('mongoose').Schema;

let User = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
});
// mongoose.model('Veu', User);
let trigger = (mongoose) => {
    return mongoose.model('Users', User);
}

module.exports = {
    trigger: trigger
};