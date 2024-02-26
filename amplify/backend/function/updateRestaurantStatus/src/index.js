

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const AWS = require('aws-sdk');
exports.handler = async (event) => {
	let tableNames = {};
  const environment = process.env.ENVIRONMENT || 'dev';
  switch (environment) {
      case 'dev':
          tableNames = {
              table1: 'Restaurants-tafrbwt3cnehnbqyon3koc2fa4-dev'
          };
          break;
      case 'production':
          tableNames = {
              table1: 'Restaurants-3ftfjowtvjbzlcqpv4z5mbi4wu-production'
          };
          break;
      case 'test':
          tableNames = {
              table1: 'Restaurants-kpekhqp6nzchjey7xzql6dgvbi-test'
          };
          break;
      default:
          tableNames = {
              table1: 'Restaurants-tafrbwt3cnehnbqyon3koc2fa4-dev'
          };
  }
	var message="";
	const docClient = new AWS.DynamoDB.DocumentClient();
	const {id, status, reject_message} = event.arguments.input;
	if(status == "REJECTED"){
		message = reject_message;
	}else{
		message = "";
	}
	const tableName = tableNames.table1;
	const data = await docClient
	  .update({
		TableName: tableName,
		Key: {
		  id: id,
		},
		UpdateExpression: 'set #resto_status = :status, reject_message = :reject_message',
		ExpressionAttributeValues: {
		  ":status": status,
		  ":reject_message": message
		},
        ExpressionAttributeNames: {
			"#resto_status": "status"
		  }
	  })
	  .promise();
      return {
        id:id
      }
	 
	}
