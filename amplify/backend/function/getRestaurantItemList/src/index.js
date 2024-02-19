/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  const restaurant_id  = event.arguments.restaurantId;
  const params = {
    TableName: 'Menu-tafrbwt3cnehnbqyon3koc2fa4-dev',
    IndexName: 'byRestaurant',
    KeyConditionExpression: 'restaurant_id = :restaurant_id',
    ExpressionAttributeValues: {
      ':restaurant_id': restaurant_id
    }
  };

  const result = await dynamoDB.query(params).promise();
  var categoriesItem;
  var finalCategoriesItem = [];
  try 
  {
    const menuWithCategories = await Promise.all(result.Items.map(async menu => {
    const categories = await getCategoryByMenuId(menu.id);
          await Promise.all(categories.map(async category => {
          let items = await getItemByCategoryId(category.id);
            categoriesItem = {...category, items:items}
            finalCategoriesItem.push(categoriesItem);
          }));
          
          return { ...menu, categories: finalCategoriesItem };
    }));
    
   return menuWithCategories;
  } 
  catch (error) {
    console.error('Error fetching orders:', error);
    throw new Error('Error fetching orders');
  }
};


  async function getCategoryByMenuId(menuId) {
    const params = {
      TableName: 'Category-tafrbwt3cnehnbqyon3koc2fa4-dev',
      IndexName: 'byMenu',
      KeyConditionExpression: 'menu_id = :menu_id',
      ExpressionAttributeValues: {
        ':menu_id': menuId
      }
    };
  
    const data = await dynamoDB.query(params).promise();
    return data.Items;
  }
  
  async function getItemByCategoryId(categoryId) {
    const params = {
      TableName: 'Product-tafrbwt3cnehnbqyon3koc2fa4-dev',
      IndexName: 'byCategory',
      KeyConditionExpression: 'category_id = :category_id',
      ExpressionAttributeValues: {
        ':category_id': categoryId
      }
    };
  
    const data = await dynamoDB.query(params).promise();
    return data.Items;
  }
