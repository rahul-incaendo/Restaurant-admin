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

    const { uname, phone_number, user_id, address_1, address_2, city, state, pin_code } = event.arguments.input;
    const id = uuidv4();
    const params = {
        TableName: process.env.DB_ADDRESS_TABLE_NAME,
        Item: {
            id:id,
            phone_number,
            uname, 
            user_id,
            address_1,
            address_2,
            city,
            state,
            pin_code,
            createdAt, 
            updatedAt, 
            _lastChangedAt, 
            _version,
            __typename:process.env.DB_TABLE_TYPE
        },
    };
    try {
        await docClient.put(params).promise();
        return {id:id};
    } catch (error) {
        return error;
    }
};

