import FastImage from 'react-native-fast-image'
import React, { useState, useEffect, useRef } from 'react'
import {
  Animated,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
  ActivityIndicator,
  View,
  Platform,
  SafeAreaView,
} from 'react-native'
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures'

import { usePrevious, isNullOrWhitespace } from './helpers'
import {
  IUserStoryItem,
  NextOrPrevious,
  StoryListItemProps,
} from './interfaces'
import { useMutation } from '@apollo/client'
import { updateFleet } from './queries'
import { UpdateFleetMutation, UpdateFleetMutationVariables } from '../../API'
import { useAuthContext } from '../../contexts/AuthContext'
import useAnimation from '../../screens/HomeScreen/useAnimation'
import { FlatList } from 'react-native-gesture-handler'
import { DEFAULT_USER_IMAGE } from '../../assets/avatars/default-user-image.png'
import { Pressable } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/native'
import dayjs from 'dayjs'

const { width, height } = Dimensions.get('window')

const x = width/3
const y = height/2.3

export const StoryListItem = ({
  index,
  key,
  userID,
  profileImage,
  profileName,
  duration,
  customCloseComponent,
  customSwipeUpComponent,
  isFirstRender,
  setIsFirstRender,
  onFinish,
  onClosePress,
  stories,
  currentPage,
  ...props
}: StoryListItemProps) => {
  const [load, setLoad] = useState<boolean>(true)
  const [pressed, setPressed] = useState<boolean>(false)
  const [current, setCurrent] = useState(0)
  const [content, setContent] = useState<IUserStoryItem[]>(stories)
  const [addHeight, setAddHeight] = useState(0)
  const navigation = useNavigation()
  const {userId, user, freshUserData, setStoriesData, storiesData} = useAuthContext()

  const {
    bringUpContentWrapper, 
    onSwipeAlignmentContentWrapper, 
    onSwipeAlignmentContent, 
    alignmentContentInterpolate, 
    alignmentContentWrapperInterpolate, 
    config: animationConfig
  } = useAnimation()

  useEffect(() => {
    const lastViewIndex = stories.findIndex((el) => {
      return !el.viewers.some(viewer => {
        return viewer.id === userId
      })
    })

    if(lastViewIndex !== -1) {
      setCurrent(lastViewIndex)
    }else {
      setCurrent(0)
    }

    if(!isFirstRender) {
      start()
    }
  }, [currentPage])

  const [doUpdateFleet] = useMutation<UpdateFleetMutation, UpdateFleetMutationVariables>(updateFleet)

  const progress = useRef(new Animated.Value(0)).current
  const prevCurrent = usePrevious(current)

  useEffect(() => {
    if (!isNullOrWhitespace(prevCurrent) && !isFirstRender) {
      if (prevCurrent) {
        if (current > prevCurrent && content[current - 1].story_image == content[current]?.story_image) {
          start()
        } else if (current < prevCurrent && content[current + 1].story_image == content[current]?.story_image) {
          start()
        }
      }
    }else {
      setIsFirstRender(false)
    }

    if(!content[current]?.viewers?.find(viewer => viewer?.id === userId) && currentPage === index  && !storiesData.includes(content[current]?.story_id.toString())) {
      const userWhoSeen = {
        id: userId,
        name: freshUserData?.name
      }

      if(freshUserData?.username) {
        userWhoSeen.username = freshUserData?.username
      }

      if(freshUserData?.image) {
        userWhoSeen.image = freshUserData.image
      }

      const existViewers = content[current]?.viewers?.map(item => {
        const keys = Object.keys(item)
        const data = {}

        for(let i = 0; i < keys.length; i++) {
          if(keys[i] === "__typename") continue
          data[keys[i]] = item[keys[i]]
        }

        return data
      })

      setStoriesData(prev => [...prev, content[current]?.story_id.toString()] )
      doUpdateFleet({variables: {input: {id: content[current]?.story_id.toString(), viewers: [...existViewers, userWhoSeen], _version: content[current]?._version }}})
    }
  }, [current, index, currentPage])

  const start = () =>  {
    setLoad(false)
    progress.setValue(0)
    startAnimation()
  }

  const startAnimation = () => {
    Animated.timing(progress, {
      toValue: 1,
      duration: duration,
      useNativeDriver: false,
    }).start(({ finished }) => {
      if (finished) {
        next()
      }
    })
  }

  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
  }

  function next() {
    setLoad(true)
    if (current !== content.length - 1) {
      let data = [...content]
      setContent(data)
      setCurrent(current + 1)
      progress.setValue(0)
    } else {
      close('next')
    }
  }

  function previous() {
    setLoad(true)
    if (current - 1 >= 0) {
      let data = [...content]
      setContent(data)
      setCurrent(current - 1)
      progress.setValue(0)
    } else {
      close('previous')
    }
  }

  function close(state: NextOrPrevious) {
    let data = [...content]
    setContent(data)
    progress.setValue(0)
    if (currentPage == index) {
      if (onFinish) {
        onFinish(state)
      }
    }
  }

  return (
    <GestureRecognizer
      key={key}
      config={config}
      style={{
        flex: 1,
        backgroundColor: 'black',
      }}
    >
      <SafeAreaView>
        <View style={styles.backgroundContainer}>
          {content[current]?.text && (
            <Text style={{position: "absolute", left: x + content[current]?.text?.x, top: y + content[current]?.text?.y - 30, fontSize: 40, color: "#fff", zIndex: 999}}>{content[current]?.text?.textValue}</Text>
          )} 
          <FastImage
            onLoadEnd={() => start()}
            source={{ uri: content[current]?.story_image }}
            style={[styles.image, !content[current]?.imagePosition?.rotate && {left: content[current]?.imagePosition?.x, top: content[current]?.imagePosition?.y}, content[current]?.imagePosition?.rotate && {
            transform:[
                {scale: 1},
                {rotate: `${content[current]?.imagePosition?.rotate}deg`}
            ]
          }]}
          />
          {load && (
            <View style={styles.spinnerContainer}>
              <ActivityIndicator size="large" color={'white'} />
            </View>
          )}
        </View>
      </SafeAreaView>
      <View style={{ flexDirection: 'column', flex: 1 }}>
        <View style={styles.animationBarContainer}>
          {content.map((index, key) => {
            return (
              <View key={key} style={styles.animationBackground}>
                <Animated.View
                  style={{
                    flex: current == key ? progress : current < key ? 0 : 1,
                    height: 2,
                    backgroundColor: 'white',
                  }}
                />
              </View>
            )
          })}
        </View>
        <View style={styles.userContainer}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <FastImage style={styles.avatarImage} source={{ uri: profileImage }} />
            <Text style={styles.avatarText}>{profileName}</Text>
             <Text style={{marginLeft: 10, fontWeight: "700", color: "lightgray"}}>{dayjs(content[current]?.createdAt).fromNow()}</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              if (onClosePress) {
                onClosePress()
              }
            }}
          />
        </View>
        <View style={styles.pressContainer}>
          <TouchableWithoutFeedback
            onPressIn={() => progress.stopAnimation()}
            onLongPress={() => setPressed(true)}
            onPressOut={() => {
              setPressed(false)
              startAnimation()
            }}
            onPress={() => {
              if (!pressed && !load) {
                previous()
              }
            }}
          >
            <View style={{ flex: 1 }} />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPressIn={() => progress.stopAnimation()}
            onLongPress={() => setPressed(true)}
            onPressOut={() => {
              setPressed(false)
              startAnimation()
            }}
            onPress={() => {
              if (!pressed && !load) {
                next()
              }
            }}
          >
            <View style={{ flex: 1 }} />
          </TouchableWithoutFeedback>
        </View>
      </View>
      {userId === userID && (
        <View style={{position: "absolute", bottom: 30, left: 30, zIndex: 1}}>
          <TouchableOpacity onPress={() => {
            progress.stopAnimation()
            bringUpContentWrapper()
            setAddHeight(60)
            }}
          >
            <FlatList 
              data={content[current]?.viewers?.filter(user => user.id !== userId)?.slice(0, 3)}
              renderItem={({item, index}) => <FastImage key={`${index}`} source={{uri: item?.image || DEFAULT_USER_IMAGE}}  style={{width: 30, height: 30, borderRadius: 25, right: index !== 0 ? index * 5 : 0, borderTopLeftRadius: 30, borderColor: "transparent"}}/>}
              horizontal
            />
          </TouchableOpacity>
      </View>
      )}

      <GestureRecognizer
        onSwipe={(direction, state) => onSwipeAlignmentContentWrapper(direction, state)}
        config={animationConfig}
        style={{zIndex: 999}}
      >
        <Animated.View style={{...styles.topSheet, bottom: alignmentContentWrapperInterpolate, height: height + addHeight}}>
          <GestureRecognizer
            onSwipe={(direction, state) => onSwipeAlignmentContent(direction, state)}
            config={animationConfig} style={{flex: 1}}
          >
            <Animated.View style={{...styles.bottomSheetContainer, bottom: alignmentContentInterpolate}}>
              <View style={{flex: 1, backgroundColor: "#fff"}}>
                <View style={{paddingBottom: 15, borderBottomColor: "gray", borderBottomWidth: 1, paddingHorizontal: 15, paddingVertical: 15, justifyContent: "space-between", alignItems: "center", flexDirection: "row"}}>
                  <View style={{flexDirection: "row", alignItems: "center"}}>
                    <Feather
                      name="eye"
                      size={17}
                      style={{marginRight: 5}}
                    />
                    <Text>{content[current]?.viewers?.filter(user => user.id !== userId)?.length}</Text>
                  </View>

                  <View style={{flexDirection: "row", alignItems: "center"}}>
                    <Feather
                      name="download"
                      size={23}
                      style={{marginRight: 25}}
                    />
                    <Feather
                      name="share"
                      size={23}
                      style={{marginRight: 25}}
                    />
                    <Feather
                      name="trash"
                      size={23}
                    />
                  </View>
                </View>

                <View style={{paddingVertical: 15, paddingHorizontal: 15}}>
                  <Text style={{fontWeight: "bold", marginBottom: 10}}>Who seen your story</Text>

                  <FlatList 
                    data={content[current]?.viewers}
                    renderItem={({item, index}) => item.id !== userId && (
                      <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between"}} key={index}>
                        <TouchableOpacity style={{flexDirection: "row", alignItems: "center"}} onPress={() => {
                          onClosePress()
                          navigation.navigate('UserProfile', {
                            screen: 'Profile',
                            params: {userId: item.id},
                          })
                          }}>
                          <FastImage source={{uri: item?.image || DEFAULT_USER_IMAGE}}  style={{width: 30, height: 30, borderRadius: 25, marginRight: 10 }}/>
                          <Text>{item?.username || item.name}</Text>
                        </TouchableOpacity>
                        
                        <View style={{flexDirection: "row", alignItems: "center"}}>
                          <Entypo name="dots-three-vertical" size={16} style={{marginRight: 30}}/>
                          <Feather
                            name="send"
                            size={23}
                          />
                        </View>
                      </View>
                    )}
                  />
                 </View>
              </View>
            </Animated.View>
          </GestureRecognizer>
        </Animated.View>
      </GestureRecognizer>
    </GestureRecognizer>
  )
}

export default StoryListItem

StoryListItem.defaultProps = {
  duration: 10000,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  image: {
    width: width,
    height: height,
    resizeMode: 'contain',
  },
  backgroundContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  spinnerContainer: {
    zIndex: -100,
    position: 'absolute',
    justifyContent: 'center',
    backgroundColor: 'black',
    alignSelf: 'center',
    width: width,
    height: height,
  },
  animationBarContainer: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  animationBackground: {
    height: 2,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'rgba(117, 117, 117, 0.5)',
    marginHorizontal: 2,
  },
  userContainer: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  avatarImage: {
    height: 30,
    width: 30,
    borderRadius: 100,
  },
  avatarText: {
    fontWeight: 'bold',
    color: 'white',
    paddingLeft: 10,
  },
  closeIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    paddingHorizontal: 15,
  },
  pressContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  swipeUpBtn: {
    position: 'absolute',
    right: 0,
    left: 0,
    alignItems: 'center',
    bottom: Platform.OS == 'ios' ? 20 : 50,
  },
  bottomSheetContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: height/1,
    zIndex: 999,
    overflow: 'visible',
  },
  topSheet: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: height,
    zIndex: 999,
    overflow: 'visible',
    backgroundColor: "rgba(0, 0, 0, .3)"
  },
})



















