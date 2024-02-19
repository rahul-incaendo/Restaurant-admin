/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const AWS = require('aws-sdk');
const cognito = new AWS.CognitoIdentityServiceProvider();


// Function to get user details from Cognito
async function getUserDetails(username) {
  const cognito = new AWS.CognitoIdentityServiceProvider();

  const userParams = {
    UserPoolId: 'ap-south-1_63XY0bgqD',
    Username: username,
  };

  try {
    const userResponse = await cognito.adminGetUser(userParams).promise();
    // Extract the user details you need from the userResponse
    const userDetail = {
      id: userResponse.UserAttributes.find(attr => attr.Name === 'sub')?.Value,
      email: userResponse.UserAttributes.find(attr => attr.Name === 'email')?.Value,
      name: userResponse.UserAttributes.find(attr => attr.Name === 'name').Value,
      profileImage: "https://d19sr9iq9e5ny6.cloudfront.net/public/restaurant_default_images/profile.png",
      phoneNumber: userResponse.UserAttributes.find(attr => attr.Name === 'phone_number').Value,
      isPhoneNumberVerified: userResponse.UserAttributes.find(attr => attr.Name === 'phone_number_verified').Value,
      isEmailVerified: userResponse.UserAttributes.find(attr => attr.Name === 'email_verified').Value,
      groupName: userResponse.UserAttributes.find(attr => attr.Name === 'custom:userGroupName').Value,
      status: userResponse.UserStatus,
      isEnabled: userResponse.Enabled,
      createdAt: userResponse.UserCreateDate
      // Add other attributes you want to retrieve
    };

    return userDetail;
  } catch (error) {
    console.error('Error fetching user details:', error);
    throw error; // Throw the error to be caught by the Lambda function's catch block
  }
}


exports.handler = async (event) => {
  
  const username = event.arguments.id;

  try {
    // Call the function to get user details from Cognito
    const userDetail = await getUserDetails(username);

    // Return the user detail as a response to the API Gateway
    return {
      statusCode: 200,
      body: JSON.stringify(userDetail),
    };
  } catch (error) {
    console.error('Error:', error);

    // Return an error response to the API Gateway
    throw new Error('Error in getting user data');
  }
  
  
  /*const filterID = event.arguments.id;
  try {
    const users = await cognito.listUsers({
      UserPoolId: 'ap-south-1_63XY0bgqD',
      Filter: `sub = "${filterID}"`,
    }).promise();
    
    const userData = users.Users.map(user => ({
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
      body: JSON.stringify(userData)
    };
    
  } catch (error) {
    console.log(error);
    throw new Error('Error in getting user data');
  }*/
};