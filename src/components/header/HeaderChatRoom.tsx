import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { ChatContextType, useChatAppContext } from '../../contexts/ChatContext'
import { useAuthContext } from '../../contexts/AuthContext'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useNavigation, useRoute } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import dayjs from 'dayjs'

const HeaderChatRoom = () => {
    const [user, setUser] = useState({})
    const [users, setUsers] = useState("")
    const {currentChannel} = useChatAppContext<ChatContextType>()
    const {user: currentUser, userId} = useAuthContext()
    const insets = useSafeAreaInsets()
    const navigation = useNavigation()
    const route = useRoute()

    useEffect(() => {
        if(currentChannel && currentChannel.data?.member_count === 2) {
            const key = Object.keys(currentChannel?.state.members).filter(key => key !== userId)
            setUser(currentChannel?.state?.members[key[0]])
        }else if(currentChannel){
            const keys = Object.keys(currentChannel?.state.members)
            const usersName = keys.map(key => currentChannel?.state?.members[key]?.user?.name).join(", ")
            setUsers(usersName)
        }
    },[])

    const goToUserProfile = () => {  
        if(currentChannel?.data?.member_count === 2){
            navigation.navigate('UserProfile', {
                screen: 'Profile',
                params: {userId: user.user.id},
            })
        } 
    }

  return (
    <View style={{ paddingHorizontal: 15, paddingTop: insets.top, flexDirection: "row", alignItems: "center", paddingBottom: 10, justifyContent: "space-between"}}>
        <View style={{flexDirection: "row", alignItems: "center"}}>

            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons
                    name="arrow-back-outline"
                    size={28}
                    style={{marginRight: 15}}
                />
            </TouchableOpacity>
        
            {currentChannel?.data?.member_count === 2 && (
                <View>
                    <Image source={{uri: user?.user?.image}} style={{width: 30, height: 30, borderRadius: 25, marginRight: 10}}/>
                    {user?.user?.online && (
                        <View style={{width: 12, height: 12, backgroundColor: "#6ADC7C", borderRadius: 10, position: "absolute", bottom: 0, right: 6, borderWidth: 2, borderColor: "#fff"}}/>
                    )}
                </View>
            )} 

            <View>
                <Text style={{fontWeight: "bold", fontSize: route.name !== "Chats" ? 16 : 25}} onPress={goToUserProfile}>{currentChannel?.data?.member_count === 2 ? user?.user?.name : users}</Text>
                {currentChannel?.data?.member_count === 2 && (<Text>{user?.user?.online ? "online" : `Last time ${dayjs(user?.user?.last_active).fromNow()}`}</Text>)}
            </View>
        </View> 
    </View>
  )
}

export default HeaderChatRoom

