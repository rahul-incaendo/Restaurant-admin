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
              table1: 'Product-tafrbwt3cnehnbqyon3koc2fa4-dev'
          };
          break;
      case 'production':
          tableNames = {
              table1: 'Product-3ftfjowtvjbzlcqpv4z5mbi4wu-production'
          };
          break;
      case 'test':
          tableNames = {
              table1: 'Product-kpekhqp6nzchjey7xzql6dgvbi-test'
          };
          break;
      default:
          tableNames = {
              table1: 'Product-tafrbwt3cnehnbqyon3koc2fa4-dev'
          };
  }
    const docClient = new AWS.DynamoDB.DocumentClient();
    const product_id = event.arguments.id;
    try {
        const data  = docClient.get({
            TableName: tableNames.table1,
            Key: {
                id: product_id,
            },
        }).promise();

        return data.Item;

    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify(error),
        };
    }
};


