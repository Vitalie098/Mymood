import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { ChatContextType, useChatAppContext } from '../../contexts/ChatContext'
import { useAuthContext } from '../../contexts/AuthContext'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useNavigation, useRoute } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import dayjs from 'dayjs'

const HeaderChats = () => {
    const {user: currentUser} = useAuthContext()
    const insets = useSafeAreaInsets()
    const navigation = useNavigation()
    const route = useRoute()

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
            <Text style={{fontWeight: "bold", fontSize: 25}}>{currentUser?.attributes?.name}</Text>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("AddMembers")} >
            <Ionicons
                name="people-sharp"
                size={28}
                style={{marginRight: 15}}
            />
        </TouchableOpacity>
    </View>
  )
}

export default HeaderChats

