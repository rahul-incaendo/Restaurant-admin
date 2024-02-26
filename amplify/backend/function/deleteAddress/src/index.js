

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    let tableNames = {};
  const environment = process.env.ENVIRONMENT || 'dev';
  switch (environment) {
      case 'dev':
          tableNames = {
              table1: 'Address-tafrbwt3cnehnbqyon3koc2fa4-dev'
          };
          break;
      case 'production':
          tableNames = {
              table1: 'Address-3ftfjowtvjbzlcqpv4z5mbi4wu-production'
          };
          break;
      case 'test':
          tableNames = {
              table1: 'Address-kpekhqp6nzchjey7xzql6dgvbi-test'
          };
          break;
      default:
          tableNames = {
              table1: 'Address-tafrbwt3cnehnbqyon3koc2fa4-dev'
          };
  }
    console.log(event);
    const address_id = event.arguments.input.address_id;
    console.log("address = " + address_id);
    const params = {
        TableName: tableNames.table1,
        Key: {
            id: address_id,
        },
    };
    
    try {
        await dynamoDB.delete(params).promise();
        return {
            success: true,
            message: 'Address deleted successfully',
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Internal server error' })
        };
    }
}