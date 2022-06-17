const Kweet = require('../models/Kweet');

//TODO rabbitMQ listen to call from userService to delete user

function deleteUser(user){
    await Kweet.updateMany(
        {userId: user.id}, 
        {$set: {
        name: "unknown", 
    }}
    )
}

module.exports = deleteUser;