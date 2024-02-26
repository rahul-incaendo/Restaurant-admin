/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const AWS = require('aws-sdk');


exports.handler = async (event) => {
    let tableNames = {};
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
    const docClient = new AWS.DynamoDB.DocumentClient();
    const { order_id,status} = event.arguments.input;

    const updatedOrderResponse = async (id) => {
        const updatedOrderResponse = await docClient.get({
            TableName: tableName,
            Key: {
                id:id,
            }
        }).promise();

        const updatedOrder = updatedOrderResponse.Item;
        return updatedOrder;
    };

    const tableName = tableNames.table1;

    try {
        const response = await docClient.scan({
            TableName: tableName,
            FilterExpression: '#order_id = :order_id',
            ExpressionAttributeNames: {
                '#order_id': 'order_id',
            },
            ExpressionAttributeValues: {
                ':order_id': order_id,
            },
        }).promise();

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
            TableName: tableName,
            Key: {
            id: order.id,
            },
            UpdateExpression: 'set #order_status = :status',
                ExpressionAttributeValues: {
                ":status": status
                },
                ExpressionAttributeNames: {
                    "#order_status": "status"
                }
            }).promise();

            // Step 2: Retrieve the updated order using get
           const updatedOrder = await updatedOrderResponse(order.id);

         return {
            id: updatedOrder.id,
            status: updatedOrder.status,
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


