/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const AWS = require('aws-sdk');

exports.handler = async (event) => {
  // Retrieve the region and user pool ID from the event input
  //const { region, userPoolId } = event.arguments;
  console.log(event);
  const region = 'ap-south-1'; // Replace with your AWS region
  const userPoolId = 'ap-south-1_63XY0bgqD';
  const sub = event.arguments.userId;
  
  // Create a new AWS Cognito IdentityServiceProvider instance
  const cognitoIdentityServiceProvider = new AWS.CognitoIdentityServiceProvider({ region });
  try {
    // Retrieve the user's groups from the user pool
    const params = {
      UserPoolId: userPoolId,
      Username: sub
    };

    const response = await cognitoIdentityServiceProvider.adminListGroupsForUser(params).promise();

    // Extract the group IDs from the response
    const Descriptions = response.Groups.map(group => group.GroupName);
return response;
    //return Descriptions;
  } catch (error) {
    console.error('Error retrieving user groups:', error);
    throw error;
  }


};
