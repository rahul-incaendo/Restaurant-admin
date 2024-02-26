

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
              table1: 'Promotion-tafrbwt3cnehnbqyon3koc2fa4-dev',
              table2: 'RestaurantPromotion-tafrbwt3cnehnbqyon3koc2fa4-dev'
          };
          break;
      case 'production':
          tableNames = {
              table1: 'Promotion-3ftfjowtvjbzlcqpv4z5mbi4wu-production',
              table2: 'RestaurantPromotion-3ftfjowtvjbzlcqpv4z5mbi4wu-production'
          };
          break;
      case 'test':
          tableNames = {
              table1: 'Promotion-kpekhqp6nzchjey7xzql6dgvbi-test',
              table2: 'RestaurantPromotion-kpekhqp6nzchjey7xzql6dgvbi-test'
          };
          break;
      default:
          tableNames = {
              table1: 'Promotion-tafrbwt3cnehnbqyon3koc2fa4-dev',
              table2: 'RestaurantPromotion-tafrbwt3cnehnbqyon3koc2fa4-dev'
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

const {coupon_code, title, description, restaurant_ids, service_method_id, start_date, end_date, status, image_path, base_promotion_id, device_detects, period_days, visibility} = event.arguments.input;
 // Generate a UUID (v4) for your todo item
const id = uuidv4();

  const putPromotionToRestaurants = async (promotion_id, restaurant_id) => {
    const promoRestroId = uuidv4();
  const params = {
    TableName: tableNames.table2,
    Item: {
      id: promoRestroId,
      promotion_id,
      restaurant_id,
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
    coupon_code, 
    title, 
    description, 
    service_method_id, 
    start_date ,
    end_date, 
    status, 
    image_path, 
    base_promotion_id,
    visibility,
    device_detects,
    period_days,
    createdAt, 
    updatedAt, 
    _lastChangedAt, 
    _version},
 };
 try {
  
  const data = await docClient.put(params).promise();
  console.log(data);
  for (const restaurantId of restaurant_ids) {
    await putPromotionToRestaurants(id, restaurantId);
  }
  return {id:id,
  };
 } catch (error) {
  console.error(error);
  throw new Error(error);
 }
};
