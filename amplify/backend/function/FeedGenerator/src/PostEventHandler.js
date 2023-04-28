const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

const env = process.env.ENV;
const AppsyncID = process.env.API_MYMOOD_GRAPHQLAPIIDOUTPUT;
const UserFollowTableName = `UserFollow-${AppsyncID}-${env}`; // TableName-AppsyncID-env
const UserFeedPostTableName = `UserFeedPost-${AppsyncID}-${env}`; // TableName-AppsyncID-env
const UserTableName = `User-${AppsyncID}-${env}`; // TableName-AppsyncID-env

const handle = async record => {
  // handle the post event
  console.log("+++++++++++++++++")
  if (record.eventName !== 'INSERT') {
    return;
  }

   await increaseUserPost(record.dynamodb.NewImage.userID.S, 1);

  const userId = record.dynamodb.NewImage.userID.S;

  // get all the followers of the post owner
  const followers = await getFollowers(userId);
  console.log(followers);

  pushPostToUserFeed(record.dynamodb.NewImage, userId)

  // push the new post, to their feeds
  await Promise.all(
    followers.map(follower =>
      pushPostToUserFeed(record.dynamodb.NewImage, follower.followerID),
    ),
  );
};

const pushPostToUserFeed = async (postImage, userID) => {
  const date = new Date();
  const dateStr = date.toISOString();
  const timestamp = date.getTime();

  const Item = {
    id: `${userID}::${postImage.id.S}`,

    postCreatedAt: postImage.createdAt.S,
    postID: postImage.id.S,
    postOwnerID: postImage.userID.S,
    userID,

    owner: `${userID}::${userID}`,

    createdAt: dateStr,
    updatedAt: dateStr,
    _lastChangedAt: timestamp,
    _version: 1,
    __typename: 'UserFeedPost',
  };

  console.log("{}{}{}{}{")
  console.log(Item);

  const params = {
    TableName: UserFeedPostTableName,
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
    console.log(e);
  }
};

module.exports = handle;









// const handleEvent = async ({eventID, eventName, dynamodb}) => {
//   console.log(eventID);
//   console.log(eventName);
//   console.log('DynamoDB Record: %j', dynamodb);

//   const followeeID = dynamodb.NewImage.followeeID.S;
//   const followerID = dynamodb.NewImage.followerID.S;

//   if (eventName === 'INSERT') {
//     await increaseUserField(followeeID, 'nofFollowers', 1);
//     await increaseUserField(followerID, 'nofFollowings', 1);
//     await createFollowNotification(followeeID, followerID);
//   } else if (
//     eventName === 'MODIFY' &&
//     !dynamodb.OldImage._delete?.BOOL &&
//     !!dynamodb.NewImage._deleted?.BOOL
//   ) {
//     await increaseUserField(followeeID, 'nofFollowers', -1);
//     await increaseUserField(followerID, 'nofFollowings', -1);
//   }
// };

const increaseUserPost = async (userId, value) => {
  const params = {
    TableName: UserTableName,
    Key: {id: userId},
    UpdateExpression: 'ADD #field :inc, #version :version_inc',
    ExpressionAttributeValues: {':inc': value, ':version_inc': 1},
    ExpressionAttributeNames: {'#field': 'nofPosts', '#version': '_version'},
  };

  try {
    await docClient.update(params).promise();
  } catch (e) {
    console.log(e);
  }
};