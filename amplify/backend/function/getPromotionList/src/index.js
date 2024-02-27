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
              table1: 'RestaurantPromotion-tafrbwt3cnehnbqyon3koc2fa4-dev',
              table2: 'Promotion-tafrbwt3cnehnbqyon3koc2fa4-dev'
          };
          break;
      case 'production':
          tableNames = {
              table1: 'RestaurantPromotion-3ftfjowtvjbzlcqpv4z5mbi4wu-production',
              table2: 'Promotion-3ftfjowtvjbzlcqpv4z5mbi4wu-production'
          };
          break;
      case 'test':
          tableNames = {
              table1: 'RestaurantPromotion-kpekhqp6nzchjey7xzql6dgvbi-test',
              table2: 'Promotion-kpekhqp6nzchjey7xzql6dgvbi-test'
          };
          break;
      default:
          tableNames = {
              table1: 'RestaurantPromotion-tafrbwt3cnehnbqyon3koc2fa4-dev',
              table2: 'Promotion-tafrbwt3cnehnbqyon3koc2fa4-dev'
          };
  }
  const { restaurant_id } = event.arguments;

  const getPromotionsByRestaurant = async () => {
    const params = {
      TableName: tableNames.table1,
      IndexName: 'byRestaurant',
      KeyConditionExpression: 'restaurant_id = :restaurantId',
      ExpressionAttributeValues: {
        ':restaurantId': restaurant_id,
      },
    };

    const result = await dynamoDB.query(params).promise();
    const promotionIds = result.Items.map(item => item.promotion_id);

    const promotionParams = {
      RequestItems: {
        [tableNames.table2]: {
          Keys: promotionIds.map(promotionId => ({ id: promotionId })),
        },
      },
    };

    const promotionsResult = await dynamoDB.batchGet(promotionParams).promise();
    const promotions = promotionsResult.Responses[tableNames.table2];

    return promotions;
  };

  try {
    const promotions = await getPromotionsByRestaurant();
    return promotions;
  } catch (error) {
    throw new Error(`Error fetching promotions by restaurant: ${error.message}`);
  }
};
