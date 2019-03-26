module.exports = {
    url: 'amqp://localhost',
    durable: false, // true - for store data queue
    noAck: false // false - must send ack when completed! So RabbitMQ will delete msg in queue
}