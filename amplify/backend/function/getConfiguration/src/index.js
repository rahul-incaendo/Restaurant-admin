

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const AWS = require('aws-sdk');

const dynamoDB = new AWS.DynamoDB.DocumentClient();
exports.handler = async (event) => {
    const params = {
        TableName: process.env.DB_APP_SETTING_TABLE_NAME,
        /* FilterExpression: 'is_favourite = :isFavorite AND customer_id = :customer_id',
        ExpressionAttributeValues: {
        ':isFavorite': true,
        ':customer_id': user_id
        } */
    };

    try {
        const appSettings = await dynamoDB.scan(params).promise();
        return appSettings;
    } catch (error) {
        return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Internal Server Error' })
        };
    }
};
