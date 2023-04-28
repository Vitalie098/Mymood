const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

const env = process.env.ENV;
const AppsyncID = process.env.API_MYMOOD_GRAPHQLAPIIDOUTPUT;
const UserFollowTableName = `UserFollow-${AppsyncID}-${env}`; // TableName-AppsyncID-env
const UserFeedFleetTableName = `UserFeedFleet-${AppsyncID}-${env}`; // TableName-AppsyncID-env

const handle = async record => {
  // handle the post event
  console.log("+++++++++++++++++")
  if (record.eventName !== 'INSERT') {
    return;
  }

  const userId = record.dynamodb.NewImage.userID.S;


  pushFleetToUserFeedFleet(record.dynamodb.NewImage, userId)
  const followers = await getFollowers(userId);

  
  console.log("1111111 111111")
  
console.log("222222222  222222")
console.log(followers)
  await Promise.all(
    followers.map(follower =>
      pushFleetToUserFeedFleet(record.dynamodb.NewImage, follower.followerID),
    ),
  );
};

const pushFleetToUserFeedFleet = async (fleetImage, userID) => {
  const date = new Date();
  const dateStr = date.toISOString();
  const timestamp = date.getTime();

  const Item = {
    id: `${userID}::${fleetImage.id.S}`,

    fleetCreatedAt: fleetImage.createdAt.S,
    fleetID: fleetImage.id.S,
    fleetOwnerID: fleetImage.userID.S,
    userID,

    owner: `${userID}::${userID}`,

    createdAt: dateStr,
    updatedAt: dateStr,
    _lastChangedAt: timestamp,
    _version: 1,
    __typename: 'UserFeedFleet',
  };

  console.log("{}{}{}{}{")
  console.log(Item);

  const params = {
    TableName: UserFeedFleetTableName,
    Item,
  };

  try {
    await docClient.put(params).promise();
  } catch (e) {
    console.log(e);
  }
};

const getFollowers = async userId => {
  const params = {
    TableName: UserFollowTableName,
    IndexName: 'byFollowee',
    KeyConditionExpression: 'followeeID = :followeeID',
    FilterExpression: 'attribute_not_exists(#deleted)',
    ExpressionAttributeValues: {
      ':followeeID': userId,
    },
    ExpressionAttributeNames: {
      '#deleted': '_deleted',
    },
  };

  try {
    const result = await docClient.query(params).promise();
    return result.Items;
  } catch (e) {
    console.log("44444")
    console.log(e);
  }
};

module.exports = handle;
