

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();
let tableNames = {};
exports.handler = async (event) => {

  const environment = process.env.ENVIRONMENT || 'dev';
  switch (environment) {
      case 'dev':
          tableNames = {
              table1: 'ServiceMethod-tafrbwt3cnehnbqyon3koc2fa4-dev',
          };
          break;
      case 'production':
          tableNames = {
              table1: 'ServiceMethod-tafrbwt3cnehnbqyon3koc2fa4-dev',
          };
          break;
      case 'test':
          tableNames = {
              table1: 'ServiceMethod-tafrbwt3cnehnbqyon3koc2fa4-dev',
          };
          break;
      default:
          tableNames = {
              table1: 'ServiceMethod-tafrbwt3cnehnbqyon3koc2fa4-dev',
          };
  }
  const city1 = event.city;
  console.log(city1);
  const city = 'delhi';
  const getServiceMethodList = async () => {

    const params = {
        TableName: tableNames.table1
    };


    const result = await dynamoDB.scan(params).promise();
    const res = result.Items;
    return res;

  };

  try {
    const promotions = await getServiceMethodList();
    return promotions;
  } catch (error) {
    throw new Error(`Error fetching promotions by restaurant: ${error.message}`);
  }
};


