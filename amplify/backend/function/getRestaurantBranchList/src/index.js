



/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const AWS = require('aws-sdk');

exports.handler = async (event) => {
    let tableNames = {};
  const environment = process.env.ENVIRONMENT || 'dev';
  switch (environment) {
      case 'dev':
          tableNames = {
              table1: 'Restaurants-tafrbwt3cnehnbqyon3koc2fa4-dev'
          };
          break;
      case 'production':
          tableNames = {
              table1: 'Restaurants-3ftfjowtvjbzlcqpv4z5mbi4wu-production'
          };
          break;
      case 'test':
          tableNames = {
              table1: 'Restaurants-kpekhqp6nzchjey7xzql6dgvbi-test'
          };
          break;
      default:
          tableNames = {
              table1: 'Restaurants-tafrbwt3cnehnbqyon3koc2fa4-dev'
          };
  }
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const tableName = tableNames.table1;
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




