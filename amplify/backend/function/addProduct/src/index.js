

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
              table1: 'Product-tafrbwt3cnehnbqyon3koc2fa4-dev',
              table2: 'ProductStore-tafrbwt3cnehnbqyon3koc2fa4-dev'
          };
          break;
      case 'production':
          tableNames = {
              table1: 'Product-3ftfjowtvjbzlcqpv4z5mbi4wu-production',
              table2: 'ProductStore-3ftfjowtvjbzlcqpv4z5mbi4wu-dev'
          };
          break;
      case 'test':
          tableNames = {
              table1: 'Product-kpekhqp6nzchjey7xzql6dgvbi-test',
              table2: 'ProductStore-kpekhqp6nzchjey7xzql6dgvbi-dev'
          };
          break;
      default:
          tableNames = {
              table1: 'Product-tafrbwt3cnehnbqyon3koc2fa4-dev',
              table2: 'ProductStore-tafrbwt3cnehnbqyon3koc2fa4-dev'
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

const {name, description, price, sku, status, category_id, in_stock, stock_alert, image_path, store_ids} = event.arguments.input;
 // Generate a UUID (v4) for your todo item
const id = uuidv4();

const putProductToStores = async (productId, storeId) => {
    const productStoreId = uuidv4();
    const params = {
        TableName: tableNames.table2,
        Item: {
            id: productStoreId,
            productId,
            storeId,
            createdAt, 
            updatedAt, 
            _lastChangedAt, 
            _version
        },
    };

    await docClient.put(params).promise();
};

 const params = {
  TableName: tableNames.table1,
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
    for (const storeId of store_ids) {
        await putProductToStores(id, storeId);
    }

  return {
    id:id,
  };
 } catch (error) {
  console.error(error);
  throw new Error(error);
 }
};