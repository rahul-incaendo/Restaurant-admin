

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();
exports.handler = async (event) => {
    try {
      const optionTypes = await getAllOptionTypes();
      const optionTypesData =  optionTypes;
      const optionsByType = {};
      for (const optionType of optionTypesData) {
        const options = await getAllOptionsByType(optionType.id);
        optionsByType[optionType.id] = options;
      }
      
      const optionCombinations = generateOptionCombinations(optionTypesData, optionsByType);
      return optionCombinations;
    } catch (error) {
      console.error('Error:', error);
      return {
        statusCode: 500,
        body: JSON.stringify('Error creating option combinations'),
      };
    }
  };
  
  
  const getAllOptionTypes = async () => {
    const params = {
        TableName: "OptionType-tafrbwt3cnehnbqyon3koc2fa4-dev",
        ProjectionExpression: 'id, option_type_name',
        /* FilterExpression: 'is_favourite = :isFavorite AND customer_id = :customer_id',
        ExpressionAttributeValues: {
        ':isFavorite': true,
        ':customer_id': user_id
        } */
    };

    try {
        const optionTypes = await dynamoDB.scan(params).promise();
        // Filter option types based on your criteria (e.g., only include size and crust)
    const filteredOptionTypes = optionTypes.Items.filter((optionType) => {
      return optionType.option_type_name === 'Size' || optionType.option_type_name === 'Crust';
      // Add additional conditions as needed for your filtering logic
    });

    return filteredOptionTypes;
    } catch (error) {
        return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Internal Server Error' })
        };
    }
  };
  
  const getAllOptionsByType = async (optionTypeId) => {
    const params = {
        TableName: "Option-tafrbwt3cnehnbqyon3koc2fa4-dev",
        ProjectionExpression: 'id, option_name, option_code, option_type_id',
        IndexName: 'byOptionType',
        KeyConditionExpression: 'option_type_id = :option_type_id',
        ExpressionAttributeValues: {
            ':option_type_id': optionTypeId,
        }
    };

    try {
        const options = await dynamoDB.query(params).promise();
        return options.Items;
    } catch (error) {
        return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Internal Server Error' })
        };
    }
  };
  
  const generateOptionCombinations = (optionTypes, optionsByType) => {
    const combinations = [];
    const generateCombinationsRecursively = (currentCombination, currentIndex) => {
      if (currentIndex === optionTypes.length) {
        combinations.push([...currentCombination]);
        return;
      }
  
      const currentOptionType = optionTypes[currentIndex];
    
      const optionsForType = optionsByType[currentOptionType.id] || [];
  
        optionsForType.forEach((option) => {
          currentCombination.push(option);
          generateCombinationsRecursively(currentCombination, currentIndex + 1);
          currentCombination.pop();
        });
    };
  
    generateCombinationsRecursively([], 0);
    return combinations;
  };