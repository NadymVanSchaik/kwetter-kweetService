const Kweet = require('../models/Kweet');

//TODO rabbitMQ listen to call from userService to update name
function updateUser(user){
    await Kweet.updateMany(
        {userId: user.id}, 
        {$set: {
        name: user.name, 
    }}
    )
}

module.exports = updateUser;