import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../../theme/colors';
import {Post} from '../../API';
import {S3Image} from 'aws-amplify-react-native';
import { useNavigation } from '@react-navigation/native';

const FeedGridItem = ({post}: {post: Post}) => {
  const navigation = useNavigation()

  return (
    <TouchableOpacity 
      style={{flex: 1, padding: 1, aspectRatio: 1, maxWidth: '33.33%'}} 
      onPress={() => navigation.navigate("Post", {id: post.id})}
    >
      <S3Image imgKey={post.image || post.images?.[0]} style={{flex: 1}} />
      {post.images && (
        <MaterialIcons
          name="collections"
          size={16}
          color={colors.white}
          style={{position: 'absolute', top: 5, right: 5}}
        />
      )}
    </TouchableOpacity>
  );
};

export default FeedGridItem;
