
/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');
let tableNames = {};
exports.handler = async (event) => {
    const docClient = new AWS.DynamoDB.DocumentClient({
        region: process.env.REGION,
    });


    // Determine the environment
    const environment = process.env.ENVIRONMENT || 'dev';

    // Set table names based on environment
    switch (environment) {
        case 'dev':
            tableNames = {
                table1: 'Restaurants-tafrbwt3cnehnbqyon3koc2fa4-dev',
                table2: 'Tax-tafrbwt3cnehnbqyon3koc2fa4-dev',
                table3: 'Order-tafrbwt3cnehnbqyon3koc2fa4-dev',
                table4: 'Product-tafrbwt3cnehnbqyon3koc2fa4-dev',
                table5: 'OrderItem-tafrbwt3cnehnbqyon3koc2fa4-dev'
            };
            break;
        case 'production':
            tableNames = {
                table1: 'Restaurants-3ftfjowtvjbzlcqpv4z5mbi4wu-production',
                table2: 'Tax-3ftfjowtvjbzlcqpv4z5mbi4wu-production',
                table3: 'Order-3ftfjowtvjbzlcqpv4z5mbi4wu-production',
                table4: 'Product-3ftfjowtvjbzlcqpv4z5mbi4wu-production',
                table5: 'OrderItem-3ftfjowtvjbzlcqpv4z5mbi4wu-production'
            };
            break;
        case 'test':
            tableNames = {
                table1: 'Restaurants-kpekhqp6nzchjey7xzql6dgvbi-test',
                table2: 'Tax-kpekhqp6nzchjey7xzql6dgvbi-test',
                table3: 'Order-kpekhqp6nzchjey7xzql6dgvbi-test',
                table4: 'Product-kpekhqp6nzchjey7xzql6dgvbi-test',
                table5: 'OrderItem-kpekhqp6nzchjey7xzql6dgvbi-test'
            };
            break;
        default:
            tableNames = {
                table1: 'Restaurants-tafrbwt3cnehnbqyon3koc2fa4-dev',
                table2: 'Tax-tafrbwt3cnehnbqyon3koc2fa4-dev',
                table3: 'Order-tafrbwt3cnehnbqyon3koc2fa4-dev',
                table4: 'Product-tafrbwt3cnehnbqyon3koc2fa4-dev',
                table5: 'OrderItem-tafrbwt3cnehnbqyon3koc2fa4-dev'
            };
    }

    // Current timestamp for createdAt and updatedAt fields
    const now = new Date().toISOString();
    const createdAt = now;
    const updatedAt = now;
    const _version = 1;
    const nowInMillis = new Date().getTime();
    const nowAsString = Number(nowInMillis);
    const _lastChangedAt = nowAsString;

    const {
        customer_id,
        delivery_address,
        //delivery_fee,
        //delivery_time,
        //discount_amount,
        payment_method,
        restaurant_id, 
        service_method_id, 
        special_instructions,
        customer_name,
        customer_mobile_no, 
        //total_amount,
        //tax_amount,
        //status,
        orderItems,
        applied_coupon_code,
        //is_favourite
    } = event.arguments.input;

    const param = {
        TableName: tableNames.table1,
        Key: {
          id: restaurant_id
        },
        ProjectionExpression: 'tax_id'
      };
    const resData = await docClient.get(param).promise();

    const taxParam = {
        TableName: tableNames.table2,
        Key: {
          id: resData.Item.tax_id
        },
        ProjectionExpression: '#value',
        ExpressionAttributeNames: { "#value": "value" }
      };
    const taxResData = await docClient.get(taxParam).promise();
    const total_amount = await calculateTotal(orderItems, docClient); 
    console.log("total_amount_outside " + total_amount);
    const tax_data = calculateTax(total_amount, taxResData.Item.value);

    const orderId = generateOrderId(); 
    const id = uuidv4();
    const order = {
        id: id,
        order_id: orderId,
        customer_name: customer_name,
        customer_mobile_no: customer_mobile_no,
        customer_id: customer_id,
        restaurant_id: restaurant_id,
        order_date: new Date().toISOString(),
        total_amount: total_amount,
        total_amount_with_tax: tax_data.total_amount_with_tax,
        status: 'PENDING',
        order_type: 'ONLINE',
        delivery_address: delivery_address,
        //is_favourite: is_favourite,
        payment_method: payment_method,
        //delivery_time: delivery_time,
        special_instructions: special_instructions,
        //delivery_fee: delivery_fee,
        tax_amount: tax_data,
        //discount_amount: discount_amount,
        service_method_id: service_method_id,
        applied_coupon_code: applied_coupon_code,
        createdAt, 
        updatedAt, 
        _lastChangedAt, 
        _version,
        __typename:"Order"
    };

    const params = {
        TableName: tableNames.table3,
        Item: order
    };

    try {
        await docClient.put(params).promise();
            // Store order items in OrderItem table
            const orderItemPromises = orderItems.map(async (item) => {
                const orderItemId = uuidv4();
                const params = {
                    TableName: tableNames.table4,
                    Key: {
                      id: item.id
                    },
                    ProjectionExpression: 'id, price,#name',
                    ExpressionAttributeNames: { "#name": "name" }
                  };
                let orderItem = '';
                const data = await docClient.get(params).promise();
//console.log(data.Item);
                  let total_price = data.Item.price*item.quantity;
                if (data.Item) {
                    orderItem = {
                        id: orderItemId, // Implement your own logic to generate an order item ID
                        order_id: orderId,
                        quantity: item.quantity,
                        price: data.Item.price,
                        name: data.Item.name,
                        total_price: total_price,
                        createdAt, 
                        updatedAt, 
                        _lastChangedAt, 
                        _version,
                        __typename:"OrderItem"

                    };

                }
                const orderItemParams = {
                    TableName: tableNames.table5,
                    Item: orderItem
                };

            await docClient.put(orderItemParams).promise();
        });

        await Promise.all(orderItemPromises);
        return order;

    } 
    catch (error) {
        console.error('Error placing order:', error);
        throw new Error('Error placing order');
    }
};

function generateOrderId() {
    const timestamp = Date.now().toString();
    const uniqueId = Math.floor(Math.random() * 10000).toString();
    return `${timestamp}-${uniqueId}`;
}

function generateOrderItemId() {
  // Implement your own logic to generate a unique order item ID
  return 'ORDER_ITEM123';
}

async function calculateTotal(orderItems, docClient) {
    let final_total_amount = 0; // Declare final_total_amount outside of map function

    const orderItemPromises = orderItems.map(async (item) => {
        const params = {
            TableName: tableNames.table4,
            Key: {
                id: item.id
            },
            ProjectionExpression: 'price',
        };
        const result = await docClient.get(params).promise();
        console.log("price: " + result.Item.price, "quantity: " + item.quantity);
        final_total_amount += result.Item.price * item.quantity; // Accumulate the total
    });

    await Promise.all(orderItemPromises); // Wait for all promises to resolve

    console.log("total calculated: " + final_total_amount);
    return final_total_amount;
}

function calculateTax(total_amount, tax_rate){
    const total_tax = (tax_rate/100)*total_amount;
    const total_amount_with_tax = total_amount + total_tax;
    const sgst = (total_tax)*.5;
    const cgst = (total_tax)*.5;
    const igst = 0;
    const tax_data = {
        total_amount_with_tax: total_amount_with_tax,
        sgst: sgst,
        cgst: cgst,
        igst: igst 
    }

    return tax_data;
}

function calDeliveryTime(){
    const deliverytime = ""; 
    return deliverytime;
}