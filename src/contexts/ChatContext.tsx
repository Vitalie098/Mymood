import React, { createContext, useContext, useState, useEffect } from "react"
import {StreamChat, Channel} from "stream-chat"
import { useAuthContext } from "./AuthContext"
import { useNavigation } from '@react-navigation/native'
import { ActivityIndicator } from "react-native"
import { Chat, OverlayProvider } from "stream-chat-react-native"
import { Post, UserFollowersQuery, UserFollowersQueryVariables, UserFollowingsQuery, UserFollowingsQueryVariables } from "../API"
import { useQuery } from "@apollo/client"
import { userFollowers, userFollowings } from "./queries"
import { DEFAULT_USER_IMAGE } from "../assets/avatars/default-user-image.png"
import { Storage } from "aws-amplify"

const chatNames = ["aws", "bvt", "nsa", "def", "gtj", "bbt", 'yyun', "vbyt"] // change later with a library

export type ChatContextType = {
  currentChannel?: Channel,
  chatClient: StreamChat,
  setChatClient: (client: StreamChat) => void,
  startDMChatRoom: (id: string) => void,
  setCurrentChannel: (channel: Channel) => void,
  setSelectedUsers: (array: string[]) => void, 
  selectedUsers: string[],
  sendPost: (id: string, item: Post, userImage: string, postImage: string) => void
}

const ChatContext = createContext<ChatContextType>({
    currentChannel: undefined
})

export const ChatContextProvider = ({children}: {children: React.ReactNode}) => {
  const [chatClient, setChatClient] = useState<StreamChat>()
  const [unreadChannels, setUnreadChannels] = useState(0)
  const [currentChannel, setCurrentChannel] = useState<Channel>()
  const [selectedUsers, setSelectedUsers] = useState<string[]>([])
  const {user, userId} = useAuthContext()

  const navigation = useNavigation()
  const {data, loading, error} = useQuery
    <
      UserFollowersQuery, 
      UserFollowersQueryVariables
    >(userFollowers, { variables: {followeeID: userId}})

    const users = data?.userFollowers?.items?.filter(i => !i?._deleted).map(i => i?.Followee?.id) || []

    useEffect(() => {
      const initChat = async () => {
        if(!user) {
          return 
        }
        const client = StreamChat.getInstance("abex8enfg8fj")

        await client.connectUser({
          id: userId,
          name: user.attributes.name,
          image: DEFAULT_USER_IMAGE
        }, client.devToken(userId))

        setUnreadChannels(client.user.unread_channels)
        setChatClient(client)
      }

      initChat()
    }, [])

    useEffect(() => {
      return () => {
          if(chatClient) {
            chatClient.disconnectUser()
          }
      }
    }, [])

  const getRandomNumber = () => {
    return Math.floor(Math.random() * 8)
  }

  const startDMChatRoom = async (chatWithUser: string) => {
    if(!chatWithUser) {
        return
    }
    let newChannel

    if(users.includes(chatWithUser)) {
      newChannel = chatClient?.channel("messaging", {
          members: [userId, chatWithUser]
      })

      await newChannel?.watch({ presence: true })
    }else {
      newChannel = chatClient?.channel("messaging", `awesome-${chatNames[getRandomNumber()]}-${chatNames[getRandomNumber()]}-${chatNames[getRandomNumber()]}-${chatNames[getRandomNumber()]}`)

      await newChannel?.watch({ presence: true })
      await newChannel?.addMembers([userId])
      await newChannel?.inviteMembers([chatWithUser])
    }
    setCurrentChannel(newChannel)
    navigation.navigate("Chat", {screen: "ChatRoom"})
  }

  const sendPost = async (chatWithUser: string, post: Post) => {
    if(!chatWithUser) return

    const privateFilters = { type: "messaging", members: { $eq: [userId, chatWithUser] }, member_count: {$eq: 2}}
    const channel = await chatClient?.queryChannels(privateFilters)
    let imageUri = null
    let userUri = null

    if(post.image) {
      imageUri = await Storage.get(post.image)
    }else if(post.images) {
      imageUri = await Storage.get(post.images[0])
    }

    if(post.User?.image) {
      userUri = await Storage.get(post.User?.image)
    }

    if(channel) {
      channel[0].sendMessage({
	      text: "",
	      attachments: [
	        {
	          type: 'Post',
            description: post.description,
            userName: post.User?.name,
            userImage: userUri || DEFAULT_USER_IMAGE,
            postImage: imageUri,
            postId: post.id
          },
        ],
      })
    }
  }
  
  if (!chatClient) {
    return <ActivityIndicator />
  }

  const value = {
    chatClient,
    setChatClient,
    startDMChatRoom,
    currentChannel,
    setCurrentChannel,
    setSelectedUsers, 
    selectedUsers,
    sendPost,
    unreadChannels,
    setUnreadChannels
  }

  return (
    <OverlayProvider>
        <Chat client={chatClient}>
          <ChatContext.Provider value={value}>
          {children}
          </ChatContext.Provider>
        </Chat>
    </OverlayProvider>
  )
}

export const useChatAppContext = () => useContext(ChatContext)