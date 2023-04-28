import { View, Text, FlatList, Image} from 'react-native'
import React, { useEffect, useState } from 'react'

import { userFollowings } from './queries';
import { useQuery } from '@apollo/client';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useAuthContext } from '../../contexts/AuthContext';
import { Post, UserFollowingsQuery, UserFollowingsQueryVariables } from '../../API';
import { useChatAppContext } from '../../contexts/ChatContext';
import { useRoute } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const SendPost = ({post}: {post: Post}) => {
  const {sendPost} = useChatAppContext()
  const {userId} = useAuthContext()
  const route = useRoute()
  const insets = useSafeAreaInsets()

  const {data, loading, error} = useQuery
    <
        UserFollowingsQuery, 
        UserFollowingsQueryVariables
    >(userFollowings, { variables: { followerID: userId}});

    const users = data?.userFollowings?.items?.filter(i => !i?._deleted).map(i => i?.Followee) || [];

  return (
    <View style={{top: insets.top, backgroundColor: "#fff", flex: 1, paddingTop: 20}}>
        <FlatList
            data={users}
            renderItem={({item}) => (
                <View 
                  style={{flexDirection: "row", marginVertical: 5, alignItems: "center", justifyContent: "space-between", marginHorizontal: 10}} 
                >
                  <View style={{flexDirection: "row", alignItems: "center"}}>
                      <Image source={{uri: 'https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745'}} style={{width: 50, aspectRatio: 1, borderRadius: 25}}/>
                      <Text style={{fontWeight: "600", fontSize: 18, marginLeft: 10}}>{item?.name}</Text>
                  </View>

                  <TouchableOpacity onPress={() => sendPost(item?.id, post)}>
                    <Text>Send</Text>
                  </TouchableOpacity>
              </View>
            )}
        />
    </View>
  )
}

export default SendPost