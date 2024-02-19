/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const AWS = require('aws-sdk');

exports.handler = async (event) => {
  // Retrieve the region and user pool ID from the event input
  //const { region, userPoolId } = event.arguments;
  const region = 'ap-south-1'; // Replace with your AWS region
  const userPoolId = 'ap-south-1_63XY0bgqD';
  
  // Create a new AWS Cognito IdentityServiceProvider instance
  const cognito = new AWS.CognitoIdentityServiceProvider({ region });

  // Function to get the group precedence for a user
  async function getUserGroupPrecedence(username) {
    const userParams = {
      UserPoolId: userPoolId,
      Username: username,
    };
    const userResponse = await cognito.adminGetUser(userParams).promise();

    // Extract the user's group information from the custom attribute
    const userGroupsAttribute = userResponse.UserAttributes.find(
      (attr) => attr.Name === 'custom:userGroupName'
    );

    if (!userGroupsAttribute || !userGroupsAttribute.Value) {
      // If 'custom:userGroupName' attribute does not exist or has no value, return an empty array
      return [];
    }

    const userGroups = userGroupsAttribute.Value.split(',');

    // Query group precedence for each user group
    const groupsWithPrecedence = await Promise.all(
      userGroups.map(async (groupName) => {
        const groupParams = {
          UserPoolId: userPoolId,
          GroupName: groupName.trim(),
        };
        const groupResponse = await cognito.getGroup(groupParams).promise();
        return {
          groupName: groupName.trim(),
          precedence: groupResponse.Group.Precedence,
        };
      })
    );

    // Sort user groups by precedence (highest to lowest)
    const sortedGroups = groupsWithPrecedence.sort((a, b) => b.precedence - a.precedence);

    // Now, you have an ordered list of user groups based on group precedence
    return sortedGroups;
  }



  try {

    // Retrieve the list of groups from the user pool
    const allGroupsParams = {
      UserPoolId: userPoolId,
      Limit: 20 // Adjust the limit as per your requirement
    };
    const allGroupsResponse = await cognito.listGroups(allGroupsParams).promise();
    const allGroups = allGroupsResponse.Groups;
    let allGroupData = '';

    // Get the username from the event (You may need to adjust this based on your event structure)
    const loggedInUsername = event.arguments.username;

    if(loggedInUsername != ""){
      // Retrieve the user's group names and their precedence using the function
      const sortedGroups = await getUserGroupPrecedence(loggedInUsername);

      // Get the group name of the logged-in user's group
      const loggedInUserGroup = sortedGroups[0]; // Assumes the first group has the highest precedence

      if (!loggedInUserGroup) {
        // If the logged-in user is not part of any group, return an empty array
        return {
          statusCode: 200,
          body: JSON.stringify({ lowerPrecedenceGroups: [] }),
        };
      }

      // Filter out groups with higher precedence than the logged-in user's group
      const lowerPrecedenceGroups = allGroups.filter((group) => group.Precedence < loggedInUserGroup.precedence);
      // Sort lower precedence groups in ascending order based on their precedence
       allGroupData = lowerPrecedenceGroups.sort((a, b) => a.Precedence - b.Precedence);
    }else{
      allGroupData = allGroups.sort((a, b) => a.Precedence - b.Precedence);
    }

    const groupList = allGroupData.map(group => ({
      groupName: group.GroupName,
      description: group.Description,
      precedence: group.Precedence
    }));

    return {
      statusCode: 200,
      body: JSON.stringify(groupList)
    };
  } catch (error) {
    console.error('Error retrieving group list:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal Server Error' })
    };
  }
};
