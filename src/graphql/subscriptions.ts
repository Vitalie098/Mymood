/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCommentByPostId = /* GraphQL */ `
  subscription OnCreateCommentByPostId($postID: ID!) {
    onCreateCommentByPostId(postID: $postID) {
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
export const onCreateLike = /* GraphQL */ `
  subscription OnCreateLike(
    $filter: ModelSubscriptionLikeFilterInput
    $owner: String
  ) {
    onCreateLike(filter: $filter, owner: $owner) {
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
export const onUpdateLike = /* GraphQL */ `
  subscription OnUpdateLike(
    $filter: ModelSubscriptionLikeFilterInput
    $owner: String
  ) {
    onUpdateLike(filter: $filter, owner: $owner) {
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
export const onDeleteLike = /* GraphQL */ `
  subscription OnDeleteLike(
    $filter: ModelSubscriptionLikeFilterInput
    $owner: String
  ) {
    onDeleteLike(filter: $filter, owner: $owner) {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment(
    $filter: ModelSubscriptionCommentFilterInput
    $owner: String
  ) {
    onCreateComment(filter: $filter, owner: $owner) {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment(
    $filter: ModelSubscriptionCommentFilterInput
    $owner: String
  ) {
    onUpdateComment(filter: $filter, owner: $owner) {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment(
    $filter: ModelSubscriptionCommentFilterInput
    $owner: String
  ) {
    onDeleteComment(filter: $filter, owner: $owner) {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost(
    $filter: ModelSubscriptionPostFilterInput
    $owner: String
  ) {
    onCreatePost(filter: $filter, owner: $owner) {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost(
    $filter: ModelSubscriptionPostFilterInput
    $owner: String
  ) {
    onUpdatePost(filter: $filter, owner: $owner) {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost(
    $filter: ModelSubscriptionPostFilterInput
    $owner: String
  ) {
    onDeletePost(filter: $filter, owner: $owner) {
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
export const onCreateFleet = /* GraphQL */ `
  subscription OnCreateFleet(
    $filter: ModelSubscriptionFleetFilterInput
    $owner: String
  ) {
    onCreateFleet(filter: $filter, owner: $owner) {
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
export const onUpdateFleet = /* GraphQL */ `
  subscription OnUpdateFleet(
    $filter: ModelSubscriptionFleetFilterInput
    $owner: String
  ) {
    onUpdateFleet(filter: $filter, owner: $owner) {
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
export const onDeleteFleet = /* GraphQL */ `
  subscription OnDeleteFleet(
    $filter: ModelSubscriptionFleetFilterInput
    $owner: String
  ) {
    onDeleteFleet(filter: $filter, owner: $owner) {
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
export const onCreateUserFeedFleet = /* GraphQL */ `
  subscription OnCreateUserFeedFleet(
    $filter: ModelSubscriptionUserFeedFleetFilterInput
    $owner: String
  ) {
    onCreateUserFeedFleet(filter: $filter, owner: $owner) {
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
export const onUpdateUserFeedFleet = /* GraphQL */ `
  subscription OnUpdateUserFeedFleet(
    $filter: ModelSubscriptionUserFeedFleetFilterInput
    $owner: String
  ) {
    onUpdateUserFeedFleet(filter: $filter, owner: $owner) {
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
export const onDeleteUserFeedFleet = /* GraphQL */ `
  subscription OnDeleteUserFeedFleet(
    $filter: ModelSubscriptionUserFeedFleetFilterInput
    $owner: String
  ) {
    onDeleteUserFeedFleet(filter: $filter, owner: $owner) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onCreateUser(filter: $filter, owner: $owner) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onUpdateUser(filter: $filter, owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onDeleteUser(filter: $filter, owner: $owner) {
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
export const onCreateUserFollow = /* GraphQL */ `
  subscription OnCreateUserFollow(
    $filter: ModelSubscriptionUserFollowFilterInput
    $owner: String
  ) {
    onCreateUserFollow(filter: $filter, owner: $owner) {
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
export const onUpdateUserFollow = /* GraphQL */ `
  subscription OnUpdateUserFollow(
    $filter: ModelSubscriptionUserFollowFilterInput
    $owner: String
  ) {
    onUpdateUserFollow(filter: $filter, owner: $owner) {
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
export const onDeleteUserFollow = /* GraphQL */ `
  subscription OnDeleteUserFollow(
    $filter: ModelSubscriptionUserFollowFilterInput
    $owner: String
  ) {
    onDeleteUserFollow(filter: $filter, owner: $owner) {
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
export const onCreateUserFeedPost = /* GraphQL */ `
  subscription OnCreateUserFeedPost(
    $filter: ModelSubscriptionUserFeedPostFilterInput
    $owner: String
  ) {
    onCreateUserFeedPost(filter: $filter, owner: $owner) {
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
export const onUpdateUserFeedPost = /* GraphQL */ `
  subscription OnUpdateUserFeedPost(
    $filter: ModelSubscriptionUserFeedPostFilterInput
    $owner: String
  ) {
    onUpdateUserFeedPost(filter: $filter, owner: $owner) {
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
export const onDeleteUserFeedPost = /* GraphQL */ `
  subscription OnDeleteUserFeedPost(
    $filter: ModelSubscriptionUserFeedPostFilterInput
    $owner: String
  ) {
    onDeleteUserFeedPost(filter: $filter, owner: $owner) {
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
export const onCreateNotification = /* GraphQL */ `
  subscription OnCreateNotification(
    $filter: ModelSubscriptionNotificationFilterInput
  ) {
    onCreateNotification(filter: $filter) {
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
export const onUpdateNotification = /* GraphQL */ `
  subscription OnUpdateNotification(
    $filter: ModelSubscriptionNotificationFilterInput
  ) {
    onUpdateNotification(filter: $filter) {
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
export const onDeleteNotification = /* GraphQL */ `
  subscription OnDeleteNotification(
    $filter: ModelSubscriptionNotificationFilterInput
  ) {
    onDeleteNotification(filter: $filter) {
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
