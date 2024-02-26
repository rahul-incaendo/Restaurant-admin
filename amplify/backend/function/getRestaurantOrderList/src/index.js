

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();
let tableNames = {};

exports.handler = async (event) => {
  const environment = process.env.ENVIRONMENT || 'dev';
  switch (environment) {
      case 'dev':
          tableNames = {
              table1: 'Order-tafrbwt3cnehnbqyon3koc2fa4-dev',
              table2: 'OrderItem-tafrbwt3cnehnbqyon3koc2fa4-dev'
          };
          break;
      case 'production':
          tableNames = {
              table1: 'Order-3ftfjowtvjbzlcqpv4z5mbi4wu-production',
              table2: 'OrderItem-3ftfjowtvjbzlcqpv4z5mbi4wu-production'
          };
          break;
      case 'test':
          tableNames = {
              table1: 'Order-kpekhqp6nzchjey7xzql6dgvbi-test',
              table2: 'OrderItem-kpekhqp6nzchjey7xzql6dgvbi-test'
          };
          break;
      default:
          tableNames = {
              table1: 'Order-tafrbwt3cnehnbqyon3koc2fa4-dev',
              table2: 'OrderItem-tafrbwt3cnehnbqyon3koc2fa4-dev'
          };
  }
  const restaurant_id  = event.arguments.restaurantId;
  const params = {
    TableName: tableNames.table1,
    IndexName: 'byRestaurant',
    KeyConditionExpression: 'restaurant_id = :restaurant_id',
    ExpressionAttributeValues: {
      ':restaurant_id': restaurant_id
    }
  };

  try {
    const orderData = await docClient.query(params).promise();
    // Fetch associated OrderItems for each order
    const ordersWithItems = await Promise.all(orderData.Items.map(async order => {
      const orderItems = await getOrderItemsByOrderId(order.id);
      return { ...order, orderItems: orderItems };
    }));

    return ordersWithItems;
  } catch (error) {
    console.error('Error fetching orders:', error);
    throw new Error('Error fetching orders');
  }
};

async function getOrderItemsByOrderId(orderId) {
  const params = {
    TableName: tableNames.table2,
    IndexName: 'byOrder',
    KeyConditionExpression: 'order_id = :order_id',
    ExpressionAttributeValues: {
      ':order_id': orderId
    }
  };

  const data = await docClient.query(params).promise();
  return data.Items;
}

