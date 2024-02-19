

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');
exports.handler = async (event) => {
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

const {name, description, price, sku, status, category_id, in_stock, stock_alert, image_path} = event.arguments.input;
 // Generate a UUID (v4) for your todo item
const id = uuidv4();

 const params = {
  TableName: "Product-tafrbwt3cnehnbqyon3koc2fa4-dev",
  Item: {
    id, 
    name, 
    description, 
    price, 
    sku,
    status,
    category_id,
    in_stock,
    stock_alert, 
    image_path, 
    createdAt, 
    updatedAt, 
    _lastChangedAt, 
    _version},
 };
 try {
  const data = await docClient.put(params).promise();
  return {
    id:id,
  };
 } catch (error) {
  console.error(error);
  throw new Error(error);
 }
};