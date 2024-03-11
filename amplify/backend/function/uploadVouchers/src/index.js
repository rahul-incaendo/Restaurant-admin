

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const AWS = require('aws-sdk');
const s3 = new AWS.S3();
const csv = require('@fast-csv/parse');
const { v4: uuidv4 } = require('uuid');

const results = [];
const params = {
        Bucket: 'restaurantadmin-storage-9d3d0fa9175531-dev',
        Key: 'public/newvoucher.csv',
        };
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

  const { content, contentType, extension, fileName } = event.arguments.input;

  const idup = uuid.v4();
  const file_name = `${fileName}.${extension}`;

  const paramsup = {
    Bucket: 'restaurantadmin-storage-9d3d0fa9175531-dev',
    Key: `public/${file_name}`,
    Body: Buffer.from(content, 'base64'),
    ContentType: contentType,
    //ACL: 'public-read', // Change ACL if needed
  };

  try {
    await s3.putObject(paramsup).promise();
    const fileUrl = `https://${paramsup.Bucket}.s3.amazonaws.com/${paramsup.Key}`;
    //return { url: fileUrl };
  } catch (error) {
    console.error('Error uploading file:', error);
    throw new Error('File upload failed.');
  }

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
  //console.log(restaurant_id.voucher_code);
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
        voucher_code,
        createdAt,
        updatedAt,
        _lastChangedAt,
        _version

      },
    };
  //console.log("params are");
  //console.log(params);

  await docClient.put(params).promise();
  };

  const csvFile = s3.getObject(params).createReadStream();
  let parserFcn = new Promise((resolve, reject) => {
  const parser = csv
    .parseStream(csvFile, { headers: true })
    .on("data", function (data) {
    //console.log('Data parsed: ', data);
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
       // console.log(restaurantId.title);
        await putVouchers(id, restaurantId);
      }
  } catch (error) {
    //console.log("Get Error: ", error);
  }
};


/*exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
    return {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  },
        body: JSON.stringify('Hello from Lambda!'),
    };
};
*/
