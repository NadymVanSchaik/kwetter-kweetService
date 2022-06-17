const Kweet = require('../models/Kweet')

function createKweet(kweet){
    const newKweet = new Kweet({
        userId: kweet.userId,
        name: kweet.name,
        text: kweet.text,
    })
    return newKweet
}
//TODO send using rabbitMQ message to userService to update kweet counter 

module.exports = createKweet;