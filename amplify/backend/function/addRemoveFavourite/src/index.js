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
    console.log(event);
    let tableNames = {};
  const environment = process.env.ENVIRONMENT || 'dev';
  console.log(environment);
  switch (environment) {
      case 'dev':
          tableNames = {
              table1: 'Favourites-tafrbwt3cnehnbqyon3koc2fa4-dev'
          };
          break;
      case 'production':
          tableNames = {
              table1: 'Favourites-3ftfjowtvjbzlcqpv4z5mbi4wu-production'
          };
          break;
      case 'test':
          tableNames = {
              table1: 'Favourites-kpekhqp6nzchjey7xzql6dgvbi-test'
          };
          break;
      default:
          tableNames = {
              table1: 'Favourites-tafrbwt3cnehnbqyon3koc2fa4-dev'
          };
  }
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    // Current timestamp for createdAt and updatedAt fields
    const now = new Date().toISOString();
    const createdAt = now;
    const updatedAt = now;
    const _version = 1;
    const nowInMillis = new Date().getTime();
    const nowAsString = Number(nowInMillis);
    const _lastChangedAt = nowAsString;
    const tableName = tableNames.table1;

    const { userId, products } = event.arguments;
  //console.log(userId);
  //console.log(entities);
  //return;
    try {
        const addPromises = [];
        const removePromises = [];

        for (const product_data of products) {
            const { is_favourite, product_id, fav_id } = product_data;
            //console.log(favourite_type);
            const id = uuidv4();
            if (is_favourite) {
                // Add item as favorite
                addPromises.push(
                dynamodb.put({
                    TableName: tableNames.table1,
                    Item: {
                    id: id,
                    user_id: userId,
                    product_id: product_id,
                    //favourite_type: favourite_type,
                    createdAt, 
                    updatedAt, 
                    _lastChangedAt, 
                    _version,
                    __typename:process.env.DB_TABLE_TYPE
                    },
                    ConditionExpression: 'attribute_not_exists(user_id) AND attribute_not_exists(product_id)' // Ensure item doesn't already exist
                }).promise()
                );
            } 
            else {
                // Remove item from favorites
                removePromises.push(
                dynamodb.delete({
                    TableName: tableNames.table1,
                    Key: {
                    id:fav_id
                    },
                    ConditionExpression: 'attribute_exists(user_id) AND attribute_exists(product_id)' // Ensure item exists
                }).promise()
                );
            }
        }

        await Promise.all([...addPromises, ...removePromises]);
        // Fetch all favorite items after the operations
        const queryParams = {
            TableName: tableNames.table1,
            IndexName: 'favouritesByUser_id',
            KeyConditionExpression: 'user_id = :userId',
            ExpressionAttributeValues: {
            ':userId': userId
            }
        };
    
        const result = await dynamodb.query(queryParams).promise();
        const favoriteItems = result.Items;
    
        return favoriteItems;
        //return "Items updated successfully.";
    } catch (error) {
        console.error("Error updating items:", error);
        throw new Error("Failed to update items.");
    }


    //const { user_id, restaurant_id, is_favourite, item_id, favourite_id } = event.arguments.input;
    /*const {user_id, entities} = event.arguments.input;
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
    }*/
    
};
