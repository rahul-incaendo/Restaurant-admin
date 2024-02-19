const AWS = require('aws-sdk');

exports.handler = async (event, context) => {
  // Configure AWS SDK with your credentials and region
  AWS.config.update({ region: 'ap-south-1' });
  const cognito = new AWS.CognitoIdentityServiceProvider();

  // Function to get the group precedence for a user
    async function getUserGroupPrecedence(username) {
      const userParams = {
        UserPoolId: 'ap-south-1_63XY0bgqD',
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
            UserPoolId: 'ap-south-1_63XY0bgqD',
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
    // Get the username from the event (You may need to adjust this based on your event structure)
    const loggedInUsername = event.arguments.username;

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

    // List all groups from Cognito User Pool
    const allGroupsParams = {
      UserPoolId: 'ap-south-1_63XY0bgqD',
      Limit: 60, // Set this according to the expected number of groups
    };
    const allGroupsResponse = await cognito.listGroups(allGroupsParams).promise();
    const allGroups = allGroupsResponse.Groups;
    // Filter out groups with higher precedence than the logged-in user's group
    const lowerPrecedenceGroups = allGroups.filter((group) => group.Precedence < loggedInUserGroup.precedence);
    // Sort lower precedence groups in ascending order based on their precedence
    const sortedLowerPrecedenceGroups = lowerPrecedenceGroups.sort((a, b) => a.Precedence - b.Precedence);
    // Extract the group names of lower precedence groups
    //const lowerPrecedenceGroupNames = sortedLowerPrecedenceGroups.map((group) => group.GroupName);
    
    const lowerPrecedenceGroupNames = sortedLowerPrecedenceGroups.map(group => ({
      groupName: group.GroupName,
      precedence: group.Precedence
    }));
    // Return the lower precedence group names as a response to the API Gateway
    return {
      statusCode: 200,
      body: JSON.stringify(lowerPrecedenceGroupNames),
    };
  } catch (error) {
    console.error('Error:', error);

    // Return an error response to the API Gateway
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};
