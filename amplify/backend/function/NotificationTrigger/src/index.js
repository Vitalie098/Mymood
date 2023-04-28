/* Amplify Params - DO NOT EDIT
	API_INSTAGRAM_GRAPHQLAPIENDPOINTOUTPUT
	API_INSTAGRAM_GRAPHQLAPIIDOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const AWS = require('aws-sdk');
const {sendNotification} = require('./firebase');
const docClient = new AWS.DynamoDB.DocumentClient();

const env = process.env.ENV;
const AppsyncID = process.env.API_MYMOOD_GRAPHQLAPIIDOUTPUT;
const UserTableName = `User-${AppsyncID}-${env}`; // TableName-AppsyncID-env
const CommentTableName = `Comment-${AppsyncID}-${env}`; // TableName-AppsyncID-env

const NOTIFICATION_TEXT = {
  NEW_FOLLOWER: 'started following you.',
  NEW_LIKE: 'liked your post.',
  NEW_COMMENT: 'wrote a new comment',
};

const NOTIFICATION_TITLE = {
  NEW_FOLLOWER: 'New follower!',
  NEW_LIKE: 'Your post got a new like!',
  NEW_COMMENT: 'New comment',
};

exports.handler = async event => {
  console.log(`EVENT: ${JSON.stringify(event)}`);

  await Promise.all(event.Records.map(handleRecord));

  return Promise.resolve('Successfully processed DynamoDB record');
};

const handleRecord = async ({eventName, dynamodb}) => {
  console.log(eventName);
  console.log('DynamoDB Record: %j', dynamodb);

  if (eventName !== 'INSERT') {
    return;
  }

  // get the user from DB
  const userId = dynamodb.NewImage.userId.S;
  const type = dynamodb.NewImage.type.S;
  const actorId = dynamodb.NewImage.actorId.S;

  const user = await getUser(userId);
  if (!user?.fcmToken) {
    console.log("Couldn't find user or the user does not have an FCM token");
    console.log(user)
    return;
  }

  // Send the notification using the FCM token
  console.log('Sending a notification to: ', user.fcmToken);
  const notification = await createNotification(type, actorId, dynamodb?.NewImage?.notificationCommentId?.S);
  const data = {};
  if (dynamodb.NewImage.notificationPostId?.S) {
    data.postId = dynamodb.NewImage.notificationPostId?.S;
  }
  await sendNotification(notification, data, user.fcmToken);
};

const getUser = async id => {
  const params = {
    TableName: UserTableName,
    Key: {id},
  };

  try {
    const response = await docClient.get(params).promise();
    return response?.Item;
  } catch (e) {
    console.log(e);
    return null;
  }
};

const getComment = async id => {
  const params = {
    TableName: CommentTableName,
    Key: {id},
  };

  try {
    const response = await docClient.get(params).promise();
    return response?.Item;
  } catch (e) {
    console.log(e);
    return null;
  }
};

const createNotification = async (type, actorId, commentId) => {
  const actor = await getUser(actorId);
  const data = {
    title: NOTIFICATION_TITLE[type],
    body: `${actor.name} ${NOTIFICATION_TEXT[type]}`,
  }

  if(type === "NEW_COMMENT") {
    const comment = await getComment(commentId)
    data.body = `${actor.name} ${NOTIFICATION_TEXT[type]}: "${comment.comment}"`
  }

  return data

  // return {
  //   title: NOTIFICATION_TITLE[type],
  //   body: `${actor.name} ${NOTIFICATION_TEXT[type]}`,
  // };
};
