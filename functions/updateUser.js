const Kweet = require('../models/Kweet');
const User = require('../models/User')

//TODO rabbitMQ listen to call from userService to update name
function updateUser(user){
    await User.updateOne(
        {_id: req.params.id},
        {$set: {
            name: user.name, 
        }}
    );
    await Kweet.updateMany(
        {userId: user.id}, 
        {$set: {
        name: user.name, 
    }}
    )
}
