/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const AWS = require('aws-sdk');


exports.handler = async (event) => {
    const docClient = new AWS.DynamoDB.DocumentClient();
    const product_id = event.arguments.id;
    try {
        const data  = docClient.get({
            TableName: "Product-tafrbwt3cnehnbqyon3koc2fa4-dev",
            Key: {
                id: product_id,
            },
        }).promise();

        return data.Item;

    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify(error),
        };
    }
};


