import { gql } from "@apollo/client";

export const updateFleet = gql`
  mutation UpdateFleet(
    $input: UpdateFleetInput!
    $condition: ModelFleetConditionInput
  ) {
    updateFleet(input: $input, condition: $condition) {
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
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;