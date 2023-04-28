import {gql} from '@apollo/client';

// export const userFollowings = gql`
//   query UserFollowings(
//     $followerID: ID!
//     $followeeID: ModelIDKeyConditionInput
//     $sortDirection: ModelSortDirection
//     $filter: ModelUserFollowFilterInput
//     $limit: Int
//     $nextToken: String
//   ) {
//     userFollowings(
//       followerID: $followerID
//       followeeID: $followeeID
//       sortDirection: $sortDirection
//       filter: $filter
//       limit: $limit
//       nextToken: $nextToken
//     ) {
//       items {
//         id
//         followerID
//         followeeID
//         Followee {
//           id
//           name
//           username
//           bio
//           website
//           nofPosts
//           nofFollowers
//           nofFollowings
//           image
//           createdAt
//           updatedAt
//           _version
//           _deleted
//           _lastChangedAt
//           owner
//         }
//         createdAt
//         updatedAt
//         _version
//         _deleted
//         _lastChangedAt
//         owner
//       }
//       nextToken
//       startedAt
//     }
//   }
// `;

export const userNotifications = gql`
  query UserNotifications(
    $userId: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelNotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userNotifications(
      userId: $userId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        readAt
      }
      nextToken
      startedAt
    }
  }
`;

export const onCreateNotification = gql`
  subscription OnCreateNotification(
    $filter: ModelSubscriptionNotificationFilterInput
  ) {
    onCreateNotification(filter: $filter) {
      id
      createdAt
      type
      userId
      actorId
      readAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      notificationPostId
    }
  }
`;



export const userFollowers = gql`
  query UserFollowers(
    $followeeID: ID!
    $followerID: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUserFollowFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userFollowers(
      followeeID: $followeeID
      followerID: $followerID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        followerID
        followeeID
        Follower {
          id
          name
          username
        }
        Followee {
          id
          name
          username
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;