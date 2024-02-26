/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	DB_ORDER_TABLE_NAME
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();
let tableNames = {};
//const tableName = process.env.DB_ORDER_TABLE_NAME;
exports.handler = async (event) => {
    
  const environment = process.env.ENVIRONMENT || 'dev';
  switch (environment) {
      case 'dev':
          tableNames = {
              table1: 'Order-tafrbwt3cnehnbqyon3koc2fa4-dev'
          };
          break;
      case 'production':
          tableNames = {
              table1: 'Order-3ftfjowtvjbzlcqpv4z5mbi4wu-production'
          };
          break;
      case 'test':
          tableNames = {
              table1: 'Order-kpekhqp6nzchjey7xzql6dgvbi-test'
          };
          break;
      default:
          tableNames = {
              table1: 'Order-tafrbwt3cnehnbqyon3koc2fa4-dev'
          };
  }
    AWS.config.update({ region: "ap-south-1" });
    
    const { order_id,is_favourite} = event.arguments.input;
    
    try {

        const params = {
            TableName: tableNames.table1,
            IndexName: 'ordersByOrderId',
            KeyConditionExpression: 'order_id = :order_id',
            ExpressionAttributeValues: {
                ':order_id': order_id
            }
        };
        const response = await docClient.query(params).promise();
        /*const response = await docClient.scan({
            TableName: tableName,
            FilterExpression: '#order_id = :order_id',
            ExpressionAttributeNames: {
                '#order_id': 'order_id',
            },
            ExpressionAttributeValues: {
                ':order_id': order_id,
            },
        }).promise();*/

        // Assuming you have an 'items' array in the response
        const items = response.Items;
        if (items.length === 0) {
            return {
                statusCode: 404,
                body: JSON.stringify({ message: 'Order not found' }),
            };
        }

        const order = items[0]; // Assuming you want to update the first matching order
        if(order.id){
            docClient.update({
            TableName: tableNames.table1,
            Key: {
            id: order.id,
            },
            UpdateExpression: 'set #is_favourite = :is_favourite',
                ExpressionAttributeValues: {
                ":is_favourite": is_favourite
                },
                ExpressionAttributeNames: {
                    "#is_favourite": "is_favourite"
                }
            }).promise();

            // Step 2: Retrieve the updated order using get
           const updatedOrder = await updatedOrderResponse(order.id);

         return {
            id: updatedOrder.id,
            is_favourite: updatedOrder.is_favourite,
            order_id: updatedOrder.order_id
        };

            /* return {
                order_id: order_id,
            }; */
        }
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify(error),
        };
    }
};

const updatedOrderResponse = async (id) => {
    const updatedOrderResponse = await docClient.get({
        TableName: tableNames.table1,
        Key: {
            id:id,
        }
    }).promise();

    const updatedOrder = updatedOrderResponse.Item;
    return updatedOrder;
};



