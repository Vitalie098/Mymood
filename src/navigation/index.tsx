import {LinkingOptions, NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import BottomTabNavigator from './BottomTabNavigator'
import CommentsScreen from '../screens/CommentsScreen/CommentsScreen'
import {RootNavigatorParamList} from '../types/navigation'
import AuthStackNavigator from './AuthStackNavigator'
import {useAuthContext} from '../contexts/AuthContext'
import React from 'react'
import {View, ActivityIndicator} from 'react-native'
import {useQuery} from '@apollo/client'
import {getUser} from './queries'
import {GetUserQuery, GetUserQueryVariables} from '../API'
import EditProfileScreen from '../screens/EditProfileScreen'
import { ChatContextProvider } from '../contexts/ChatContext'
import PostLikesScreen from '../screens/PostLikesScreen'
import PostScreen from '../screens/PostScreen'
import PushNotifications from '../services/PushNotifications'

const Stack = createNativeStackNavigator<RootNavigatorParamList>()

const linking: LinkingOptions<RootNavigatorParamList> = {
  prefixes: ['mymood://', 'https://mymood.com'],
  config: {
    initialRouteName: 'Home',
    screens: {
      Comments: 'comments',
      Home: {
        screens: {
          HomeStack: {
            initialRouteName: 'Feed',
            screens: {
              UserProfile: 'user/:userId',
            },
          },
        },
      },
    },
  },
}

const Navigation = () => {
  const {user, userId} = useAuthContext()
  const {data, loading, error} = useQuery<GetUserQuery, GetUserQueryVariables>(
    getUser,
    {variables: {id: userId}},
  )
  const userData = data?.getUser
  console.log(userData)

  if (user === undefined || loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator />
      </View>
    )
  }

  if(!user) {
    return (
      <NavigationContainer linking={linking}>
        <Stack.Navigator screenOptions={{headerShown: true}}>
        <Stack.Screen
          name="Auth"
          component={AuthStackNavigator}
          options={{headerShown: false}}
        />
        </Stack.Navigator>

    </NavigationContainer>
    )
  }

  let stackScreens = null
  if (!user) {
    stackScreens = (
      <Stack.Screen
        name="Auth"
        component={AuthStackNavigator}
        options={{headerShown: false}}
      />
    )
  } else if (!userData?.username) {
    stackScreens = (
      <Stack.Screen
        name="EditProfile"
        component={EditProfileScreen}
        options={{title: 'Setup Profile'}}
      />
    )
  } else {
    stackScreens = (
      <>
        <Stack.Screen
          name="Home"
          component={BottomTabNavigator}
          options={{headerShown: false}}
        />

        <Stack.Screen name="Post" component={PostScreen} />
        <Stack.Screen name="Comments" component={CommentsScreen} />
      </>
    )
  }

  return (
    <NavigationContainer linking={linking}>
      <ChatContextProvider>
        <PushNotifications />
        <Stack.Navigator screenOptions={{headerShown: true}}>
          {stackScreens}
        </Stack.Navigator>
      </ChatContextProvider>
    </NavigationContainer>
  )
}

export default Navigation
