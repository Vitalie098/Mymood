/* Amplify Params - DO NOT EDIT
	API_MYMOOD_GRAPHQLAPIENDPOINTOUTPUT
	API_MYMOOD_GRAPHQLAPIIDOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const fleetEventHandler = require('./FleetEventHandler');
const userFollowEventHandler = require('./UserFollowEventHandler');

exports.handler = async event => {
  console.log(`EVENT: ${JSON.stringify(event)}`);

  for (const record of event.Records) {
    
    await handleRecord(record);
  }

  return Promise.resolve('Successfully processed DynamoDB record');
};

const handleRecord = async record => {
  console.log(record.eventID);
  console.log(record.eventName);
  console.log('DynamoDB Record: %j', record.dynamodb);

  if (record.eventSourceARN.includes('Fleet')) {
    //handle post events
    console.log("111111 555555")
   await fleetEventHandler(record);
  } else if (record.eventSourceARN.includes('UserFollow')) {
    // handle follow event
    await userFollowEventHandler(record);
  } else {
    console.error('Event not handled');
  }
};
