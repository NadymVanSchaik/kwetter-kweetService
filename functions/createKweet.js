const Kweet = require('../models/Kweet')
const User = require('../models/User')

function createKweet(kweet){
    const user = await User.findById(kweet.userId).exec();
    const newKweet = new Kweet({
        userId: user.userId,
        name: user.name,
        text: kweet.text,
    })
    return newKweet
}

module.exports = createKweet;