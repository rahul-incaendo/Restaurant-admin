

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
              table1: 'AppSetting-tafrbwt3cnehnbqyon3koc2fa4-dev'
          };
          break;
      case 'production':
          tableNames = {
              table1: 'AppSetting-3ftfjowtvjbzlcqpv4z5mbi4wu-production'
          };
          break;
      case 'test':
          tableNames = {
              table1: 'AppSetting-kpekhqp6nzchjey7xzql6dgvbi-test'
          };
          break;
      default:
          tableNames = {
              table1: 'AppSetting-tafrbwt3cnehnbqyon3koc2fa4-dev'
          };
  }

    const params = {
        TableName: tableNames.table1,
        /* FilterExpression: 'is_favourite = :isFavorite AND customer_id = :customer_id',
        ExpressionAttributeValues: {
        ':isFavorite': true,
        ':customer_id': user_id
        } */
    };

    try {
        const appSettings = await dynamoDB.scan(params).promise();
        return appSettings.Items;
    } catch (error) {
        return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Internal Server Error' })
        };
    }
};
