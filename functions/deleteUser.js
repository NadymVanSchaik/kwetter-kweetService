const Kweet = require('../models/Kweet');

async function deleteUser(userID){
    await Kweet.updateMany(
        {userId: userID}, 
        {$set: {
        userName: "unknown", 
    }}
    )
    console.log("Username of user ", userID, " has been changed to unknown")
}

module.exports = deleteUser;