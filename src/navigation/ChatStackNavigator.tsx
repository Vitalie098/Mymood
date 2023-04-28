import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Pressable } from "react-native"
import ChatRoomScreen from "../screens/Chat/ChatRoomScreen"
import ChatsScreen from '../screens/Chat/ChatsScreen'
import Ionicons from 'react-native-vector-icons/Ionicons'
import HeaderChatRoom from "../components/header/HeaderChatRoom"
import AddMembersScreen from "../screens/Chat/AddMembersScreen"
import HeaderChats from "../components/header/HeaderChats"
import HeaderAddMembers from "../components/header/HeaderAddMembers"

const Stack = createNativeStackNavigator()

export const ChatStackNavigator = () => (
    <Stack.Navigator initialRouteName="Chats">
        <Stack.Screen 
            name="Chats" 
            component={ChatsScreen} 
            options={{
                header: () => <HeaderChats />
            }}
        />
        <Stack.Screen 
            name="ChatRoom" 
            component={ChatRoomScreen} 
            options={{
                header: () => <HeaderChatRoom />
            }}
        />
        <Stack.Screen
            name="AddMembers"
            component={AddMembersScreen}
            options={{
                header: () => <HeaderAddMembers />
            }}
        />
    </Stack.Navigator>
)