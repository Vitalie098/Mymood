import {Alert, Image, StyleSheet, Text, View} from 'react-native'
import React, {useState, useEffect} from 'react'
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
  renderers,
} from 'react-native-popup-menu'
import Entypo from 'react-native-vector-icons/Entypo'
import {useMutation} from '@apollo/client'
import {deletePost} from './queries'
import {
  DeleteCommentMutationVariables,
  DeletePostMutation,
  DeletePostMutationVariables,
  Post,
} from '../../API'
import {useAuthContext} from '../../contexts/AuthContext'
import {useNavigation} from '@react-navigation/native'
import {FeedNavigationProp} from '../../types/navigation'
import {Storage} from 'aws-amplify'

interface IPostMenu {
  post?: Post
  number: number,
  open?: boolean

}

const PostMenu = ({post, number, open}: IPostMenu) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isFirstRender, setIsFirstRender] = useState(true)
  const [doDeletePost] = useMutation<
    DeletePostMutation,
    DeletePostMutationVariables
  >(deletePost, {variables: {input: {id: post?.id, _version: post?._version}}})

  const navigation = useNavigation<FeedNavigationProp>()
  const {userId, user} = useAuthContext()
  const isMyPost = userId === post?.userID

  const startDeletingPost = async () => {
    if (post?.image) {
      await Storage.remove(post.image)
    }
    if (post?.video) {
      await Storage.remove(post.video)
    }
    if (post?.images) {
      await Promise.all(post.images.map(img => Storage.remove(img)))
    }

    try {
      await doDeletePost()
    } catch (e) {
      Alert.alert('Failed to delete post', (e as Error).message)
    }
  }
  const onDeleteOptionPressed = () => {
    Alert.alert('Are you sure?', 'Deleting a post is permanent', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Delete post',
        style: 'destructive',
        onPress: startDeletingPost,
      },
    ])
  }

  const onEditOptionPressed = () => {
    navigation.navigate('UpdatePost', {id: post?.id})

  }

  useEffect(() => {
    if(isFirstRender) {
      setIsFirstRender(false)
      return
    }
    setIsOpen(true)
  },[open])

  const onBackdropPress = () => {
    setIsOpen(false)
  }

  if(number === 1 && !post) {
    return (
      <Menu 
        renderer={renderers.SlideInMenu} opened={isOpen} style={{zIndex: -1}}
        onBackdropPress={() => onBackdropPress()}
      >
        <MenuTrigger />
            
        <MenuOptions>
          <MenuOption onSelect={() => {
            setIsOpen(false)
            navigation.navigate("CreateStory")
           
            }}>
            <Text style={styles.optionText}>Add new Story</Text>
          </MenuOption>
          <MenuOption onSelect={() => {}}>
            <Text style={[styles.optionText]}>Edit best friends list</Text>
          </MenuOption>
        </MenuOptions>
      </Menu>
    )
  }

  return (
    <Menu renderer={renderers.SlideInMenu} style={styles.threeDots}>
      <MenuTrigger>
        <Entypo name="dots-three-horizontal" size={16} />
      </MenuTrigger>
      <MenuOptions>
        <MenuOption onSelect={() => Alert.alert('Reporting')}>
          <Text style={styles.optionText}>Report</Text>
        </MenuOption>
        {isMyPost && (
          <>
            <MenuOption onSelect={onDeleteOptionPressed}>
              <Text style={[styles.optionText, {color: 'red'}]}>Delete</Text>
            </MenuOption>
            <MenuOption onSelect={onEditOptionPressed}>
              <Text style={styles.optionText}>Edit</Text>
            </MenuOption>
          </>
        )}
      </MenuOptions>
    </Menu>
  )
}

const styles = StyleSheet.create({
  threeDots: {
    marginLeft: 'auto',
  },
  optionText: {
    textAlign: 'center',
    fontSize: 20,
    padding: 10,
  },
})

export default PostMenu
