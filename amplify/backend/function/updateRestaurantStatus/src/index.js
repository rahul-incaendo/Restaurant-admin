

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const AWS = require('aws-sdk');
exports.handler = async (event) => {
	var message="";
	const docClient = new AWS.DynamoDB.DocumentClient();
	const {id, status, reject_message} = event.arguments.input;
	if(status == "REJECTED"){
		message = reject_message;
	}else{
		message = "";
	}
	const tableName = process.env.DB_RESTAURANTS_TABLE_NAME;
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
