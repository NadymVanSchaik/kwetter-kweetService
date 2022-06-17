const Kweet = require('../models/Kweet')
const publishToQueue = require('../services/MQservices')

function deleteKweet(kweetId){
    queueName = "update-kweet-counter"
    id = kweetId
    payload =  id+"|"+"0"
    publishToQueue(queueName, payload);
}
module.exports = deleteKweet;