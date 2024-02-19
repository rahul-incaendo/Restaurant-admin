

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.handler = async (event) => {
    try {
        const bucketName = 'restaurantadmin-storage-9d3d0fa9175531-dev';
        const objectKey = 'public/menu.jpg';

        const params = {
            Bucket: bucketName,
            Key: objectKey,
        };

        const imageObject = await s3.getObject(params).promise();
        const imageContent = imageObject.Body.toString('base64'); // Convert image content to base64

        return {
            statusCode: 200,
            body: JSON.stringify({ imageContent }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Error reading image content' }),
        };
    }
};

