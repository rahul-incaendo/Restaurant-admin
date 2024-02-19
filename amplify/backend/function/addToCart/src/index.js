

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


    const { user_id, item_id, sub_item_id, addons, quantity, price } = event.arguments.input;
    const cartItemId = uuidv4();
    const cartItemParams = {
        TableName: process.env.DB_CARTITEM_TABLE_NAME,
        Item: {
            id: cartItemId,
            cart_id: 'cart_' + user_id,
            item_id,
            sub_item_id,
            addons,
            quantity,
            price,
            createdAt, 
            updatedAt, 
            _lastChangedAt, 
            _version,
            __typename:process.env.DB_TABLE_TYPE
        },
    };

    await docClient.put(cartItemParams).promise();

    // Step 2: Update the Cart to include the new CartItem
    const cartParams = {
        TableName: 'Cart-tafrbwt3cnehnbqyon3koc2fa4-dev',
        Key: { id: 'cart_' + user_id },
        UpdateExpression: 'SET #items = list_append(#items, :newItem)',
        ExpressionAttributeNames: {
            '#items': 'items',
        },
        ExpressionAttributeValues: {
            ':newItem': [{id: cartItemId}],
        },
        //ReturnValues: 'ALL_NEW'
    };

    const updatedCart = await docClient.update(cartParams).promise();
    //return updatedCart.Attributes;
        return {id:id};
    // Current timestamp for createdAt and updatedAt fields
   /* const now = new Date().toISOString();
    const createdAt = now;
    const updatedAt = now;
    const _version = 1;
    const nowInMillis = new Date().getTime();
    const nowAsString = Number(nowInMillis);
    const _lastChangedAt = nowAsString;

    const { user_id, items,totals} = event.arguments.input;
    
    const params = {
        TableName: process.env.DB_CARTITEM_TABLE_NAME,
        Item: {
            id:id,
            user_id,
            item_id,
            quantity,
            addons,
            createdAt, 
            updatedAt, 
            _lastChangedAt, 
            _version,
            __typename:process.env.DB_TABLE_TYPE
        }
    };

    try {
        await docClient.put(params).promise();
        return {id:id};
    } catch (error) {
        console.error('Error placing order:', error);
        throw new Error('Error placing order');
    }*/
};

