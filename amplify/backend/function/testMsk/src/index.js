

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */



const { Kafka } = require('kafkajs');

exports.handler = async (event) => {
  // Configure Kafka producer
  const kafka = new Kafka({
    clientId: 'testMsk-dev',
    brokers: ['boot-pncjcxvr.c1.kafka-serverless.ap-south-1.amazonaws.com:9098'],
  });

  // Create a Kafka producer instance
  const producer = kafka.producer();

  // Connect to Kafka
  await producer.connect();

  try {
    // Example data to send to Kafka
    const message = {
      key: 'some-key',
      value: 'Hello, KafkaJS!',
    };

    // Produce the message to a Kafka topic
    await producer.send({
      topic: 'restaurant-topic',
      messages: [message],
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Message sent to Kafka' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error sending message to Kafka', details: error.message }),
    };
  } finally {
    // Disconnect from Kafka after producing the message
    await producer.disconnect();
  };
};

