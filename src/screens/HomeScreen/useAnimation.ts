import { View, Text, Animated, Dimensions } from 'react-native'
import React, { useRef } from 'react'
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures'

export const WINDOW_H = Dimensions.get('window').height

const useAnimation = () => {
  const alignmentContent = useRef(new Animated.Value(0)).current
  const alignmentContentWrapper = useRef(new Animated.Value(0)).current

  const bringUpContentWrapper = () => {
    Animated.timing(alignmentContentWrapper, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start()
  }

  const hideContentWrapper = () => {
    Animated.timing(alignmentContentWrapper, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start()

    hideAlignmentContent()
  }

  const bringUpAlignmentContent = () => {
    Animated.timing(alignmentContent, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start()
  }

  const hideAlignmentContent = () => {
    Animated.timing(alignmentContent, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start()
  }

  const onSwipeAlignmentContentWrapper = (gestureName, gestureState) => {
    const {SWIPE_UP, SWIPE_DOWN} = swipeDirections
    switch (gestureName) {
      case SWIPE_UP:
        bringUpContentWrapper()
        break
      case SWIPE_DOWN:
        hideContentWrapper()
        break
    }
  }

  const onSwipeAlignmentContent = (gestureName, gestureState) => {
    const {SWIPE_UP, SWIPE_DOWN} = swipeDirections
    switch (gestureName) {
      case SWIPE_UP:
        bringUpAlignmentContent()
        break
    }
  }

  const alignmentContentInterpolate = alignmentContent.interpolate({
    inputRange: [0, 1],
    outputRange: [-WINDOW_H / 5.4, 0],
  })

  const alignmentContentWrapperInterpolate = alignmentContentWrapper.interpolate({
    inputRange: [0, 1],
    outputRange: [-WINDOW_H, -60],
  })

  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
  }

  return {
    bringUpContentWrapper,
    onSwipeAlignmentContentWrapper,
    onSwipeAlignmentContent,
    alignmentContentInterpolate,
    alignmentContentWrapperInterpolate,
    config
  } 
}

export default useAnimation