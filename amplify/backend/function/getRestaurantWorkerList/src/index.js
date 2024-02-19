/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const AWS = require('aws-sdk');
const cognito = new AWS.CognitoIdentityServiceProvider();

exports.handler = async (event) => {
  console.log(event);
  const filterInput = event.arguments.email;
  console.log(filterInput);
  const filter = filterInput ? `email = "${filterInput}"` : '';
  try {
    const users = await cognito.listUsers({
      UserPoolId: 'ap-south-1_63XY0bgqD',
      //AttributesToGet: ['email'],
      Filter: filter,
      //Filter: `email = "${filterEmail}"`,
    }).promise();
    const userList = users.Users.map(user => ({
      id: user.Attributes.find(attr => attr.Name === 'sub').Value,
      name: user.Attributes.find(attr => attr.Name === 'name').Value,
      phoneNumber: user.Attributes.find(attr => attr.Name === 'phone_number').Value,
      isPhoneNumberVerified: user.Attributes.find(attr => attr.Name === 'phone_number_verified').Value,
      email: user.Attributes.find(attr => attr.Name === 'email').Value,
      isEmailVerified: user.Attributes.find(attr => attr.Name === 'email_verified').Value,
      groupName: user.Attributes.find(attr => attr.Name === 'custom:userGroupName').Value,
      status: user.UserStatus,
      isEnabled: user.Enabled,
      createdAt: user.UserCreateDate
    }));
    
    return {
      statusCode: 200,
      body: JSON.stringify(userList)
    };
    
  } catch (error) {
    console.log(error);
    throw new Error('Error listing users');
  }
};