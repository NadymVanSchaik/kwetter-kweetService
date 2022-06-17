const Kweet = require('../models/Kweet');


async function updateUser(payload){
    payloadArray = payload.split('|')

    await Kweet.updateMany(
        {userId: payloadArray[0]}, 
        {$set: {
        userName: payloadArray[1], 
    }}
    )
    console.log("User", payloadArray[0], "has been updated with new name ", payloadArray[1] )
}

module.exports = updateUser;