import React, { useState, useEffect } from 'react'
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet,
  Platform,
} from 'react-native'

import { usePrevious } from './helpers/StateHelpers'
import { IUserStory, StoryCircleListItemProps } from './interfaces'

import { useNavigation } from '@react-navigation/native'
import { useAuthContext } from '../../contexts/AuthContext'
import Feather from 'react-native-vector-icons/Feather'

const StoryCircleListItem = ({
  item,
  unPressedBorderColor,
  pressedBorderColor,
  avatarSize = 60,
  showText,
  setToggleStatus,
  textStyle,
  handleStoryItemPress,
}: StoryCircleListItemProps) => {
  const [isPressed, setIsPressed] = useState(item?.seen)
  const [pressedTime, setPressedTime] = useState<number>(0)
  const {freshUserData} = useAuthContext()
  const navigation = useNavigation()
//   console.log("bbb")
// console.log(freshUserData)
  const prevSeen = usePrevious(item?.seen)

  useEffect(() => {
    if (prevSeen != item?.seen) {
      setIsPressed(item?.seen)
    }
  }, [item?.seen])

  const _handleItemPress = (item: IUserStory) => {
    if (handleStoryItemPress) handleStoryItemPress(item)
    setIsPressed(true)
  }

  const avatarWrapperSize = avatarSize + 4

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPressIn={() => setPressedTime(Date.now())}
        onPressOut={() => {
          if(freshUserData.id !== item.user_id) {
            _handleItemPress(item)
            return
          }

          if(freshUserData.id === item.user_id && item.stories.length === 0) {
            navigation.navigate("CreateStory")
            return
          } 

          Date.now() - pressedTime < 500 
            ? _handleItemPress(item) 
            : setToggleStatus(prev => !prev)
        }}
        style={[
          styles.avatarWrapper,
          {
            height: avatarWrapperSize,
            width: avatarWrapperSize,
          },
          !isPressed || item.seen !== item.stories.length
            ? {
                borderColor: unPressedBorderColor ?? 'red',
              }
            : {
                borderColor: pressedBorderColor ?? 'grey',
              },
          item.stories.length === 0 && {borderColor: "transparent"},
        ]}
      >
        <Image
          style={{
            height: avatarSize,
            width: avatarSize,
            borderRadius: 100,
          }}
          source={{ uri: item.user_image }}
        />
        {item.stories.length === 0 && (
          <View style={{position: "absolute", right: -3, bottom: -5}}>
            {/* <Feather
              name="plus-circle"
              size={22}
              style={{marginRight: 5}}
              color={"blue"}
            /> */}
            <View style={{width: 25, height: 25, borderRadius: 25, backgroundColor: "#4cc9f0", justifyContent: "center", alignItems: "center", borderWidth: 2, borderColor: "#fff"}}>
              <Text style={{fontSize: 18, fontWeight: "bold", color: "#fff"}}>+</Text>
            </View>
          </View>
        )}          
      </TouchableOpacity>

      {showText && (
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={{
            width: avatarWrapperSize,
            ...styles.text,
            ...textStyle,
          }}
        >
          {item.user_name}
        </Text>
      )}
    </View>
  )
}

export default StoryCircleListItem

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    marginRight: 10,
  },
  avatarWrapper: {
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderColor: 'red',
    borderRadius: 100,
    height: 64,
    width: 64,
  },
  text: {
    marginTop: 3,
    textAlign: 'center',
    alignItems: 'center',
    fontSize: 11,
  },
})
