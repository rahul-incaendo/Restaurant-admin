

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const AWS = require('aws-sdk');

exports.handler = async (event) => {
    const docClient = new AWS.DynamoDB.DocumentClient();
    const user_id = event.arguments.user_id;
    const tableName = process.env.DB_CARTITEM_TABLE_NAME;
}