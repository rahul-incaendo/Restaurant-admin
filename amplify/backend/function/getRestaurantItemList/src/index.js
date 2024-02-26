/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();
let tableNames = {};

exports.handler = async (event) => {
  
  const environment = process.env.ENVIRONMENT || 'dev';
  switch (environment) {
      case 'dev':
          tableNames = {
              table1: 'Menu-tafrbwt3cnehnbqyon3koc2fa4-dev',
              table2: 'Category-tafrbwt3cnehnbqyon3koc2fa4-dev',
              table3: 'Product-tafrbwt3cnehnbqyon3koc2fa4-dev'
          };
          break;
      case 'production':
          tableNames = {
              table1: 'Menu-3ftfjowtvjbzlcqpv4z5mbi4wu-production',
              table2: 'Category-3ftfjowtvjbzlcqpv4z5mbi4wu-production',
              table3: 'Product-3ftfjowtvjbzlcqpv4z5mbi4wu-production'
          };
          break;
      case 'test':
          tableNames = {
              table1: 'Menu-kpekhqp6nzchjey7xzql6dgvbi-test',
              table2: 'Category-kpekhqp6nzchjey7xzql6dgvbi-test',
              table3: 'Product-kpekhqp6nzchjey7xzql6dgvbi-test'
          };
          break;
      default:
          tableNames = {
            table1: 'Menu-tafrbwt3cnehnbqyon3koc2fa4-dev',
            table2: 'Category-tafrbwt3cnehnbqyon3koc2fa4-dev',
            table3: 'Product-tafrbwt3cnehnbqyon3koc2fa4-dev'
          };
  }
  const restaurant_id  = event.arguments.restaurantId;
  const params = {
    TableName: tableNames.table1,
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
      TableName: tableNames.table2,
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
      TableName: tableNames.table3,
      IndexName: 'byCategory',
      KeyConditionExpression: 'category_id = :category_id',
      ExpressionAttributeValues: {
        ':category_id': categoryId
      }
    };
  
    const data = await dynamoDB.query(params).promise();
    return data.Items;
  }
