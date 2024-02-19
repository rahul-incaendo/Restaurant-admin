



/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const AWS = require('aws-sdk');

exports.handler = async (event) => {
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const tableName = process.env.DB_RESTAURANTS_TABLE_NAME;
    const owner_number = event.arguments.owner_number;

    const params = {
        TableName: tableName,
        IndexName: 'OwnerNumberIndex',
        KeyConditionExpression: 'owner_number = :owner_number',
        ExpressionAttributeValues: {
            ':owner_number': owner_number
        }
    };
    
    try {
        const data = await dynamodb.query(params).promise();
        if (data.Items) {
            const id = data.Items[0].id;
            const restaurant_list = [{
                'id': id,
                'restaurant_name': data.Items[0].restaurant_name,
                'restaurant_address': data.Items[0].restaurant_address,
                'status': data.Items[0].status
            }];
            const response = await dynamodb.scan({
            TableName: tableName,
            FilterExpression: '#parent_id = :parent_id',
            ProjectionExpression: 'id, restaurant_name, restaurant_address, #status',
            ExpressionAttributeNames: {
                '#parent_id': 'parent_id',
                '#status': 'status'
            },
            ExpressionAttributeValues: {
                ':parent_id': id,
            },
        }).promise();
        
        response.Items.map(async itemData => {
            restaurant_list.push(itemData);
        });
        return {
            statusCode: 200,
            body: JSON.stringify(restaurant_list)
        };
           
        } else {
            return {
                statusCode: 404,
                body: JSON.stringify({ message: 'Item not found' })
            };
        }
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Internal server error' })
        };
    }
};




