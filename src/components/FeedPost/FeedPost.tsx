import React, {useEffect, useState} from 'react'
import {View, Text, Image, Pressable} from 'react-native'
import colors from '../../theme/colors'
import Comment from '../Comment'
import DoublePressable from '../DoublePressable'
import Carousel from '../Carousel'
import VideoPlayer from '../VideoPlayer'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {useNavigation} from '@react-navigation/native'
import {FeedNavigationProp} from '../../types/navigation'
import styles from './styles'
import {Post} from '../../API'
import PostMenu from './PostMenu'
import useLikeService from '../../services/LikeService'
import dayjs from 'dayjs'
import Content from './Content'
import {Storage} from 'aws-amplify'
import UserImage from '../UserImage'

interface IFeedPost {
  post: Post
  isVisible?: boolean
  bringUpContentWrapper: () => void,
  sendPost: (post: Post) => {}
}

const FeedPost = ({post, isVisible = false, bringUpContentWrapper, sendPost}: IFeedPost) => {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false)
  const {toggleLike, isLiked} = useLikeService(post)
  const postLikes = post.Likes?.items.filter(like => !like?._deleted) || []

  const navigation = useNavigation<FeedNavigationProp>()

  const navigateToUser = () => {
    if (post.User) {
      navigation.navigate('UserProfile', {
        screen: 'Profile',
        params: {userId: post.User.id},
      })
    }
  }

  const navigateToComments = () => {
    navigation.navigate('Comments', {post: post})
  }

  const navigateToLikes = () => {
    navigation.navigate('PostLikes', {id: post.id})
  }

  const toggleDescriptionExpanded = () => {
    setIsDescriptionExpanded(existingValue => !existingValue)
  }


  return (
    <View style={styles.post}>
      <View style={styles.header}>
        <UserImage imageKey={post?.User?.image || undefined} />
        <View>
          <Text onPress={navigateToUser} style={styles.userName}>
            {post.User?.username}
          </Text>
          {!!post.location && (
            <Text style={styles.location}>{post.location}</Text>
          )}
        </View>

        <PostMenu post={post} />
      </View>
     
      <Content post={post} isVisible={isVisible} />

      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <Pressable onPress={toggleLike}>
            <AntDesign
              name={isLiked ? 'heart' : 'hearto'}
              size={24}
              style={styles.icon}
              color={isLiked ? colors.accent : colors.black}
            />
          </Pressable>

          <Ionicons
            name="chatbubble-outline"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
  
          <Pressable onPress={() => sendPost(post)}>
            <Feather
              name="send"
              size={24}
              style={styles.icon}
              color={colors.black}
            />
          </Pressable>
          <Feather
            name="bookmark"
            size={24}
            style={{marginLeft: 'auto'}}
            color={colors.black}
          />
        </View>

        {postLikes.length === 0 ? (
          <Text>Be the first to like the post</Text>
        ) : (
          <Text style={styles.text} onPress={navigateToLikes}>
            Liked by{' '}
            <Text style={styles.bold}>{postLikes[0]?.User?.username}</Text>
            {postLikes.length > 1 && (
              <>
                {' '}
                and <Text style={styles.bold}>{post.nofLikes - 1} others</Text>
              </>
            )}
          </Text>
        )}

        <Text style={styles.text} numberOfLines={isDescriptionExpanded ? 0 : 3}>
          <Text style={styles.bold}>{post.User?.username}</Text>{' '}
          {post.description}
        </Text>
        <Text onPress={toggleDescriptionExpanded}>
          {isDescriptionExpanded ? 'less' : 'more'}
        </Text>

        <Text onPress={navigateToComments}>
          View all {post.nofComments} comments
        </Text>
        {(post.Comments?.items || []).map(
          comment => comment && <Comment key={comment.id} comment={comment} />,
        )}

        <Text>{dayjs(post.createdAt).fromNow()}</Text>
      </View>
    </View>
  )
}

export default FeedPost
