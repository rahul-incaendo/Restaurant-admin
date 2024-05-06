
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
              table1: 'Store-tafrbwt3cnehnbqyon3koc2fa4-dev'
          };
          break;
      case 'production':
          tableNames = {
              table1: 'Store-tafrbwt3cnehnbqyon3koc2fa4-dev'
          };
          break;
      case 'test':
          tableNames = {
              table1: 'Store-tafrbwt3cnehnbqyon3koc2fa4-dev'
          };
          break;
      default:
          tableNames = {
              table1: 'Store-tafrbwt3cnehnbqyon3koc2fa4-dev'
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

const {restaurant_id, store_mapping_code, store_title_en, store_phone, store_minimum_order_amount, service_method, store_street, store_area , store_city, store_zipcode, store_location_long, store_location_lat, ws_url, ws_user, ws_password, store_published, store_allow_internet, store_allow_order_tracker, store_allow_forward_status, qr_code_link} = event.arguments.input;
 // Generate a UUID (v4) for your todo item
const id = uuidv4();
const params = {
    TableName: tableNames.table1,
    Item: {
      id: id,
      restaurant_id,
      store_mapping_code,
      store_title_en,
      store_phone,
      store_minimum_order_amount,
      service_method,
      store_area,
      store_city,
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

