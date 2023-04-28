// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const NotificationTypes = {
  "NEW_FOLLOWER": "NEW_FOLLOWER",
  "NEW_LIKE": "NEW_LIKE",
  "NEW_COMMENT": "NEW_COMMENT"
};

const { Comment, User, Post, Like, UserFollow, Notification, Fleet, UserFeedFleet, UserFeedPost, Text, ViewersDetails, Image } = initSchema(schema);

export {
  Comment,
  User,
  Post,
  Like,
  UserFollow,
  Notification,
  Fleet,
  UserFeedFleet,
  UserFeedPost,
  NotificationTypes,
  Text,
  ViewersDetails,
  Image
};