/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	DB_COUPON_TABLE_NAME
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();
exports.handler = async (event) => {
    const coupon_code = event.arguments.coupon_code;
    const params = {
        TableName: process.env.DB_COUPON_TABLE_NAME,
        FilterExpression: 'coupon_code = :coupon_code AND is_active =:is_active',
        ExpressionAttributeValues: {
        ':coupon_code': coupon_code,
        ':is_active': true
        }
    };

    try {
        const couponData = await dynamoDB.scan(params).promise();
        /* return {
            statusCode: 200,
            body: JSON.stringify(couponData)
        } */
        return couponData.Items;
    }
    catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Internal Server Error' })
        }
    }
};
