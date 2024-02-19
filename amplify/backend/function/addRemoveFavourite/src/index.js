/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	DB_FAVOURITES_TABLE_NAME
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');

exports.handler = async (event) => {
    const docClient = new AWS.DynamoDB.DocumentClient();
    // Current timestamp for createdAt and updatedAt fields
    const now = new Date().toISOString();
    const createdAt = now;
    const updatedAt = now;
    const _version = 1;
    const nowInMillis = new Date().getTime();
    const nowAsString = Number(nowInMillis);
    const _lastChangedAt = nowAsString;
    const tableName = process.env.DB_FAVOURITES_TABLE_NAME;

    const { user_id, restaurant_id, is_favourite, item_id, favourite_id } = event.arguments.input;
    if(is_favourite == true){
        var favourite_type = "RESTAURANT";
        if(item_id.length > 0){
            favourite_type = "ITEM";
        }
         
        const id = uuidv4();
        const params = {
            TableName: tableName,
            Item: {
                id:id,
                user_id,
                item_id,
                favourite_type,
                restaurant_id,
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
    }
    else{
        docClient
            .delete({
                TableName: tableName,
                Key: {
                id: favourite_id,
                },
            })
            .promise()
            .then(data => console.log(data.Attributes))
            .catch(console.error)
    }
    
};
