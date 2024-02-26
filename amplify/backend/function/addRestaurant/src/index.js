

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
              table1: 'Restaurants-tafrbwt3cnehnbqyon3koc2fa4-dev'
          };
          break;
      case 'production':
          tableNames = {
              table1: 'Restaurants-3ftfjowtvjbzlcqpv4z5mbi4wu-production'
          };
          break;
      case 'test':
          tableNames = {
              table1: 'Restaurants-kpekhqp6nzchjey7xzql6dgvbi-test'
          };
          break;
      default:
          tableNames = {
              table1: 'Restaurants-tafrbwt3cnehnbqyon3koc2fa4-dev'
          };
  }

 //console.log(`EVENT: ${JSON.stringify(event)}`);
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
const status = "PENDING";

//name, city, area, restaurant_address, owner_name, owner_email ,owner_number, postal_code, invoicing_email
 const {restaurant_name, city, area, restaurant_address, owner_name, owner_email ,owner_number, invoicing_email, longitude, latitude, pin_code, fssai_firm_name, fssai_register_number, fssai_licence_number, fssai_address, fssai_expiration_date, gst_category, pan_number, account_number, ifsc_code} = event.arguments.input;
 // Generate a UUID (v4) for your todo item
const id = uuidv4();
 const params = {
  TableName: tableNames.table1,
  Item: {
    id, restaurant_name, city, area, restaurant_address, owner_name, owner_email ,owner_number, invoicing_email, longitude, latitude, pin_code, fssai_firm_name, fssai_register_number, fssai_licence_number, fssai_address, fssai_expiration_date, gst_category, pan_number, account_number, ifsc_code, createdAt, updatedAt, _lastChangedAt, _version, status
  },
 };
 console.log(id);
 console.log(restaurant_name);
 console.log(restaurant_address);
 try {
  
  const data = await docClient.put(params).promise();
  return {id:id,
    restaurant_name:restaurant_name
  };
 } catch (error) {
  console.error(error);
  throw new Error(error);
 }
};
