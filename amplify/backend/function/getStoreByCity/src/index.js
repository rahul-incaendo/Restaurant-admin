

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

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
              table1: 'Store-tafrbwt3cnehnbqyon3koc2fa4-dev',
              table2: 'Promotion-tafrbwt3cnehnbqyon3koc2fa4-dev'
          };
          break;
      case 'production':
          tableNames = {
              table1: 'Store-tafrbwt3cnehnbqyon3koc2fa4-dev',
              table2: 'Promotion-3ftfjowtvjbzlcqpv4z5mbi4wu-production'
          };
          break;
      case 'test':
          tableNames = {
              table1: 'Store-tafrbwt3cnehnbqyon3koc2fa4-dev',
              table2: 'Promotion-kpekhqp6nzchjey7xzql6dgvbi-test'
          };
          break;
      default:
          tableNames = {
              table1: 'Store-tafrbwt3cnehnbqyon3koc2fa4-dev',
              table2: 'Promotion-tafrbwt3cnehnbqyon3koc2fa4-dev'
          };
  }
  //const city = event.arguments;
  //console.log(city);
  const city = 'delhi';
  const getStoreByCity = async () => {
  /*  const params = {
      TableName: tableNames.table1,
      KeyConditionExpression: 'store_city = :cityName',
      ExpressionAttributeValues: {
        ':cityName': city,
      },
    };
    */

    const params = {
        TableName: tableNames.table1,
        FilterExpression: 'store_city = :city',
        ExpressionAttributeValues: {
        ':city': city
        }
    };


    const result = await dynamoDB.scan(params).promise();
    return result;

  };

  try {
    const promotions = await getStoreByCity();
    return promotions;
  } catch (error) {
    throw new Error(`Error fetching promotions by restaurant: ${error.message}`);
  }
};

