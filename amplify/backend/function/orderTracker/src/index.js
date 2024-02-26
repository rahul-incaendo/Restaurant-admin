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
    const order_id = event.arguments.order_id;
    console.log("C " + order_id);
    const tableName = tableNames.table1;

    //const order_default_status = ['PENDING', 'PREPAIRING', 'OUT_FOR_DELIVERY', 'COMPLITED'];

    const params = {
        TableName: tableName,
        IndexName: 'ordersByOrderId',
        KeyConditionExpression: 'order_id = :order_id',
        //FilterExpression: 'is_active = :is_active',
        ExpressionAttributeValues: {
            ':order_id': order_id,
        }
    };

    try {
        const trackerData = await docClient.query(params).promise();
        console.log(trackerData);
        return trackerData.Items[0];
        /* const order = {
            order_id: trackerData.Items[0].order_id,
            order_type: trackerData.Items[0].order_type,
            order_default_status: order_default_status,
        }; */

        //return order;
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify(error),
        };
    }
};