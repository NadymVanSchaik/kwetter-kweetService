const amqp = require('amqplib/callback_api');
const CONN_URL = process.env.MQ_CONNECTION;

let ch = null;
amqp.connect(CONN_URL, function (err, conn) {
   conn.createChannel(function (err, channel) {
      ch = channel;
   });
});

async function publishToQueue(queueName, data){
    ch.sendToQueue(queueName, Buffer.from(data));
}

process.on('exit', (code) => {
    ch.close();
    console.log(`Closing rabbitmq channel`);
 });

module.exports = publishToQueue