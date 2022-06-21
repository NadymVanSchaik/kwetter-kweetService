const amqp = require('amqplib/callback_api');
const CONN_URL = process.env.MQ_CONNECTION;

let ch = null;
amqp.connect(CONN_URL, function (err, conn) {
    conn.createChannel(function (err, channel) {
        ch = channel;
    });
});

const publishToQueue = async (queueName, data) => {
    ch.sendToQueue(queueName, Buffer.from(data), {persistent: true});
    console.log("This is being send over RabbitMQ: ", data)
}

process.on('exit', () => {
    ch.close();
    console.log(`Closing rabbitmq channel`);
});

module.exports = publishToQueue