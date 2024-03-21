const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');
exports.handler = async (event) => {
console.log(event);
let tableNames = {};
const environment = process.env.ENVIRONMENT || 'dev';
switch (environment) {
    case 'dev':
        tableNames = {
            table1: 'ProductTag-tafrbwt3cnehnbqyon3koc2fa4-dev'
        };
        break;
    case 'production':
        tableNames = {
            table1: 'ProductTag-3ftfjowtvjbzlcqpv4z5mbi4wu-production'
        };
        break;
    case 'test':
        tableNames = {
            table1: 'ProductTag-kpekhqp6nzchjey7xzql6dgvbi-test'
        };
        break;
    default:
        tableNames = {
            table1: 'ProductTag-tafrbwt3cnehnbqyon3koc2fa4-dev'
        };
}
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

const product_ids  = event.arguments.input;
const id = uuidv4();

const putTagToProduct = async (productId, tagId) => {
    const productTagId = uuidv4();
    const params = {
        TableName: tableNames.table1,
        Item: {
            id: productTagId,
            productId,
            tagId,
            createdAt, 
            updatedAt, 
            _lastChangedAt, 
            _version,
            __typename:"ProductTag"
        },
    };
    await docClient.put(params).promise();
    return productTagId;
};

try {
    const promises = product_ids.map(async (proId) => {
        for( const tag of proId.tags){
         const res =   await putTagToProduct(proId.product_id, tag); 
         
        }
        return {
            id:proId.product_id
        };

        
    });
        
        const result = await Promise.all(promises);
        return result;
    }   catch (error) {
        console.error(error);
        throw new Error(error);
    }

};
