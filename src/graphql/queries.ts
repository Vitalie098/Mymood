/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLike = /* GraphQL */ `
  query GetLike($id: ID!) {
    getLike(id: $id) {
      id
      userID
      postID
      User {
        id
        name
        email
        username
        bio
        website
        nofPosts
        nofFollowers
        nofFollowings
        image
        Posts {
          items {
            id
            createdAt
            type
            description
            location
            image
            images
            video
            filter
            nofComments
            nofLikes
            userID
            User {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Likes {
              nextToken
              startedAt
            }
            Comments {
              nextToken
              startedAt
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
        Comments {
          items {
            id
            createdAt
            comment
            userID
            postID
            User {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Post {
              id
              createdAt
              type
              description
              location
              image
              images
              video
              filter
              nofComments
              nofLikes
              userID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
        Likes {
          items {
            id
            userID
            postID
            User {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Post {
              id
              createdAt
              type
              description
              location
              image
              images
              video
              filter
              nofComments
              nofLikes
              userID
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
        Followers {
          items {
            id
            followerID
            followeeID
            Follower {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Followee {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
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
        Followings {
          items {
            id
            followerID
            followeeID
            Follower {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Followee {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
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
        fcmToken
        Notifications {
          items {
            id
            createdAt
            readAt
            type
            userId
            User {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            actorId
            Actor {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Post {
              id
              createdAt
              type
              description
              location
              image
              images
              video
              filter
              nofComments
              nofLikes
              userID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Comment {
              id
              createdAt
              comment
              userID
              postID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
            notificationPostId
            notificationCommentId
          }
          nextToken
          startedAt
        }
        fleets {
          items {
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
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
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
      Post {
        id
        createdAt
        type
        description
        location
        image
        images
        video
        filter
        nofComments
        nofLikes
        userID
        User {
          id
          name
          email
          username
          bio
          website
          nofPosts
          nofFollowers
          nofFollowings
          image
          Posts {
            items {
              id
              createdAt
              type
              description
              location
              image
              images
              video
              filter
              nofComments
              nofLikes
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
          Comments {
            items {
              id
              createdAt
              comment
              userID
              postID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            nextToken
            startedAt
          }
          Likes {
            items {
              id
              userID
              postID
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
          Followers {
            items {
              id
              followerID
              followeeID
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
          Followings {
            items {
              id
              followerID
              followeeID
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
          fcmToken
          Notifications {
            items {
              id
              createdAt
              readAt
              type
              userId
              actorId
              updatedAt
              _version
              _deleted
              _lastChangedAt
              notificationPostId
              notificationCommentId
            }
            nextToken
            startedAt
          }
          fleets {
            items {
              id
              createdAt
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
        Likes {
          items {
            id
            userID
            postID
            User {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Post {
              id
              createdAt
              type
              description
              location
              image
              images
              video
              filter
              nofComments
              nofLikes
              userID
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
        Comments {
          items {
            id
            createdAt
            comment
            userID
            postID
            User {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Post {
              id
              createdAt
              type
              description
              location
              image
              images
              video
              filter
              nofComments
              nofLikes
              userID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
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
  }
`;
export const listLikes = /* GraphQL */ `
  query ListLikes(
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        postID
        User {
          id
          name
          email
          username
          bio
          website
          nofPosts
          nofFollowers
          nofFollowings
          image
          Posts {
            items {
              id
              createdAt
              type
              description
              location
              image
              images
              video
              filter
              nofComments
              nofLikes
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
          Comments {
            items {
              id
              createdAt
              comment
              userID
              postID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            nextToken
            startedAt
          }
          Likes {
            items {
              id
              userID
              postID
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
          Followers {
            items {
              id
              followerID
              followeeID
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
          Followings {
            items {
              id
              followerID
              followeeID
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
          fcmToken
          Notifications {
            items {
              id
              createdAt
              readAt
              type
              userId
              actorId
              updatedAt
              _version
              _deleted
              _lastChangedAt
              notificationPostId
              notificationCommentId
            }
            nextToken
            startedAt
          }
          fleets {
            items {
              id
              createdAt
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
        Post {
          id
          createdAt
          type
          description
          location
          image
          images
          video
          filter
          nofComments
          nofLikes
          userID
          User {
            id
            name
            email
            username
            bio
            website
            nofPosts
            nofFollowers
            nofFollowings
            image
            Posts {
              nextToken
              startedAt
            }
            Comments {
              nextToken
              startedAt
            }
            Likes {
              nextToken
              startedAt
            }
            Followers {
              nextToken
              startedAt
            }
            Followings {
              nextToken
              startedAt
            }
            fcmToken
            Notifications {
              nextToken
              startedAt
            }
            fleets {
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
          Likes {
            items {
              id
              userID
              postID
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
          Comments {
            items {
              id
              createdAt
              comment
              userID
              postID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            nextToken
            startedAt
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
export const syncLikes = /* GraphQL */ `
  query SyncLikes(
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLikes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        userID
        postID
        User {
          id
          name
          email
          username
          bio
          website
          nofPosts
          nofFollowers
          nofFollowings
          image
          Posts {
            items {
              id
              createdAt
              type
              description
              location
              image
              images
              video
              filter
              nofComments
              nofLikes
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
          Comments {
            items {
              id
              createdAt
              comment
              userID
              postID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            nextToken
            startedAt
          }
          Likes {
            items {
              id
              userID
              postID
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
          Followers {
            items {
              id
              followerID
              followeeID
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
          Followings {
            items {
              id
              followerID
              followeeID
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
          fcmToken
          Notifications {
            items {
              id
              createdAt
              readAt
              type
              userId
              actorId
              updatedAt
              _version
              _deleted
              _lastChangedAt
              notificationPostId
              notificationCommentId
            }
            nextToken
            startedAt
          }
          fleets {
            items {
              id
              createdAt
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
        Post {
          id
          createdAt
          type
          description
          location
          image
          images
          video
          filter
          nofComments
          nofLikes
          userID
          User {
            id
            name
            email
            username
            bio
            website
            nofPosts
            nofFollowers
            nofFollowings
            image
            Posts {
              nextToken
              startedAt
            }
            Comments {
              nextToken
              startedAt
            }
            Likes {
              nextToken
              startedAt
            }
            Followers {
              nextToken
              startedAt
            }
            Followings {
              nextToken
              startedAt
            }
            fcmToken
            Notifications {
              nextToken
              startedAt
            }
            fleets {
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
          Likes {
            items {
              id
              userID
              postID
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
          Comments {
            items {
              id
              createdAt
              comment
              userID
              postID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            nextToken
            startedAt
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
export const likesByUserID = /* GraphQL */ `
  query LikesByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    likesByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
        postID
        User {
          id
          name
          email
          username
          bio
          website
          nofPosts
          nofFollowers
          nofFollowings
          image
          Posts {
            items {
              id
              createdAt
              type
              description
              location
              image
              images
              video
              filter
              nofComments
              nofLikes
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
          Comments {
            items {
              id
              createdAt
              comment
              userID
              postID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            nextToken
            startedAt
          }
          Likes {
            items {
              id
              userID
              postID
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
          Followers {
            items {
              id
              followerID
              followeeID
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
          Followings {
            items {
              id
              followerID
              followeeID
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
          fcmToken
          Notifications {
            items {
              id
              createdAt
              readAt
              type
              userId
              actorId
              updatedAt
              _version
              _deleted
              _lastChangedAt
              notificationPostId
              notificationCommentId
            }
            nextToken
            startedAt
          }
          fleets {
            items {
              id
              createdAt
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
        Post {
          id
          createdAt
          type
          description
          location
          image
          images
          video
          filter
          nofComments
          nofLikes
          userID
          User {
            id
            name
            email
            username
            bio
            website
            nofPosts
            nofFollowers
            nofFollowings
            image
            Posts {
              nextToken
              startedAt
            }
            Comments {
              nextToken
              startedAt
            }
            Likes {
              nextToken
              startedAt
            }
            Followers {
              nextToken
              startedAt
            }
            Followings {
              nextToken
              startedAt
            }
            fcmToken
            Notifications {
              nextToken
              startedAt
            }
            fleets {
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
          Likes {
            items {
              id
              userID
              postID
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
          Comments {
            items {
              id
              createdAt
              comment
              userID
              postID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            nextToken
            startedAt
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
export const likesForPostByUser = /* GraphQL */ `
  query LikesForPostByUser(
    $postID: ID!
    $userID: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    likesForPostByUser(
      postID: $postID
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
        postID
        User {
          id
          name
          email
          username
          bio
          website
          nofPosts
          nofFollowers
          nofFollowings
          image
          Posts {
            items {
              id
              createdAt
              type
              description
              location
              image
              images
              video
              filter
              nofComments
              nofLikes
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
          Comments {
            items {
              id
              createdAt
              comment
              userID
              postID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            nextToken
            startedAt
          }
          Likes {
            items {
              id
              userID
              postID
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
          Followers {
            items {
              id
              followerID
              followeeID
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
          Followings {
            items {
              id
              followerID
              followeeID
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
          fcmToken
          Notifications {
            items {
              id
              createdAt
              readAt
              type
              userId
              actorId
              updatedAt
              _version
              _deleted
              _lastChangedAt
              notificationPostId
              notificationCommentId
            }
            nextToken
            startedAt
          }
          fleets {
            items {
              id
              createdAt
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
        Post {
          id
          createdAt
          type
          description
          location
          image
          images
          video
          filter
          nofComments
          nofLikes
          userID
          User {
            id
            name
            email
            username
            bio
            website
            nofPosts
            nofFollowers
            nofFollowings
            image
            Posts {
              nextToken
              startedAt
            }
            Comments {
              nextToken
              startedAt
            }
            Likes {
              nextToken
              startedAt
            }
            Followers {
              nextToken
              startedAt
            }
            Followings {
              nextToken
              startedAt
            }
            fcmToken
            Notifications {
              nextToken
              startedAt
            }
            fleets {
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
          Likes {
            items {
              id
              userID
              postID
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
          Comments {
            items {
              id
              createdAt
              comment
              userID
              postID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            nextToken
            startedAt
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
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      createdAt
      comment
      userID
      postID
      User {
        id
        name
        email
        username
        bio
        website
        nofPosts
        nofFollowers
        nofFollowings
        image
        Posts {
          items {
            id
            createdAt
            type
            description
            location
            image
            images
            video
            filter
            nofComments
            nofLikes
            userID
            User {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Likes {
              nextToken
              startedAt
            }
            Comments {
              nextToken
              startedAt
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
        Comments {
          items {
            id
            createdAt
            comment
            userID
            postID
            User {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Post {
              id
              createdAt
              type
              description
              location
              image
              images
              video
              filter
              nofComments
              nofLikes
              userID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
        Likes {
          items {
            id
            userID
            postID
            User {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Post {
              id
              createdAt
              type
              description
              location
              image
              images
              video
              filter
              nofComments
              nofLikes
              userID
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
        Followers {
          items {
            id
            followerID
            followeeID
            Follower {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Followee {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
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
        Followings {
          items {
            id
            followerID
            followeeID
            Follower {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Followee {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
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
        fcmToken
        Notifications {
          items {
            id
            createdAt
            readAt
            type
            userId
            User {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            actorId
            Actor {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Post {
              id
              createdAt
              type
              description
              location
              image
              images
              video
              filter
              nofComments
              nofLikes
              userID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Comment {
              id
              createdAt
              comment
              userID
              postID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
            notificationPostId
            notificationCommentId
          }
          nextToken
          startedAt
        }
        fleets {
          items {
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
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
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
      Post {
        id
        createdAt
        type
        description
        location
        image
        images
        video
        filter
        nofComments
        nofLikes
        userID
        User {
          id
          name
          email
          username
          bio
          website
          nofPosts
          nofFollowers
          nofFollowings
          image
          Posts {
            items {
              id
              createdAt
              type
              description
              location
              image
              images
              video
              filter
              nofComments
              nofLikes
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
          Comments {
            items {
              id
              createdAt
              comment
              userID
              postID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            nextToken
            startedAt
          }
          Likes {
            items {
              id
              userID
              postID
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
          Followers {
            items {
              id
              followerID
              followeeID
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
          Followings {
            items {
              id
              followerID
              followeeID
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
          fcmToken
          Notifications {
            items {
              id
              createdAt
              readAt
              type
              userId
              actorId
              updatedAt
              _version
              _deleted
              _lastChangedAt
              notificationPostId
              notificationCommentId
            }
            nextToken
            startedAt
          }
          fleets {
            items {
              id
              createdAt
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
        Likes {
          items {
            id
            userID
            postID
            User {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Post {
              id
              createdAt
              type
              description
              location
              image
              images
              video
              filter
              nofComments
              nofLikes
              userID
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
        Comments {
          items {
            id
            createdAt
            comment
            userID
            postID
            User {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Post {
              id
              createdAt
              type
              description
              location
              image
              images
              video
              filter
              nofComments
              nofLikes
              userID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        comment
        userID
        postID
        User {
          id
          name
          email
          username
          bio
          website
          nofPosts
          nofFollowers
          nofFollowings
          image
          Posts {
            items {
              id
              createdAt
              type
              description
              location
              image
              images
              video
              filter
              nofComments
              nofLikes
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
          Comments {
            items {
              id
              createdAt
              comment
              userID
              postID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            nextToken
            startedAt
          }
          Likes {
            items {
              id
              userID
              postID
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
          Followers {
            items {
              id
              followerID
              followeeID
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
          Followings {
            items {
              id
              followerID
              followeeID
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
          fcmToken
          Notifications {
            items {
              id
              createdAt
              readAt
              type
              userId
              actorId
              updatedAt
              _version
              _deleted
              _lastChangedAt
              notificationPostId
              notificationCommentId
            }
            nextToken
            startedAt
          }
          fleets {
            items {
              id
              createdAt
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
        Post {
          id
          createdAt
          type
          description
          location
          image
          images
          video
          filter
          nofComments
          nofLikes
          userID
          User {
            id
            name
            email
            username
            bio
            website
            nofPosts
            nofFollowers
            nofFollowings
            image
            Posts {
              nextToken
              startedAt
            }
            Comments {
              nextToken
              startedAt
            }
            Likes {
              nextToken
              startedAt
            }
            Followers {
              nextToken
              startedAt
            }
            Followings {
              nextToken
              startedAt
            }
            fcmToken
            Notifications {
              nextToken
              startedAt
            }
            fleets {
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
          Likes {
            items {
              id
              userID
              postID
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
          Comments {
            items {
              id
              createdAt
              comment
              userID
              postID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            nextToken
            startedAt
          }
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
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
export const syncComments = /* GraphQL */ `
  query SyncComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncComments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        createdAt
        comment
        userID
        postID
        User {
          id
          name
          email
          username
          bio
          website
          nofPosts
          nofFollowers
          nofFollowings
          image
          Posts {
            items {
              id
              createdAt
              type
              description
              location
              image
              images
              video
              filter
              nofComments
              nofLikes
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
          Comments {
            items {
              id
              createdAt
              comment
              userID
              postID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            nextToken
            startedAt
          }
          Likes {
            items {
              id
              userID
              postID
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
          Followers {
            items {
              id
              followerID
              followeeID
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
          Followings {
            items {
              id
              followerID
              followeeID
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
          fcmToken
          Notifications {
            items {
              id
              createdAt
              readAt
              type
              userId
              actorId
              updatedAt
              _version
              _deleted
              _lastChangedAt
              notificationPostId
              notificationCommentId
            }
            nextToken
            startedAt
          }
          fleets {
            items {
              id
              createdAt
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
        Post {
          id
          createdAt
          type
          description
          location
          image
          images
          video
          filter
          nofComments
          nofLikes
          userID
          User {
            id
            name
            email
            username
            bio
            website
            nofPosts
            nofFollowers
            nofFollowings
            image
            Posts {
              nextToken
              startedAt
            }
            Comments {
              nextToken
              startedAt
            }
            Likes {
              nextToken
              startedAt
            }
            Followers {
              nextToken
              startedAt
            }
            Followings {
              nextToken
              startedAt
            }
            fcmToken
            Notifications {
              nextToken
              startedAt
            }
            fleets {
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
          Likes {
            items {
              id
              userID
              postID
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
          Comments {
            items {
              id
              createdAt
              comment
              userID
              postID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            nextToken
            startedAt
          }
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
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
export const commentsByUserID = /* GraphQL */ `
  query CommentsByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    commentsByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        createdAt
        comment
        userID
        postID
        User {
          id
          name
          email
          username
          bio
          website
          nofPosts
          nofFollowers
          nofFollowings
          image
          Posts {
            items {
              id
              createdAt
              type
              description
              location
              image
              images
              video
              filter
              nofComments
              nofLikes
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
          Comments {
            items {
              id
              createdAt
              comment
              userID
              postID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            nextToken
            startedAt
          }
          Likes {
            items {
              id
              userID
              postID
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
          Followers {
            items {
              id
              followerID
              followeeID
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
          Followings {
            items {
              id
              followerID
              followeeID
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
          fcmToken
          Notifications {
            items {
              id
              createdAt
              readAt
              type
              userId
              actorId
              updatedAt
              _version
              _deleted
              _lastChangedAt
              notificationPostId
              notificationCommentId
            }
            nextToken
            startedAt
          }
          fleets {
            items {
              id
              createdAt
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
        Post {
          id
          createdAt
          type
          description
          location
          image
          images
          video
          filter
          nofComments
          nofLikes
          userID
          User {
            id
            name
            email
            username
            bio
            website
            nofPosts
            nofFollowers
            nofFollowings
            image
            Posts {
              nextToken
              startedAt
            }
            Comments {
              nextToken
              startedAt
            }
            Likes {
              nextToken
              startedAt
            }
            Followers {
              nextToken
              startedAt
            }
            Followings {
              nextToken
              startedAt
            }
            fcmToken
            Notifications {
              nextToken
              startedAt
            }
            fleets {
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
          Likes {
            items {
              id
              userID
              postID
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
          Comments {
            items {
              id
              createdAt
              comment
              userID
              postID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            nextToken
            startedAt
          }
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
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
export const commentsByPost = /* GraphQL */ `
  query CommentsByPost(
    $postID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    commentsByPost(
      postID: $postID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        createdAt
        comment
        userID
        postID
        User {
          id
          name
          email
          username
          bio
          website
          nofPosts
          nofFollowers
          nofFollowings
          image
          Posts {
            items {
              id
              createdAt
              type
              description
              location
              image
              images
              video
              filter
              nofComments
              nofLikes
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
          Comments {
            items {
              id
              createdAt
              comment
              userID
              postID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            nextToken
            startedAt
          }
          Likes {
            items {
              id
              userID
              postID
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
          Followers {
            items {
              id
              followerID
              followeeID
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
          Followings {
            items {
              id
              followerID
              followeeID
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
          fcmToken
          Notifications {
            items {
              id
              createdAt
              readAt
              type
              userId
              actorId
              updatedAt
              _version
              _deleted
              _lastChangedAt
              notificationPostId
              notificationCommentId
            }
            nextToken
            startedAt
          }
          fleets {
            items {
              id
              createdAt
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
        Post {
          id
          createdAt
          type
          description
          location
          image
          images
          video
          filter
          nofComments
          nofLikes
          userID
          User {
            id
            name
            email
            username
            bio
            website
            nofPosts
            nofFollowers
            nofFollowings
            image
            Posts {
              nextToken
              startedAt
            }
            Comments {
              nextToken
              startedAt
            }
            Likes {
              nextToken
              startedAt
            }
            Followers {
              nextToken
              startedAt
            }
            Followings {
              nextToken
              startedAt
            }
            fcmToken
            Notifications {
              nextToken
              startedAt
            }
            fleets {
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
          Likes {
            items {
              id
              userID
              postID
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
          Comments {
            items {
              id
              createdAt
              comment
              userID
              postID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            nextToken
            startedAt
          }
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
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
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      createdAt
      type
      description
      location
      image
      images
      video
      filter
      nofComments
      nofLikes
      userID
      User {
        id
        name
        email
        username
        bio
        website
        nofPosts
        nofFollowers
        nofFollowings
        image
        Posts {
          items {
            id
            createdAt
            type
            description
            location
            image
            images
            video
            filter
            nofComments
            nofLikes
            userID
            User {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Likes {
              nextToken
              startedAt
            }
            Comments {
              nextToken
              startedAt
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
        Comments {
          items {
            id
            createdAt
            comment
            userID
            postID
            User {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Post {
              id
              createdAt
              type
              description
              location
              image
              images
              video
              filter
              nofComments
              nofLikes
              userID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
        Likes {
          items {
            id
            userID
            postID
            User {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Post {
              id
              createdAt
              type
              description
              location
              image
              images
              video
              filter
              nofComments
              nofLikes
              userID
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
        Followers {
          items {
            id
            followerID
            followeeID
            Follower {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Followee {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
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
        Followings {
          items {
            id
            followerID
            followeeID
            Follower {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Followee {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
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
        fcmToken
        Notifications {
          items {
            id
            createdAt
            readAt
            type
            userId
            User {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            actorId
            Actor {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Post {
              id
              createdAt
              type
              description
              location
              image
              images
              video
              filter
              nofComments
              nofLikes
              userID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Comment {
              id
              createdAt
              comment
              userID
              postID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
            notificationPostId
            notificationCommentId
          }
          nextToken
          startedAt
        }
        fleets {
          items {
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
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
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
      Likes {
        items {
          id
          userID
          postID
          User {
            id
            name
            email
            username
            bio
            website
            nofPosts
            nofFollowers
            nofFollowings
            image
            Posts {
              nextToken
              startedAt
            }
            Comments {
              nextToken
              startedAt
            }
            Likes {
              nextToken
              startedAt
            }
            Followers {
              nextToken
              startedAt
            }
            Followings {
              nextToken
              startedAt
            }
            fcmToken
            Notifications {
              nextToken
              startedAt
            }
            fleets {
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
          Post {
            id
            createdAt
            type
            description
            location
            image
            images
            video
            filter
            nofComments
            nofLikes
            userID
            User {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Likes {
              nextToken
              startedAt
            }
            Comments {
              nextToken
              startedAt
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
      Comments {
        items {
          id
          createdAt
          comment
          userID
          postID
          User {
            id
            name
            email
            username
            bio
            website
            nofPosts
            nofFollowers
            nofFollowings
            image
            Posts {
              nextToken
              startedAt
            }
            Comments {
              nextToken
              startedAt
            }
            Likes {
              nextToken
              startedAt
            }
            Followers {
              nextToken
              startedAt
            }
            Followings {
              nextToken
              startedAt
            }
            fcmToken
            Notifications {
              nextToken
              startedAt
            }
            fleets {
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
          Post {
            id
            createdAt
            type
            description
            location
            image
            images
            video
            filter
            nofComments
            nofLikes
            userID
            User {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Likes {
              nextToken
              startedAt
            }
            Comments {
              nextToken
              startedAt
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        type
        description
        location
        image
        images
        video
        filter
        nofComments
        nofLikes
        userID
        User {
          id
          name
          email
          username
          bio
          website
          nofPosts
          nofFollowers
          nofFollowings
          image
          Posts {
            items {
              id
              createdAt
              type
              description
              location
              image
              images
              video
              filter
              nofComments
              nofLikes
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
          Comments {
            items {
              id
              createdAt
              comment
              userID
              postID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            nextToken
            startedAt
          }
          Likes {
            items {
              id
              userID
              postID
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
          Followers {
            items {
              id
              followerID
              followeeID
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
          Followings {
            items {
              id
              followerID
              followeeID
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
          fcmToken
          Notifications {
            items {
              id
              createdAt
              readAt
              type
              userId
              actorId
              updatedAt
              _version
              _deleted
              _lastChangedAt
              notificationPostId
              notificationCommentId
            }
            nextToken
            startedAt
          }
          fleets {
            items {
              id
              createdAt
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
        Likes {
          items {
            id
            userID
            postID
            User {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Post {
              id
              createdAt
              type
              description
              location
              image
              images
              video
              filter
              nofComments
              nofLikes
              userID
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
        Comments {
          items {
            id
            createdAt
            comment
            userID
            postID
            User {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Post {
              id
              createdAt
              type
              description
              location
              image
              images
              video
              filter
              nofComments
              nofLikes
              userID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
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
export const syncPosts = /* GraphQL */ `
  query SyncPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPosts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        createdAt
        type
        description
        location
        image
        images
        video
        filter
        nofComments
        nofLikes
        userID
        User {
          id
          name
          email
          username
          bio
          website
          nofPosts
          nofFollowers
          nofFollowings
          image
          Posts {
            items {
              id
              createdAt
              type
              description
              location
              image
              images
              video
              filter
              nofComments
              nofLikes
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
          Comments {
            items {
              id
              createdAt
              comment
              userID
              postID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            nextToken
            startedAt
          }
          Likes {
            items {
              id
              userID
              postID
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
          Followers {
            items {
              id
              followerID
              followeeID
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
          Followings {
            items {
              id
              followerID
              followeeID
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
          fcmToken
          Notifications {
            items {
              id
              createdAt
              readAt
              type
              userId
              actorId
              updatedAt
              _version
              _deleted
              _lastChangedAt
              notificationPostId
              notificationCommentId
            }
            nextToken
            startedAt
          }
          fleets {
            items {
              id
              createdAt
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
        Likes {
          items {
            id
            userID
            postID
            User {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Post {
              id
              createdAt
              type
              description
              location
              image
              images
              video
              filter
              nofComments
              nofLikes
              userID
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
        Comments {
          items {
            id
            createdAt
            comment
            userID
            postID
            User {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Post {
              id
              createdAt
              type
              description
              location
              image
              images
              video
              filter
              nofComments
              nofLikes
              userID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
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
export const postsByDate = /* GraphQL */ `
  query PostsByDate(
    $type: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    postsByDate(
      type: $type
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        createdAt
        type
        description
        location
        image
        images
        video
        filter
        nofComments
        nofLikes
        userID
        User {
          id
          name
          email
          username
          bio
          website
          nofPosts
          nofFollowers
          nofFollowings
          image
          Posts {
            items {
              id
              createdAt
              type
              description
              location
              image
              images
              video
              filter
              nofComments
              nofLikes
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
          Comments {
            items {
              id
              createdAt
              comment
              userID
              postID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            nextToken
            startedAt
          }
          Likes {
            items {
              id
              userID
              postID
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
          Followers {
            items {
              id
              followerID
              followeeID
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
          Followings {
            items {
              id
              followerID
              followeeID
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
          fcmToken
          Notifications {
            items {
              id
              createdAt
              readAt
              type
              userId
              actorId
              updatedAt
              _version
              _deleted
              _lastChangedAt
              notificationPostId
              notificationCommentId
            }
            nextToken
            startedAt
          }
          fleets {
            items {
              id
              createdAt
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
        Likes {
          items {
            id
            userID
            postID
            User {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Post {
              id
              createdAt
              type
              description
              location
              image
              images
              video
              filter
              nofComments
              nofLikes
              userID
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
        Comments {
          items {
            id
            createdAt
            comment
            userID
            postID
            User {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Post {
              id
              createdAt
              type
              description
              location
              image
              images
              video
              filter
              nofComments
              nofLikes
              userID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
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
export const postsByUserID = /* GraphQL */ `
  query PostsByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    postsByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        createdAt
        type
        description
        location
        image
        images
        video
        filter
        nofComments
        nofLikes
        userID
        User {
          id
          name
          email
          username
          bio
          website
          nofPosts
          nofFollowers
          nofFollowings
          image
          Posts {
            items {
              id
              createdAt
              type
              description
              location
              image
              images
              video
              filter
              nofComments
              nofLikes
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
          Comments {
            items {
              id
              createdAt
              comment
              userID
              postID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            nextToken
            startedAt
          }
          Likes {
            items {
              id
              userID
              postID
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
          Followers {
            items {
              id
              followerID
              followeeID
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
          Followings {
            items {
              id
              followerID
              followeeID
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
          fcmToken
          Notifications {
            items {
              id
              createdAt
              readAt
              type
              userId
              actorId
              updatedAt
              _version
              _deleted
              _lastChangedAt
              notificationPostId
              notificationCommentId
            }
            nextToken
            startedAt
          }
          fleets {
            items {
              id
              createdAt
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
        Likes {
          items {
            id
            userID
            postID
            User {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Post {
              id
              createdAt
              type
              description
              location
              image
              images
              video
              filter
              nofComments
              nofLikes
              userID
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
        Comments {
          items {
            id
            createdAt
            comment
            userID
            postID
            User {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Post {
              id
              createdAt
              type
              description
              location
              image
              images
              video
              filter
              nofComments
              nofLikes
              userID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
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
export const getFleet = /* GraphQL */ `
  query GetFleet($id: ID!) {
    getFleet(id: $id) {
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
        email
        username
        bio
        website
        nofPosts
        nofFollowers
        nofFollowings
        image
        Posts {
          items {
            id
            createdAt
            type
            description
            location
            image
            images
            video
            filter
            nofComments
            nofLikes
            userID
            User {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Likes {
              nextToken
              startedAt
            }
            Comments {
              nextToken
              startedAt
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
        Comments {
          items {
            id
            createdAt
            comment
            userID
            postID
            User {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Post {
              id
              createdAt
              type
              description
              location
              image
              images
              video
              filter
              nofComments
              nofLikes
              userID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
        Likes {
          items {
            id
            userID
            postID
            User {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Post {
              id
              createdAt
              type
              description
              location
              image
              images
              video
              filter
              nofComments
              nofLikes
              userID
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
        Followers {
          items {
            id
            followerID
            followeeID
            Follower {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Followee {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
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
        Followings {
          items {
            id
            followerID
            followeeID
            Follower {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Followee {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
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
        fcmToken
        Notifications {
          items {
            id
            createdAt
            readAt
            type
            userId
            User {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            actorId
            Actor {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Post {
              id
              createdAt
              type
              description
              location
              image
              images
              video
              filter
              nofComments
              nofLikes
              userID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Comment {
              id
              createdAt
              comment
              userID
              postID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
            notificationPostId
            notificationCommentId
          }
          nextToken
          startedAt
        }
        fleets {
          items {
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
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
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
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const listFleets = /* GraphQL */ `
  query ListFleets(
    $filter: ModelFleetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFleets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          email
          username
          bio
          website
          nofPosts
          nofFollowers
          nofFollowings
          image
          Posts {
            items {
              id
              createdAt
              type
              description
              location
              image
              images
              video
              filter
              nofComments
              nofLikes
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
          Comments {
            items {
              id
              createdAt
              comment
              userID
              postID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            nextToken
            startedAt
          }
          Likes {
            items {
              id
              userID
              postID
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
          Followers {
            items {
              id
              followerID
              followeeID
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
          Followings {
            items {
              id
              followerID
              followeeID
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
          fcmToken
          Notifications {
            items {
              id
              createdAt
              readAt
              type
              userId
              actorId
              updatedAt
              _version
              _deleted
              _lastChangedAt
              notificationPostId
              notificationCommentId
            }
            nextToken
            startedAt
          }
          fleets {
            items {
              id
              createdAt
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
export const syncFleets = /* GraphQL */ `
  query SyncFleets(
    $filter: ModelFleetFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncFleets(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
          email
          username
          bio
          website
          nofPosts
          nofFollowers
          nofFollowings
          image
          Posts {
            items {
              id
              createdAt
              type
              description
              location
              image
              images
              video
              filter
              nofComments
              nofLikes
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
          Comments {
            items {
              id
              createdAt
              comment
              userID
              postID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            nextToken
            startedAt
          }
          Likes {
            items {
              id
              userID
              postID
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
          Followers {
            items {
              id
              followerID
              followeeID
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
          Followings {
            items {
              id
              followerID
              followeeID
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
          fcmToken
          Notifications {
            items {
              id
              createdAt
              readAt
              type
              userId
              actorId
              updatedAt
              _version
              _deleted
              _lastChangedAt
              notificationPostId
              notificationCommentId
            }
            nextToken
            startedAt
          }
          fleets {
            items {
              id
              createdAt
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
export const userFleet = /* GraphQL */ `
  query UserFleet(
    $userID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelFleetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userFleet(
      userID: $userID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          email
          username
          bio
          website
          nofPosts
          nofFollowers
          nofFollowings
          image
          Posts {
            items {
              id
              createdAt
              type
              description
              location
              image
              images
              video
              filter
              nofComments
              nofLikes
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
          Comments {
            items {
              id
              createdAt
              comment
              userID
              postID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            nextToken
            startedAt
          }
          Likes {
            items {
              id
              userID
              postID
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
          Followers {
            items {
              id
              followerID
              followeeID
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
          Followings {
            items {
              id
              followerID
              followeeID
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
          fcmToken
          Notifications {
            items {
              id
              createdAt
              readAt
              type
              userId
              actorId
              updatedAt
              _version
              _deleted
              _lastChangedAt
              notificationPostId
              notificationCommentId
            }
            nextToken
            startedAt
          }
          fleets {
            items {
              id
              createdAt
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
export const getUserFeedFleet = /* GraphQL */ `
  query GetUserFeedFleet($id: ID!) {
    getUserFeedFleet(id: $id) {
      id
      c
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
          email
          username
          bio
          website
          nofPosts
          nofFollowers
          nofFollowings
          image
          Posts {
            items {
              id
              createdAt
              type
              description
              location
              image
              images
              video
              filter
              nofComments
              nofLikes
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
          Comments {
            items {
              id
              createdAt
              comment
              userID
              postID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            nextToken
            startedAt
          }
          Likes {
            items {
              id
              userID
              postID
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
          Followers {
            items {
              id
              followerID
              followeeID
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
          Followings {
            items {
              id
              followerID
              followeeID
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
          fcmToken
          Notifications {
            items {
              id
              createdAt
              readAt
              type
              userId
              actorId
              updatedAt
              _version
              _deleted
              _lastChangedAt
              notificationPostId
              notificationCommentId
            }
            nextToken
            startedAt
          }
          fleets {
            items {
              id
              createdAt
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
  }
`;
export const listUserFeedFleets = /* GraphQL */ `
  query ListUserFeedFleets(
    $filter: ModelUserFeedFleetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserFeedFleets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        c
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
            email
            username
            bio
            website
            nofPosts
            nofFollowers
            nofFollowings
            image
            Posts {
              nextToken
              startedAt
            }
            Comments {
              nextToken
              startedAt
            }
            Likes {
              nextToken
              startedAt
            }
            Followers {
              nextToken
              startedAt
            }
            Followings {
              nextToken
              startedAt
            }
            fcmToken
            Notifications {
              nextToken
              startedAt
            }
            fleets {
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
export const syncUserFeedFleets = /* GraphQL */ `
  query SyncUserFeedFleets(
    $filter: ModelUserFeedFleetFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserFeedFleets(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        c
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
            email
            username
            bio
            website
            nofPosts
            nofFollowers
            nofFollowings
            image
            Posts {
              nextToken
              startedAt
            }
            Comments {
              nextToken
              startedAt
            }
            Likes {
              nextToken
              startedAt
            }
            Followers {
              nextToken
              startedAt
            }
            Followings {
              nextToken
              startedAt
            }
            fcmToken
            Notifications {
              nextToken
              startedAt
            }
            fleets {
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
export const userFeedFleet = /* GraphQL */ `
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
        c
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
            email
            username
            bio
            website
            nofPosts
            nofFollowers
            nofFollowings
            image
            Posts {
              nextToken
              startedAt
            }
            Comments {
              nextToken
              startedAt
            }
            Likes {
              nextToken
              startedAt
            }
            Followers {
              nextToken
              startedAt
            }
            Followings {
              nextToken
              startedAt
            }
            fcmToken
            Notifications {
              nextToken
              startedAt
            }
            fleets {
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
export const userFeedFleetsByFleetID = /* GraphQL */ `
  query UserFeedFleetsByFleetID(
    $fleetID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserFeedFleetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userFeedFleetsByFleetID(
      fleetID: $fleetID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        c
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
            email
            username
            bio
            website
            nofPosts
            nofFollowers
            nofFollowings
            image
            Posts {
              nextToken
              startedAt
            }
            Comments {
              nextToken
              startedAt
            }
            Likes {
              nextToken
              startedAt
            }
            Followers {
              nextToken
              startedAt
            }
            Followings {
              nextToken
              startedAt
            }
            fcmToken
            Notifications {
              nextToken
              startedAt
            }
            fleets {
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
export const userFeedFleetsByFleetOwnerID = /* GraphQL */ `
  query UserFeedFleetsByFleetOwnerID(
    $fleetOwnerID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserFeedFleetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userFeedFleetsByFleetOwnerID(
      fleetOwnerID: $fleetOwnerID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        c
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
            email
            username
            bio
            website
            nofPosts
            nofFollowers
            nofFollowings
            image
            Posts {
              nextToken
              startedAt
            }
            Comments {
              nextToken
              startedAt
            }
            Likes {
              nextToken
              startedAt
            }
            Followers {
              nextToken
              startedAt
            }
            Followings {
              nextToken
              startedAt
            }
            fcmToken
            Notifications {
              nextToken
              startedAt
            }
            fleets {
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
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      email
      username
      bio
      website
      nofPosts
      nofFollowers
      nofFollowings
      image
      Posts {
        items {
          id
          createdAt
          type
          description
          location
          image
          images
          video
          filter
          nofComments
          nofLikes
          userID
          User {
            id
            name
            email
            username
            bio
            website
            nofPosts
            nofFollowers
            nofFollowings
            image
            Posts {
              nextToken
              startedAt
            }
            Comments {
              nextToken
              startedAt
            }
            Likes {
              nextToken
              startedAt
            }
            Followers {
              nextToken
              startedAt
            }
            Followings {
              nextToken
              startedAt
            }
            fcmToken
            Notifications {
              nextToken
              startedAt
            }
            fleets {
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
          Likes {
            items {
              id
              userID
              postID
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
          Comments {
            items {
              id
              createdAt
              comment
              userID
              postID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            nextToken
            startedAt
          }
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      Comments {
        items {
          id
          createdAt
          comment
          userID
          postID
          User {
            id
            name
            email
            username
            bio
            website
            nofPosts
            nofFollowers
            nofFollowings
            image
            Posts {
              nextToken
              startedAt
            }
            Comments {
              nextToken
              startedAt
            }
            Likes {
              nextToken
              startedAt
            }
            Followers {
              nextToken
              startedAt
            }
            Followings {
              nextToken
              startedAt
            }
            fcmToken
            Notifications {
              nextToken
              startedAt
            }
            fleets {
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
          Post {
            id
            createdAt
            type
            description
            location
            image
            images
            video
            filter
            nofComments
            nofLikes
            userID
            User {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Likes {
              nextToken
              startedAt
            }
            Comments {
              nextToken
              startedAt
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      Likes {
        items {
          id
          userID
          postID
          User {
            id
            name
            email
            username
            bio
            website
            nofPosts
            nofFollowers
            nofFollowings
            image
            Posts {
              nextToken
              startedAt
            }
            Comments {
              nextToken
              startedAt
            }
            Likes {
              nextToken
              startedAt
            }
            Followers {
              nextToken
              startedAt
            }
            Followings {
              nextToken
              startedAt
            }
            fcmToken
            Notifications {
              nextToken
              startedAt
            }
            fleets {
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
          Post {
            id
            createdAt
            type
            description
            location
            image
            images
            video
            filter
            nofComments
            nofLikes
            userID
            User {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Likes {
              nextToken
              startedAt
            }
            Comments {
              nextToken
              startedAt
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
      Followers {
        items {
          id
          followerID
          followeeID
          Follower {
            id
            name
            email
            username
            bio
            website
            nofPosts
            nofFollowers
            nofFollowings
            image
            Posts {
              nextToken
              startedAt
            }
            Comments {
              nextToken
              startedAt
            }
            Likes {
              nextToken
              startedAt
            }
            Followers {
              nextToken
              startedAt
            }
            Followings {
              nextToken
              startedAt
            }
            fcmToken
            Notifications {
              nextToken
              startedAt
            }
            fleets {
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
          Followee {
            id
            name
            email
            username
            bio
            website
            nofPosts
            nofFollowers
            nofFollowings
            image
            Posts {
              nextToken
              startedAt
            }
            Comments {
              nextToken
              startedAt
            }
            Likes {
              nextToken
              startedAt
            }
            Followers {
              nextToken
              startedAt
            }
            Followings {
              nextToken
              startedAt
            }
            fcmToken
            Notifications {
              nextToken
              startedAt
            }
            fleets {
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
      Followings {
        items {
          id
          followerID
          followeeID
          Follower {
            id
            name
            email
            username
            bio
            website
            nofPosts
            nofFollowers
            nofFollowings
            image
            Posts {
              nextToken
              startedAt
            }
            Comments {
              nextToken
              startedAt
            }
            Likes {
              nextToken
              startedAt
            }
            Followers {
              nextToken
              startedAt
            }
            Followings {
              nextToken
              startedAt
            }
            fcmToken
            Notifications {
              nextToken
              startedAt
            }
            fleets {
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
          Followee {
            id
            name
            email
            username
            bio
            website
            nofPosts
            nofFollowers
            nofFollowings
            image
            Posts {
              nextToken
              startedAt
            }
            Comments {
              nextToken
              startedAt
            }
            Likes {
              nextToken
              startedAt
            }
            Followers {
              nextToken
              startedAt
            }
            Followings {
              nextToken
              startedAt
            }
            fcmToken
            Notifications {
              nextToken
              startedAt
            }
            fleets {
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
      fcmToken
      Notifications {
        items {
          id
          createdAt
          readAt
          type
          userId
          User {
            id
            name
            email
            username
            bio
            website
            nofPosts
            nofFollowers
            nofFollowings
            image
            Posts {
              nextToken
              startedAt
            }
            Comments {
              nextToken
              startedAt
            }
            Likes {
              nextToken
              startedAt
            }
            Followers {
              nextToken
              startedAt
            }
            Followings {
              nextToken
              startedAt
            }
            fcmToken
            Notifications {
              nextToken
              startedAt
            }
            fleets {
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
          actorId
          Actor {
            id
            name
            email
            username
            bio
            website
            nofPosts
            nofFollowers
            nofFollowings
            image
            Posts {
              nextToken
              startedAt
            }
            Comments {
              nextToken
              startedAt
            }
            Likes {
              nextToken
              startedAt
            }
            Followers {
              nextToken
              startedAt
            }
            Followings {
              nextToken
              startedAt
            }
            fcmToken
            Notifications {
              nextToken
              startedAt
            }
            fleets {
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
          Post {
            id
            createdAt
            type
            description
            location
            image
            images
            video
            filter
            nofComments
            nofLikes
            userID
            User {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Likes {
              nextToken
              startedAt
            }
            Comments {
              nextToken
              startedAt
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          Comment {
            id
            createdAt
            comment
            userID
            postID
            User {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Post {
              id
              createdAt
              type
              description
              location
              image
              images
              video
              filter
              nofComments
              nofLikes
              userID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          updatedAt
          _version
          _deleted
          _lastChangedAt
          notificationPostId
          notificationCommentId
        }
        nextToken
        startedAt
      }
      fleets {
        items {
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
            email
            username
            bio
            website
            nofPosts
            nofFollowers
            nofFollowings
            image
            Posts {
              nextToken
              startedAt
            }
            Comments {
              nextToken
              startedAt
            }
            Likes {
              nextToken
              startedAt
            }
            Followers {
              nextToken
              startedAt
            }
            Followings {
              nextToken
              startedAt
            }
            fcmToken
            Notifications {
              nextToken
              startedAt
            }
            fleets {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        username
        bio
        website
        nofPosts
        nofFollowers
        nofFollowings
        image
        Posts {
          items {
            id
            createdAt
            type
            description
            location
            image
            images
            video
            filter
            nofComments
            nofLikes
            userID
            User {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Likes {
              nextToken
              startedAt
            }
            Comments {
              nextToken
              startedAt
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
        Comments {
          items {
            id
            createdAt
            comment
            userID
            postID
            User {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Post {
              id
              createdAt
              type
              description
              location
              image
              images
              video
              filter
              nofComments
              nofLikes
              userID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
        Likes {
          items {
            id
            userID
            postID
            User {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Post {
              id
              createdAt
              type
              description
              location
              image
              images
              video
              filter
              nofComments
              nofLikes
              userID
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
        Followers {
          items {
            id
            followerID
            followeeID
            Follower {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Followee {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
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
        Followings {
          items {
            id
            followerID
            followeeID
            Follower {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Followee {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
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
        fcmToken
        Notifications {
          items {
            id
            createdAt
            readAt
            type
            userId
            User {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            actorId
            Actor {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Post {
              id
              createdAt
              type
              description
              location
              image
              images
              video
              filter
              nofComments
              nofLikes
              userID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Comment {
              id
              createdAt
              comment
              userID
              postID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
            notificationPostId
            notificationCommentId
          }
          nextToken
          startedAt
        }
        fleets {
          items {
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
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
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
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        email
        username
        bio
        website
        nofPosts
        nofFollowers
        nofFollowings
        image
        Posts {
          items {
            id
            createdAt
            type
            description
            location
            image
            images
            video
            filter
            nofComments
            nofLikes
            userID
            User {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Likes {
              nextToken
              startedAt
            }
            Comments {
              nextToken
              startedAt
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
        Comments {
          items {
            id
            createdAt
            comment
            userID
            postID
            User {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Post {
              id
              createdAt
              type
              description
              location
              image
              images
              video
              filter
              nofComments
              nofLikes
              userID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
        Likes {
          items {
            id
            userID
            postID
            User {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Post {
              id
              createdAt
              type
              description
              location
              image
              images
              video
              filter
              nofComments
              nofLikes
              userID
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
        Followers {
          items {
            id
            followerID
            followeeID
            Follower {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Followee {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
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
        Followings {
          items {
            id
            followerID
            followeeID
            Follower {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Followee {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
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
        fcmToken
        Notifications {
          items {
            id
            createdAt
            readAt
            type
            userId
            User {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            actorId
            Actor {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Post {
              id
              createdAt
              type
              description
              location
              image
              images
              video
              filter
              nofComments
              nofLikes
              userID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Comment {
              id
              createdAt
              comment
              userID
              postID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
            notificationPostId
            notificationCommentId
          }
          nextToken
          startedAt
        }
        fleets {
          items {
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
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
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
      nextToken
      startedAt
    }
  }
`;
export const usersByUsername = /* GraphQL */ `
  query UsersByUsername(
    $username: String!
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    usersByUsername(
      username: $username
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        email
        username
        bio
        website
        nofPosts
        nofFollowers
        nofFollowings
        image
        Posts {
          items {
            id
            createdAt
            type
            description
            location
            image
            images
            video
            filter
            nofComments
            nofLikes
            userID
            User {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Likes {
              nextToken
              startedAt
            }
            Comments {
              nextToken
              startedAt
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
        Comments {
          items {
            id
            createdAt
            comment
            userID
            postID
            User {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Post {
              id
              createdAt
              type
              description
              location
              image
              images
              video
              filter
              nofComments
              nofLikes
              userID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
        Likes {
          items {
            id
            userID
            postID
            User {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Post {
              id
              createdAt
              type
              description
              location
              image
              images
              video
              filter
              nofComments
              nofLikes
              userID
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
        Followers {
          items {
            id
            followerID
            followeeID
            Follower {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Followee {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
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
        Followings {
          items {
            id
            followerID
            followeeID
            Follower {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Followee {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
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
        fcmToken
        Notifications {
          items {
            id
            createdAt
            readAt
            type
            userId
            User {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            actorId
            Actor {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Post {
              id
              createdAt
              type
              description
              location
              image
              images
              video
              filter
              nofComments
              nofLikes
              userID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Comment {
              id
              createdAt
              comment
              userID
              postID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
            notificationPostId
            notificationCommentId
          }
          nextToken
          startedAt
        }
        fleets {
          items {
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
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
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
      nextToken
      startedAt
    }
  }
`;
export const getUserFollow = /* GraphQL */ `
  query GetUserFollow($id: ID!) {
    getUserFollow(id: $id) {
      id
      followerID
      followeeID
      Follower {
        id
        name
        email
        username
        bio
        website
        nofPosts
        nofFollowers
        nofFollowings
        image
        Posts {
          items {
            id
            createdAt
            type
            description
            location
            image
            images
            video
            filter
            nofComments
            nofLikes
            userID
            User {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Likes {
              nextToken
              startedAt
            }
            Comments {
              nextToken
              startedAt
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
        Comments {
          items {
            id
            createdAt
            comment
            userID
            postID
            User {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Post {
              id
              createdAt
              type
              description
              location
              image
              images
              video
              filter
              nofComments
              nofLikes
              userID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
        Likes {
          items {
            id
            userID
            postID
            User {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Post {
              id
              createdAt
              type
              description
              location
              image
              images
              video
              filter
              nofComments
              nofLikes
              userID
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
        Followers {
          items {
            id
            followerID
            followeeID
            Follower {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Followee {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
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
        Followings {
          items {
            id
            followerID
            followeeID
            Follower {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Followee {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
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
        fcmToken
        Notifications {
          items {
            id
            createdAt
            readAt
            type
            userId
            User {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            actorId
            Actor {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Post {
              id
              createdAt
              type
              description
              location
              image
              images
              video
              filter
              nofComments
              nofLikes
              userID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Comment {
              id
              createdAt
              comment
              userID
              postID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
            notificationPostId
            notificationCommentId
          }
          nextToken
          startedAt
        }
        fleets {
          items {
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
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
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
      Followee {
        id
        name
        email
        username
        bio
        website
        nofPosts
        nofFollowers
        nofFollowings
        image
        Posts {
          items {
            id
            createdAt
            type
            description
            location
            image
            images
            video
            filter
            nofComments
            nofLikes
            userID
            User {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Likes {
              nextToken
              startedAt
            }
            Comments {
              nextToken
              startedAt
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
        Comments {
          items {
            id
            createdAt
            comment
            userID
            postID
            User {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Post {
              id
              createdAt
              type
              description
              location
              image
              images
              video
              filter
              nofComments
              nofLikes
              userID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
        Likes {
          items {
            id
            userID
            postID
            User {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Post {
              id
              createdAt
              type
              description
              location
              image
              images
              video
              filter
              nofComments
              nofLikes
              userID
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
        Followers {
          items {
            id
            followerID
            followeeID
            Follower {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Followee {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
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
        Followings {
          items {
            id
            followerID
            followeeID
            Follower {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Followee {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
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
        fcmToken
        Notifications {
          items {
            id
            createdAt
            readAt
            type
            userId
            User {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            actorId
            Actor {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Post {
              id
              createdAt
              type
              description
              location
              image
              images
              video
              filter
              nofComments
              nofLikes
              userID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Comment {
              id
              createdAt
              comment
              userID
              postID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
            notificationPostId
            notificationCommentId
          }
          nextToken
          startedAt
        }
        fleets {
          items {
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
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const listUserFollows = /* GraphQL */ `
  query ListUserFollows(
    $filter: ModelUserFollowFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserFollows(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        followerID
        followeeID
        Follower {
          id
          name
          email
          username
          bio
          website
          nofPosts
          nofFollowers
          nofFollowings
          image
          Posts {
            items {
              id
              createdAt
              type
              description
              location
              image
              images
              video
              filter
              nofComments
              nofLikes
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
          Comments {
            items {
              id
              createdAt
              comment
              userID
              postID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            nextToken
            startedAt
          }
          Likes {
            items {
              id
              userID
              postID
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
          Followers {
            items {
              id
              followerID
              followeeID
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
          Followings {
            items {
              id
              followerID
              followeeID
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
          fcmToken
          Notifications {
            items {
              id
              createdAt
              readAt
              type
              userId
              actorId
              updatedAt
              _version
              _deleted
              _lastChangedAt
              notificationPostId
              notificationCommentId
            }
            nextToken
            startedAt
          }
          fleets {
            items {
              id
              createdAt
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
        Followee {
          id
          name
          email
          username
          bio
          website
          nofPosts
          nofFollowers
          nofFollowings
          image
          Posts {
            items {
              id
              createdAt
              type
              description
              location
              image
              images
              video
              filter
              nofComments
              nofLikes
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
          Comments {
            items {
              id
              createdAt
              comment
              userID
              postID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            nextToken
            startedAt
          }
          Likes {
            items {
              id
              userID
              postID
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
          Followers {
            items {
              id
              followerID
              followeeID
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
          Followings {
            items {
              id
              followerID
              followeeID
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
          fcmToken
          Notifications {
            items {
              id
              createdAt
              readAt
              type
              userId
              actorId
              updatedAt
              _version
              _deleted
              _lastChangedAt
              notificationPostId
              notificationCommentId
            }
            nextToken
            startedAt
          }
          fleets {
            items {
              id
              createdAt
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
export const syncUserFollows = /* GraphQL */ `
  query SyncUserFollows(
    $filter: ModelUserFollowFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserFollows(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        followerID
        followeeID
        Follower {
          id
          name
          email
          username
          bio
          website
          nofPosts
          nofFollowers
          nofFollowings
          image
          Posts {
            items {
              id
              createdAt
              type
              description
              location
              image
              images
              video
              filter
              nofComments
              nofLikes
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
          Comments {
            items {
              id
              createdAt
              comment
              userID
              postID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            nextToken
            startedAt
          }
          Likes {
            items {
              id
              userID
              postID
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
          Followers {
            items {
              id
              followerID
              followeeID
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
          Followings {
            items {
              id
              followerID
              followeeID
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
          fcmToken
          Notifications {
            items {
              id
              createdAt
              readAt
              type
              userId
              actorId
              updatedAt
              _version
              _deleted
              _lastChangedAt
              notificationPostId
              notificationCommentId
            }
            nextToken
            startedAt
          }
          fleets {
            items {
              id
              createdAt
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
        Followee {
          id
          name
          email
          username
          bio
          website
          nofPosts
          nofFollowers
          nofFollowings
          image
          Posts {
            items {
              id
              createdAt
              type
              description
              location
              image
              images
              video
              filter
              nofComments
              nofLikes
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
          Comments {
            items {
              id
              createdAt
              comment
              userID
              postID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            nextToken
            startedAt
          }
          Likes {
            items {
              id
              userID
              postID
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
          Followers {
            items {
              id
              followerID
              followeeID
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
          Followings {
            items {
              id
              followerID
              followeeID
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
          fcmToken
          Notifications {
            items {
              id
              createdAt
              readAt
              type
              userId
              actorId
              updatedAt
              _version
              _deleted
              _lastChangedAt
              notificationPostId
              notificationCommentId
            }
            nextToken
            startedAt
          }
          fleets {
            items {
              id
              createdAt
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
export const userFollowings = /* GraphQL */ `
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
        Follower {
          id
          name
          email
          username
          bio
          website
          nofPosts
          nofFollowers
          nofFollowings
          image
          Posts {
            items {
              id
              createdAt
              type
              description
              location
              image
              images
              video
              filter
              nofComments
              nofLikes
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
          Comments {
            items {
              id
              createdAt
              comment
              userID
              postID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            nextToken
            startedAt
          }
          Likes {
            items {
              id
              userID
              postID
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
          Followers {
            items {
              id
              followerID
              followeeID
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
          Followings {
            items {
              id
              followerID
              followeeID
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
          fcmToken
          Notifications {
            items {
              id
              createdAt
              readAt
              type
              userId
              actorId
              updatedAt
              _version
              _deleted
              _lastChangedAt
              notificationPostId
              notificationCommentId
            }
            nextToken
            startedAt
          }
          fleets {
            items {
              id
              createdAt
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
        Followee {
          id
          name
          email
          username
          bio
          website
          nofPosts
          nofFollowers
          nofFollowings
          image
          Posts {
            items {
              id
              createdAt
              type
              description
              location
              image
              images
              video
              filter
              nofComments
              nofLikes
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
          Comments {
            items {
              id
              createdAt
              comment
              userID
              postID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            nextToken
            startedAt
          }
          Likes {
            items {
              id
              userID
              postID
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
          Followers {
            items {
              id
              followerID
              followeeID
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
          Followings {
            items {
              id
              followerID
              followeeID
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
          fcmToken
          Notifications {
            items {
              id
              createdAt
              readAt
              type
              userId
              actorId
              updatedAt
              _version
              _deleted
              _lastChangedAt
              notificationPostId
              notificationCommentId
            }
            nextToken
            startedAt
          }
          fleets {
            items {
              id
              createdAt
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
export const userFollowers = /* GraphQL */ `
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
          email
          username
          bio
          website
          nofPosts
          nofFollowers
          nofFollowings
          image
          Posts {
            items {
              id
              createdAt
              type
              description
              location
              image
              images
              video
              filter
              nofComments
              nofLikes
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
          Comments {
            items {
              id
              createdAt
              comment
              userID
              postID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            nextToken
            startedAt
          }
          Likes {
            items {
              id
              userID
              postID
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
          Followers {
            items {
              id
              followerID
              followeeID
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
          Followings {
            items {
              id
              followerID
              followeeID
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
          fcmToken
          Notifications {
            items {
              id
              createdAt
              readAt
              type
              userId
              actorId
              updatedAt
              _version
              _deleted
              _lastChangedAt
              notificationPostId
              notificationCommentId
            }
            nextToken
            startedAt
          }
          fleets {
            items {
              id
              createdAt
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
        Followee {
          id
          name
          email
          username
          bio
          website
          nofPosts
          nofFollowers
          nofFollowings
          image
          Posts {
            items {
              id
              createdAt
              type
              description
              location
              image
              images
              video
              filter
              nofComments
              nofLikes
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
          Comments {
            items {
              id
              createdAt
              comment
              userID
              postID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            nextToken
            startedAt
          }
          Likes {
            items {
              id
              userID
              postID
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
          Followers {
            items {
              id
              followerID
              followeeID
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
          Followings {
            items {
              id
              followerID
              followeeID
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
          fcmToken
          Notifications {
            items {
              id
              createdAt
              readAt
              type
              userId
              actorId
              updatedAt
              _version
              _deleted
              _lastChangedAt
              notificationPostId
              notificationCommentId
            }
            nextToken
            startedAt
          }
          fleets {
            items {
              id
              createdAt
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
export const getUserFeedPost = /* GraphQL */ `
  query GetUserFeedPost($id: ID!) {
    getUserFeedPost(id: $id) {
      id
      userID
      postID
      postCreatedAt
      postOwnerID
      Post {
        id
        createdAt
        type
        description
        location
        image
        images
        video
        filter
        nofComments
        nofLikes
        userID
        User {
          id
          name
          email
          username
          bio
          website
          nofPosts
          nofFollowers
          nofFollowings
          image
          Posts {
            items {
              id
              createdAt
              type
              description
              location
              image
              images
              video
              filter
              nofComments
              nofLikes
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
          Comments {
            items {
              id
              createdAt
              comment
              userID
              postID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            nextToken
            startedAt
          }
          Likes {
            items {
              id
              userID
              postID
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
          Followers {
            items {
              id
              followerID
              followeeID
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
          Followings {
            items {
              id
              followerID
              followeeID
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
          fcmToken
          Notifications {
            items {
              id
              createdAt
              readAt
              type
              userId
              actorId
              updatedAt
              _version
              _deleted
              _lastChangedAt
              notificationPostId
              notificationCommentId
            }
            nextToken
            startedAt
          }
          fleets {
            items {
              id
              createdAt
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
        Likes {
          items {
            id
            userID
            postID
            User {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Post {
              id
              createdAt
              type
              description
              location
              image
              images
              video
              filter
              nofComments
              nofLikes
              userID
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
        Comments {
          items {
            id
            createdAt
            comment
            userID
            postID
            User {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Post {
              id
              createdAt
              type
              description
              location
              image
              images
              video
              filter
              nofComments
              nofLikes
              userID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
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
  }
`;
export const listUserFeedPosts = /* GraphQL */ `
  query ListUserFeedPosts(
    $filter: ModelUserFeedPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserFeedPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        postID
        postCreatedAt
        postOwnerID
        Post {
          id
          createdAt
          type
          description
          location
          image
          images
          video
          filter
          nofComments
          nofLikes
          userID
          User {
            id
            name
            email
            username
            bio
            website
            nofPosts
            nofFollowers
            nofFollowings
            image
            Posts {
              nextToken
              startedAt
            }
            Comments {
              nextToken
              startedAt
            }
            Likes {
              nextToken
              startedAt
            }
            Followers {
              nextToken
              startedAt
            }
            Followings {
              nextToken
              startedAt
            }
            fcmToken
            Notifications {
              nextToken
              startedAt
            }
            fleets {
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
          Likes {
            items {
              id
              userID
              postID
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
          Comments {
            items {
              id
              createdAt
              comment
              userID
              postID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            nextToken
            startedAt
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
export const syncUserFeedPosts = /* GraphQL */ `
  query SyncUserFeedPosts(
    $filter: ModelUserFeedPostFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserFeedPosts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        userID
        postID
        postCreatedAt
        postOwnerID
        Post {
          id
          createdAt
          type
          description
          location
          image
          images
          video
          filter
          nofComments
          nofLikes
          userID
          User {
            id
            name
            email
            username
            bio
            website
            nofPosts
            nofFollowers
            nofFollowings
            image
            Posts {
              nextToken
              startedAt
            }
            Comments {
              nextToken
              startedAt
            }
            Likes {
              nextToken
              startedAt
            }
            Followers {
              nextToken
              startedAt
            }
            Followings {
              nextToken
              startedAt
            }
            fcmToken
            Notifications {
              nextToken
              startedAt
            }
            fleets {
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
          Likes {
            items {
              id
              userID
              postID
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
          Comments {
            items {
              id
              createdAt
              comment
              userID
              postID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            nextToken
            startedAt
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
export const userFeed = /* GraphQL */ `
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
          createdAt
          type
          description
          location
          image
          images
          video
          filter
          nofComments
          nofLikes
          userID
          User {
            id
            name
            email
            username
            bio
            website
            nofPosts
            nofFollowers
            nofFollowings
            image
            Posts {
              nextToken
              startedAt
            }
            Comments {
              nextToken
              startedAt
            }
            Likes {
              nextToken
              startedAt
            }
            Followers {
              nextToken
              startedAt
            }
            Followings {
              nextToken
              startedAt
            }
            fcmToken
            Notifications {
              nextToken
              startedAt
            }
            fleets {
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
          Likes {
            items {
              id
              userID
              postID
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
          Comments {
            items {
              id
              createdAt
              comment
              userID
              postID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            nextToken
            startedAt
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
export const userFeedPostsByPostID = /* GraphQL */ `
  query UserFeedPostsByPostID(
    $postID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserFeedPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userFeedPostsByPostID(
      postID: $postID
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
          createdAt
          type
          description
          location
          image
          images
          video
          filter
          nofComments
          nofLikes
          userID
          User {
            id
            name
            email
            username
            bio
            website
            nofPosts
            nofFollowers
            nofFollowings
            image
            Posts {
              nextToken
              startedAt
            }
            Comments {
              nextToken
              startedAt
            }
            Likes {
              nextToken
              startedAt
            }
            Followers {
              nextToken
              startedAt
            }
            Followings {
              nextToken
              startedAt
            }
            fcmToken
            Notifications {
              nextToken
              startedAt
            }
            fleets {
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
          Likes {
            items {
              id
              userID
              postID
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
          Comments {
            items {
              id
              createdAt
              comment
              userID
              postID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            nextToken
            startedAt
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
export const userFeedPostsByPostOwnerID = /* GraphQL */ `
  query UserFeedPostsByPostOwnerID(
    $postOwnerID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserFeedPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userFeedPostsByPostOwnerID(
      postOwnerID: $postOwnerID
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
          createdAt
          type
          description
          location
          image
          images
          video
          filter
          nofComments
          nofLikes
          userID
          User {
            id
            name
            email
            username
            bio
            website
            nofPosts
            nofFollowers
            nofFollowings
            image
            Posts {
              nextToken
              startedAt
            }
            Comments {
              nextToken
              startedAt
            }
            Likes {
              nextToken
              startedAt
            }
            Followers {
              nextToken
              startedAt
            }
            Followings {
              nextToken
              startedAt
            }
            fcmToken
            Notifications {
              nextToken
              startedAt
            }
            fleets {
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
          Likes {
            items {
              id
              userID
              postID
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
          Comments {
            items {
              id
              createdAt
              comment
              userID
              postID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            nextToken
            startedAt
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
export const getNotification = /* GraphQL */ `
  query GetNotification($id: ID!) {
    getNotification(id: $id) {
      id
      createdAt
      readAt
      type
      userId
      User {
        id
        name
        email
        username
        bio
        website
        nofPosts
        nofFollowers
        nofFollowings
        image
        Posts {
          items {
            id
            createdAt
            type
            description
            location
            image
            images
            video
            filter
            nofComments
            nofLikes
            userID
            User {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Likes {
              nextToken
              startedAt
            }
            Comments {
              nextToken
              startedAt
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
        Comments {
          items {
            id
            createdAt
            comment
            userID
            postID
            User {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Post {
              id
              createdAt
              type
              description
              location
              image
              images
              video
              filter
              nofComments
              nofLikes
              userID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
        Likes {
          items {
            id
            userID
            postID
            User {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Post {
              id
              createdAt
              type
              description
              location
              image
              images
              video
              filter
              nofComments
              nofLikes
              userID
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
        Followers {
          items {
            id
            followerID
            followeeID
            Follower {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Followee {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
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
        Followings {
          items {
            id
            followerID
            followeeID
            Follower {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Followee {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
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
        fcmToken
        Notifications {
          items {
            id
            createdAt
            readAt
            type
            userId
            User {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            actorId
            Actor {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Post {
              id
              createdAt
              type
              description
              location
              image
              images
              video
              filter
              nofComments
              nofLikes
              userID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Comment {
              id
              createdAt
              comment
              userID
              postID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
            notificationPostId
            notificationCommentId
          }
          nextToken
          startedAt
        }
        fleets {
          items {
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
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
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
      actorId
      Actor {
        id
        name
        email
        username
        bio
        website
        nofPosts
        nofFollowers
        nofFollowings
        image
        Posts {
          items {
            id
            createdAt
            type
            description
            location
            image
            images
            video
            filter
            nofComments
            nofLikes
            userID
            User {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Likes {
              nextToken
              startedAt
            }
            Comments {
              nextToken
              startedAt
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
        Comments {
          items {
            id
            createdAt
            comment
            userID
            postID
            User {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Post {
              id
              createdAt
              type
              description
              location
              image
              images
              video
              filter
              nofComments
              nofLikes
              userID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
        Likes {
          items {
            id
            userID
            postID
            User {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Post {
              id
              createdAt
              type
              description
              location
              image
              images
              video
              filter
              nofComments
              nofLikes
              userID
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
        Followers {
          items {
            id
            followerID
            followeeID
            Follower {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Followee {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
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
        Followings {
          items {
            id
            followerID
            followeeID
            Follower {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Followee {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
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
        fcmToken
        Notifications {
          items {
            id
            createdAt
            readAt
            type
            userId
            User {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            actorId
            Actor {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Post {
              id
              createdAt
              type
              description
              location
              image
              images
              video
              filter
              nofComments
              nofLikes
              userID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Comment {
              id
              createdAt
              comment
              userID
              postID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
            notificationPostId
            notificationCommentId
          }
          nextToken
          startedAt
        }
        fleets {
          items {
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
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
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
      Post {
        id
        createdAt
        type
        description
        location
        image
        images
        video
        filter
        nofComments
        nofLikes
        userID
        User {
          id
          name
          email
          username
          bio
          website
          nofPosts
          nofFollowers
          nofFollowings
          image
          Posts {
            items {
              id
              createdAt
              type
              description
              location
              image
              images
              video
              filter
              nofComments
              nofLikes
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
          Comments {
            items {
              id
              createdAt
              comment
              userID
              postID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            nextToken
            startedAt
          }
          Likes {
            items {
              id
              userID
              postID
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
          Followers {
            items {
              id
              followerID
              followeeID
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
          Followings {
            items {
              id
              followerID
              followeeID
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
          fcmToken
          Notifications {
            items {
              id
              createdAt
              readAt
              type
              userId
              actorId
              updatedAt
              _version
              _deleted
              _lastChangedAt
              notificationPostId
              notificationCommentId
            }
            nextToken
            startedAt
          }
          fleets {
            items {
              id
              createdAt
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
        Likes {
          items {
            id
            userID
            postID
            User {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Post {
              id
              createdAt
              type
              description
              location
              image
              images
              video
              filter
              nofComments
              nofLikes
              userID
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
        Comments {
          items {
            id
            createdAt
            comment
            userID
            postID
            User {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Post {
              id
              createdAt
              type
              description
              location
              image
              images
              video
              filter
              nofComments
              nofLikes
              userID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      Comment {
        id
        createdAt
        comment
        userID
        postID
        User {
          id
          name
          email
          username
          bio
          website
          nofPosts
          nofFollowers
          nofFollowings
          image
          Posts {
            items {
              id
              createdAt
              type
              description
              location
              image
              images
              video
              filter
              nofComments
              nofLikes
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
          Comments {
            items {
              id
              createdAt
              comment
              userID
              postID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            nextToken
            startedAt
          }
          Likes {
            items {
              id
              userID
              postID
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
          Followers {
            items {
              id
              followerID
              followeeID
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
          Followings {
            items {
              id
              followerID
              followeeID
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
          fcmToken
          Notifications {
            items {
              id
              createdAt
              readAt
              type
              userId
              actorId
              updatedAt
              _version
              _deleted
              _lastChangedAt
              notificationPostId
              notificationCommentId
            }
            nextToken
            startedAt
          }
          fleets {
            items {
              id
              createdAt
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
        Post {
          id
          createdAt
          type
          description
          location
          image
          images
          video
          filter
          nofComments
          nofLikes
          userID
          User {
            id
            name
            email
            username
            bio
            website
            nofPosts
            nofFollowers
            nofFollowings
            image
            Posts {
              nextToken
              startedAt
            }
            Comments {
              nextToken
              startedAt
            }
            Likes {
              nextToken
              startedAt
            }
            Followers {
              nextToken
              startedAt
            }
            Followings {
              nextToken
              startedAt
            }
            fcmToken
            Notifications {
              nextToken
              startedAt
            }
            fleets {
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
          Likes {
            items {
              id
              userID
              postID
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
          Comments {
            items {
              id
              createdAt
              comment
              userID
              postID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            nextToken
            startedAt
          }
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
      notificationPostId
      notificationCommentId
    }
  }
`;
export const listNotifications = /* GraphQL */ `
  query ListNotifications(
    $filter: ModelNotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotifications(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        readAt
        type
        userId
        User {
          id
          name
          email
          username
          bio
          website
          nofPosts
          nofFollowers
          nofFollowings
          image
          Posts {
            items {
              id
              createdAt
              type
              description
              location
              image
              images
              video
              filter
              nofComments
              nofLikes
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
          Comments {
            items {
              id
              createdAt
              comment
              userID
              postID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            nextToken
            startedAt
          }
          Likes {
            items {
              id
              userID
              postID
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
          Followers {
            items {
              id
              followerID
              followeeID
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
          Followings {
            items {
              id
              followerID
              followeeID
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
          fcmToken
          Notifications {
            items {
              id
              createdAt
              readAt
              type
              userId
              actorId
              updatedAt
              _version
              _deleted
              _lastChangedAt
              notificationPostId
              notificationCommentId
            }
            nextToken
            startedAt
          }
          fleets {
            items {
              id
              createdAt
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
        actorId
        Actor {
          id
          name
          email
          username
          bio
          website
          nofPosts
          nofFollowers
          nofFollowings
          image
          Posts {
            items {
              id
              createdAt
              type
              description
              location
              image
              images
              video
              filter
              nofComments
              nofLikes
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
          Comments {
            items {
              id
              createdAt
              comment
              userID
              postID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            nextToken
            startedAt
          }
          Likes {
            items {
              id
              userID
              postID
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
          Followers {
            items {
              id
              followerID
              followeeID
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
          Followings {
            items {
              id
              followerID
              followeeID
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
          fcmToken
          Notifications {
            items {
              id
              createdAt
              readAt
              type
              userId
              actorId
              updatedAt
              _version
              _deleted
              _lastChangedAt
              notificationPostId
              notificationCommentId
            }
            nextToken
            startedAt
          }
          fleets {
            items {
              id
              createdAt
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
        Post {
          id
          createdAt
          type
          description
          location
          image
          images
          video
          filter
          nofComments
          nofLikes
          userID
          User {
            id
            name
            email
            username
            bio
            website
            nofPosts
            nofFollowers
            nofFollowings
            image
            Posts {
              nextToken
              startedAt
            }
            Comments {
              nextToken
              startedAt
            }
            Likes {
              nextToken
              startedAt
            }
            Followers {
              nextToken
              startedAt
            }
            Followings {
              nextToken
              startedAt
            }
            fcmToken
            Notifications {
              nextToken
              startedAt
            }
            fleets {
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
          Likes {
            items {
              id
              userID
              postID
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
          Comments {
            items {
              id
              createdAt
              comment
              userID
              postID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            nextToken
            startedAt
          }
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        Comment {
          id
          createdAt
          comment
          userID
          postID
          User {
            id
            name
            email
            username
            bio
            website
            nofPosts
            nofFollowers
            nofFollowings
            image
            Posts {
              nextToken
              startedAt
            }
            Comments {
              nextToken
              startedAt
            }
            Likes {
              nextToken
              startedAt
            }
            Followers {
              nextToken
              startedAt
            }
            Followings {
              nextToken
              startedAt
            }
            fcmToken
            Notifications {
              nextToken
              startedAt
            }
            fleets {
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
          Post {
            id
            createdAt
            type
            description
            location
            image
            images
            video
            filter
            nofComments
            nofLikes
            userID
            User {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Likes {
              nextToken
              startedAt
            }
            Comments {
              nextToken
              startedAt
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
        notificationPostId
        notificationCommentId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncNotifications = /* GraphQL */ `
  query SyncNotifications(
    $filter: ModelNotificationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncNotifications(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        createdAt
        readAt
        type
        userId
        User {
          id
          name
          email
          username
          bio
          website
          nofPosts
          nofFollowers
          nofFollowings
          image
          Posts {
            items {
              id
              createdAt
              type
              description
              location
              image
              images
              video
              filter
              nofComments
              nofLikes
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
          Comments {
            items {
              id
              createdAt
              comment
              userID
              postID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            nextToken
            startedAt
          }
          Likes {
            items {
              id
              userID
              postID
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
          Followers {
            items {
              id
              followerID
              followeeID
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
          Followings {
            items {
              id
              followerID
              followeeID
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
          fcmToken
          Notifications {
            items {
              id
              createdAt
              readAt
              type
              userId
              actorId
              updatedAt
              _version
              _deleted
              _lastChangedAt
              notificationPostId
              notificationCommentId
            }
            nextToken
            startedAt
          }
          fleets {
            items {
              id
              createdAt
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
        actorId
        Actor {
          id
          name
          email
          username
          bio
          website
          nofPosts
          nofFollowers
          nofFollowings
          image
          Posts {
            items {
              id
              createdAt
              type
              description
              location
              image
              images
              video
              filter
              nofComments
              nofLikes
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
          Comments {
            items {
              id
              createdAt
              comment
              userID
              postID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            nextToken
            startedAt
          }
          Likes {
            items {
              id
              userID
              postID
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
          Followers {
            items {
              id
              followerID
              followeeID
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
          Followings {
            items {
              id
              followerID
              followeeID
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
          fcmToken
          Notifications {
            items {
              id
              createdAt
              readAt
              type
              userId
              actorId
              updatedAt
              _version
              _deleted
              _lastChangedAt
              notificationPostId
              notificationCommentId
            }
            nextToken
            startedAt
          }
          fleets {
            items {
              id
              createdAt
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
        Post {
          id
          createdAt
          type
          description
          location
          image
          images
          video
          filter
          nofComments
          nofLikes
          userID
          User {
            id
            name
            email
            username
            bio
            website
            nofPosts
            nofFollowers
            nofFollowings
            image
            Posts {
              nextToken
              startedAt
            }
            Comments {
              nextToken
              startedAt
            }
            Likes {
              nextToken
              startedAt
            }
            Followers {
              nextToken
              startedAt
            }
            Followings {
              nextToken
              startedAt
            }
            fcmToken
            Notifications {
              nextToken
              startedAt
            }
            fleets {
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
          Likes {
            items {
              id
              userID
              postID
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
          Comments {
            items {
              id
              createdAt
              comment
              userID
              postID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            nextToken
            startedAt
          }
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        Comment {
          id
          createdAt
          comment
          userID
          postID
          User {
            id
            name
            email
            username
            bio
            website
            nofPosts
            nofFollowers
            nofFollowings
            image
            Posts {
              nextToken
              startedAt
            }
            Comments {
              nextToken
              startedAt
            }
            Likes {
              nextToken
              startedAt
            }
            Followers {
              nextToken
              startedAt
            }
            Followings {
              nextToken
              startedAt
            }
            fcmToken
            Notifications {
              nextToken
              startedAt
            }
            fleets {
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
          Post {
            id
            createdAt
            type
            description
            location
            image
            images
            video
            filter
            nofComments
            nofLikes
            userID
            User {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Likes {
              nextToken
              startedAt
            }
            Comments {
              nextToken
              startedAt
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
        notificationPostId
        notificationCommentId
      }
      nextToken
      startedAt
    }
  }
`;
export const userNotifications = /* GraphQL */ `
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
        createdAt
        readAt
        type
        userId
        User {
          id
          name
          email
          username
          bio
          website
          nofPosts
          nofFollowers
          nofFollowings
          image
          Posts {
            items {
              id
              createdAt
              type
              description
              location
              image
              images
              video
              filter
              nofComments
              nofLikes
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
          Comments {
            items {
              id
              createdAt
              comment
              userID
              postID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            nextToken
            startedAt
          }
          Likes {
            items {
              id
              userID
              postID
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
          Followers {
            items {
              id
              followerID
              followeeID
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
          Followings {
            items {
              id
              followerID
              followeeID
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
          fcmToken
          Notifications {
            items {
              id
              createdAt
              readAt
              type
              userId
              actorId
              updatedAt
              _version
              _deleted
              _lastChangedAt
              notificationPostId
              notificationCommentId
            }
            nextToken
            startedAt
          }
          fleets {
            items {
              id
              createdAt
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
        actorId
        Actor {
          id
          name
          email
          username
          bio
          website
          nofPosts
          nofFollowers
          nofFollowings
          image
          Posts {
            items {
              id
              createdAt
              type
              description
              location
              image
              images
              video
              filter
              nofComments
              nofLikes
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
          Comments {
            items {
              id
              createdAt
              comment
              userID
              postID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            nextToken
            startedAt
          }
          Likes {
            items {
              id
              userID
              postID
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
          Followers {
            items {
              id
              followerID
              followeeID
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
          Followings {
            items {
              id
              followerID
              followeeID
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
          fcmToken
          Notifications {
            items {
              id
              createdAt
              readAt
              type
              userId
              actorId
              updatedAt
              _version
              _deleted
              _lastChangedAt
              notificationPostId
              notificationCommentId
            }
            nextToken
            startedAt
          }
          fleets {
            items {
              id
              createdAt
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
        Post {
          id
          createdAt
          type
          description
          location
          image
          images
          video
          filter
          nofComments
          nofLikes
          userID
          User {
            id
            name
            email
            username
            bio
            website
            nofPosts
            nofFollowers
            nofFollowings
            image
            Posts {
              nextToken
              startedAt
            }
            Comments {
              nextToken
              startedAt
            }
            Likes {
              nextToken
              startedAt
            }
            Followers {
              nextToken
              startedAt
            }
            Followings {
              nextToken
              startedAt
            }
            fcmToken
            Notifications {
              nextToken
              startedAt
            }
            fleets {
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
          Likes {
            items {
              id
              userID
              postID
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
          Comments {
            items {
              id
              createdAt
              comment
              userID
              postID
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            nextToken
            startedAt
          }
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        Comment {
          id
          createdAt
          comment
          userID
          postID
          User {
            id
            name
            email
            username
            bio
            website
            nofPosts
            nofFollowers
            nofFollowings
            image
            Posts {
              nextToken
              startedAt
            }
            Comments {
              nextToken
              startedAt
            }
            Likes {
              nextToken
              startedAt
            }
            Followers {
              nextToken
              startedAt
            }
            Followings {
              nextToken
              startedAt
            }
            fcmToken
            Notifications {
              nextToken
              startedAt
            }
            fleets {
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
          Post {
            id
            createdAt
            type
            description
            location
            image
            images
            video
            filter
            nofComments
            nofLikes
            userID
            User {
              id
              name
              email
              username
              bio
              website
              nofPosts
              nofFollowers
              nofFollowings
              image
              fcmToken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            Likes {
              nextToken
              startedAt
            }
            Comments {
              nextToken
              startedAt
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
        notificationPostId
        notificationCommentId
      }
      nextToken
      startedAt
    }
  }
`;
