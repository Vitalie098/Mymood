import {gql} from '@apollo/client';

export const createPost = gql`
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
      id
      description
      location
      image
      images
      video
      nofComments
      nofLikes
      userID
      User {
        id
        nofPosts
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;