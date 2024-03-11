

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

//const AWS = require('@aws-sdk/client-s3');
//const uuid = require('uuid');

const AWS = require('aws-sdk');
const s3 = new AWS.S3();
//const csv = require('@fast-csv/parse');
const csv = require('csv-parser');
const { v4: uuidv4 } = require('uuid');

const results = [];
exports.handler = async function (event, ctx, callback) {
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
  
  const now = new Date().toISOString();
  const createdAt = now;
  const updatedAt = now;
  const _version = 1;
  const nowInMillis = new Date().getTime();
  const nowAsString = Number(nowInMillis);
  const _lastChangedAt = nowAsString;
 // Generate a UUID (v4) for your todo item
  const id = uuidv4();

  const putVouchers = async (promotion_id, restaurant_id) => {
      console.log(restaurant_id.voucher_code);
    const voucherId = uuidv4();
    const title = restaurant_id.title;
    const description = restaurant_id.description;
    const voucher_code = restaurant_id.voucher_code;
    const params = {
      TableName: tableNames.table1,
      Item: {
        id: voucherId,
        title,
        description,
        voucher_code
      },
    };
    console.log(params);

    await docClient.put(params).promise();  
  };


    try {
        //const { title } = event.arguments.input;
        //console.log(title);
        const params = {
        Bucket: 'restaurantadmin-storage-9d3d0fa9175531-dev',
        Key: 'public/newvoucher.csv',
        };

        const file = s3.getObject(params).createReadStream();

        file
            .pipe(csv())
            .on('data', function (data) {
              console.log("on start");
              console.log("Name is: "+data.email);
		          results.push(data);

            })
            .on('end', () => {
                console.log("on end");
                callback(null, results);
            });
	    //return results;
	    for (const restaurantId of results) {
        console.log(restaurantId.email);
        await putVouchers(id, restaurantId);
      }
    } catch (err) {
        console.log(err);
        callback(Error(err));
    }

};

