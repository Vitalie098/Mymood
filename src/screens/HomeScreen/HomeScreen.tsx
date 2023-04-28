import {
  View,
  FlatList,
  ViewabilityConfig,
  ViewToken,
  ActivityIndicator,
  Animated,
  StyleSheet,
  Dimensions,
  Text,
  Image,
  TouchableWithoutFeedback
} from 'react-native'
import FeedPost from '../../components/FeedPost'
import React, {useRef, useState, useEffect} from 'react'
import {useQuery} from '@apollo/client'
import { userFeed, userFollowings, getUser, userFeedFleet } from './queries'
import {
  GetUserQuery,
  GetUserQueryVariables,
  ModelSortDirection,
  Post,
  UserFeedFleetQueryVariables,
  UserFeedQuery,
  UserFeedQueryVariables,
  UserFollowingsQuery,
  UserFollowingsQueryVariables,
  UserFeedFleetQuery
} from '../../API'
import ApiErrorMessage from '../../components/ApiErrorMessage/ApiErrorMessage'
import {useAuthContext} from '../../contexts/AuthContext'
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures'
import useAnimation from './useAnimation'
import SendPost from '../../components/SendPost/SendPost'
import Stories from '../Stories'
import { Pressable } from 'react-native'
import { DEFAULT_USER_IMAGE } from '../../assets/avatars/default-user-image.png'
import PostMenu from '../../components/FeedPost/PostMenu'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Story from '../../components/Stories/Story'
import { Storage } from 'aws-amplify'
import StoryCircleListView from '../../components/Stories/StoryCircleListView'
import { IUserStory } from '../../components/Stories/interfaces'

export const WINDOW_H = Dimensions.get('window').height

const HomeScreen = () => {
  const [postData, setPostData] = useState<Post | null>(null)
  const {userId, user, setUser, setFreshUserData, freshUserData} = useAuthContext()
  const [activePostId, setActivePostId] = useState<null | string>(null)
  const [isFetchingMore, setIsFetchingMore] = useState(false)
  const [toggleStatus, setToggleStatus] = useState(false)
  const [dataState, setDataState] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const [selectedData, setSelectedData] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)

  const {
    bringUpContentWrapper, 
    onSwipeAlignmentContentWrapper, 
    onSwipeAlignmentContent, 
    alignmentContentInterpolate, 
    alignmentContentWrapperInterpolate, 
    config
  } = useAnimation()

  const {data: currentUserData} = useQuery<GetUserQuery, GetUserQueryVariables>(getUser, {variables: {id: userId}})

  useEffect(() => {
    if(currentUserData) {
      setFreshUserData(currentUserData.getUser)
    }
  },[currentUserData])

  const {data: followingData} = useQuery<UserFollowingsQuery, UserFollowingsQueryVariables>(userFollowings, {variables: {followerID: userId}})
  const notExpiredStory = (followingData?.userFollowings?.items.filter(item => !item?._deleted) || [])?.map(item => item?.Followee)
  notExpiredStory.unshift(freshUserData)
 

  const {data: dataFleet, loading: loadingFleet, error: errorFleet, refetch: refetchFleet} = useQuery<
    UserFeedFleetQuery,
    UserFeedFleetQueryVariables
  >(userFeedFleet, {
    variables: {
      userID: userId,
      sortDirection: ModelSortDirection.DESC,
      // fleetCreatedAt: {gt: }
    },
  })

  useEffect(() => {
      // It would be much easier if I used the field fleetCreatedAt on userFeedFleet request
      // Improve in the future
      const getNewFormatData = async () => {
        const actualData = dataFleet?.userFeedFleet?.items.reduce((result, item) => {
          const existUser = result?.findIndex(el => el?.id === item?.Fleet?.userID)
          const createdAt = new Date(item?.Fleet?.createdAt)
          const now = new Date()
          const diffInMs = now - createdAt
          const diffInHours = diffInMs / (1000 * 60 * 60)

          if(existUser !== -1 && diffInHours <= 24) {
            const seen = item?.Fleet?.viewers?.some(el => el.id === userId)
            result[existUser] = {...result[existUser], fleets: [...result[existUser].fleets, {...item?.Fleet, User: item?.Fleet?.userID}], seen: seen ? result[existUser].seen + 1 : result[existUser].seen }
          }else {
            if(diffInHours <= 24) {
              const seen = item?.Fleet?.viewers?.some(el => el.id === userId)
              result.push({...item?.Fleet?.User, fleets: [{...item?.Fleet, User: item?.Fleet?.userID}], seen: seen ? 1 : 0})
            } 
          }

          return result
        }, [])

       const currentUserFleetsIndex = actualData?.findIndex(el => el.id === userId)

        if(currentUserFleetsIndex !== -1 && currentUserFleetsIndex !== 0) {
          const elementToMove = actualData?.splice(currentUserFleetsIndex, currentUserFleetsIndex)[0]
          actualData?.unshift(elementToMove)
        }else if(currentUserFleetsIndex !== 0 && currentUserFleetsIndex === -1){
          actualData?.unshift({
              __typename: "User",
              fleets: [],
              id:currentUserData?.getUser?.id,
              image: currentUserData?.getUser?.image,
              name: currentUserData?.getUser?.name,
              username: currentUserData?.getUser?.username
            })
        }

        const newFormatData = await Promise.all(actualData?.map((el, index) => {
          let userImage

          const getImagesPath = async () => {
            userImage = el?.image ? await Storage.get(el.image) : DEFAULT_USER_IMAGE
            let userStories = await Promise.all(el.fleets?.map(story => Storage.get(story.image?.imageKey))) 

            return {
              user_id: el.id,
              seen: el.seen,
              user_image: userImage,
              user_name: el?.username || el.name,
              stories: 
                userStories?.map((el, index) => {
                  return {
                    story_id: el.fleets[index]?.story?.id,
                    story_image: el,
                    swipeText: 'Aloha',
                    onPress: () => console.log('story 1 swiped'),
                    viewers: el.fleets[index]?.story?.viewers,
                    _version: el.fleets[index]?.story?._version,
                    createdAt: el.fleets[index]?.story?.createdAt,
                    imagePosition: el.fleets[index]?.story?.image,
                    text: el.fleets[index]?.story?.text
                  }
              }).reverse()
            }
          }     

          return getImagesPath()
        }))

        setDataState(newFormatData)
      }

      getNewFormatData()
  },[dataFleet, currentUserData])

  const _handleStoryItemPress = (item: IUserStory, index?: number) => {
    const newData = dataState.slice(index)

    setCurrentPage(0)
    setSelectedData(newData)
    setIsModalOpen(true)
  }
  
  const {data, loading, error, refetch, fetchMore} = useQuery<
    UserFeedQuery,
    UserFeedQueryVariables
  >(userFeed, {
    variables: {
      userID: userId,
      sortDirection: ModelSortDirection.DESC,
      limit: 10,
    },
  })

  const viewabilityConfig: ViewabilityConfig = {
    itemVisiblePercentThreshold: 51,
  }

  const onViewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: Array<ViewToken>}) => {
      if (viewableItems.length > 0) {
        setActivePostId(viewableItems[0].item.id)
      }
    },
  )

  const posts = (data?.userFeed?.items || [])
    .filter(item => !item?._deleted && !item?.Post?._deleted)
    ?.map(item => item?.Post)

  const nextToken = data?.userFeed?.nextToken

  const loadMore = async () => {
    if (!nextToken || isFetchingMore) {
      return
    }
    setIsFetchingMore(true)
    await fetchMore({variables: {nextToken}})
    setIsFetchingMore(false)
  }

  const sendPost = (post: Post) => {
    bringUpContentWrapper()
    setPostData(post)
  }

  const EmptyPostsComponent = () => (
    <View style={{justifyContent: "center", alignItems: "center", height: WINDOW_H/2}}>
      <Text>Follow someone to see their posts</Text>
    </View>
  )


  if (loading) {
    return <ActivityIndicator />
  }

  if (error || errorFleet) {
    return (
      <ApiErrorMessage title="Error fetching posts" message={error?.message || errorFleet?.message} />
    )
  }
  return (
    <View style={{flex: 1}}>
      {/* <Stories stories={stories}/> */}
{/* <Story data={dataState} setToggleStatus={setToggleStatus}/> */}
    <PostMenu number={1} open={toggleStatus}  />
      <FlatList
        data={posts}
        renderItem={({item}) =>
          item && <FeedPost isVisible={item.id === activePostId} post={item} bringUpContentWrapper={bringUpContentWrapper} sendPost={sendPost} />
        }
        showsVerticalScrollIndicator={false}
        viewabilityConfig={viewabilityConfig}
        onViewableItemsChanged={onViewableItemsChanged.current}
        ListHeaderComponent={() => (
          <View style={{ borderBottomColor: "#dcdcdd", borderBottomWidth: 1, paddingBottom: 5}}>
            <StoryCircleListView
              handleStoryItemPress={_handleStoryItemPress}
              data={dataState}
              setToggleStatus={setToggleStatus}
              showText={true}
            />
          </View>
        )}
        onRefresh={() => {
          refetchFleet()
          refetch()
        }}
        ListEmptyComponent={() => <EmptyPostsComponent />}
        refreshing={loading}
        onEndReached={loadMore}
        style={{marginTop: 10, flex: 1}}
      />

      {posts.length > 0 && (
        <GestureRecognizer
          onSwipe={(direction, state) => onSwipeAlignmentContentWrapper(direction, state)}
          config={config}
        >
          <Animated.View style={{...styles.topSheet, bottom: alignmentContentWrapperInterpolate}}>
            <GestureRecognizer
              onSwipe={(direction, state) => onSwipeAlignmentContent(direction, state)}
              config={config} style={{flex: 1}}
            >
              <Animated.View style={{...styles.bottomSheetContainer, bottom: alignmentContentInterpolate}}>
                <SendPost post={postData}/>
              </Animated.View>
            </GestureRecognizer>
          </Animated.View>
        </GestureRecognizer>
      )}

      <Story 
        setIsModalOpen={setIsModalOpen} 
        isModalOpen={isModalOpen} 
        setCurrentPage={setCurrentPage} 
        currentPage={currentPage} 
        selectedData={selectedData} 
        setSelectedData={setSelectedData}
      />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  bottomSheetContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: WINDOW_H / 1.1,
    zIndex: 999,
    overflow: 'visible',
  },
  topSheet: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: WINDOW_H,
    zIndex: 998,
    overflow: 'visible',
    backgroundColor: "rgba(0, 0, 0, .3)"
  },
   container: {
    alignItems: "center",
    margin: 5,
  },
  image: {
    backgroundColor: '#ffffff',
    padding: 5,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#1683e2'
  },
  username: {
    marginTop: 5,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#606060'
  }
})