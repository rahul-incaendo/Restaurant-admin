/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	DB_COUPON_TABLE_NAME
Amplify Params - DO NOT EDIT */

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
              table1: 'Coupon-tafrbwt3cnehnbqyon3koc2fa4-dev'
          };
          break;
      case 'production':
          tableNames = {
              table1: 'Coupon-3ftfjowtvjbzlcqpv4z5mbi4wu-production'
          };
          break;
      case 'test':
          tableNames = {
              table1: 'Coupon-kpekhqp6nzchjey7xzql6dgvbi-test'
          };
          break;
      default:
          tableNames = {
              table1: 'Coupon-tafrbwt3cnehnbqyon3koc2fa4-dev'
          };
  }

    const coupon_code = event.arguments.coupon_code;
    const params = {
        TableName: tableNames.table1,
        FilterExpression: 'coupon_code = :coupon_code AND is_active =:is_active',
        ExpressionAttributeValues: {
        ':coupon_code': coupon_code,
        ':is_active': true
        }
    };

    try {
        const couponData = await dynamoDB.scan(params).promise();
        /* return {
            statusCode: 200,
            body: JSON.stringify(couponData)
        } */
        return couponData.Items;
    }
    catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Internal Server Error' })
        }
    }
};
