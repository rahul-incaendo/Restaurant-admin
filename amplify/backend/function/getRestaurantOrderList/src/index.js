

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  const restaurant_id  = event.arguments.restaurantId;
  const params = {
    TableName: 'Order-tafrbwt3cnehnbqyon3koc2fa4-dev',
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
    TableName: 'OrderItem-tafrbwt3cnehnbqyon3koc2fa4-dev',
    IndexName: 'byOrder',
    KeyConditionExpression: 'order_id = :order_id',
    ExpressionAttributeValues: {
      ':order_id': orderId
    }
  };

  const data = await docClient.query(params).promise();
  return data.Items;
}

