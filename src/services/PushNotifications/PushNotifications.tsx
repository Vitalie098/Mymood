import {View, Text} from 'react-native'
import React, {useEffect, useState} from 'react'
import messaging, {
  FirebaseMessagingTypes,
} from '@react-native-firebase/messaging'
import {useNavigation} from '@react-navigation/native'
import {useMutation, useQuery} from '@apollo/client'
import {getUser, updateUser} from './queries'
import {useAuthContext} from '../../contexts/AuthContext'
import {
  GetUserQuery,
  GetUserQueryVariables,
  UpdateUserMutation,
  UpdateUserMutationVariables,
} from '../../API'

// Register background handler
messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log(
    'Message handled in the background!',
    JSON.stringify(remoteMessage, null, 2),
  )
})

const PushNotifications = () => {
  const [enabled, setEnabled] = useState(false)
  const [token, setToken] = useState('')

  const navigation = useNavigation()

  const {userId} = useAuthContext()

  const {data} = useQuery<GetUserQuery, GetUserQueryVariables>(getUser, {
    variables: {id: userId},
  })

  const [doUpdateUser] = useMutation<
    UpdateUserMutation,
    UpdateUserMutationVariables
  >(updateUser)

  useEffect(() => {
    async function requestUserPermission() {
      const authStatus = await messaging().requestPermission()
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL

      if (enabled) {
        console.log('Authorization status:', authStatus)
        setEnabled(true)
        await getDeviceToken()
      }
    }
    requestUserPermission()
  }, [])

  useEffect(() => {
    if (!enabled) {
      return
    }

    // Handle notifications that are received while the application is in Foreground state
    messaging().onMessage(handleNotification)

    // Handle the notification that opened the app from Background state
    messaging().onNotificationOpenedApp(handleNotification)

    // Handle the notification that opened the app from Quit state
    messaging().getInitialNotification().then(handleNotification)
  }, [enabled])

  useEffect(() => {
    if (!token || !data?.getUser?.id) {
      return
    }
    const user = data.getUser
    doUpdateUser({
      variables: {
        input: {
          id: user.id,
          _version: user._version,
          fcmToken: token,
        },
      },
    })
  }, [token, data?.getUser?.id])

  const handleNotification = (
    remoteMessage: FirebaseMessagingTypes.RemoteMessage | null,
  ) => {
    if (!remoteMessage) {
      return
    }
    console.log(JSON.stringify(remoteMessage, null, 2))

    if (remoteMessage.data?.postId) {
      navigation.navigate('Post', {id: remoteMessage.data?.postId})
    }
  }

  const getDeviceToken = async () => {
    await messaging().registerDeviceForRemoteMessages()
    const newToken = await messaging().getToken()
    setToken(newToken)
  }

  console.log('Token: ', token)

  return null
}

export default PushNotifications
