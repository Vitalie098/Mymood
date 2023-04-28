import React from 'react'
import {View, Text, Dimensions, ActivityIndicator} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import ReelsComponent from '../../components/ReelsComponents/ReelsComponent'
// import ReelsComponent from '../screenComponents/ReelsComponent'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useQuery } from '@apollo/client'
import { listPosts } from './queries'
import { ListPostsQuery, ListPostsQueryVariables } from '../../API'
import ApiErrorMessage from '../../components/ApiErrorMessage'
const ReelsScreen = () => {
  const {top, bottom} = useSafeAreaInsets()
  const windowWidth = Dimensions.get('window').width
  const windowHeight = Dimensions.get('window').height

  const {data, loading , error} = useQuery<ListPostsQuery, ListPostsQueryVariables>(listPosts)
  const reels = data?.listPosts?.items.filter(el => !el?._deleted).filter(el => el?.video)

  if (loading) {
    return <ActivityIndicator />
  }

  if (error) {
    return (
      <ApiErrorMessage
        title="Error fetching notifications"
        message={error.message}
      />
    )
  }

  return (
    <View
      style={{
        width: windowWidth,
        height: windowHeight,
        position: 'relative',
        backgroundColor: 'black',
      }}>
      <View
        style={{
          position: 'absolute',
          top: top,
          left: 0,
          right: 0,
          flexDirection: 'row',
          justifyContent: 'space-between',
          zIndex: 1,
          padding: 10,
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
          Reels
        </Text>
        <Feather name="camera" style={{fontSize: 25, color: 'white'}} />
      </View>
      <ReelsComponent reels={reels}/>
    </View>
  )
}

export default ReelsScreen