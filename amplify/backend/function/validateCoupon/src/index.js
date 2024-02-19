/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	DB_COUPON_TABLE_NAME
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    console.log(event);

    const { coupon_code, total_amount, user_id } = event.arguments.input;

    const params = {
        TableName: process.env.DB_COUPON_TABLE_NAME,
        IndexName: 'couponsByCoupon_code',
        KeyConditionExpression: 'coupon_code = :coupon_code',
        FilterExpression: 'is_active = :is_active',
        ExpressionAttributeValues: {
            ':coupon_code': coupon_code,
            ':is_active': true,
        }
    };

    try {
        const couponData = await dynamoDB.query(params).promise();
            const couponUsages = await couponUsagesCheck(user_id, coupon_code, couponData.Items[0].max_times_used);
            if(couponUsages === true){
                if(couponData.Items[0].minimum_cart_value){
                    if(total_amount >= couponData.Items[0].minimum_cart_value){
                        
                        return {
                            statusCode: 200,
                            message:"success",
                            data:couponData.Items[0]
                        }
                    }else{
                        return {
                            statusCode: 200,
                            message: "Minimum cart value must be grater than or equal to " + couponData.Items[0].minimum_cart_value
                        }; 
                    }
                }else{
                    return {
                            statusCode: 200,
                            message:"success",
                            data:couponData.Items[0]
                        }
                }
            }else{
                return{
                    statusCode: 200,
                    message: "Coupon usage limit exceeded."
                };
            }
            
    } catch (error) {
        console.error('Error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message })
        };
    }
};


async function couponUsagesCheck(user_id, coupon_code, max_times_used){
    const params1 = {
            TableName: "CouponUsage-tafrbwt3cnehnbqyon3koc2fa4-dev",
            IndexName: 'couponUsagesByUser_id',
            KeyConditionExpression: 'user_id = :user_id',
            FilterExpression: 'coupon_code = :coupon_code',
            ExpressionAttributeValues: {
                ':user_id': user_id,
                ':coupon_code': coupon_code,
            }
        };

        const couponUsagesData = await dynamoDB.query(params1).promise();

        if(couponUsagesData.Count > 0 ){
            if(max_times_used > couponUsagesData.Items[0].times_used){
                return true;
            }else{
                return false;
            }
        }else{
            return true;
        }    
}