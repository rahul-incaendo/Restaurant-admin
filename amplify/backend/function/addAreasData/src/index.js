/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const AWS = require('aws-sdk');
const { Readable } = require('stream');
const { v4: uuidv4 } = require('uuid');
//const csvParser = require('csv-parser');

const dynamoDB = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event, context) => {
  try {
    const bucket = event.Records[0].s3.bucket.name;
    const key = event.Records[0].s3.object.key;

    // Retrieve the CSV file from S3
    const s3Object = await getS3Object(bucket, key);

    // Create a readable stream from the S3 object
    const csvStream = Readable.from(s3Object.Body);

    // Parse the CSV data
    const parsedData = await parseCSV(csvStream);

    console.log('Parsed Data:', parsedData); // Log the parsed data

    // Insert or update data into DynamoDB
    await Promise.all(parsedData.map((item) => putItemIntoDynamoDB(item)));

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Data import successful' }),
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error processing data import' }),
    };
  }
};

function getS3Object(bucket, key) {
  const s3 = new AWS.S3();
  return s3.getObject({ Bucket: bucket, Key: key }).promise();
}

async function parseCSV(csvStream) {
  const data = [];

  return new Promise((resolve, reject) => {
    csvStream
    .on('data', (chunk) => {
      const row = chunk.toString();
      console.log("row data" + row);
      // Check if the row is not empty (contains at least one non-whitespace character)
      if (row.trim() !== '') {
        data.push(row);
      }
    })
      .on('end', () => {
        const jsonArray = convertCSVToJson(data.join(''));
        console.log("jsonArray"+jsonArray);
        resolve(jsonArray);
      })
      .on('error', (error) => reject(error));
  });
} 

function convertCSVToJson(csvString) {
  const lines = csvString.split('\n');
  const result = [];

  for (let i = 0; i < lines.length; i++) {
    const currentLine = lines[i].split(',');
    if (currentLine.some((value) => value.trim() !== '')) {
        result.push(currentLine);
      }
  }

  return result;
}

function putItemIntoDynamoDB(item) {

  // truncate query
  /*const truncateTable = async () => {
    let ExclusiveStartKey, result
  
    do {
      result = await dynamoDB.scan({
        TableName: "Country-tafrbwt3cnehnbqyon3koc2fa4-dev",
        ExclusiveStartKey,
      }).promise()
  
      ExclusiveStartKey = result.LastEvaluatedKey
  
      console.log(`Found ${result.Items.length} Items, removing...`)
  
      if (result.Items.length > 0) {
        await Promise.all(
          result.Items.map(async item =>
            dynamoDB.delete({
              TableName: "Country-tafrbwt3cnehnbqyon3koc2fa4-dev",
              Key: {
                pk: item.pk,
                sk: item.sk,
              },
            }).promise()
          )
        )
      }
    } while (result.Items.length || result.LastEvaluatedKey)
  }
  
  truncateTable()
    .then(() => console.log("Done!"))
    .catch(console.error)
  
*/
  // end truncate query

  console.log("put item" + item);
  const id = uuidv4();
  //item.push(id);
  console.log(item);
  const now = new Date().toISOString();
  const createdAt = now;
  const updatedAt = now;
  const _version = 1;
  const nowInMillis = new Date().getTime();
  const nowAsString = Number(nowInMillis);
  const _lastChangedAt = nowAsString;
  
  const params = {
    TableName: 'Area-tafrbwt3cnehnbqyon3koc2fa4-dev',
    Item:{
      id: id, 
      name: item[0],
      country_code: item[1],
      phone_code: item[2],
      createdAt: createdAt,
      updatedAt: updatedAt,
      _version: 1,
      _lastChangedAt: _lastChangedAt
    }
  };

  return dynamoDB.put(params).promise();
}