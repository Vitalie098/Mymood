import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { ChatContextType, useChatAppContext } from '../../contexts/ChatContext'
import { useAuthContext } from '../../contexts/AuthContext'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useNavigation, useRoute } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import dayjs from 'dayjs'

const HeaderAddMembers = () => {
    const {selectedUsers, chatClient, setCurrentChannel} = useChatAppContext<ChatContextType>()
    const {user: currentUser, userId} = useAuthContext()
    const insets = useSafeAreaInsets()
    const navigation = useNavigation()
    const route = useRoute()

    const createNewChat = () => {
        const createChannel = async () => {
            let newChannel = null
            if(selectedUsers.length > 2) {
                newChannel = chatClient.channel("livestream", "public", {
                    name: "Public",
                    members: [...selectedUsers, userId] 
                })
            }else {
                newChannel = chatClient?.channel("messaging", {
                    members: [...selectedUsers, userId]
                })
            }

            await newChannel.watch()
            setCurrentChannel(newChannel)
            navigation.popToTop()
            navigation.navigate("Chat", {screen: "ChatRoom"})
            
        }

        createChannel()
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
        
            <Text style={{fontWeight: "700", fontSize: 20}} numberOfLines={2}>New message</Text>
        </View>

        <TouchableOpacity disabled={selectedUsers.length === 0} onPress={createNewChat}>
            <Text style={{fontWeight: "600", fontSize: 17, color: selectedUsers.length === 0 ? "grey" : "blue"}}>Create chat</Text>
        </TouchableOpacity>
       
    </View>
  )
}

export default HeaderAddMembers