const AWS = require('aws-sdk');

exports.handler = async (event) => {
  const lambda = new AWS.Lambda();

  const params = {
    FunctionName: 'uploadDocuments-dev', // Replace with your Lambda function name
    Payload: JSON.stringify({
      arguments: event.arguments,
      identity: event.identity,
    }),
  };

  const lambdaResponse = await lambda.invoke(params).promise();
  const responseBody = JSON.parse(lambdaResponse.Payload);

  if (lambdaResponse.StatusCode !== 200) {
    throw new Error(responseBody.error || 'Lambda invocation error');
  }

  return responseBody;
};
