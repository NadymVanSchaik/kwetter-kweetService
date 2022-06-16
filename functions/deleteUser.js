const Kweet = require('../models/Kweet');
const User = require('../models/User')

//TODO rabbitMQ listen to call from userService to delete user
function updateUser(user){
    await User.deleteOne(
        {_id: req.params.id},
    );
    await Kweet.updateMany(
        {userId: user.id}, 
        {$set: {
        name: "unknown", 
    }}
    )
}
