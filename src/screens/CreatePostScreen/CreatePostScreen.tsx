import {
  View,
  StyleSheet,
  TextInput,
  Alert,
  Text,
} from 'react-native'
import React, {useState} from 'react'
import {useNavigation, useRoute} from '@react-navigation/native'
import {CreateNavigationProp, CreateRouteProp} from '../../types/navigation'
import colors from '../../theme/colors'
import Button from '../../components/Button'
import {createPost} from './queries'
import {useMutation} from '@apollo/client'
import {
  CreatePostInput,
  CreatePostMutation,
  CreatePostMutationVariables,
} from '../../API'
import {useAuthContext} from '../../contexts/AuthContext'
import Carousel from '../../components/Carousel'
import VideoPlayer from '../../components/VideoPlayer'
import {Storage} from 'aws-amplify'
import {v4 as uuidv4} from 'uuid'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import { applyFilter } from '../../utils/utils'

const CreatePostScreen = () => {
  const [description, setDescription] = useState('')
  const [location, setLocation] = useState('')

  const {userId} = useAuthContext()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [progress, setProgress] = useState(0)

  const [doCreatePost] = useMutation<
    CreatePostMutation,
    CreatePostMutationVariables
  >(createPost)

  const navigation = useNavigation<CreateNavigationProp>()
  const route = useRoute<CreateRouteProp>()
  const {image, images, video, filter} = route.params

  let content
  if (image) {
    content = (
      applyFilter(filter, image, styles.image)
    )
  } else if (images) {
    content = <Carousel images={images} />
  } else if (video) {
    content = <VideoPlayer uri={video} />
  }

  const submit = async () => {
    if (isSubmitting) {
      return
    }
    setIsSubmitting(true)

    const input: CreatePostInput = {
      type: 'POST',
      description,
      location,
      filter: "original",
      image: undefined,
      images: undefined,
      video: undefined,
      nofComments: 0,
      nofLikes: 0,
      userID: userId,
    }

    if(filter) {
      input.filter = filter
    }
   
    if (image) {
      input.image = await uploadMedia(image)
    } else if (images) {
      const imageKeys = await Promise.all(images.map(img => uploadMedia(img)))
      input.images = imageKeys.filter(key => key) as string[]
    } else if (video) {
      input.video = await uploadMedia(video)
    }

    try {
      await doCreatePost({variables: {input}})
      setIsSubmitting(false)

      navigation.popToTop()
      navigation.navigate('HomeStack')
    } catch (e) {
      Alert.alert('Error uploading the post', (e as Error).message)
      setIsSubmitting(false)
    }
  }

  const uploadMedia = async (uri: string) => {
    try {
      const response = await fetch(uri)
      const blob = await response.blob()

      const uriParts = uri.split('.')
      const extension = uriParts[uriParts.length - 1]

      const s3Response = await Storage.put(`${uuidv4()}.${extension}`, blob, {
        progressCallback(newProgress) {
          setProgress(newProgress.loaded / newProgress.total)
        },
      })
      return s3Response.key
    } catch (e) {
      Alert.alert('Error uploading the file')
    }
  }

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.root}>
      <View style={styles.content}>{content}</View>

      <TextInput
        value={description}
        onChangeText={setDescription}
        placeholder="Description..."
        style={styles.input}
        multiline
        numberOfLines={5}
      />

      <TextInput
        value={location}
        onChangeText={setLocation}
        placeholder="Location"
        style={styles.input}
      />

      <Button
        text={isSubmitting ? 'Submitting...' : 'Submit'}
        onPress={submit}
      />

      {isSubmitting && (
        <View style={styles.progressContainer}>
          <View style={[styles.progress, {width: `${progress * 100}%`}]} />
          <Text>Uploading {Math.floor(progress * 100)}%</Text>
        </View>
      )}
    </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 10,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  input: {
    marginVertical: 10,
    alignSelf: 'stretch',
    backgroundColor: colors.white,
    padding: 10,
    borderRadius: 5,
  },
  content: {
    width: '100%',
    aspectRatio: 1,
  },
  progressContainer: {
    backgroundColor: colors.lightgrey,
    width: '100%',
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    marginVertical: 10,
  },
  progress: {
    backgroundColor: colors.primary,
    position: 'absolute',
    height: '100%',
    alignSelf: 'flex-start',
    borderRadius: 25,
  },
})

export default CreatePostScreen