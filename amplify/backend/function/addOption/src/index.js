/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');

const docClient = new AWS.DynamoDB.DocumentClient({
        region: process.env.REGION,
    });
exports.handler = async (event) => {
    let tableNames = {};
  const environment = process.env.ENVIRONMENT || 'dev';
  switch (environment) {
      case 'dev':
          tableNames = {
              table1: 'Option-tafrbwt3cnehnbqyon3koc2fa4-dev'
          };
          break;
      case 'production':
          tableNames = {
              table1: 'Option-3ftfjowtvjbzlcqpv4z5mbi4wu-production'
          };
          break;
      case 'test':
          tableNames = {
              table1: 'Option-kpekhqp6nzchjey7xzql6dgvbi-test'
          };
          break;
      default:
          tableNames = {
              table1: 'Option-tafrbwt3cnehnbqyon3koc2fa4-dev'
          };
  }
    const now = new Date().toISOString();
    const createdAt = now;
    const updatedAt = now;
    const _version = 1;
    const nowInMillis = new Date().getTime();
    const nowAsString = Number(nowInMillis);
    const _lastChangedAt = nowAsString;

    const { option_name, option_code, option_description, option_type_id, image_path } = event.arguments.input;
    const id = uuidv4();
    const params = {
        TableName: tableNames.table1,
        Item: {
            id:id,
            option_name,
            option_code, 
            option_description,
            option_type_id,
            image_path,
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
            TableName: tableNames.table1,
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
