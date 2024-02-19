

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

const {coupon_code, title, description, restaurant_ids, service_method_id, start_date, end_date, status, image_path, base_promotion_id, device_detects, period_days, visibility} = event.arguments.input;
 // Generate a UUID (v4) for your todo item
const id = uuidv4();

  const putPromotionToRestaurants = async (promotion_id, restaurant_id) => {
    const promoRestroId = uuidv4();
  const params = {
    TableName: 'RestaurantPromotion-tafrbwt3cnehnbqyon3koc2fa4-dev',
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
  TableName: 'Promotion-tafrbwt3cnehnbqyon3koc2fa4-dev',
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
