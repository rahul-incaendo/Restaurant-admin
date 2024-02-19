

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

const {title, description, restaurant_id} = event.arguments.input;
 // Generate a UUID (v4) for your todo item
const id = uuidv4();
const params = {
    TableName: process.env.DB_MENU_TABLE_NAME,
    Item: {
      id: id,
      title,
      description,
      restaurant_id,
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
