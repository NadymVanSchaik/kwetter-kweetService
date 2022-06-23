const Kweet = require('../models/Kweet')
const publishToQueue = require('../services/MQservices')

function createKweet(kweet){
    const newKweet = new Kweet({
        userId: kweet.userId,
        userName: kweet.userName,
        text: kweet.text,
    })
    queueName = "update-kweet-counter"
    id = kweet.userId.toString()
    payload =  id+"|"+"1"
    publishToQueue(queueName, payload);
    console.log("new kweet: ", newKweet)
    return newKweet
}

module.exports = createKweet;