import {gql} from '@apollo/client';

export const userFeed = gql`
  query UserFeed(
    $userID: ID!
    $postCreatedAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUserFeedPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userFeed(
      userID: $userID
      postCreatedAt: $postCreatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
        postID
        postCreatedAt
        postOwnerID
        Post {
          id
          description
          location
          image
          images
          filter
          video
          nofComments
          nofLikes
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          User {
            id
            name
            username
            image
          }
          Comments(limit: 2) {
            items {
              id
              comment
              User {
                id
                name
                username
              }
            }
            nextToken
            startedAt
          }
          Likes {
            items {
              id
              _deleted
              User {
                id
                username
              }
            }
            nextToken
            startedAt
          }
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

export const userFeedFleet = gql`
  query UserFeedFleet(
    $userID: ID!
    $fleetCreatedAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUserFeedFleetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userFeedFleet(
      userID: $userID
      fleetCreatedAt: $fleetCreatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
        fleetID
        fleetCreatedAt
        fleetOwnerID
        Fleet {
          id
          createdAt
          type
          text {
            textValue
            x
            y
            rotate
          }
          viewers {
            id
            name
            username
            image
          }
          image {
            imageKey
            x
            y
            rotate
          }
          userID
          User {
            id
            name
            username
            image    
          }
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
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

export const userFollowings = gql`
  query UserFollowings(
    $followerID: ID!
    $followeeID: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUserFollowFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userFollowings(
      followerID: $followerID
      followeeID: $followeeID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        followerID
        followeeID
        Followee {
          id
          image
          name
          username
          fleets {
           items {
            createdAt
            id
            viewers {
              id
              image
              name
              username
            }
            image {
              imageKey
              x
              y
            }
            text {
              textValue
              x
              y
            }
            type
          }
        }
        fcmToken
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
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


export const getUser = gql`
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      username
      image
      
      fleets {
        items {
          id
          createdAt
          text {
            textValue
            x
            y
          }
          viewers {
            id
            name
            username
            image
          }
          image {
            imageKey
            x
            y
          }
          type
          userID
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;