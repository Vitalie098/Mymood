import {View, Text, Image, Alert, Pressable} from 'react-native'
import styles from './styles'
import {useNavigation} from '@react-navigation/native'
import {Auth, Storage} from 'aws-amplify'

import Button from '../../components/Button'
import {ProfileNavigationProp} from '../../types/navigation'
import {
  CreateUserFollowMutation,
  CreateUserFollowMutationVariables,
  DeleteUserFollowMutation,
  DeleteUserFollowMutationVariables,
  User,
  UserFollowingsQuery,
  UserFollowingsQueryVariables,
} from '../../API'
import {useAuthContext} from '../../contexts/AuthContext'
import React, {useEffect, useState} from 'react'
import UserImage from '../../components/UserImage'
import {createUserFollow, userFollowings, deleteUserFollow} from './queries'
import {useMutation, useQuery} from '@apollo/client'
import { useChatAppContext} from '../../contexts/ChatContext'

interface IProfileHeader {
  user: User
}

const ProfileHeader = ({user}: IProfileHeader) => {
  const [imageUri, setImageUri] = useState<string | null>(null)
  const {userId} = useAuthContext()
  const navigation = useNavigation<ProfileNavigationProp>()

  const { startDMChatRoom } = useChatAppContext()

  const {data: userFollowingsData, loading: userFollowingsLoading} = useQuery<
    UserFollowingsQuery,
    UserFollowingsQueryVariables
  >(userFollowings, {
    variables: {followerID: userId, followeeID: {eq: user.id}},
  })

  const [doFollow, {loading: followingLoading}] = useMutation<
    CreateUserFollowMutation,
    CreateUserFollowMutationVariables
  >(createUserFollow, {
    variables: {input: {followeeID: user.id, followerID: userId}},
    refetchQueries: ['UserFollowings'],
  })

  const [doUnfollow, {loading: unfollowingLoading}] = useMutation<
    DeleteUserFollowMutation,
    DeleteUserFollowMutationVariables
  >(deleteUserFollow)

  useEffect(() => {
    navigation.setOptions({title: user?.username || 'Profile'})
  }, [user?.username])

  useEffect(() => {
    if (user.image) {
      Storage.get(user.image).then(setImageUri)
    }
  }, [user])

  const userFollowObject = userFollowingsData?.userFollowings?.items?.filter(
    items => !items?._deleted,
  )[0]

  const onFollowPress = async () => {
    if (!!userFollowObject) {
      try {
        await doUnfollow({
          variables: {
            input: {
              id: userFollowObject.id,
              _version: userFollowObject._version,
            },
          },
        })

      } catch (e) {
        Alert.alert('Failed to unfollow the user', (e as Error).message)
      }
    } else {
      try {
        await doFollow()

      } catch (e) {
        Alert.alert('Failed to follow the user', (e as Error).message)
      }
    }
  }

  return (
    <View style={styles.root}>
      <View style={styles.headerRow}>
        <UserImage imageKey={user.image} width={100} />

        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>{user.Posts?.items.filter(item => !item?._deleted).filter(item => !item.video).length}</Text>
          <Text>Posts</Text>
        </View>

        <Pressable
          style={styles.numberContainer}
          onPress={() =>
            navigation.navigate('UserFollow', {
              id: user.id,
              screen: 'Followers',
            })
          }>
          <Text style={styles.numberText}>{user.nofFollowers}</Text>
          <Text>Followers</Text>
        </Pressable>

        <Pressable
          style={styles.numberContainer}
          onPress={() =>
            navigation.navigate('UserFollow', {
              id: user.id,
              screen: 'Followings',
            })
          }>
          <Text style={styles.numberText}>{user.nofFollowings}</Text>
          <Text>Following</Text>
        </Pressable>
      </View>

      <Text style={styles.name}>{user.name}</Text>
      <Text>{user.bio}</Text>

      {userId === user.id ? (
        <View style={{flexDirection: 'row'}}>
          <Button
            text="Edit Profile"
            onPress={() => navigation.navigate('Edit Profile')}
            inline
          />
          <Button text="Sign out" onPress={() => Auth.signOut()} inline />
        </View>
      ) : (
        <View>
          <Button
            text={!!userFollowObject ? 'Unfollow' : 'Follow'}
            onPress={onFollowPress}
            disabled={
              userFollowingsLoading || followingLoading || unfollowingLoading
            }
            inline
          />
          <Button
            text={"Message"}
            onPress={() => startDMChatRoom(user.id)}
            disabled={
              userFollowingsLoading || followingLoading || unfollowingLoading
            }
            inline
          />
        </View>
      )}
    </View>
  )
}

export default ProfileHeader
