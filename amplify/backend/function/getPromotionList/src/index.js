/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  const { restaurant_id } = event.arguments;

  const getPromotionsByRestaurant = async () => {
    const params = {
      TableName: 'RestaurantPromotion-tafrbwt3cnehnbqyon3koc2fa4-dev',
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
        "Promotion-tafrbwt3cnehnbqyon3koc2fa4-dev": {
          Keys: promotionIds.map(promotionId => ({ id: promotionId })),
        },
      },
    };

    const promotionsResult = await dynamoDB.batchGet(promotionParams).promise();
    const promotions = promotionsResult.Responses["Promotion-tafrbwt3cnehnbqyon3koc2fa4-dev"];

    return promotions;
  };

  try {
    const promotions = await getPromotionsByRestaurant();
    return promotions;
  } catch (error) {
    throw new Error(`Error fetching promotions by restaurant: ${error.message}`);
  }
};
