import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen'
import {Image, Pressable, Text, View} from 'react-native'
import {HomeStackNavigatorParamList} from '../types/navigation'
import UpdatePostScreen from '../screens/UpdatePostScreen'
import PostLikesScreen from '../screens/PostLikesScreen'
import ProfileStackNavigator from './ProfileStackNavigator'
import { ChatStackNavigator } from './ChatStackNavigator'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { ChatContextProvider, useChatAppContext } from '../contexts/ChatContext'
import CreateStoryScreen from '../screens/CreateStoryScreen/CreateStoryScreen'
import { PostStoryScreen } from '../screens/PostStoryScreen/PostStoryScreen'
import FleetsScreen from '../screens/FleetsScreen/FleetsScreen'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNotificationContext } from '../contexts/NotificationContext'
import NotificationsScreen from '../screens/NotificationsScreen'
const Stack = createNativeStackNavigator<HomeStackNavigatorParamList>()

const HomeStackNavigator = () => {
  const {unreadChannels} = useChatAppContext()
  const {newNotifications} = useNotificationContext()

  return (
      <Stack.Navigator>
        <Stack.Screen
          name="Feed"
          component={HomeScreen}
          options={({ navigation }) => ({
            headerTitle: "Mymood", 
            headerTitleAlign: 'center',
            headerRight: () => (
              <View style={{flexDirection: "row", alignItems: "center"}}>
                <Pressable 
                  style={{marginRight: 20}} 
                  onPress={() => navigation.navigate("Notifications")}
                >
                  <MaterialCommunityIcons
                    name="heart-outline"
                    size={28}
                  />

                  {newNotifications > 0 && (
                    <View style={{position: "absolute", width: 20, height: 20, backgroundColor: "red", borderRadius: 100, justifyContent: "center", alignItems: 'center', right: -8, top: -5}}>
                      <Text style={{color: "#fff"}}>{newNotifications}</Text>
                    </View>
                  )}
                </Pressable>
        
                <Pressable
                  onPress={() => navigation.navigate("Chat")}
                  style={({ pressed }) => ({
                    opacity: pressed ? 0.5 : 1,
                  })}
                >
                  <Ionicons
                    name="chatbubble-ellipses-outline"
                    size={28}
                  />
                  {unreadChannels > 0 && (
                    <View style={{position: "absolute", width: 20, height: 20, backgroundColor: "red", borderRadius: 100, justifyContent: "center", alignItems: 'center', right: -8, top: -5}}>
                      <Text style={{color: "#fff"}}>{unreadChannels}</Text>
                    </View>
                  )}
                  
                </Pressable>
              </View>  
            ),
          })}
        />
        <Stack.Screen
          name="UserProfile"
          component={ProfileStackNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UpdatePost"
          component={UpdatePostScreen}
          options={{title: 'Update Post'}}
        />
        <Stack.Screen
          name="PostLikes"
          component={PostLikesScreen}
          options={{title: 'Post Likes'}}
        />
        <Stack.Screen 
          name="Chat"
          component={ChatStackNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="CreateStory"
          component={CreateStoryScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="PostStory"
          component={PostStoryScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Fleets"
          component={FleetsScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Notifications"
          component={NotificationsScreen}
        />
      </Stack.Navigator>
      
      
  )
}

export default HomeStackNavigator
