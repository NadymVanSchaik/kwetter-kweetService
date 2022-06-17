const Kweet = require('../models/Kweet')
const publishToQueue = require('../services/MQservices')

function createKweet(kweet){
    const newKweet = new Kweet({
        userId: kweet.userId,
        userName: kweet.userName,
        text: kweet.text,
    })
    queueName = "update-kweet-counter"
    payload =  kweet.userId.toString()
    publishToQueue(queueName, payload);
    return newKweet
}
module.exports = createKweet;