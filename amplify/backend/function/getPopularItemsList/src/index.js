/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

/*const AWS = require('aws-sdk');

const dynamoDB = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    try {
        // Step 1: Calculate Average Rating from table
        const ratingsParams = {
            TableName: 'ItemRating-tafrbwt3cnehnbqyon3koc2fa4-dev',
        };
        const ratingsData = await dynamoDB.scan(ratingsParams).promise();

        const averageRatings = {}; // Create an object to store average ratings

        for (const rating of ratingsData.Items) {
            const itemId = rating.item_id;
            const itemRating = rating.rating;

            if (!averageRatings[itemId]) {
                averageRatings[itemId] = { sum: 0, count: 0 };
            }

            averageRatings[itemId].sum += itemRating;
            averageRatings[itemId].count++;
        }

        // Step 2: Retrieve Item Details from table
        const itemsParams = {
            TableName: 'Item-tafrbwt3cnehnbqyon3koc2fa4-dev',
        };
        const itemsData = await dynamoDB.scan(itemsParams).promise();
        const items = itemsData.Items;

        // Step 3: Combine Data and Filter Only Items with Ratings
        const itemsWithRatings = items
            .filter(item => averageRatings[item.id]) // Filter items with ratings
            .map(item => {
                const itemId = item.id;
                const averageRating = averageRatings[itemId].sum / averageRatings[itemId].count;

                return {
                    ...item,
                    averageRating
                };
            });

        // Step 4: Sort by Average Rating (Descending Order)
        itemsWithRatings.sort((a, b) => b.averageRating - a.averageRating);

        // Step 5: Get Top 10 Items
        const top10Items = itemsWithRatings.slice(0, 2);

        // Step 6: Return Data
        return {
            statusCode: 200,
            body: JSON.stringify(top10Items),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify(error),
        };
    }
};

*/

const AWS = require('aws-sdk');

const dynamoDB = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    try {
        console.log(event);
        // Get top 10 rated items
        const ratingsParams = {
            TableName: 'ItemRating-tafrbwt3cnehnbqyon3koc2fa4-dev',
        };
        const ratingsData = await dynamoDB.scan(ratingsParams).promise();
        
        const averageRatings = {};

        for (const rating of ratingsData.Items) {
            const itemId = rating.item_id;
            const itemRating = rating.rating;

            if (!averageRatings[itemId]) {
                averageRatings[itemId] = { sum: 0, count: 0 };
            }

            averageRatings[itemId].sum += itemRating;
            averageRatings[itemId].count++;
        }

        const top10Items = Object.keys(averageRatings)
            .sort((a, b) => (averageRatings[b].sum / averageRatings[b].count) - (averageRatings[a].sum / averageRatings[a].count))
            .slice(0, event.limit);
        
        const itemsParams = {
            RequestItems: {
                'Product-tafrbwt3cnehnbqyon3koc2fa4-dev': {
                    Keys: top10Items.map(id => ({ id })),
                }
            }
        };
        const itemsData = await dynamoDB.batchGet(itemsParams).promise();
        const items = itemsData.Responses["Product-tafrbwt3cnehnbqyon3koc2fa4-dev"];

        /* for (const item of items) {
            const itemId = item.id;
            const averageRating = averageRatings[itemId].sum / averageRatings[itemId].count;
            item.averageRating = parseFloat(averageRating).toFixed(1);
        } */

        return items;

        /* return {
            statusCode: 200,
            body: JSON.stringify(items)
          }; */
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify(error),
        };
    }
};