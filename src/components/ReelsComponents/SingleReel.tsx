import React, {useEffect, useRef, useState} from 'react'
import {View, Text, Dimensions, TouchableOpacity, Image, ActivityIndicator} from 'react-native'
import Video from 'react-native-video'
import Ionic from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Storage } from 'aws-amplify'
import useLikeService from '../../services/LikeService/LikeService'
import DEFAULT_USER_IMAGE from '../../assets/avatars/default-user-image.png'
import FastImage from 'react-native-fast-image'
import { useNavigation } from '@react-navigation/native'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const SingleReel = ({item, index, currentIndex}) => {
  const [showVolumeIcon, setShowVolumeIcon] = useState(false)
  const [userUri, setUserUri] = useState<string | null>(DEFAULT_USER_IMAGE)
  const [videoUri, setVideoUri] = useState<string | null>(null)
  const [mute, setMute] = useState(false)

  const {bottom} = useSafeAreaInsets()
  const videoRef = useRef(null)
  const navigation = useNavigation()

  const {toggleLike, isLiked} = useLikeService(item)

  useEffect(() => {
    downloadMedia()
  }, [])

  const downloadMedia = async () => {
    const uri = await Storage.get(item.video)
    setVideoUri(uri)

    if(item?.User?.image) {
      const userImage = await Storage.get(item?.User?.image)
      setUserUri(userImage)
    }
  }

  const onBuffer = buffer => {
    console.log('buffring', buffer)
  }
  const onError = error => {
    console.log('error', error)
  }

  const changeVolumeStatus = () => {
    setShowVolumeIcon(true)
    setMute(!mute)
    setTimeout(() => {
      setShowVolumeIcon(false)
    },1500)
  }

  if(!videoUri) return <ActivityIndicator  />

  return (
    <View
      style={{
        width: windowWidth,
        height: windowHeight,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={changeVolumeStatus}
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
        }}>
        <Video
          videoRef={videoRef}
          onBuffer={onBuffer}
          onError={onError}
          repeat={true}
          resizeMode="cover"
          paused={currentIndex == index ? false : true}
          source={{uri: videoUri}}
          muted={mute}
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
          }}
        />
      </TouchableOpacity>
      {showVolumeIcon && (
        <Ionic
          name={mute ? "volume-mute" : "volume-high-outline"}
          style={{
            fontSize: 20,
            color: 'white',
            position: 'absolute',
            backgroundColor: 'rgba(52,52,52,0.6)',
            borderRadius: 100,
            padding: 10,
          }}
        />
      )}

      <View
        style={{
          position: 'absolute',
          width: windowWidth,
          zIndex: 1,
          bottom: 70, 
          padding: 10,
        }}>
        <View style={{}}>
          <TouchableOpacity style={{width: 150}}>
            <View
              style={{width: 100, flexDirection: 'row', alignItems: 'center'}}>
              <View
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 100,
                  backgroundColor: 'white',
                  margin: 10,
                }}>
                <FastImage
                  source={{uri: userUri}}
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: 100,
                  }}
                  resizeMode={"cover"}
                />
              </View>
              <Text style={{color: 'white', fontSize: 16}}>{item?.User?.username || item.User.name }</Text>
            </View>
          </TouchableOpacity>
          <Text style={{color: 'white', fontSize: 14, marginHorizontal: 10}}>
            {item.description}
          </Text>
          <View style={{flexDirection: 'row', padding: 10}}>
            <Ionic
              name="ios-musical-note"
              style={{color: 'white', fontSize: 16}}
            />
            <Text style={{color: 'white'}}>Original Audio</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 90, //edited
          right: 0,
        }}>
        <TouchableOpacity onPress={toggleLike} style={{padding: 10, justifyContent: "center", alignItems: "center"}}>
          <AntDesign
            name={isLiked ? 'heart' : 'hearto'}
            style={{color: isLiked ? 'red' : 'white', fontSize: 25}}
          />
          <Text style={{color: 'white'}}>{item.nofLikes}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{padding: 10, justifyContent: "center", alignItems: "center"}} onPress={() => navigation.navigate('Comments', {post: item})}>
          <Ionic
            name="ios-chatbubble-outline"
            style={{color: 'white', fontSize: 25}}
          />
          <Text style={{color: 'white'}}>{item.nofComments}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{padding: 10}}>
          <Ionic
            name="paper-plane-outline"
            style={{color: 'white', fontSize: 25}}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{padding: 10}}>
          <Feather
            name="more-vertical"
            style={{color: 'white', fontSize: 25}}
          />
        </TouchableOpacity>
        <View
          style={{
            width: 30,
            height: 30,
            borderRadius: 10,
            borderWidth: 2,
            borderColor: 'white',
            margin: 10,
          }}>
          <FastImage
            source={{uri: userUri}}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 10,
            }}
            resizeMode={"cover"}
          />
        </View>
      </View>
    </View>
  )
}

export default SingleReel