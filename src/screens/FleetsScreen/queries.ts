import { gql } from "@apollo/client";

export const listFleets = gql`
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
          username
      
          image
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