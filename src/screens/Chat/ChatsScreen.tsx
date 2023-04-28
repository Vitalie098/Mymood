import { View, Text, ActivityIndicator, Image, TouchableOpacity } from 'react-native'
import React, {useEffect, useState} from 'react'
import { ChannelList } from 'stream-chat-react-native'
import { useChatAppContext } from '../../contexts/ChatContext'
import {Channel} from "stream-chat"
import { useNavigation } from '@react-navigation/native'
import { useAuthContext } from '../../contexts/AuthContext'
import { UserFollowingsQuery, UserFollowingsQueryVariables } from '../../API'
import { userFollowings } from './queries'
import { useQuery } from '@apollo/client'
import ApiErrorMessage from '../../components/ApiErrorMessage'
import { FlatList } from 'react-native-gesture-handler'
import colors from '../../theme/colors'
import { DEFAULT_USER_IMAGE } from '../../assets/avatars/default-user-image.png'

const ChatsScreen = () => {
  const [isJoinedChannels, setIsJoinedChannels] = useState(true)
  const [onlineUsers, setOnlineUsers] = useState([])
  const {setCurrentChannel, chatClient} = useChatAppContext()
  const { userId } = useAuthContext()

  const navigation = useNavigation()
  const privateFilters = { type: "messaging", members: { $in: [userId] }, joined: {$eq: isJoinedChannels} }

  const {data, loading, error} = useQuery
    <
      UserFollowingsQuery, 
      UserFollowingsQueryVariables
    >(userFollowings, { variables: { followerID: userId}})

  useEffect(() => {
    const getAllOnlineUsers = async () => {
        if(!data) return
        const users = data?.userFollowings?.items?.filter(i => !i?._deleted).map(i => i?.Followee?.id) || []

        if(users.length > 0) {
          const response = await chatClient.queryUsers(
            { id: { $in: users } },
            { last_active: -1},
            { presence: true },
          )

        const online = response.users.filter(item => item.online)
        setOnlineUsers(online)
        }
    }

    getAllOnlineUsers()
  }, [data])

  const onSelect = (chanel: Channel) => {
    setCurrentChannel(chanel)
    navigation.navigate("ChatRoom")
  }

  if (loading) {
    return <ActivityIndicator />
  }

  if (error) {
    return (
      <ApiErrorMessage
        title="Error fetching followers"
        message={error.message}
      />
    )
  }

  return (
    <View style={{flex: 1}}>
        <FlatList 
            data={onlineUsers}
            horizontal
            style={{flexGrow: 0, marginHorizontal: 10, paddingTop: 10}}
            renderItem={({item}) => (
                <View style={{marginRight: 15}}>
                    <Image source={{uri: DEFAULT_USER_IMAGE}} style={{width: 70, height: 70, borderRadius: 50}} />
                    <View style={{width: 15, height: 15, backgroundColor: "#6ADC7C", borderRadius: 10, position: "absolute", bottom: 25, right: 0, borderWidth: 3, borderColor: "#fff"}}/>
                    <Text style={{fontWeight: "500", textAlign: "center", marginTop: 5}}>{item.name}</Text>
                </View>
            )}
        />
        <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginHorizontal: 20}}>
            <TouchableOpacity onPress={() => setIsJoinedChannels(true)}>
                <Text style={{fontWeight: "bold", marginVertical: 20}}>Messages</Text>
            </TouchableOpacity>
           
            <TouchableOpacity onPress={() => setIsJoinedChannels(false)}>
              <Text style={{fontWeight: "500", marginVertical: 20, color: "blue"}}>Requests</Text>
            </TouchableOpacity>
        </View>
        <ChannelList onSelect={onSelect} filters={privateFilters}/>
    </View>

  )
}

export default ChatsScreen