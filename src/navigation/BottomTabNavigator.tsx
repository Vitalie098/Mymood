import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import CameraScreen from '../screens/CameraScreen'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import colors from '../theme/colors'
import HomeStackNavigator from './HomeStackNavigator'
import ProfileStackNavigator from './ProfileStackNavigator'
import {BottomTabNavigatorParamList} from '../types/navigation'
import SearchTabNavigator from './SearchTabNavigator'
import UploadStackNavigator from './UploadStackNavigator'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native'
import NotificationsScreen from '../screens/NotificationsScreen'
import { useNotificationContext } from '../contexts/NotificationContext'
import ReelsScreen from '../screens/ReelsScreen'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { ReelsStackNavigator } from './ReelsStackNavigator'


const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>()

const BottomTabNavigator = () => {

  // const {newNotifications} = useNotificationContext()
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.black,
      }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStackNavigator}
        options={({route}) => ({
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="home-filled" size={size} color={color} />
          ),
          tabBarStyle: (route => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? ''
            if (routeName === 'Chat' || routeName === 'CreateStory' || routeName === 'PostStory') {
              return {display: 'none'}
            }
          })(route),
        })}
      />
      <Tab.Screen
        name="Search"
        component={SearchTabNavigator}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="search" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Upload"
        component={UploadStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="plus-circle-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Reels"
        component={ReelsStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Ionicons
              name="play-circle-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="MyProfile"
        component={ProfileStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="user-circle-o" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomTabNavigator
