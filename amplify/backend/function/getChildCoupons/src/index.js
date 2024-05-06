

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
              table1: 'Coupon-tafrbwt3cnehnbqyon3koc2fa4-dev',
              table2: 'Promotion-tafrbwt3cnehnbqyon3koc2fa4-dev'
          };
          break;
      case 'production':
          tableNames = {
              table1: 'Coupon-tafrbwt3cnehnbqyon3koc2fa4-production',
              table2: 'Promotion-3ftfjowtvjbzlcqpv4z5mbi4wu-production'
          };
          break;
      case 'test':
          tableNames = {
              table1: 'Coupon-tafrbwt3cnehnbqyon3koc2fa4-test',
              table2: 'Promotion-kpekhqp6nzchjey7xzql6dgvbi-test'
          };
          break;
      default:
          tableNames = {
              table1: 'Coupon-tafrbwt3cnehnbqyon3koc2fa4-dev',
              table2: 'Promotion-tafrbwt3cnehnbqyon3koc2fa4-dev'
          };
  }
  //const{ city, restaurant_id }  = event.arguments.input;
  const getChildCoupons = async () => {

     const params = {
        TableName: tableNames.table1
        };
	

    const result = await dynamoDB.scan(params).promise();
    const response = result.Items;
    return response;

  };

  try {
    const promotions = await getChildCoupons();
    return promotions;
  } catch (error) {
    throw new Error(`Error fetching promotions by restaurant: ${error.message}`);
  }
};




