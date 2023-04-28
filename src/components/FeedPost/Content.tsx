import {View, Text, Image, ActivityIndicator} from 'react-native'
import React, {useEffect, useState} from 'react'
import Carousel from '../Carousel'
import VideoPlayer from '../VideoPlayer'
import {Post} from '../../API'
import styles from './styles'
import {Storage} from 'aws-amplify'
import useLikeService from '../../services/LikeService/LikeService'
import DoublePressable from '../DoublePressable'
import { applyFilter } from '../../utils/utils'

interface IContent {
  post: Post
  isVisible: boolean
}

const Content = ({post, isVisible}: IContent) => {
  const {toggleLike, isLiked} = useLikeService(post)
  const [imageUri, setImageUri] = useState<string | null>(null)
  const [imagesUri, setImagesUri] = useState<string[] | null>(null)
  const [videoUri, setVideoUri] = useState<string | null>(null)

  useEffect(() => {
    downloadMedia()
  }, [])

  const downloadMedia = async () => {
    if (post.image) {
      const uri = await Storage.get(post.image)
      setImageUri(uri)
    } else if (post.images) {
      const uris = await Promise.all(post.images.map(img => Storage.get(img)))
      setImagesUri(uris)
    } else if (post.video) {
      const uri = await Storage.get(post.video)
      setVideoUri(uri)
    }
  }

  if (imageUri) {
    return (
      <DoublePressable onDoublePress={toggleLike}>
        {/* <Image
          source={{
            uri: imageUri,
          }}
          style={styles.image}
        /> */}
        {applyFilter(post?.filter, imageUri, styles.image, true)}
      </DoublePressable>
    )
  } else if (imagesUri) {
    return <Carousel images={imagesUri} />
  } else if (videoUri) {
    return (
      <DoublePressable onDoublePress={toggleLike}>
        <VideoPlayer uri={videoUri} paused={!isVisible} />
      </DoublePressable>
    )
  }

  return (
    <View>
      <ActivityIndicator />
    </View>
  )
}

export default Content
