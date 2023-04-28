import { View, Text, FlatList, Image} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useAuthContext } from '../../contexts/AuthContext'
import { useChatAppContext } from '../../contexts/ChatContext'
import { UserFollowingsQuery, UserFollowingsQueryVariables } from '../../API'
import { userFollowings } from './queries'
import { useQuery } from '@apollo/client'
import { TouchableOpacity } from 'react-native-gesture-handler'

const AddMembersScreen = () => {
    const {chatClient, setSelectedUsers, selectedUsers} = useChatAppContext()
    const {userId} = useAuthContext()

  const {data, loading, error} = useQuery
    <
        UserFollowingsQuery, 
        UserFollowingsQueryVariables
    >(userFollowings, { variables: { followerID: userId}})

    const users = data?.userFollowings?.items?.filter(i => !i?._deleted).map(i => i?.Followee) || []

    const selectUser = (idUser: string) => {
        if(selectedUsers.includes(idUser)) {
            setSelectedUsers(prev => prev.filter(id => id !== idUser))
        }else {
            setSelectedUsers(prev => [...prev, idUser])
        }
    }
    
  return (
    <View>
        <FlatList
            data={users}
            renderItem={({item}) => (
                <TouchableOpacity style={{flexDirection: "row", marginVertical: 5, alignItems: "center", justifyContent: "space-between", marginHorizontal: 10}} onPress={() => selectUser(item.id)}>
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                        <Image source={{uri: 'https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745'}} style={{width: 50, aspectRatio: 1, borderRadius: 25}}/>
                        <Text style={{fontWeight: "600", fontSize: 18, marginLeft: 10}}>{item.name}</Text>
                    </View>

                    {!selectedUsers.includes(item?.id) 
                        ? (<View style={{width: 25, height: 25, backgroundColor: "transparent", borderColor: "#000", borderWidth: 2, borderRadius: 15}}/>)
                        : (<View style={{width: 25, height: 25, backgroundColor: "lightgreen", borderRadius: 15}} />)
                    }
                </TouchableOpacity>
            )}
        />
    </View>
  )
}

export default AddMembersScreen