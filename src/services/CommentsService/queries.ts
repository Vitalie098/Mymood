import {gql} from '@apollo/client';

export const getPost = gql`
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      nofComments
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;

export const updatePost = gql`
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
      id
      nofComments
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;

export const createComment = gql`
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      comment
      userID
      postID
      Post {
        id
        nofComments
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      User {
        id
        image
        username
        name
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;

export const createNotification = gql`
  mutation CreateNotification(
    $input: CreateNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    createNotification(input: $input, condition: $condition) {
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
  }
`;