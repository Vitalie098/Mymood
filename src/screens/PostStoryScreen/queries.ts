import { gql } from "@apollo/client";

export const createFleet = gql`
  mutation CreateFleet(
    $input: CreateFleetInput!
    $condition: ModelFleetConditionInput
  ) {
    createFleet(input: $input, condition: $condition) {
      id
      createdAt
      type
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
  }
`;