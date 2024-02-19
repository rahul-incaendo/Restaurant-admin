/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	USER_POOL_ID
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const AWS = require('aws-sdk');
const cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider();

exports.handler = async (event) => {
  const { id, name, phoneNumber, birthdate, address, email} = event.arguments.input;
  const params = {
    UserAttributes: [
      {
        Name: 'name',
        Value: name
      },
      {
        Name: 'email',
        Value: email
      },
      {
        Name: 'phone_number',
        Value: phoneNumber
      },
      {
        Name: 'birthdate',
        Value: birthdate
      },
      {
        Name: 'address',
        Value: address
      }

    ],
    UserPoolId: process.env.USER_POOL_ID,
    Username: id
  };
  
  try {
    await cognitoidentityserviceprovider.adminUpdateUserAttributes(params).promise();
    return { id: id };
  } catch (error) {
    console.error(error);
    throw new Error('Error updating user data');
  }
};

