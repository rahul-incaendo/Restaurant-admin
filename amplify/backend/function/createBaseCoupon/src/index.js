/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');
exports.handler = async (event) => {

  let tableNames = {};
  const environment = process.env.ENVIRONMENT || 'dev';
  switch (environment) {
      case 'dev':
          tableNames = {
              table1: 'BaseCoupon-tafrbwt3cnehnbqyon3koc2fa4-dev'
          };
          break;
      case 'production':
          tableNames = {
              table1: 'BaseCoupon-tafrbwt3cnehnbqyon3koc2fa4-production'
          };
          break;
      case 'test':
          tableNames = {
              table1: 'BaseCoupon-tafrbwt3cnehnbqyon3koc2fa4-test'
          };
          break;
      default:
          tableNames = {
              table1: 'BaseCoupon-tafrbwt3cnehnbqyon3koc2fa4-dev'
          };
  }

 const docClient = new AWS.DynamoDB.DocumentClient({
  region: process.env.REGION,
});
// Current timestamp for createdAt and updatedAt fields
const now = new Date().toISOString();
const createdAt = now;
const updatedAt = now;
const _version = 1;
const nowInMillis = new Date().getTime();
const nowAsString = Number(nowInMillis);
const _lastChangedAt = nowAsString;

const {coupon_code , coupon_type , coupon_value , description , min_cart_value , usage_limit , service_method , status} = event.arguments.input;
 // Generate a UUID (v4) for your todo item
const id = uuidv4();
const params = {
    TableName: tableNames.table1,
    Item: {
      id: id,
      coupon_code,
      coupon_type,
      coupon_value,
      description,
      min_cart_value,
      usage_limit,
      service_method,
      status,
      createdAt,
      updatedAt,
      _lastChangedAt,
      _version
    },
  };
 try {
  const data = await docClient.put(params).promise();
  return {id:id,
  };
 } catch (error) {
  console.error(error);
  throw new Error(error);
 }
};
