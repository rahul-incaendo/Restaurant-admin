/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */


const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');
const docClient = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    let tableNames = {};
  const environment = process.env.ENVIRONMENT || 'dev';
  switch (environment) {
      case 'dev':
          tableNames = {
              table1: 'ProductOptionType-tafrbwt3cnehnbqyon3koc2fa4-dev'
          };
          break;
      case 'production':
          tableNames = {
              table1: 'ProductOptionType-3ftfjowtvjbzlcqpv4z5mbi4wu-production'
          };
          break;
      case 'test':
          tableNames = {
              table1: 'ProductOptionType-kpekhqp6nzchjey7xzql6dgvbi-test'
          };
          break;
      default:
          tableNames = {
              table1: 'ProductOptionType-tafrbwt3cnehnbqyon3koc2fa4-dev'
          };
  }

    // Current timestamp for createdAt and updatedAt fields
    const now = new Date().toISOString();
    const createdAt = now;
    const updatedAt = now;
    const _version = 1;
    const nowInMillis = new Date().getTime();
    const nowAsString = Number(nowInMillis);
    const _lastChangedAt = nowAsString;
     
    const options_data = event.arguments.input;
    const promises = options_data.map(async (option) => {
        const id = uuidv4();
        const params = {
            TableName: tableNames.table1,
            Item: {
                id: id,
                option_data: option.option_data,
                price: option.price,
                product_id: option.product_id,
                createdAt, 
                updatedAt, 
                _lastChangedAt, 
                _version,
                __typename:"ProductOptionType"
            },
        };

        try {
        await docClient.put(params).promise();
        return {
                    id:id,
                    price:option.price
                };
        } catch (err) {
        console.error('Error adding item to DynamoDB: ', err);
        return null;
        }
    });

  const result = await Promise.all(promises);
  //console.log(result);
  return result;
};


