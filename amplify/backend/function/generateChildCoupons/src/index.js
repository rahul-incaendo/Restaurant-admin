

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');

exports.handler = async (event) => {
	  let tableNames = {};
          const environment = process.env.ENVIRONMENT || 'dev';
  switch (environment) {
      case 'dev':
          tableNames = {
              table1: 'Coupon-tafrbwt3cnehnbqyon3koc2fa4-dev'
          };
          break;
      case 'production':
          tableNames = {
              table1: 'Coupon-tafrbwt3cnehnbqyon3koc2fa4-dev'
          };
          break;
      case 'test':
          tableNames = {
              table1: 'Coupon-tafrbwt3cnehnbqyon3koc2fa4-dev'
          };
          break;
      default:
          tableNames = {
              table1: 'Coupon-tafrbwt3cnehnbqyon3koc2fa4-dev'
          };
  }

         const docClient = new AWS.DynamoDB.DocumentClient({
          region: process.env.REGION,
        });
	const {base_coupon_id, title, description, coupon_type, coupon_value, valid_till, min_cart_value, is_active, coupon_usage, number_of_coupons, email} = event.arguments.input;
        const getRandomElement = arr => {
            const rand = Math.floor(Math.random() * arr.length);
            return arr[rand];
        } 

        const generateRandomCouponSelection = (length) => {
                const uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
                const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
                const special = ['@','$'] ;
                const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

                const nonSpecial = [...uppercase, ...lowercase, ...numbers];

                let coupon_code = '';
                    for (let i = 0; i < length; i++) {
                       // Previous character is a special character
                        if (i !== 0 && special.includes(coupon_code[i - 1])) {
                            coupon_code += getRandomElement(nonSpecial);
                        } else coupon_code += getRandomElement([...nonSpecial, ...special]);
                    }

                return coupon_code;
               }
        const now = new Date().toISOString();
        const createdAt = now;
        const updatedAt = now;
        const _version = 1;
        const nowInMillis = new Date().getTime();
        const nowAsString = Number(nowInMillis);
        const _lastChangedAt = nowAsString;
	for (let x = 0; x < number_of_coupons; x++) {
              const coupon_code = generateRandomCouponSelection(6);
	      const id = uuidv4();
	      const restaurant_id = 'test123';
              const params = {
                  TableName: tableNames.table1,
                      Item: {
                          id: id,
			  coupon_code,
		          base_coupon_id,
                          title,
                          description,
                          coupon_type,
                          coupon_value,
                          valid_till,
                          min_cart_value,
                          is_active,
                          coupon_usage,
                          number_of_coupons,
                          restaurant_id,
                          createdAt,
                          updatedAt,
                          _lastChangedAt,
                          _version
                      },
            };
     try {
          const data = await docClient.put(params).promise();
	     return { response : 'success' };
    } catch (error) {
      console.error(error);
      throw new Error(error);
   }
}
    
};

