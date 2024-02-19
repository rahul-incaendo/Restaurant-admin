

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const AWS = require('aws-sdk');
const uuid = require('uuid');

const s3 = new AWS.S3();

exports.handler = async (event) => {
  const { content, contentType, extension, fileName } = event.arguments.input;

  const id = uuid.v4();
  const file_name = `${fileName}.${extension}`;

  const params = {
    Bucket: 'restaurantadmin-storage-9d3d0fa9175531-dev',
    Key: `public/${file_name}`,
    Body: Buffer.from(content, 'base64'),
    ContentType: contentType,
    //ACL: 'public-read', // Change ACL if needed
  };

  try {
    await s3.putObject(params).promise();
    const fileUrl = `https://${params.Bucket}.s3.amazonaws.com/${params.Key}`;
    return { url: fileUrl };
  } catch (error) {
    console.error('Error uploading file:', error);
    throw new Error('File upload failed.');
  }
};



// Lambda function code (index.js)
/* 
const AWS = require('aws-sdk');

const s3 = new AWS.S3();

exports.handler = async (event) => {
  const { file, bucket, region, key } = event.arguments.input;

  const params = {
    Bucket: bucket,
    Key: key,
    Body: file, // 'file' is the actual file content from multipart form data
  };

  try {
    await s3.upload(params).promise();
    const fileUrl = `https://${bucket}.s3.amazonaws.com/${key}`;
    return { url: fileUrl };
  } catch (error) {
    console.error('Error uploading file:', error);
    throw new Error('File upload failed.');
  }
}; */


