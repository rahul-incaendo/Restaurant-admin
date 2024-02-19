/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	DB_ADDRESS_TABLE_NAME
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const AWS = require('aws-sdk');

exports.handler = async (event) => {
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const tableName = process.env.DB_ADDRESS_TABLE_NAME;
    const user_id = event.arguments.user_id;
    const params = {
        TableName: tableName,
        FilterExpression: '#user_id = :user_id',
            ExpressionAttributeNames: {
                '#user_id': 'user_id',
            },
            ExpressionAttributeValues: {
                ':user_id': user_id,
            },
    };
    
    try {
        const data = await dynamodb.scan(params).promise();
        if (data.Items) {
            const userAddress = data.Items.map(address => ({
                id: address.id,
                name: address.uname,
                phone_number: address.phone_number,
                address_1: address.address_1,
                address_2:address.address_2,
                state: address.state,
                city: address.city,
                pin_code: address.pin_code,
                user_id: address.user_id
            }));
            return data.Items;
           
        } else {
            return {
                statusCode: 404,
                body: JSON.stringify({ message: 'Address not found' })
            };
        }
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Internal server error' })
        };
    }
};




