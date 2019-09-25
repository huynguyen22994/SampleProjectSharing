const models = require('../mongoDb/index');

let createNewUser = (userObj) => {
    let newUser = new models.User(userObj);
    return newUser.save();
}

let getAllUsers = () => {
    return models.User.find();
}

let getUserByName = () => {

}

let updateUser = (userObj) => {
    return models.User.updateOne({
        firstName: userObj.firstName
    }, {
        lastName: userObj.lastName,
        age: userObj.age
    })
}

let deleteUser = (userObj) => {
    return models.User.deleteOne({
        firstName: userObj.firstName
    })
}

module.exports = {
    getAllUsers: getAllUsers,
    getUserByName: getUserByName,
    updateUser: updateUser,
    createNewUser: createNewUser,
    deleteUser: deleteUser 
}