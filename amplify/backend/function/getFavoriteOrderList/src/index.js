/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	DB_ORDER_TABLE_NAME
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();
exports.handler = async (event) => {
    const user_id = event.arguments.user_id;
    const params = {
        TableName: process.env.DB_ORDER_TABLE_NAME,
        FilterExpression: 'is_favourite = :isFavorite AND customer_id = :customer_id',
        ExpressionAttributeValues: {
        ':isFavorite': true,
        ':customer_id': user_id
        }
    };

    try {
        const orderData = await dynamoDB.scan(params).promise();
        const ordersWithItems = await Promise.all(orderData.Items.map(async order => {
            const orderItems = await getOrderItemsByOrderId(order.order_id);
            //const restaurantData = getRestaurantData(order.restaurant_id);
            
            return { ...order, orderItems: orderItems };
          }));
          return ordersWithItems;
    } catch (error) {
        return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Internal Server Error' })
        };
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
    
    const data = await dynamoDB.query(params).promise();
    return data.Items;
}

async function getRestaurantData(restaurant_id){

  const params = {
    TableName: 'Restaurants-tafrbwt3cnehnbqyon3koc2fa4-dev',
    //IndexName: 'byOrder',
    KeyConditionExpression: 'id = :restaurant_id',
    ExpressionAttributeValues: {
      ':restaurant_id': restaurant_id
    }
  };
  
  const data = await dynamoDB.query(params).promise();
  return data.Items;

}
