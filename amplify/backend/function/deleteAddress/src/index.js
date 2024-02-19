

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    console.log(event);
    const address_id = event.arguments.input.address_id;
    console.log("address = " + address_id);
    const params = {
        TableName: 'Address-tafrbwt3cnehnbqyon3koc2fa4-dev',
        Key: {
            id: address_id,
        },
    };
    
    try {
        await dynamoDB.delete(params).promise();
        return {
            success: true,
            message: 'Address deleted successfully',
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Internal server error' })
        };
    }
}