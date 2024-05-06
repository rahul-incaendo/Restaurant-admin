

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const AWS = require('aws-sdk');
const s3 = new AWS.S3();
const csv = require('@fast-csv/parse');
const { v4: uuidv4 } = require('uuid');
const results = [];
exports.handler = async (event) => {
  let tableNames = {};
  const environment = process.env.ENVIRONMENT || 'dev';
  switch (environment) {
      case 'dev':
          tableNames = {
              table1: 'Testvoucher-tafrbwt3cnehnbqyon3koc2fa4-dev'
          };
          break;
      case 'production':
          tableNames = {
              table1: 'estvoucher-tafrbwt3cnehnbqyon3koc2fa4-dev'
          };
          break;
      case 'test':
          tableNames = {
              table1: 'Testvoucher-kpekhqp6nzchjey7xzql6dgvbi-test'
          };
          break;
      default:
          tableNames = {
              table1: 'Menu-tafrbwt3cnehnbqyon3koc2fa4-dev'
          };
  }

  const docClient = new AWS.DynamoDB.DocumentClient({
  region: process.env.REGION,
  });

  const { urlkey, email } = event.arguments.input;
  const fileparams = {
        Bucket: 'restaurantadmin-storage-9d3d0fa9175531-dev',
        Key: urlkey,
        };
  const now = new Date().toISOString();
  const createdAt = now;
  const updatedAt = now;
  const _version = 1;
  const nowInMillis = new Date().getTime();
  const nowAsString = Number(nowInMillis);
  const _lastChangedAt = nowAsString;
  const id = uuidv4();
  
  const putVouchers = async (promotion_id, restaurant_id) => {
  const voucherId = uuidv4();
  const title = restaurant_id.title;
  const description = restaurant_id.description;
  const voucher_code = restaurant_id.voucher_code;
  const voucher_type = restaurant_id.voucher_type;
  const mobile = restaurant_id.mobile;
  const email = restaurant_id.email;
  const valid_from = restaurant_id.valid_from;
  const valid_till = restaurant_id.valid_till;
  const tnc = restaurant_id.tnc;
  const mininum_cart_value = restaurant_id.mininum_cart_value;
  const max_time_use = restaurant_id.max_time_use;
  const prefix = restaurant_id.prefix;

  const params = {
      TableName: tableNames.table1,
      Item: {
        id: voucherId,
        voucher_code, 
	voucher_type, 
	mobile, 
	email, 	
	valid_from, 
	valid_till,
	tnc, 	
	description, 
	title, 
	mininum_cart_value,
	max_time_use,
	prefix, 
        createdAt,
        updatedAt,
        _lastChangedAt,
        _version

      },
    };
  const data = await docClient.put(params).promise();
  };

  const csvFile = s3.getObject(fileparams).createReadStream();
  let parserFcn = new Promise((resolve, reject) => {
  const parser = csv
    .parseStream(csvFile, { headers: true })
    .on("data", function (data) {
        results.push(data);
    })
    .on("end", function () {
      resolve("csv parse process finished");
    })
    .on("error", function () {
      reject("csv parse process failed");
    });
  });

  try {
    await parserFcn;
    for (const restaurantId of results) {
        await putVouchers(id, restaurantId);
      }
    return { response : 'success' }
  } catch (error) {
      console.log("Get Error: ", error);
  }
};

