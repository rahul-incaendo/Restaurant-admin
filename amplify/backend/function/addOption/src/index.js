/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');

const docClient = new AWS.DynamoDB.DocumentClient({
        region: process.env.REGION,
    });
exports.handler = async (event) => {
    const now = new Date().toISOString();
    const createdAt = now;
    const updatedAt = now;
    const _version = 1;
    const nowInMillis = new Date().getTime();
    const nowAsString = Number(nowInMillis);
    const _lastChangedAt = nowAsString;

    const { option_name, option_code, option_description, option_type_id } = event.arguments.input;
    const id = uuidv4();
    const params = {
        TableName: process.env.DB_OPTION_TABLE_NAME,
        Item: {
            id:id,
            option_name,
            option_code, 
            option_description,
            option_type_id,
            createdAt, 
            updatedAt, 
            _lastChangedAt, 
            _version,
            __typename:process.env.DB_TABLE_TYPE
        },
    };
    try {
        const optionResult = await optionCheck(option_code);
        console.log(optionResult);
            if(optionResult === true){
                await docClient.put(params).promise();
                return {id:id};
            }else{
                console.log("else part");
                throw new Error("this option code is already exist");
            }

    } catch (error) {
        throw error;
    }
};


async function optionCheck(option_code){
    const params1 = {
            TableName: process.env.DB_OPTION_TABLE_NAME,
            IndexName: 'optionsByOption_code',
            KeyConditionExpression: 'option_code = :option_code',
            //FilterExpression: 'coupon_code = :coupon_code',
            ExpressionAttributeValues: {
                ':option_code': option_code,
            }
        };

        const optionData = await docClient.query(params1).promise();
        if(optionData.Count > 0 ){
            return false;
        }else{
            return true;
        }    
}
