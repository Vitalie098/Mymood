import { View, Text, Touchable, Pressable, Image } from 'react-native'
import React, {useEffect, useState} from 'react'
import dayjs from 'dayjs'
import { useChatAppContext } from '../../contexts/ChatContext'
import { Channel, MessageInput, MessageList, MessageAvatar, useMessageInputContext, useMessageContext} from 'stream-chat-react-native'
import { useNavigation } from '@react-navigation/native'
import { useAuthContext } from '../../contexts/AuthContext'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Storage } from 'aws-amplify'

const ChatRoomScreen = () => {
  const [isReady, setIsReady] = useState(false)
  const [userUri, setUserUri] = useState<null | string>(null)
  const [postUri, setPostUri] = useState<null | string>(null)
  const [isRequestForApply, setIsRequestForApply] = useState(false)
  const {currentChannel, setCurrentChannel, chatClient, setUnreadChannels} = useChatAppContext()
  const navigation = useNavigation()

  const insets = useSafeAreaInsets()

  useEffect(() => {
    if(currentChannel?.state?.membership?.invited && !currentChannel?.state?.membership?.invite_accepted_at) {
      setIsRequestForApply(true)
    }

    if(currentChannel?.state.unreadCount > 0) {
      setUnreadChannels(prev => prev - 1)
    }
    // setUnreadChannels(currentChannel?.state.unreadCount)
  }, [])

  const acceptInvite = async () => {
    const response = await currentChannel?.acceptInvite()
    setIsRequestForApply(false)
  }

  const rejectInvite = async () => {
    await currentChannel?.rejectInvite()
    navigation.goBack()
  }

  if(!currentChannel) {
    return <Text>Choose a channel from channelList</Text>
  }

	const PostCard = ({ type, postImage, userImage, userName, description, postId }) => {
		if (type === 'Post') {
			return (
				<TouchableOpacity 
          onPress={() => navigation.navigate("Post", {id: postId})}
          style={{backgroundColor: "#fff", borderRadius: 20, paddingVertical: 15}}
        >
          <View style={{flexDirection: "row", alignItems: "center", paddingHorizontal: 12, marginBottom: 12}}>
            <Image source={{uri: userImage}} style={{marginRight: 10, width: 30, height: 30, borderRadius: 25}}/>
            <Text style={{fontWeight: "700", color: "#000"}}>{userName}</Text>
          </View>
          <View style={{height: 200, width: 300}}>
            <Image source={{ uri: postImage}} style={{ width: "100%", height: "100%" }} />
          </View>

          <View style={{paddingVertical: 10, paddingHorizontal: 12}}>
             <Text numberOfLines={2} adjustsFontSizeToFit={true}><Text style={{fontWeight: "700", color: "#000"}}>{userName}</Text> {description}</Text>
          </View>
         
				</TouchableOpacity>
			)
		}
	}

  return (
    <Channel channel={currentChannel} Card={PostCard}>
        <MessageList />
        {currentChannel?.state?.membership?.invited && !currentChannel?.state?.membership?.invite_accepted_at && isRequestForApply ? (
          <View style={{marginBottom: 50}}>
            <View style={{padding: 20, alignItems: 'center'}}>
              <Text>Doresti sa accepti cererea lui <Text style={{fontWeight: "bold"}}>{currentChannel?.data?.created_by.name}?</Text></Text>
              <Text style={{fontSize: 12, color: "grey", textAlign: "center"}}>Daca o sa accepti cererea, proprietarul aceui profil va putea de-asemenea sa va sune sa va vada status daca sunteti online sau nu si sa vada daca i-ati citit mesajele</Text>
            </View>

            <View style={{flexDirection: "row", alignItems: "center"}}>
              <Pressable style={{ borderWidth: 1, borderColor: "lightgrey", padding: 10, borderLeftWidth: 0, borderBottomWidth: 0, flex: 1, borderRightWidth: 0}} onPress={rejectInvite}>
                <Text style={{fontWeight: "600", color: "red", textAlign: "center"}}>Sterge</Text>
              </Pressable>

               <Pressable style={{ padding: 10, borderWidth: 1, borderColor: "lightgrey", borderBottomWidth: 0, borderRightWidth: 0, flex: 1 }} onPress={acceptInvite}>
                <Text style={{fontWeight: "600", color: "blue", textAlign: "center"}}>Accepta</Text>
              </Pressable>
            </View>
          </View>
        )
        : (
          <View style={{paddingBottom: 20, backgroundColor: "#fff"}}>
            <MessageInput/>
          </View>
        )
        }
    </Channel>
  )
}

export default ChatRoomScreen