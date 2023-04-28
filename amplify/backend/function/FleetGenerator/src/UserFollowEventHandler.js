const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

const env = process.env.ENV;
const AppsyncID = process.env.API_MYMOOD_GRAPHQLAPIIDOUTPUT;
const UserFollowTableName = `UserFollow-${AppsyncID}-${env}`; // TableName-AppsyncID-env
const UserFeedFleetTableName = `UserFeedFleet-${AppsyncID}-${env}`; // TableName-AppsyncID-env
const FleetTableName = `Fleet-${AppsyncID}-${env}`; // TableName-AppsyncID-env

const BATCH_SIZE = 25;

const handle = async ({eventName, dynamodb}) => {
  // handle user follow event

  const followeeID = dynamodb.NewImage.followeeID.S;
  const followerID = dynamodb.NewImage.followerID.S;

  if (eventName === 'INSERT') {
    // Add all the followeeID's posts to the user (followerID) feed
    await addFolloweesFleetsToUserFeed(followerID, followeeID);
  } else if (
    eventName === 'MODIFY' &&
    !dynamodb.OldImage._delete?.BOOL &&
    !!dynamodb.NewImage._deleted?.BOOL
  ) {
    // Remove all the followeeID's posts from the user (followerID) feed
    await removeUserFeedFleetsByFolloweeId(followerID, followeeID);
  }
};

const removeUserFeedFleetsByFolloweeId = async (followerID, followeeID) => {
  // get all UserFeedPosts on followerID's feed created by the foloweeID

  const userFeedPosts = await getUserFeedFleets(followerID, followeeID);
  console.log(
    `Deleting ${userFeedPosts.length} fleets from the user feed. `,
    userFeedPosts,
  );

  // batch delete them from the database
  for (let i = 0; i < userFeedPosts.length; i += BATCH_SIZE) {
    const chunk = userFeedPosts.slice(i, i + BATCH_SIZE);
    await removeUserFeedFleets(chunk);
  }
};

const getUserFeedFleets = async (followerID, followeeID) => {
  // query DDB
  const params = {
    TableName: UserFeedFleetTableName,
    IndexName: 'byUser',
    KeyConditionExpression: 'userID = :userID',
    FilterExpression:
      'attribute_not_exists(#deleted) AND fleetOwnerID = :fleetOwnerID',
    ExpressionAttributeValues: {
      ':userID': followerID,
      ':fleetOwnerID': followeeID,
    },
    ExpressionAttributeNames: {
      '#deleted': '_deleted',
    },
  };

  console.log(":::::")
  console.log(params)

  try {
    const result = await docClient.query(params).promise();
    return result.Items;
  } catch (e) {
    console.log(e);
    return [];
  }
};

const addFolloweesFleetsToUserFeed = async (followerID, followeeID) => {
  // query all the Followee posts
  const posts = await getAllFleetsByUserId(followeeID);
  console.log(`Adding ${posts.length} posts to User feed`, posts);

  // add all the posts to the UserFeedPost
  for (let i = 0; i < posts.length; i += BATCH_SIZE) {
    const chunk = posts.slice(i, i + BATCH_SIZE);
    await addFleetsToUserFeed(followerID, chunk);
  }
};

const addFleetsToUserFeed = async (userID, posts) => {
  const params = {
    RequestItems: {
      [UserFeedFleetTableName]: posts.map(post =>
        generatePutRequest(post, userID),
      ),
    },
  };

  try {
    await docClient.batchWrite(params).promise();
  } catch (e) {
    console.log(e);
  }
};

const removeUserFeedFleets = async items => {
  const params = {
    RequestItems: {
      [UserFeedFleetTableName]: items.map(generateDeleteRequest),
    },
  };

  try {
    await docClient.batchWrite(params).promise();
  } catch (e) {
    console.log(e);
  }
};

const generatePutRequest = (post, userID) => {
  const date = new Date();
  const dateStr = date.toISOString();
  const timestamp = date.getTime();

  return {
    PutRequest: {
      Item: {
        id: `${userID}::${post.id}`,
        owner: `${userID}::${userID}`,

        fleetCreatedAt: post.createdAt,
        fleetID: post.id,
        fleetOwnerID: post.userID,

        userID: userID,

        _lastChangedAt: timestamp,
        createdAt: dateStr,
        updatedAt: dateStr,

        _version: 1,
        __typename: 'UserFeedFleet',
      },
    },
  };
};

const generateDeleteRequest = userFeedFleet => {
  return {
    DeleteRequest: {
      Key: {
        id: userFeedFleet.id,
      },
    },
  };
};

const getAllFleetsByUserId = async userID => {
  // query DDB
  const params = {
    TableName: FleetTableName,
    IndexName: 'byUser',
    KeyConditionExpression: 'userID = :userID',
    FilterExpression: 'attribute_not_exists(#deleted)',
    ExpressionAttributeValues: {
      ':userID': userID,
    },
    ExpressionAttributeNames: {
      '#deleted': '_deleted',
    },
  };

  try {
    const result = await docClient.query(params).promise();
    return result.Items;
  } catch (e) {
    console.log(e);
    return [];
  }
};

module.exports = handle;
